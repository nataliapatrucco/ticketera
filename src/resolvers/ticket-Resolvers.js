const S = require("sequelize");
const Op = S.Op;
const { Ticket, Tag, Comment, User } = require("../db/models/index");
const { fullTicket } = require("./index");

const fetchTickets = (req, res) => {
  Ticket.findAll({
    order: [["id", "ASC"]],
    include: fullTicket
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
    include: fullTicket
  })
    .then(tickets => res.send(tickets))
    .catch(err => res.status(404).send(err));
};

const fetchStatus = (req, res) => {
  Ticket.findAll({
    where: { statusId: req.params.statusId },
    include: fullTicket
  })
    .then(tickets => res.send(tickets))
    .catch(err => res.status(404).send(err));
};

const createTicket = (req, res) => {
  if (req.body.title) {
    Ticket.create(req.body)
      .then(ticket =>
        ticket
          .setStatus(1)
          .then(() => ticket.setAuthor(req.user.id))
          .then(() =>
            Ticket.findOne({
              where: { id: ticket.id },
              include: [
                {
                  model: User,
                  as: "author",
                  attributes: ["name", "lastname", "img"]
                }
              ]
            }).then(newTicket => res.status(201).send(newTicket))
          )
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
    .then(() =>
      Ticket.findOne({
        where: { id: req.params.ticketId },
        include: fullTicket
      }).then(ticket => res.status(200).send(ticket))
    )
    .catch(err => res.status(404).send(err));
};

const deleteTicket = (req, res) => {
  Ticket.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.sendStatus(202))
    .catch(err => res.status(404).send(err));
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
        include: fullTicket
      }).then(tickets => res.send(tickets))
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
        } /* ,
        include: [{ all: true }] */
      }).then(updatedTicket => res.send(updatedTicket))
    )
    .catch(err => res.status(404).send(err));
};

const addParticipant = (req, res) => {
  Ticket.findOne({
    where: {
      id: req.body.ticketId
    }
  })
    .then(ticket => ticket.addUser(req.user))
    .then(() =>
      Ticket.findAll({
        where: {
          statusId: 1
        },
        order: [["id", "ASC"]],
        include: fullTicket
      }).then(tickets => res.send(tickets))
    )
    .catch(err => res.status(404).send(err));
};

const removeParticipant = (req, res) => {
  Ticket.findOne({
    where: {
      id: req.body.ticketId
    }
  })
    .then(ticket => ticket.removeUser(req.user))
    .then(() =>
      Ticket.findOne({
        where: {
          statusId: 1
        },
        order: [["id", "ASC"]],
        include: fullTicket
      }).then(updatedTicket => res.send(updatedTicket))
    )
    .catch(err => res.status(404).send(err));
};

const editComment = (req, res) => {
  Comment.update(req.body, {
    where: {
      id: req.params.commentId
    }
  })
    .then(() =>
      Ticket.findOne({
        where: { id: req.params.ticketId },
        include: fullTicket
      }).then(ticket => res.status(200).send(ticket))
    )
    .catch(err => res.status(404).send(err));
};

const userTickets = (req, res) => {
  Ticket.findAll({
    where: {
      authorId: req.user.id
    },
    include: fullTicket
  })
    .then(tickets => res.status(200).send(tickets))
    .catch(err => console.log(err));
};

module.exports = {
  removeTag,
  addTag,
  fetchTickets,
  fetchStatus,
  createTicket,
  editTicket,
  editComment,
  deleteTicket,
  fetchByTitleTag,
  addParticipant,
  removeParticipant,
  userTickets
};
