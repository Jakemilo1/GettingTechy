const Sequelize = require('sequelize');
require('dotenv').config();

const {
  JAWSDB_URL,
  DB_NAME,
  DB_USER,
  DB_PASSWORD
} = process.env;

const sequelize = JAWSDB_URL 
  ? new Sequelize(JAWSDB_URL) 
  : new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3001
    });

module.exports = sequelize;
