// config/db.config.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATA_JUAN, process.env.root, process.env.juanda014, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
});

module.exports = sequelize;
