const express = require('express');
const neo4j = require('neo4j-driver');

const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', '1234'));
const session = driver.session();
const router = express.Router();
const { ...mysql } = require('../assets/mysql/mysqlConf');

router
  .get('/test', (req, res) => {
    res.send('cart_filtre ok');
  })

  .get('/testAll', (req, res) => {
    const persons = [];
    session.run('MATCH (p:Airport) RETURN p.name AS name').then((result) => result.records.map((record) => {
      persons.push(record.get('name'));
    })).then(() => res.send(persons));
  })

  .get('/All', (req, res) => {
    const persons = [];
    session.run('  Match(depart:Airport)--(vol:Flight)--(arrive:Airport) WHERE(depart.name="SFO" AND arrive.name="DEN") or (depart.name="DEN" AND arrive.name="SFO") RETURN count(distinct vol)').then((result) => result.records.map((record) => {
      persons.push(record.get('count(distinct vol)'));
    })).then(() => res.send(persons));
  })

  .get('/allairport', (req, res) => {
    const persons = [];
    const value = cleanArray(req.body.value);
    session.run(`MATCH (p:Airport) WHERE p.name="${value}" RETURN p.name AS name`).then((result) => result.records.map((record) => {
      persons.push(record.get('name'));
    })).then(() => res.send(persons));
  })


  .post('/allCount', (req, res) => {
    const persons = [];
    const value = cleanArray(req.body.value);
    session.run(`  Match(depart:Airport)--(vol:Flight)--(arrive:Airport) WHERE(depart.name="${value[0]}" AND arrive.name="${value[1]}") or (depart.name="${value[1]}" AND arrive.name="${value[0]}") RETURN count(distinct vol) as COUNT`).then((result) => result.records.map((record) => {
      persons.push(record.get('COUNT'));
    })).then(() => res.send(persons));
  });


module.exports = router;


/*

  */
