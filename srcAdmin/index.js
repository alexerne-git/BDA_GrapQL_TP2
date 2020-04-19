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
  .use(cors({ credentials: true, origin: ['http://localhost:8081', 'http://localhost:5000'] })) // Configurer les options d'identification sur true, necesaire pour la detection des session avec une meme cle
  .get('/service-worker.js', (req, res) => {
    res.sendFile(`${dirRoot.root}/public/siteAdmin/service-worker.js`);
  })
  .use(helmet())
  .use(express.json({ limit: '50mb' }))
  .use(express.urlencoded({ extended: true, limit: '50mb' }))
  .set('trust proxy', 1)
  .use(errorDetection);

routerController.routing(app);

app
  .get('/', (req, res) => {
    console.log('envoie index');
  })

  .get('/*', (req, res) => {
  });

module.exports = app;

// -> continue la lecture du fichie bin/www
