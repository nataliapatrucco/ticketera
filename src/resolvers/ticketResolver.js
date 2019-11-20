const S = require("sequelize");
const { Ticket, Status } = require("../db/models/index");

const fetchTickets = (req, res) => {
  Ticket.findAll({})
    .then(tickets => res.send(tickets))
    .catch(err => res.status(404).send(err));
};

const fetchStatus = (req, res) => {
  Ticket.findAll({
    include: [
      {
        model: Status,
        where: {
          state: req.params.status
        }
      }
    ]
  })
    .then(tickets => res.send(tickets))
    .catch(err => res.status(404).send(err));
};

const createTicket = (req, res) => {
  if (req.body.title) {
    Ticket.create(req.body)
      .then(ticket =>
        ticket.setStatus(1).then(() => res.status(201).send(ticket))
      )
      .catch(err => res.status(404).send(err));
  } else {
    res.sendStatus(400);
  }
};

const editTicket = (req, res) => {
  Ticket.update(req.body, {
    where: {
      id: req.params.ticketId
    }
  })
    .then(ticket => res.send(ticket))
    .catch(err => res.status(404).send(err));
};

const deleteTicket = (req, res) => {
  Ticket.destroy({
    where: {
      id: req.params.id
    }
  }).catch(err => res.status(404).send(err));
};

module.exports = {
  fetchTickets,
  fetchStatus,
  createTicket,
  editTicket,
  deleteTicket
};
