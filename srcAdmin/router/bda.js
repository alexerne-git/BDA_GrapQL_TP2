/* Connexion base de donnée*/
const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', '1234'));
const express = require('express');
const session = driver.session();
const router = express.Router();

router
/* Test */
.get('/testAll', (req, res) => {
  const persons = [];
  session.run('MATCH (p:Airport) RETURN p.name AS name').then((result) => result.records.map((record) => {
    persons.push(record.get('name'));
  })).then(() => res.send(persons));
})

/* Requête 1:  Trouver le nombre de vols entre les deux aéroports: (exemple avec SFO et DEN) */
.post('/flight_two_airports', (req, res) => {
  const value = req.body.value;
  session.run(`Match(depart:Airport)--(vol:Flight)--(arrive:Airport) WHERE(depart.name="${value[0]}"
  AND arrive.name="${value[1]}") or (depart.name="${value[1]}" AND arrive.name="${value[0]}") RETURN count(distinct vol) as countVol`)
  .then((result) => result.records.map((record) => {
    res.send({nombre_de_vols: record._fields[0].low || 'Error Query'})
  }))
})

/* Requête 2: Trouver les vols qui décollent et atterrissent de l’aéroport: (exemple avec LAX)  */
.post('/flight_departure_arrive', (req, res) => {
  const value = req.body.value;
  session.run(` MATCH (:Airport{name:"${value}"})<-[:ORIGIN |:DESTINATION]-(vol:Flight)  RETURN vol.airline as vols`)
  .then((result) =>{
    let vols = result.records.map((value)=>{
      return value._fields[0]
    })
    res.send({Airline: vols})
  });
})


/* Requête 3:  trouver les vols et leurs prix entre les aéroports: (exemple avec IAD et MCO)  */
.post('/prices_flights', (req, res) => {
  const persons = [];
  const value = req.body.value;
  session.run(`Match(p:Ticket),(v:Flight) WHERE(:Airport{name:"${value[0]}"})<-[:ORIGIN]-(v)-[:DESTINATION]->(:Airport{name:"${value[1]}"})  AND (p)-->(v)  return p.price as prix_billet,v.airline as vol`)
  .then((result) => {
    const reponse = result.records.map((value)=>{
      return {prix: value._fields[0].low || value._fields[0], vol: value._fields[1]}
    })
    res.send({res: reponse})
  })
})

/* Requête 4:Pour un aéroport, déterminer le nombre de vols (s’il y en a) à destination de tous les autres aéroports (exemple ORD)*/
.post('/number_flight_departure', (req, res) => {
  const persons = [];
  const value = req.body.value;
  session.run(`  Match((p:Airport{name:"${value}"})<-[:ORIGIN]-(f:Flight)-[:DESTINATION]->(q:Airport) ) return count(*) as count `)
  .then((result) => result.records.map((record) => {
    res.send({nombre_vol_destination: record._fields[0].low || 'Error Query'})
  }))
})

/* Requête 5:  Pour un aéroport déterminer le nombre de vols à destination ou à l’origine de tous les autres aéroports (exemple BOS)*/
.post('/number_flight_departure_or_destination', (req, res) => {
  const persons = [];
  const value = req.body.value;
  session.run(`  Match((p:Airport{name:"${value}"})<-[:ORIGIN |:DESTINATION]-(f:Flight) ) return count(*) as count`)
  .then((result) => result.records.map((record) => {
    res.send({nombre_vol_origine: record._fields[0].low || 'Error Query'})
  }))
})

    /* Requête 6: Trouver le prix moyen des vols qui arrivent dans un aéroport (exemple MCO) (AVG()) */
.post('/price_destination_airport', (req, res) => {
  const persons = [];
  const value = req.body.value;
  session.run(` Match(p:Ticket),(v:Flight) WHERE(:Airport{name:"${value}"})<-[:DESTINATION]-(v)<--(p) return AVG(p.price) as prix_billet`).then((result) => result.records.map((record) => {
    persons.push(record.get('prix_billet'));
  })).then(() => res.send({prix_billet: persons || 'Error Query'}));
})

