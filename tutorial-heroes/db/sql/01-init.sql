USE hero;
CREATE TABLE IF NOT EXISTS heroes (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY(id)
);