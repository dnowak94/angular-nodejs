CREATE DATABASE IF NOT EXISTS `products`;
GRANT ALL PRIVILEGES ON `products`.* TO 'webshopuser'@'%';

USE `products`;
CREATE TABLE IF NOT EXISTS product (
    id INT NOT NULL AUTO_INCREMENT,
    details VARCHAR(255) DEFAULT '',
    name VARCHAR(255) NOT NULL,
    price DOUBLE,
    category_id INT,
    PRIMARY KEY (id)
);