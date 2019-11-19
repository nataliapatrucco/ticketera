const S = require("sequelize");
const db = require("../index");

class Tag extends S.Model {}
Tag.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "tag" }
);

module.exports = Tag;
