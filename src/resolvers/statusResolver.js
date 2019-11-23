const { Ticket, Comment, User, Tag } = require("../db/models/");
const { fullTicket } = require("./index");

const STATUS = {
  OPEN: 1,
  PROCESS: 2,
  CLOSED: 3,
  REJECTED: 4
};

const setStatus = function(req, res, next) {
  Ticket.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        all: true
      }
    ]
  })
    .then(ticket => {
      switch (req.body.statusId) {
        case STATUS.PROCESS:
          ticket
            .createComment({})
            .then(comment => comment.setReplier(req.user.id))
            .then(() => ticket.setStatus(STATUS.PROCESS))
            .then(() =>
              Ticket.findOne({
                where: { id: req.params.id },
                include: fullTicket
              })
            )
            .then(ticketUpdated => res.send(ticketUpdated));
          break;

        case STATUS.CLOSED:
          Comment.findOne({
            where: {
              ticketId: req.params.id
            }
          })
            .then(comment => {
              comment.update({
                description: req.body.description
              });
            })
            .then(() => ticket.setStatus(STATUS.CLOSED))
            .then(() =>
              Ticket.findOne({
                where: { id: req.params.id },
                include: fullTicket
              })
            )
            .then(ticketUpdated => res.send(ticketUpdated));

          break;

        case STATUS.REJECTED:
          req.body.description ? (
            ticket
            .createComment({
              description: req.body.description
            })
            .then(comment => comment.setReplier(req.user.id))
            .then(() => ticket.setStatus(STATUS.REJECTED))
            .then(() =>
              Ticket.findOne({
                where: { id: req.params.id },
                include: fullTicket
              })
            )
            .then((ticket) => res.send(ticket))
          ) : (
            res.status(403).send("Ingresar motivo")
          )
         
      }
    })
    .catch(err => console.log(err));
};

module.exports = {
  setStatus
};
