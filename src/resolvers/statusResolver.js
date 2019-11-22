const { Ticket, Comment, User, Tag } = require("../db/models/");

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
            .then(() => Ticket.findOne({ where: { id: req.params.id } }))
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
                include: [
                  {
                    model: Comment,
                    include: [{ model: User, as: "replier" }]
                  },
                  { model: Tag },
                  { model: User, as: "author" }
                ]
              })
            )
            .then(ticketUpdated => res.send(ticketUpdated));

          break;

        case STATUS.REJECTED:
          ticket
            .createComment({
              description: req.body.description
            })
            .then(comment => comment.setReplier(req.user.id))
            .then(() => ticket.setStatus(STATUS.REJECTED))
            .then(() =>
              Ticket.findOne({
                where: { id: req.params.id },
                include: [
                  {
                    model: Comment,
                    include: [{ model: User, as: "replier" }]
                  },
                  { model: Tag },
                  { model: User, as: "author" }
                ]
              })
            )
            .then(() => res.send(ticket));
      }
    })
    .catch(err => console.log(err));
};

module.exports = {
  setStatus
};
