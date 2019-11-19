const S = require("sequelize");
const db = require("../index");

class Comment extends S.Model {}

Comment.init(
  {
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
