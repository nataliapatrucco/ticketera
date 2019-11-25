const { User } = require("../db/models");

const register = function(req, res) {
  if (req.body.email && req.body.password) {
    User.create(req.body)
      .then(user => res.status(201).send(user))
      .catch(err => console.log(err));
  } else {
    res.status(400).send("Email and password are required.");
  }
};

const logIn = function(req, res) {
  res.status(200).send(req.user);
};

const logOut = function(req, res) {
  req.logout();
  res.send("logged Out");
};

const update = function(req, res) {
  User.update(req.body, { where: { id: req.user.id } }).then(() =>
    res.send("updated")
  );
};

const userDelete = function(req, res) {
  User.findOne({ where: { id: req.params.id } }).then(function(user) {
    if (user) {
      return user.destroy().then(() => res.sendStatus(200));
    } else {
      return res.sendStatus(400);
    }
  });
};

const changePassword = function(req, res) {
  User.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(user =>
      user.validPassword(req.body.password)
        ? user.update({
            password: req.body.newPassword
          })
        : null
    )
    .then(() => User.findByPk(req.params.id).then(user => res.send(user)))
    .catch(err => (res.sendStatus(400), console.log(err)));
};

const me = function(req, res) {
  res.send(req.user);
};

module.exports = {
  register,
  logIn,
  logOut,
  update,
  userDelete,
  changePassword,
  me
};
