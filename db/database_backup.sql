CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 5.7.24, for Win64 (x86_64)
--
-- Host: sang97.mysql.database.azure.com    Database: mydb
-- ------------------------------------------------------
-- Server version	5.6.39.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `date`
--

DROP TABLE IF EXISTS `date`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `date` (
  `id_date` int(11) NOT NULL AUTO_INCREMENT,
  `id_movie` int(11) NOT NULL,
  `date` int(11) NOT NULL,
  PRIMARY KEY (`id_date`),
  KEY `id_movie_idx` (`id_movie`),
  CONSTRAINT `id_movie` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id_movie`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `date`
--

LOCK TABLES `date` WRITE;
/*!40000 ALTER TABLE `date` DISABLE KEYS */;
INSERT INTO `date` VALUES (1,1,19),(2,1,20),(3,1,21),(4,2,20),(5,2,23),(6,2,16),(7,3,19),(8,3,20),(9,3,21),(10,4,19),(11,4,22),(12,4,23),(13,5,20),(14,5,21),(15,5,22),(16,6,20),(17,6,21),(18,6,22),(81,65,25),(82,65,27),(87,70,10);
/*!40000 ALTER TABLE `date` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `id_movie` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `director` varchar(45) NOT NULL,
  `released` int(11) NOT NULL,
  `length` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `discription` text,
  PRIMARY KEY (`id_movie`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Kep Hat De 222','John Lengend',2017,122,180,'https://s3-ap-southeast-1.amazonaws.com/dbms-photo-movies/1ea37db4-a558-4eac-b87d-27ce910a1b96.jpg','When A Cop Who Is Just Out Of Rehab Takes The Graveyard Shift In A City Hospital Morgue, She Faces A Series Of Bizarre, Violent Events Caused By An Evil Entity In One Of The Corpses.'),(2,'Venom','Ruben Fleischer',2018,110,200,'https://s3-ap-southeast-1.amazonaws.com/dbms-photo-movies/43a08870-459f-48e5-8cad-c8342755aa4c.jpg','When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego \"Venom\" to save his life.'),(3,'Phut Kinh Hoang','John McPhail',2016,112,160,'https://s3-ap-southeast-1.amazonaws.com/dbms-photo-movies/4427ab16-6b3e-45c8-9dee-58c8ad84304b.jpeg','A zombie apocalypse threatens the sleepy town of Little Haven - at Christmas - forcing Anna and her friends to fight, slash and sing their way to survival, facing the undead in a desperate race to reach their loved ones'),(4,'Sieu Xe Dai Chien',' Diederik Van Rooijen',2015,90,100,'https://s3-ap-southeast-1.amazonaws.com/dbms-photo-movies/973815a5-0321-4691-8483-85fb971a84ed.jpg','A man suffering from Alzheimer\'s embarks on a final road trip with his granddaughter.'),(5,'Quy Co Thua Ke','Peter Parker',2018,100,120,'https://s3-ap-southeast-1.amazonaws.com/dbms-photo-movies/a30ebab0-a41a-41d2-b8f6-edcea322a15c.jpg','A man suffering from Alzheimer\'s embarks on a final road trip with his granddaughter.'),(6,'Bothmian',' Kim Min-Ho',2018,130,150,'https://s3-ap-southeast-1.amazonaws.com/dbms-photo-movies/fe02d7ff-e3ed-4447-b6e2-baf7954a9f13.jpg\n','Against a heavy cloak of secrecy, a 12-year-old girl smitten with her handsome classmate ventures deeper and deeper into the enchanted Sicilian forests to find him,'),(65,'Dream Man',' David Yates',215,135,90,'https://s3-ap-southeast-1.amazonaws.com/dbms-photo-movies/de0ccf86-047e-4ea0-8296-c5ea002789bf.jpg','A Late Night comedy writer stumbles upon a hilarious, hidden world of entertainment and finds an unexpected connection to his fellow man. With David Letterman, Chita Rivera, Martin Short, Jello Biafra, and mor'),(70,'Rampant Da Quy','Scott Mosier',2017,112,102,'https://firebasestorage.googleapis.com/v0/b/uploadimage-cdb0f.appspot.com/o/movie%2Fmyro5pgk.jpg?alt=media&token=d9f7b8c1-dab2-4a44-ab61-1514f9f4bd49','Under The Tutelage Of Rocky Balboa, Light Heavyweight Contender Adonis Creed Faces Off Against Viktor Drago, Son Of Ivan Drago.');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservation` (
  `id_order` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL,
  `id_date` int(11) NOT NULL,
  `id_time` int(11) NOT NULL,
  `id_seat` int(11) NOT NULL,
  `status` varchar(40) NOT NULL,
  `time_order` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_order`,`id_movie`),
  UNIQUE KEY `scedule` (`id_time`,`id_movie`,`id_seat`,`id_date`),
  KEY `id_user_idx` (`id_user`),
  KEY `id_movie_idx` (`id_movie`),
  KEY `id_date_idx` (`id_date`),
  KEY `id_time_idx` (`id_time`),
  KEY `id_seat_idx` (`id_seat`),
  CONSTRAINT `id_date` FOREIGN KEY (`id_date`) REFERENCES `date` (`id_date`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_m` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id_movie`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_seat` FOREIGN KEY (`id_seat`) REFERENCES `seat` (`id_seat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_time` FOREIGN KEY (`id_time`) REFERENCES `time_of_date` (`id_time`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation`
--

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
INSERT INTO `reservation` VALUES (28,36,3,8,17,1,'processed','1542889742465'),(29,33,3,8,17,4,'processed','1542889848792'),(30,33,3,8,17,5,'processed','1542889848792'),(31,43,6,16,34,4,'processed','1542890010350'),(32,43,6,16,34,8,'pending','1542890010350'),(33,43,4,10,21,1,'pending','1542890043655'),(34,43,4,10,21,12,'pending','1542890043655'),(35,33,5,13,27,1,'pending','1542890068167'),(36,33,3,8,17,8,'pending','1542890087255'),(37,33,3,8,17,7,'pending','1542890087255'),(38,33,4,10,21,2,'pending','1542896708567'),(39,33,4,10,21,3,'pending','1542896708567'),(40,33,4,11,24,1,'pending','1542896731035'),(41,33,4,11,24,2,'pending','1542896731035'),(42,33,6,18,39,1,'pending','1542896780013'),(43,33,6,18,39,2,'pending','1542896780013'),(44,33,6,18,39,7,'pending','1542896798796'),(45,33,6,16,34,1,'pending','1542896818092'),(46,33,1,2,3,1,'pending','1542897308451'),(47,33,1,3,6,6,'pending','1542897341834'),(48,33,1,3,6,5,'pending','1542897341834'),(49,33,1,3,6,4,'pending','1542897341834'),(52,33,1,1,1,7,'pending','1542897614468'),(54,33,5,15,31,3,'pending','1542897717904'),(55,33,2,5,9,2,'pending','1542897743975'),(56,33,2,5,9,5,'pending','1542897743975'),(58,33,5,13,27,3,'pending','1542897817436'),(59,33,5,15,32,1,'pending','1542897859318'),(60,33,5,15,32,2,'processed','1542897859318'),(61,33,5,15,32,3,'pending','1542897859318'),(62,33,5,15,32,4,'pending','1542897859318'),(63,33,6,17,36,1,'pending','1543148921821'),(64,33,6,17,36,7,'pending','1543148934647'),(65,33,2,5,9,8,'pending','1543151285565'),(66,33,2,5,9,7,'pending','1543151285565'),(67,33,2,5,11,1,'pending','1543152458967'),(68,33,2,5,11,3,'pending','1543152458967'),(69,33,2,5,11,2,'pending','1543152458967'),(70,33,4,11,23,1,'pending','1543236452155'),(71,33,4,11,23,2,'pending','1543236452155'),(72,33,3,8,18,1,'pending','1543236487964'),(73,33,3,8,18,2,'pending','1543236487964'),(74,33,3,8,18,6,'pending','1543236512538'),(75,33,65,81,169,1,'pending','1543393702282'),(76,33,65,81,169,2,'pending','1543393702282'),(77,36,65,81,169,7,'pending','1543394019008'),(78,33,3,8,17,3,'pending','1543683196782'),(79,43,2,5,10,1,'pending','1543655251800'),(80,43,2,5,10,2,'pending','1543655251800'),(81,43,2,4,8,1,'pending','1543655276280'),(82,43,5,13,27,7,'pending','1543655298063'),(83,43,5,13,27,8,'pending','1543655298063'),(84,38,5,15,32,9,'pending','1543657951270'),(85,38,5,15,32,8,'pending','1543657951270'),(86,38,6,16,34,9,'pending','1543658028169'),(87,38,4,11,23,12,'pending','1543658048347'),(88,38,5,13,27,2,'pending','1543674973289'),(89,33,2,5,9,1,'pending','1543679462021'),(90,33,2,4,7,1,'pending','1543689174902'),(91,33,2,4,7,9,'pending','1543689334488'),(92,33,2,4,7,2,'pending','1543689603354'),(93,33,2,4,8,2,'pending','1543689747113'),(94,33,1,1,1,2,'pending','1543693837220'),(95,43,2,5,10,4,'pending','1543708616129'),(96,43,3,7,15,2,'pending','1543708972481'),(97,43,3,7,15,3,'pending','1543708972481'),(98,43,5,15,26,2,'pending','1543709007642'),(99,43,5,15,26,3,'pending','1543709007642'),(100,43,5,14,30,2,'pending','1543709096365'),(101,43,5,14,30,1,'pending','1543709096365'),(102,44,65,82,172,2,'pending','1543709455516'),(103,44,65,82,172,3,'pending','1543709455516'),(104,44,65,81,170,2,'pending','1543709572973'),(105,44,65,81,170,3,'pending','1543709572973'),(106,44,65,81,170,4,'pending','1543709572973'),(107,33,6,18,39,8,'pending','1543712609176'),(108,33,5,14,29,9,'pending','1543712790455'),(109,38,5,14,29,5,'pending','1543717129967'),(110,36,6,17,36,4,'pending','1543718060691'),(111,36,6,17,37,9,'pending','1543718545374'),(112,36,6,17,37,8,'pending','1543718545374'),(113,36,65,81,169,8,'pending','1543718636238'),(114,38,2,4,7,3,'pending','1543719143113'),(115,38,2,4,7,4,'pending','1543720997974'),(116,38,2,4,8,5,'pending','1543721120889'),(117,38,2,4,7,5,'pending','1543721863373'),(118,38,2,4,8,6,'pending','1543722001265'),(119,33,1,1,1,5,'pending','1543722649030'),(120,33,2,4,7,6,'pending','1543722854440'),(121,33,2,4,8,4,'pending','1543722897863'),(122,33,2,4,7,12,'processed','1543724116003'),(123,38,1,1,1,4,'processed','1543725567989'),(124,38,1,2,4,5,'processed','1543725971418'),(125,38,1,2,2,6,'processed','1543726866563'),(126,33,1,2,2,11,'processed','1543727337772'),(127,33,2,6,13,3,'pending','1543728783811'),(128,33,2,4,8,10,'pending','1543728878988'),(129,33,70,87,178,1,'pending','1543729023352'),(130,33,70,87,178,3,'pending','1543729023352'),(131,33,70,87,178,7,'pending','1543729023352'),(132,43,70,87,177,1,'processed','1543729611999'),(133,43,70,87,177,12,'processed','1543729673180'),(134,43,4,11,24,11,'processed','1543729767891'),(135,43,3,8,17,10,'pending','1543730850314'),(136,33,70,87,178,12,'pending','1543731793210'),(137,36,70,87,178,11,'pending','1543732359405'),(138,38,3,8,17,12,'pending','1543732527412'),(139,48,6,17,37,5,'pending','1543737544274'),(140,33,3,7,14,2,'processed','1543741066762'),(141,33,3,9,20,10,'pending','1543741126985'),(142,33,3,9,20,11,'pending','1543741126985'),(145,33,3,7,15,10,'pending','1543741176620'),(146,38,5,14,28,1,'pending','1543741193585'),(147,33,2,5,10,11,'processed','1543741202492'),(148,33,2,5,10,6,'processed','1543745807872'),(149,33,2,4,7,10,'processed','1543750535619');
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat`
--

DROP TABLE IF EXISTS `seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seat` (
  `id_seat` int(11) NOT NULL AUTO_INCREMENT,
  `number_row` int(11) NOT NULL,
  `number_col` int(11) NOT NULL,
  PRIMARY KEY (`id_seat`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat`
--

LOCK TABLES `seat` WRITE;
/*!40000 ALTER TABLE `seat` DISABLE KEYS */;
INSERT INTO `seat` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,2,1),(6,2,2),(7,2,3),(8,2,4),(9,3,1),(10,3,2),(11,3,3),(12,3,4),(13,4,1),(14,4,2),(15,4,3),(16,4,4);
/*!40000 ALTER TABLE `seat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `serverlog`
--

DROP TABLE IF EXISTS `serverlog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `serverlog` (
  `id_connection` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_connection`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serverlog`
--

LOCK TABLES `serverlog` WRITE;
/*!40000 ALTER TABLE `serverlog` DISABLE KEYS */;
INSERT INTO `serverlog` VALUES (3,2147483647),(4,2147483647);
/*!40000 ALTER TABLE `serverlog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time_of_date`
--

DROP TABLE IF EXISTS `time_of_date`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `time_of_date` (
  `id_time` int(11) NOT NULL AUTO_INCREMENT,
  `id_date` int(11) NOT NULL,
  `time` int(11) NOT NULL,
  PRIMARY KEY (`id_time`),
  KEY `date_time_idx` (`id_date`),
  CONSTRAINT `date_time` FOREIGN KEY (`id_date`) REFERENCES `date` (`id_date`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time_of_date`
--

LOCK TABLES `time_of_date` WRITE;
/*!40000 ALTER TABLE `time_of_date` DISABLE KEYS */;
INSERT INTO `time_of_date` VALUES (1,1,1170),(2,2,1020),(3,2,1140),(4,2,1200),(5,3,1140),(6,3,1200),(7,4,1140),(8,4,1200),(9,5,1020),(10,5,1140),(11,5,1200),(12,6,1140),(13,6,1200),(14,7,1140),(15,7,1200),(16,8,1020),(17,8,1140),(18,8,1200),(19,9,1140),(20,9,1200),(21,10,1140),(22,11,1050),(23,11,1140),(24,11,1230),(25,12,1140),(26,13,1020),(27,13,1140),(28,14,1020),(29,14,1140),(30,14,1200),(31,15,1110),(32,15,1200),(33,16,1020),(34,16,1140),(35,17,1050),(36,17,1170),(37,17,1200),(38,18,1140),(39,18,1170),(169,81,1000),(170,81,1170),(171,82,1114),(172,82,1200),(177,87,1140),(178,87,1200);
/*!40000 ALTER TABLE `time_of_date` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `sodienthoai` (`phone_number`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (33,'Le Quang Sang','sang.lequang@gmail.com','$2b$10$SxyZXmP2OUwbgmM477M1quWKDRvdyMvxyUPXLSIvuflJNDghxU1ya','34234','user'),(35,'Nguyen Phuoc Thanh','thanhnguyen@gmail.com','$2b$10$jkd.zWApzo3Rdb.J.PBNWOUL34m3ILXgZY3/FqSznQCvGuMXQz2pi','11111','admin'),(36,'Tran Minh Tai','tai@gmail.com','$2b$10$jVlMFP1K3RGS6qHDhSBQ.OSoSv/Q3ihb3XwzObUKs2Hy/anqtYGoK','123123','user'),(38,'Nguyen Minh Tam','tam@gmail.com','$2b$10$OcEc8lcfhvSCCZqm5ulm6uKBXxT9tIhsV0TRtem7wsDgalVqWHYOa','34343','user'),(43,'Tran MInh Dai','dai@gmail.com','$2b$10$hpypw0baKriH0BkraMlkyeOs1WgM4irvKF/q1zVvK2kYx35/zIJ02','43534','user'),(44,'Cao Hoang Hung','hung@gmail.com','$2b$10$C0IwSZMof.dM4fvEriZo9uDEoq776dTIIw..g3H3lJT5vdgddVK/K','0987353454','user'),(45,'Jsfgsjfg','hello@hello.com','$2b$10$5zQrQVUmsQuntfCC5vQhN.RtWSUSgnreb7ZmuWEIOorb9bbqMgFbS','2424','user'),(47,'Sjfjsfgjg','hfgshf@fsjf.sf','$2b$10$8yO7SCIhslPeIx8Q6Hf5aej.R6pk5WQXABZ7wa89svj5dtQ/Ct4Nu','242424','user'),(48,'Tran Thanh Trung','java@gmail.com','$2b$10$GAxwDEGlLKE.Pz7OjbX.d.R2irRGaZh4c33e7zIGT9R0ldXUKtDQ6','0122606235','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mydb'
--

--
-- Dumping routines for database 'mydb'
--
/*!50003 DROP PROCEDURE IF EXISTS `add_movie` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `add_movie`(in title varchar(50), in director varchar(50), in rels int, in legth int, in price int, in imageUrl varchar(250), data json, in discription text)
begin 
	declare i int default 0;
    declare j int default 0;
    declare element_of_array json default null;
    declare array_time json default null;
    set @id_moive = 0;
    set @id_date = 0;
	insert into mydb.movies(title, director, released, length, price, image, discription)
    values (title, director, rels, legth, price, imageUrl, discription);
    
	SELECT MAX(id_movie) FROM movies INTO @id_movie;
	
    while i < json_length(data) do
		select json_extract(data, concat('$[',i,']')) into element_of_array;
        
        select json_extract(element_of_array, '$.time') into array_time;
        
		insert into mydb.date(id_movie, date) values (@id_movie, json_extract(element_of_array, '$.date'));
        select max(id_date) from date into @id_date;
		set j = 0;
        while j < json_length(array_time)  do
			insert into mydb.time_of_date( id_date, time) values (@id_date, json_extract(array_time, concat('$[',j,']')));
            set j = j + 1;
        end while;
	set i = i + 1;
    end while;
    
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `adminEditMovie` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `adminEditMovie`(in idMoive int, in title char(20), in description text, in released int, in director char(30), in image_url char(255), in price int, in length int)
BEGIN
	UPDATE movies 
    SET title = title, 
		discription = description, 
		released = released, 
		director = director, 
		image = image_url, 
		price = price, 
		length = length
    WHERE id_movie = idMoive;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `admin_deleteMovie` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `admin_deleteMovie`(in id_m int)
BEGIN
	delete time_of_date
	FROM (movies INNER JOIN date ON movies.id_movie = date.id_movie)
		inner join time_of_date on date.id_date = time_of_date.id_date
	WHERE movies.id_movie = id_m;
    
    delete date
	FROM movies INNER JOIN date ON movies.id_movie = date.id_movie
	WHERE movies.id_movie = id_m;
    
    delete movies
	FROM movies
	WHERE movies.id_movie = id_m;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `admin_getAllOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `admin_getAllOrder`()
BEGIN
	select reservation.id_order, user.name, movies.title, date.date, time_of_date.time, movies.price, seat.id_seat, reservation.status, reservation.time_order
    from ((((reservation inner join user on reservation.id_user = user.id_user)
					  inner join movies on reservation.id_movie = movies.id_movie)
                      inner join date on reservation.id_date = date.id_date)
                      inner join time_of_date on reservation.id_time = time_of_date.id_time)
                      inner join seat on reservation.id_seat = seat.id_seat;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `admin_getAllOrderByDate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `admin_getAllOrderByDate`(in d int)
BEGIN
	select reservation.id_order, user.name, movies.title, date.date, time_of_date.time, movies.price, seat.id_seat, reservation.time_order
    from ((((reservation inner join user on reservation.id_user = user.id_user)
					  inner join movies on reservation.id_movie = movies.id_movie)
                      inner join date on reservation.id_date = date.id_date)
                      inner join time_of_date on reservation.id_time = time_of_date.id_time)
                      inner join seat on reservation.id_seat = seat.id_seat
	where date.date = d;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `admin_getAllOrderByMovie` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `admin_getAllOrderByMovie`(in id_m int)
BEGIN
	select reservation.id_order, user.name, movies.title, date.date, time_of_date.time, movies.price, seat.id_seat, reservation.time_order
    from ((((reservation inner join user on reservation.id_user = user.id_user)
					  inner join movies on reservation.id_movie = movies.id_movie)
                      inner join date on reservation.id_date = date.id_date)
                      inner join time_of_date on reservation.id_time = time_of_date.id_time)
                      inner join seat on reservation.id_seat = seat.id_seat
	where movies.id_movie = id_m;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `admin_getAllOrderByTime` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `admin_getAllOrderByTime`(in s_time int, in e_time int)
BEGIN
	select reservation.id_order, user.name, movies.title, date.date, time_of_date.time, movies.price, seat.id_seat, reservation.time_order
    from ((((reservation inner join user on reservation.id_user = user.id_user)
					  inner join movies on reservation.id_movie = movies.id_movie)
                      inner join date on reservation.id_date = date.id_date)
                      inner join time_of_date on reservation.id_time = time_of_date.id_time)
                      inner join seat on reservation.id_seat = seat.id_seat
	where time_of_date.time >= s_time && time_of_date.time <= e_time;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `checkOrderUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `checkOrderUser`(in id_o int)
BEGIN
	select reservation.id_order, movies.title, date.date, time_of_date.time, movies.price, seat.id_seat, user.name, user.email, user.phone_number, reservation.status
    from ((((reservation inner join movies on reservation.id_movie = movies.id_movie)
			inner join date on reservation.id_date = date.id_date)
			inner join time_of_date on reservation.id_time = time_of_date.id_time)
			inner join seat on reservation.id_seat = seat.id_seat)
            inner join user on reservation.id_user = user.id_user
	where reservation.id_order = id_o && reservation.status = 'pending';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `chonGioXem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `chonGioXem`(in id_m int, in _d int)
BEGIN
	select id_time, time
    from (movies inner join date on movies.id_movie = date.id_movie)
		  inner join time_of_date on date.id_date = time_of_date.id_date
	where movies.id_movie = id_m && date.id_date = _d;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `choNgoiDaDuocDat` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `choNgoiDaDuocDat`(in id_m int, in id_d int, in id_t int)
BEGIN
	select reservation.id_seat
    from reservation
    where id_movie = id_m && id_date = id_d && id_time = id_t;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `chonNgayXem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `chonNgayXem`(in id_m int)
BEGIN
	select id_date, date from date where id_movie = id_m;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `chonPhim` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `chonPhim`()
BEGIN
	select * from movies;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `datVe` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `datVe`(in id_u int, in id_m int, in id_d int, in id_t int, data json, in time_o varchar(30))
begin
declare i int default 0;
while i < json_length(data) do
	insert into reservation (id_user, id_movie, id_date, id_time, id_seat, status, time_order) values (id_u, id_m, id_d, id_t, json_extract(data, concat('$[',i,']')) , 'pending', time_o);
	set i = i + 1;
end while;
    select id_order, name, title, date, time, reservation.id_seat, reservation.time_order
    from ((((reservation inner join user on reservation.id_user = user.id_user)
			inner join movies on reservation.id_movie = movies.id_movie)
			inner join date on reservation.id_date = date.id_date)
			inner join time_of_date on reservation.id_time = time_of_date.id_time)
			inner join seat on reservation.id_seat = seat.id_seat
    where reservation.id_movie = id_m && reservation.id_date = id_d && reservation.id_time = id_t;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `doiChoNgoi` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `doiChoNgoi`(in id_u int, in id_o int, in id_newSeat int)
BEGIN
	update reservation
    set id_seat = id_newSeat
    where id_order = id_o && id_user = id_u;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getOneMovie` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `getOneMovie`(in id_m int)
BEGIN
 select * from movies, date, time_of_date 
 where movies.id_movie = date.id_movie && date.id_date = time_of_date.id_date && movies.id_movie = id_m;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `themNguoiDung` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `themNguoiDung`(in name varchar(50), in email varchar(50), in password varchar(255), in phone_number varchar(20))
BEGIN
	insert into user (name, email, password, phone_number, role)
    values (name, email, password, phone_number, 'user');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `userLogin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `userLogin`(in e varchar(50))
BEGIN
	select * from user
    where email = e; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `xemVeDaDat` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `xemVeDaDat`(in id_u int)
BEGIN
	select reservation.id_order, movies.title, date.date, time_of_date.time, movies.price, seat.id_seat, reservation.status, reservation.time_order
    from (((reservation inner join movies on reservation.id_movie = movies.id_movie)
			inner join date on reservation.id_date = date.id_date)
			inner join time_of_date on reservation.id_time = time_of_date.id_time)
			inner join seat on reservation.id_seat = seat.id_seat
	where reservation.id_user = id_u && reservation.status = 'pending';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `xoaVe` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`myadmin`@`%` PROCEDURE `xoaVe`(in id_u int, in id_o int)
BEGIN
	delete from reservation where id_user = id_u && id_order = id_o;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-02 21:52:41
