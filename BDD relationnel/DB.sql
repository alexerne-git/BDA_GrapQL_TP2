/* TABLES SQL base de donnée TP1 */
use alex_test;
DROP DATABASE alex_test;
CREATE DATABASE alex_test;
use alex_test;

/*TABLE flight*/
DROP TABLE IF EXISTS flight;
CREATE TABLE flight (
   id_flight INT(255) AUTO_INCREMENT NOT NULL,
   duration INT(255),
   airline INT(255),
   date_flight DATE,
   name_origin VARCHAR(255),
     name_destination VARCHAR(255),
   CONSTRAINT pk_flight PRIMARY KEY(id_flight)
)ENGINE = InnoDB;

/*TABLE airport*/
DROP TABLE IF EXISTS airport;
CREATE TABLE airport (
   name_airport VARCHAR(255),
   CONSTRAINT pk_name_airport PRIMARY KEY(name_airport)
)ENGINE = InnoDB;

/*TABLE economy*/
DROP TABLE IF EXISTS economy;
CREATE TABLE economy (
   id_ticket INT(255) AUTO_INCREMENT NOT NULL,
   price INT(255),
   id_flight INT(255),
   CONSTRAINT pk_ticket_eco PRIMARY KEY(id_ticket),
   CONSTRAINT fk_id_flight FOREIGN KEY(id_flight)
      REFERENCES flight(id_flight) ON UPDATE CASCADE ON DELETE CASCADE
)ENGINE = InnoDB;

/*TABLE business*/
DROP TABLE IF EXISTS business;
CREATE TABLE business (
   id_ticket INT(255) AUTO_INCREMENT NOT NULL,
   price INT(255),
   id_flight INT(255),
   CONSTRAINT pk_ticket_business PRIMARY KEY(id_ticket),
   CONSTRAINT fk_id_flight_2 FOREIGN KEY(id_flight)
      REFERENCES flight(id_flight) ON UPDATE CASCADE ON DELETE CASCADE
)ENGINE = InnoDB;

/*TABLE first*/
DROP TABLE IF EXISTS first_class;
CREATE TABLE first_class (
   id_ticket INT(255) AUTO_INCREMENT NOT NULL,
   price INT(255),
   id_flight INT(255),
   CONSTRAINT pk_ticket_first PRIMARY KEY(id_ticket),
   CONSTRAINT fk_id_flight_3 FOREIGN KEY(id_flight)
      REFERENCES flight(id_flight) ON UPDATE CASCADE ON DELETE CASCADE
)ENGINE = InnoDB;


/*TEST ZONE */
/*DEN et SFO (requete 1)*/
INSERT INTO flight(duration,airline,date_flight,name_origin,name_destination)
VALUES(100,2979,'2020-03-13',"SFO","DEN"),(102,3000,'2020-03-14',"SFO","DEN")

/*LAX et LAX(requete 2)*/
INSERT INTO flight(duration,airline,date_flight,name_origin,name_destination)
VALUES(100,2979,'2020-03-13',"LAX","LAX")

/*IAD et MCO(requete 3)*/
INSERT INTO economy(price,id_flight)
VALUES(200,1)
INSERT INTO business(price,id_flight)
VALUES(300,1)
INSERT INTO first_class(price,id_flight)
VALUES(400,1)

INSERT INTO flight(duration,airline,date_flight,name_origin,name_destination)
VALUES(100,2279,'2020-03-15',"IAD","MCO"),(100,2234,'2020-03-15',"MCO","IAD"),(100,1693,'2020-03-15',"MCO","IAD")

/*ORD(requete 4)*/
INSERT INTO flight(duration,airline,date_flight,name_origin,name_destination)
VALUES(100,2222,'2020-03-16',"ORD","MCO"),(100,2213,'2020-03-17',"ORD","LAX")

/*BOS(requete 5)*/
INSERT INTO flight(duration,airline,date_flight,name_origin,name_destination)
VALUES(100,2215,'2020-03-19',"BOS","LAX"),(100,2214,'2020-03-18',"MCO","BOS")

/*IAH(requete 8)*/
INSERT INTO flight(duration,airline,date_flight,name_origin,name_destination)
VALUES(100,2216,'2020-03-19',"IAH","LAX"),(100,2217,'2020-03-18',"MCO","IAH")
INSERT INTO economy(price,id_flight)
VALUES(10,12);
INSERT INTO business(price,id_flight)
VALUES(50,12);
INSERT INTO first_class(price,id_flight)
VALUES(100,12);

/*--------------------------------------------------------------------------------*/
SELECT * FROM flight


/*Requete 1*/
SELECT COUNT(id_flight) 
FROM flight
WHERE name_origin="SFO" AND name_destination="DEN" 
OR name_origin="DEN" AND name_destination="SFO"

/*Requete 2*/
SELECT flight.duration, flight.airline, flight.date_flight
FROM flight
WHERE name_origin="LAX" OR name_destination="LAX"

/*Requete 3*/
SELECT flight.airline, 
(SELECT price FROM economy WHERE flight.id_flight= economy.id_flight) AS economy_price,
(SELECT price FROM business WHERE flight.id_flight= business.id_flight) AS business_price,
(SELECT price FROM first_class WHERE flight.id_flight= first_class.id_flight) AS first_class_price 
FROM flight
WHERE name_origin="IAD" AND name_destination="MCO" 
OR name_origin="MCO" AND name_destination="IAD" 

/*Requete 4*/
SELECT COUNT(id_flight) as nombre_vol
FROM flight
WHERE name_origin="ORD" 

/*Requete 5*/
SELECT COUNT(id_flight) as nombre_vol
FROM flight
WHERE name_origin="BOS" OR name_destination="BOS" 

/*Requete 6*/
SELECT AVG((economy.price+business.price+first_class.price)/3) as moyenne
FROM flight, economy, business, first_class
WHERE name_destination="MCO" AND (economy.id_flight = flight.id_flight OR 
business.id_flight = flight.id_flight OR first_class.id_flight = flight.id_flight) 

/*Requete 7*/
SELECT AVG((economy.price+business.price+first_class.price)/3) as moyenne
FROM flight, economy, business, first_class
WHERE name_origin="LAX" AND (economy.id_flight = flight.id_flight OR 
business.id_flight = flight.id_flight OR first_class.id_flight = flight.id_flight) 

/*Requete 8*/
CREATE VIEW price_vol AS 
SELECT flight.id_flight, 
(SELECT price FROM economy WHERE flight.id_flight= economy.id_flight LIMIT 1) AS economy_price,
(SELECT price FROM business WHERE flight.id_flight= business.id_flight LIMIT 1) AS business_price,
(SELECT price FROM first_class WHERE flight.id_flight= first_class.id_flight LIMIT 1) AS first_class_price 
FROM flight

SELECT MIN(economy_price) as MinimumEco,
MAX(first_class_price) as MaximumFirst
FROM price_vol, flight
WHERE flight.id_flight = price_vol.id_flight AND 
(name_origin="IAH" OR name_destination="IAH")
 

 /* Relation PATH: 
 Afin de trouver les plus courts chemins entre certains aéroports, il serait nécessaire d'implémenter un algorithme du plus 
 court chemin comme l'algorithme de Djikstra, cependant, ceci s'avère être un exercice laborieux à réalisé en SQL*/