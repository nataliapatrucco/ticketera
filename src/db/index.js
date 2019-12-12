const S = require("sequelize");
const { DB_PASS, DB_USER, DB_NAME, DB_HOST } = process.env;
const db = new S(DB_NAME, DB_USER, DB_PASS, {
  dialect: "postgres",
  host: DB_HOST,
  port: 5432,
  logging: false
});
module.exports = db;
