const { Sequelize } = require("sequelize");

module.exports = new Sequelize("ProductQuality", "postgres", "1111", {
  dialect: "postgres",
  host: "localhost",
  port: "5432",
});