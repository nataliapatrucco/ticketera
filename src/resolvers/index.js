const { Comment, User, Tag } = require("../db/models");

const fullTicket = [
  {
    model: Comment,
    attributes: ["description", "updatedAt", "id"],
    include: [
      {
        model: User,
        as: "replier",
        attributes: ["id", "name", "lastname", "img"]
      }
    ]
  },
  { model: Tag, attributes: ["name"], through: { attributes: [] } },
  { model: User, as: "author", attributes: ["name", "lastname", "img"] },
  {
    model: User,
    attributes: ["id", "name", "lastname", "img"],
    through: "ticket_participant"
  }
];

module.exports = { fullTicket };
