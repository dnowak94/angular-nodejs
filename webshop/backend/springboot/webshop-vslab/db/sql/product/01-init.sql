CREATE DATABASE IF NOT EXISTS `product`;
GRANT ALL PRIVILEGES ON `product`.* TO 'webshopuser'@'%';

USE `product`;
CREATE TABLE IF NOT EXISTS product (
    id INT NOT NULL AUTO_INCREMENT,
    details VARCHAR(255) DEFAULT '',
    name VARCHAR(255) NOT NULL,
    price DOUBLE,
    category_id INT,
    PRIMARY KEY (id)
);