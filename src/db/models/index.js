const Tag = require("./Tag");
const Comment = require("./Comment");
const User = require("./User");
const Status = require("./Status");
const Ticket = require("./Ticket");

// relacion entre usuarios y preguntas
//User.hasMany(Ticket, { as: "author" });
Ticket.belongsTo(User, { as: "author" });
User.belongsToMany(Ticket, { through: "ticket_participant" });
Ticket.belongsToMany(User, { through: "ticket_participant" });

//status de la pregunta
Ticket.belongsTo(Status);

//respuestas
Ticket.hasOne(Comment);
//tags de la pregunta
Ticket.belongsToMany(Tag, { through: "ticket_tag" });
Tag.belongsToMany(Ticket, { through: "ticket_tag" });

// respuestas de los usuarios
Comment.belongsTo(User, { as: "replier" });

module.exports = { User, Tag, Comment, Status, Ticket };
