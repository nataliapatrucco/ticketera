const S = require("sequelize");
const db = require("../index");

class Comment extends S.Model {}

Comment.init(
  {
    description: {
      type: S.TEXT,
      defaultValue: ""
    }
  },
  {
    sequelize: db,
    modelName: "comment"
  }
);

module.exports = Comment;
