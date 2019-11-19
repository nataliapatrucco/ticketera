const S = require("sequelize");
const db = new S("postgres://localhost:5432/ticketera", { logging: false });
module.exports = db;
