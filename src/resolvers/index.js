const {Commment, User, Tag} = require("../db/models")

const fullTicket = [
  {
    model: Comment,
    attributes: ["description", "updatedAt"],
    include: [
      {
        model: User,
        as: "replier",
        attributes: ["name", "lastname", "img"]
      }
    ]
  },
  { model: Tag, attributes: ["name"], through: { attributes: [] } },
  { model: User, as: "author", attributes: ["name", "lastname", "img"] }
];

module.exports = { fullTicket };
