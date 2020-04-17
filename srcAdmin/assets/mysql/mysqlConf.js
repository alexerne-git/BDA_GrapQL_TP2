// MySQL Database connection

const mysql = require('mysql');
const request = require('./request');
const bd = require('./mysqlFonctions');

const con = mysql.createPool({
  host: '37.120.187.69',
  port: '3306',
  user: 'meister',
  password: 'cJpMr&(8LcR)6AvC8*',
  database: 'meister'
});

const conPaiment = mysql.createPool({
  host: '37.120.187.69',
  port: '3306',
  user: 'meister',
  password: 'cJpMr&(8LcR)6AvC8*',
  database: 'paiement'
});

asyncQuery = (query) => new Promise((resolve) => {
  con.query(query, (err, results) => {
    err ? resolve(err) : resolve(results);
  });
});

asyncQueryPaiment = (query) => new Promise((resolve) => {
  conPaiment.query(query, (err, results) => {
    err ? resolve(err) : resolve(results);
  });
});

module.exports = {
  asyncQuery,
  asyncQueryPaiment,
  con,
  conPaiment,
  request,
  bd
};
