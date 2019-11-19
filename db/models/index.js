const Tag = require("./Tag");
const Comment = require("./Comment");
const User = require("./User");
const Status = require("./Status");
const Ticket = require("./Ticket");

// relacion entre usuarios y preguntas
User.hasMany(Ticket, { as: "author" });
Ticket.belongsTo(User, { as: "author" });
User.hasMany(Ticket, { as: "participant" });
//status de la pregunta
Ticket.hasOne(Status);
//respuestas
Ticket.hasMany(Comment, { as: "reply" });
//tags de la pregunta
Ticket.hasMany(Tag);
// respuestas de los usuarios
User.hasMany(Comment, { as: "author" });
Comment.belongsTo(User, { as: "author" });

module.exports = { User, Tag, Comment, Status, Ticket };
