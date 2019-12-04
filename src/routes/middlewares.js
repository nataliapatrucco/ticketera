const { Ticket } = require("../db/models");

const isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated() && req.user) {
    next();
  } else {
    res.sendStatus(403);
  }
};

const isAdmin = function(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) {
    next();
  } else {
    res.sendStatus(403);
  }
};

const checkUser = function(req, res, next) {
  Ticket.findByPk(req.params.id).then(ticket => {
    if (
      (req.user.id === ticket.authorId && ticket.statusId === 1) ||
      req.user.isAdmin
    ) {
      next();
    } else {
      res.sendStatus(403);
    }
  });
};

module.exports = { isLoggedIn, isAdmin, checkUser };
