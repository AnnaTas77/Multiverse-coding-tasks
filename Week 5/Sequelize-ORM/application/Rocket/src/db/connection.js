const path = require("path");
const { Sequelize, Model, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
});

// DO NOT EDIT BELOW

module.exports = {
  db,
  Model,
  DataTypes,
};
