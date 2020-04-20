// REQUETES CYPHER - TP2 BDD 

// 2 - Créer les requêtes suivantes:

// Requête a: Trouver le nombre de vols entre les deux aéroports : SFO et DEN
Match(depart:Airport)--(vol:Flight)--(destination:Airport) 
WHERE(depart.name="SFO" AND destination.name="DEN") or (depart.name="DEN" AND destination.name="SFO") 
RETURN count(distinct vol) as countVol
// Réponse countVol = 6

// Requête b: Trouver les vols qui décollent et atterrissent de l’aéroport : LAX
MATCH (:Airport{name:'LAX'})<-[:ORIGIN |:DESTINATION]-(vol:Flight) 
RETURN vol.airline as vols

// Requête c: Trouver les vols et leurs prix entre les deux aéroports : IAD et MCO
Match(p:Ticket),(v:Flight) 
WHERE(:Airport{name:'IAD'})<-[:ORIGIN]-(v)-[:DESTINATION]->(:Airport{name:'MCO'})  AND (p)-->(v) 
return p.price as prix_billet,v.airline as vol

// Requête d: Pour l’aéroport ORD, déterminer le nombre de vols (s’il y en a) à destination de tous les autres aéroports
Match((p:Airport{name:'ORD'})<-[:ORIGIN]-(f:Flight)-[:DESTINATION]->(q:Airport)) 
return count(*) as numVol
// Réponse numVol = 48

// Requête e: Pour un aéroport BOS, déterminer le nombre de tous les vols (s’il y en a) à destination ou à l’origine de tous les autres aéroports
Match((p:Airport{name:'BOS'})<-[:ORIGIN |:DESTINATION]-(f:Flight))
 return count(*) as numVol
// Réponse numVol = 8

// Requête f: Trouver le prix moyen des vols qui arrivent dans l’aéroport MCO (utiliser la fonction agrégation de calcul de la moyenne AVG() )
Match(p:Ticket),(v:Flight) 
WHERE(:Airport{name:'MCO'})<-[:DESTINATION]-(v)<--(p) 
return AVG(p.price) as prix_billet
// Réponse prix_billet = 1160.1366666666668

// Requête g: Trouver le prix moyen des vols qui partent de l’aéroport LAS (utiliser la fonction agrégation de calcul de la moyenne AVG() )
Match(p:Ticket),(v:Flight)
WHERE(:Airport{name:'LAS'})<-[:ORIGIN]-(v)<--(p) 
return AVG(p.price) as prix_billet
// Réponse prix_billet = 1373.225

// Requêtes h: Trouver les prix min et max des vols qui arrivent et/ou partent de l’aéroports IAH (utiliser la fonction d’agrégation min() et max())
Match(p:Airport{name:'BOS'})<-[:ORIGIN |:DESTINATION]-(f:Flight)<--(pri:Ticket) 
return min(pri.price), max(pri.price)
// Réponse Max(pri.price) = 3391.2   |     Min(pri.price)=237.75

























// 3 - Relation "PATH"
// Requête a: Ajouter une relation « PATH » entre tous les aéroports s’ils sont reliés par un vol en reprenant comme propriétés de la relation les durée et la distance du vol.
    MATCH (airport_origin:Airport), (flight:Flight), (airport_dest:Airport)
    WHERE (airport_origin)<-[:ORIGIN]-(flight)-[:DESTINATION]->(airport_dest)
    WITH airport_origin, airport_dest, 
    flight.duration AS duration, flight.distance as distance
    CREATE (airport_origin)-[rel:CONNECTION]->(airport_dest)
    SET rel.duration = duration, rel.distance = distance
    RETURN airport_origin, airport_dest


// Requête b: Ajouter une relation en ajoutant comme propriété de la relation PATH le prix le plus bas du vol qui relie les deux aéroports.
   MATCH (airport_origin:Airport)<-[:ORIGIN]-(flight:Flight)-[:DESTINATION]->(airport_dest:Airport),
    (flight)<-[:ASSIGN]-(ticket)
    WITH airport_origin, airport_dest, min(ticket.price) AS price
    CREATE (airport_origin)-[rel:PRIX]->(airport_origin)
    SET rel.price = price
    return airport_origin, airport_dest


// Requête c: Trouver tous les chemins de l’aéroport LAX à l’aéroport MIA avec au plus 1 transfert
   MATCH p=(:Airport{name:'LAX'})-[rel:CONNECTION*1..3]->(:Airport{name:'MIA'}) RETURN p
  
// Requête d: Essayez avec plus de transferts, qu’observez-vous ? Qu’en déduisez-vous? En augmentant le nombre de transfert à 5, 
// il est nécessaire de passer par l’aéroport de ORD (photo illustrative sur le document écrit)
 
// Requête e: Trouver le chemin le plus court en nombre de transferts (de moins de 5) entre l’aéroport LAX et l’aéroport MIA
    MATCH (start:Airport{name:'LAX'})-[rel:CONNECTION*1..4]->(end:Airport{name:'MIA'}),
    p = shortestPath((start)-[*]->(end)) RETURN p 

// Requête f: Trouver le plus court en distance/temps entre l'aéroport de LAX et l'aéroport de MIA
 MATCH p=(start:Airport{name:'LAX'})-[rel:CONNECTION*0..3]->(end:Airport{name:'MIA'})
    RETURN p as shortestPath,
    reduce(duration=0, duration_flight in relationships(p) | 
    duration+duration_flight.duration) AS duration_of_flight,
    reduce(distance=0, distance_flight in relationships(p) | 
    distance+ distance_flight.distance) AS distance_of_flight
    ORDER BY distance_of_flight, duration_of_flight ASC LIMIT 1;

