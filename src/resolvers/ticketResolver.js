const S = require("sequelize");
const Op = S.Op;
const { Ticket, Status, Tag } = require("../db/models/index");

const fetchTickets = (req, res) => {
  Ticket.findAll({
    order: [["id", "ASC"]],
    include: [{ all: true }]
  })
    .then(tickets => res.send(tickets))
    .catch(err => res.status(404).send(err));
};

const fetchByTitleTag = (req, res) => {
  Ticket.findAll({
    where: {
      [Op.or]: [
        {
          title: {
            [Op.iLike]: `%${req.query.title}%`
          }
        },
        {
          "$tags.name$": {
            [Op.iLike]: `%${req.query.name}%`
          }
        }
      ]
    },
    include: [
      {
        model: Tag
      }
    ]
  })
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
        ticket
          .setAuthor(req.user.id)
          .then(() => ticket.setStatus(1))
          .then(() => res.status(201).send(ticket))
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

const removeTag = (req, res) => {
  Ticket.findOne({
    where: {
      id: req.params.ticketId
    }
  })
    .then(ticket => ticket.removeTag(req.params.tagId))
    .then(() =>
      Ticket.findOne({
        where: {
          id: req.params.ticketId
        },
        include: [{ model: Tag }]
      }).then(updatedTicket => res.send(updatedTicket))
    )
    .catch(err => res.status(404).send(err));
};

const addTag = (req, res) => {
  Ticket.findOne({
    where: {
      id: req.params.ticketId
    }
  })
    .then(ticket => ticket.addTag(req.params.tagId))
    .then(() =>
      Ticket.findOne({
        where: {
          id: req.params.ticketId
        },
        include: [{ model: Tag }]
      }).then(updatedTicket => res.send(updatedTicket))
    )
    .catch(err => res.status(404).send(err));
};

module.exports = {
  removeTag,
  addTag,
  fetchTickets,
  fetchStatus,
  createTicket,
  editTicket,
  deleteTicket,
  fetchByTitleTag
};
