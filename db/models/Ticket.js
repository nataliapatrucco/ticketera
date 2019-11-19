const S = require("sequelize");
const db = require("../index");

class Ticket extends S.Model {}

Ticket.init(
  {
    title: {
      type: S.STRING,
      allowNull: false
    },
    content: {
      type: S.TEXT
    },
    image: {
      type: S.TEXT
    }
  },

  { sequelize: db, modelName: "ticket" }
);
module.exports = Ticket;
