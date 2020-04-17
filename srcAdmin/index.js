/* eslint-disable no-unused-expressions */
/** ******************************************************
    App
*********************************************************
********************************************************* */

const express = require('express');
const cors = require('cors');

const app = express();
const helmet = require('helmet');
const routerController = require('./router/routerController');
const dirRoot = require('../dualCOnfiguration')

// ensemble des fonctions et parametres globales
require('./assets/assets');

// App
const gzipCompress = (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
};

// detention des errors dans le corp des requêtes http
const errorDetection = (error, req, res, next) => {
  error instanceof SyntaxError
    ? res.send({ info: `ERROR DETECTED:${error}`, error }) : next();
};

app
  .get('*bundle.js', gzipCompress)
  .use(express.static(`${dirRoot.root}/public/`))
  .use(express.static(`${dirRoot.root}/public/siteAdmin`))
  .use('/images', express.static(`${dirRoot.root}/public/images`))
  .use(cors({ credentials: true, origin: ['http://localhost:8081', 'http://localhost:5000'] })) // Configurer les options d'identification sur true, necesaire pour la detection des session avec une meme cle
  .get('/service-worker.js', (req, res) => {
    res.sendFile(`${dirRoot.root}/public/siteAdmin/service-worker.js`);
  })
  .use(helmet())
  .use(express.json({ limit: '50mb' }))
  .use(express.urlencoded({ extended: true, limit: '50mb' }))
  .set('trust proxy', 1)
  .use(errorDetection);

sessionConf(app);
routerController.routing(app);

app
  .get('/', (req, res) => {
    console.log('envoie index');
    res.send(`${dirRoot.root}/public/siteAdmin/index.html`);
  })

  .get('/*', (req, res) => {
    res.sendFile(`${dirRoot.root}/public/siteAdmin/index.html`);
  });

module.exports = app;

// -> continue la lecture du fichie bin/www
