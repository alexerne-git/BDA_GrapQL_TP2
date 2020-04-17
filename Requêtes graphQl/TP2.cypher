// REQUETES CYPHER - TP2 BDD 

// 2 - Créer les requêtes suivantes:

// Requête 1: Trouver le nombre de vols entre les deux aéroports : SFO et DEN
Match(depart:Airport)--(vol:Flight)--(destination:Airport) WHERE(depart.name="SFO" AND destination.name="DEN") or (depart.name="DEN" AND destination.name="SFO") RETURN count(distinct vol) as countVol
// Réponse countVol = 6

// Requête 2: Trouver les vols qui décollent et atterrissent de l’aéroport : LAX
 MATCH (:Airport{name:'LAX'})<-[:ORIGIN |:DESTINATION]-(vol:Flight)  RETURN vol.airline as vols
// Requête 3: Trouver les vols et leurs prix entre les deux aéroports : IAD et MCO
Match(p:Ticket),(v:Flight) WHERE(:Airport{name:'IAD'})<-[:ORIGIN]-(v)-[:DESTINATION]->(:Airport{name:'MCO'})  AND (p)-->(v)  return p.price as prix_billet,v.airline as vol

// Requête 4: Pour l’aéroport ORD, déterminer le nombre de vols (s’il y en a) à destination de tous les autres aéroports
Match((p:Airport{name:'ORD'})<-[:ORIGIN]-(f:Flight)-[:DESTINATION]->(q:Airport) ) return count(*) as numVol
// Réponse numVol = 48

// Requête 5: Pour un aéroport BOS, déterminer le nombre de tous les vols (s’il y en a) à destination ou à l’origine de tous les autres aéroports
Match((p:Airport{name:'BOS'})<-[:ORIGIN |:DESTINATION]-(f:Flight) ) return count(*) as numVol
// Réponse numVol = 8

// Requête 6: Trouver le prix moyen des vols qui arrivent dans l’aéroport MCO (utiliser la fonction agrégation de calcul de la moyenne AVG() )
Match(p:Ticket),(v:Flight) WHERE(:Airport{name:'MCO'})<-[:DESTINATION]-(v)<--(p) return AVG(p.price) as prix_billet
// Réponse prix_billet = 1160.1366666666668

// Requête 7: Trouver le prix moyen des vols qui partent de l’aéroport LAS (utiliser la fonction agrégation de calcul de la moyenne AVG() )
Match(p:Ticket),(v:Flight) WHERE(:Airport{name:'LAS'})<-[:ORIGIN]-(v)<--(p) return AVG(p.price) as prix_billet
// Réponse prix_billet = 1373.225

// Requêtes 8: Trouver les prix min et max des vols qui arrivent et/ou partent de l’aéroports IAH (utiliser la fonction d’agrégation min() et max())
Match(p:Airport{name:'BOS'})<-[:ORIGIN |:DESTINATION]-(f:Flight)<--(pri:Ticket) return min(pri.price), max(pri.price)
// Réponse Max(pri.price) = 3391.2   |     Min(pri.price)=237.75

// 3 - Relation "PATH"
// Requête 1: Ajouter une relation « PATH » entre tous les aéroports s’ils sont reliés par un vol en reprenant comme propriétés de la relation les durée et la distance du vol.
    MATCH (a1:Airport), (vol:Flight), (a2:Airport)
    WHERE (a1)<-[:ORIGIN]-(vol)-[:DESTINATION]->(a2)
    WITH a1, a2, vol.distance as distance,vol.duration AS duration
    CREATE (a1)-[rel:CONNECTION]->(a2)
    SET rel.distance = distance
    SET rel.duration = duration
    return a1, a2

  MATCH (a1:Airport), (vol:Flight), (a2:Airport)
    WHERE (a1)<-[:ORIGIN]-(vol)-[:DESTINATION]->(a2)
    WITH a1, a2, vol.distance as distance, collect(vol.duration) AS durations
    CREATE (a1)-[rel:CONNECTION]->(a2)
    SET rel.distance = distance
    SET rel.duration = durations
    return a1, a2
 
// Requête 2: Ajouter une relation en ajoutant comme propriété de la relation PATH le prix le plus bas du vol qui relie les deux aéroports.
  MATCH (a1:Airport)<-[:ORIGIN]-(vol:Flight)-[:DESTINATION]->(a2:Airport), (vol)<-[:ASSIGN]-(tik)
    WITH a1, a2, min(tik.price) AS price
    CREATE (a1)-[rel:PRICE]->(a2)
    SET rel.price = price
    return a1, a2

// Requête 3: Trouver tous les chemins de l’aéroport LAX à l’aéroport MIA avec au plus 1 transfert
    MATCH p=(:Airport{name:'LAX'})-[rel:CONNECTION*1..3]->(:Airport{name:'MIA'})
    return p

// Requête 4: Essayez avec plus de transferts, qu’observez-vous ? Qu’en déduisez-vous?
// comme prevu il aparaisent des chemain avec plus tranferts mais on peut noter que dans touts les cas on doit faire une transfert dans l'aeroport ORD. 
 
// Requête 5: Trouver le chemin le plus court en nombre de transferts (de moins de 5) entre l’aéroport LAX et l’aéroport MIA
    MATCH (start:Airport{name:'LAX'})-[rel:CONNECTION*1..4]->(end:Airport{name:'MIA'}),
    p = shortestPath((start)-[*]->(end))
    RETURN p 

// Requête 6: Trouver le plus court en distance/temps entre l'aéroport de LAX et l'aéroport de MIA
 MATCH p=(start:Airport{name:'LAX'})-[rel:CONNECTION*0..3]->(end:Airport{name:'MIA'})
    RETURN
        p as shortestPath,
        reduce(duration=0, r in relationships(p) | duration+r.duration) AS totalDuration,
        reduce(distance=0, r in relationships(p) | distance+r.distance) AS totalDistance
        ORDER BY totalDistance, totalDuration ASC LIMIT 1;


// pour effacer les relationship

MATCH ()-[r:CONNECTION]->()
DELETE r