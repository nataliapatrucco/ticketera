const { User } = require("../db/models");

const register = (req, res) => {
  if (req.body.email && req.body.password) {
    User.create(req.body)
      .then(user => res.status(201).send(user))
      .catch(err => console.log(err));
  } else {
    res.status(400).send("Email and password are required.");
  }
};

const logIn = (req, res) => {
  res.status(200).send(req.user);
};

const logOut = (req, res) => {
  req.logout();
  res.send("logged Out");
};

const update = (req, res) => {
  User.update(req.body, { where: { id: req.user.id } }).then(() =>
    res.send("updated")
  );
};

const userDelete = (req, res) => {
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

const me = (req, res) => {
  res.send(req.user);
};

// const resetPassword = (req, res) => {
//   User.findOne({
//     where: { email: req.body.email }
//   }).then(user => {
//     if (!user) {
//       res.send("No user found with that email address.");
//     }
//   });
// };

module.exports = {
  register,
  logIn,
  logOut,
  update,
  userDelete,
  changePassword,
  me
};
