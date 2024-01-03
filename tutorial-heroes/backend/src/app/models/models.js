const { Sequelize, DataTypes } = require("sequelize");
const process = require('process');
const { readFile } = require('fs/promises');

const db = new Sequelize(
    process.env.MYSQL_DATABASE ? process.env.MYSQL_DATABASE : 'hero',
    process.env.MYSQL_USER ? process.env.MYSQL_USER : 'hero',
    process.env.MYSQL_PASSWORD ? process.env.MYSQL_USER: 'hero', {
        host: process.env.DB_HOST ? process.env.DB_HOST: '127.0.0.1',
        port: process.env.DB_PORT ? process.env.DB_PORT: 3306,
        dialect: 'mysql'
    }
);

const Hero = db.define('Hero', {
    name: {
        type: DataTypes.STRING
    }
},
{
    tableName: "heroes"
});

db.authenticate().then(async () => {
    console.log('Connection has been established successfully.');
    await db.sync();
}).catch(error => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = { Hero };