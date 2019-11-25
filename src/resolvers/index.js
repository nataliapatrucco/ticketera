const { Comment, User, Tag } = require("../db/models");

const fullTicket = [
  {
    model: Comment,
    attributes: ["description", "updatedAt", "id"],
    include: [
      {
        model: User,
        as: "replier",
        attributes: ["name", "lastname", "img"]
      }
    ]
  },
  { model: Tag, attributes: ["name"], through: { attributes: [] } },
  { model: User, as: "author", attributes: ["name", "lastname", "img"] },
  { model: User, through: "ticket_participant" }
];

module.exports = { fullTicket };
