/* eslint-disable no-unused-expressions */
/** ******************************************************
    App
*********************************************************
********************************************************* */

const express = require('express');
const cors = require('cors');

const app = express();

const routerController = require('./router/routerController');

app

  .use(cors({ credentials: true, origin: ['http://localhost:8081', 'http://localhost:5000'] })) // Configurer les options d'identification sur true, necesaire pour la detection des session avec une meme cle
  .get('/service-worker.js', (req, res) => {
    res.sendFile(`${dirRoot.root}/public/siteAdmin/service-worker.js`);
  })
 

routerController.routing(app);

app
  .get('/', (req, res) => {
    console.log('envoie index');
  })

  .get('/*', (req, res) => {
  });

module.exports = app;