/* Requête 7:  Trouver le prix moyen des vols qui partent d'un aéroport (exemple avec LAS)*/
.post('/price_departure_airport', (req, res) => {
  const persons = [];
  const value = req.body.value;
  session.run(` Match(p:Ticket),(v:Flight) WHERE(:Airport{name:"${value}"})<-[:ORIGIN]-(v)<--(p) return AVG(p.price) as prix_billet`)
  .then((result) => result.records.map((record) => {
    persons.push(record.get('prix_billet'));
  })).then(() => res.send({prix_billet: persons || 'Error Query'}));

})

/*Requête 8: Trouver les prix min et max des vols qui arrivent et/ou partent d'un aéroport (exemple IAH) (min(),max())*/
.post('/minimum_et_maximum', (req, res) => {
  const persons = [];
  const value = req.body.value;
  session.run(` Match(p:Airport{name:"${value}"})<-[:ORIGIN |:DESTINATION]-(f:Flight)<--(pri:Ticket) return min(pri.price) as min, max(pri.price) as max`)
  .then((result) => {
    const reponse = {min: result.records[0]._fields[0] , max: result.records[0]._fields[1]} 
    res.send({res: reponse})
  })
})

/*Partie 3*/
// 3 - Requête 1: Trouver tous les chemins de entre deux aéroports données avec au plus 1 transfert (exemple avec LAX et MIA)
.post('/shortest_airport_trnasfert_1', (req, res) => {
  session.run(`MATCH p=(:Airport{name:"${value[0]}"})-[rel:CONNECTION*1..3]->(:Airport{name:"${value[1]}"})
               return p`)
  .then((result) => {
    const reponse = result.records.map((value, index)=>{
      const parcour = value._fields[0].segments.map((value)=>{
        return {start: value.start.properties.name, end: value.end.properties.name}
      })
      return {[`parcour_${index+1}`]:parcour}
    })
    res.send({res: reponse})
  });
})

// CORRIGER aussi dans tp2_cypher
// 3 - Requête 2: Trouver le chemin le plus court en nombre de transferts (de moins de 5) entre deux aéroports (LAX et MIA)
.post('/shortest_airport_trnasfert_5', (req, res) => {
  const persons = [];
  const value = req.body.value;
  session.run(`MATCH (start:Airport{name:"${value[0]}"})-[rel:CONNECTION*1..4]->(end:Airport{name:"${value[1]}"}),
               p = shortestPath((start)-[*]->(end))
               RETURN p`)
  
  .then((result) => {
    const reponse = result.records[0]._fields.map((value)=>{
      const parcour = value.segments.map((value)=>{
        return {start: value.start.properties.name, end: value.end.properties.name}
      })

      return parcour
    })

    res.send({res: reponse[0]})
  });
})


// 3 - Requête 3: Trouver le chemin le plus court en distance/temps entre l’aéroport deux aéroports (LAX et  MIA)

.post('/shortest_airport_distance_time', (req, res) => {
  const persons = [];
  const value = req.body.value;
  session.run(` MATCH p=(start:Airport{name:"${value[0]}"})-[rel:CONNECTION*0..3]->(end:Airport{name:"${value[1]}"})
  RETURN
      p as shortestPath,
      reduce(duration=0, r in relationships(p) | duration+r.duration) AS totalDuration,
      reduce(distance=0, r in relationships(p) | distance+r.distance) AS totalDistance
      ORDER BY totalDistance, totalDuration ASC LIMIT 1;`)
      .then((result) => {
        const reponse = result.records.map((value, index)=>{
          const parcour = value._fields[0].segments.map((value)=>{
            return {start: value.start.properties.name, end: value.end.properties.name}
          })
          return {parcour:parcour}
        })
        res.send({res: reponse})
      });
})


module.exports = router;


