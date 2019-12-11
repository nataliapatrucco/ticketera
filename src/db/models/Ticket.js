const S = require("sequelize");
const db = require("../index");
const Slugify = require("sequelize-slugify");

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
    images: {
      type: S.ARRAY(S.STRING)
    },
    slug: {
      type: S.STRING,
      unique: true
    },
    location:{
      type: S.STRING
    }
  },

  { sequelize: db, modelName: "ticket" }
);

Slugify.slugifyModel(Ticket, {
  source: ["title"]
});

module.exports = Ticket;
