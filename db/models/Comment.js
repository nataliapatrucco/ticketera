const S = require("sequelize");
const db = require("../index");

class Comment extends S.Model {}

Comment.init(
  {
    author: {
      type: S.STRING,
      allowNull: false
    },
    description: {
      type: S.TEXT,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "comment"
  }
);

module.exports = Comment;
