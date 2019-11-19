const S = require("sequelize");
const db = require("../index");

class Tag extends S.Model {}
Tag.init({
  name: {
    type: S.STRING,
    allowNull: false
  }
});

module.exports = Tag;
