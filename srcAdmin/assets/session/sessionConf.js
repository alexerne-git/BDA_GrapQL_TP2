/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

// paramètres de connexion au store session
// eslint-disable-next-line no-undef
sessionConf = (app) => {
  const options = {
    host: '37.120.187.69',
    port: '3306',
    user: 'meister',
    password: 'cJpMr&(8LcR)6AvC8*',
    database: 'paiement'
  };

  const sessionStore = new MySQLStore(options);

  app.use(session({
    key: 'ICI la cle :)', // la key est public mais il veut mieux la modifier en production
    secret: 'ICI le secret, surtout pas le publier', // il faudrait modifier en production et ne jamais plublier
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      // secure:true,
      expires: new Date(Date.now() + (60 * 1000 * 60 * 24)),
      rolling: true
    }
  }));

  // consulter l'ensemble des session ON
  app.get('/sessions', (req, res) => {
    sessionStore.all((err, session) => {
      err ? console.log(err) : res.json({ session });
    });
  });

  // consulter une session apartir de son identifiant
  app.post('/storeGet', (req, res) => {
    const sid = req.body.id;
    sessionStore.get(sid, (err, session) => {
      err ? console.log(err) : res.json({ session });
    });
  });

  // fermer tout les session actives
  app.put('/storeClear', (req, res) => {
    const sid = req.body.id;
    sessionStore.clear(sid, (err, session) => {
      err ? console.log(err) : res.json({ session });
    });
  });
};

// eslint-disable-next-line no-undef
module.exports = { sessionConf };
