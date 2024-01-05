CREATE DATABASE IF NOT EXISTS `categories`;
GRANT ALL PRIVILEGES ON `categories`.* TO 'webshopuser'@'%';

USE `categories`;
    
CREATE TABLE IF NOT EXISTS category (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);