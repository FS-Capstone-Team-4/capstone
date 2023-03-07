const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABAEURL || 'postgres://localhost/polifacts_db'
);

module.exports = db;
