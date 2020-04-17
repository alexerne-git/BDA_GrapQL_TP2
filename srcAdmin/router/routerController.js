const bda = require('./bda');

const routing = (app) => {
  // affiche la requete HTTP et la cle de la session, utiliser seulement pour debuger
  app.use((req, res, next) => {
    req.session.touch();
    printC(`${req.method} ${req.originalUrl}`, req.session.id);
    next();
  });

  app
    .use('/bda', bda);
};

module.exports.routing = routing;
