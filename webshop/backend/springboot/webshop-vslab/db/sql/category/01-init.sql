CREATE DATABASE IF NOT EXISTS `category`;
GRANT ALL PRIVILEGES ON `category`.* TO 'webshopuser'@'%';

USE `category`;
    
CREATE TABLE IF NOT EXISTS category (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);