var S = require("sequelize");
var db = require("../index");
const crypto = require("crypto");

class User extends Sequelize.Model {}
User.init(
  {
    name: S.STRING,
    lastname: S.STRING,
    email: {
      type: S.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      },
      unique: true
    },
    password: {
      type: S.STRING,
      defaultValue: Math.floor(Math.random() * 1000000).toString(10)
    },
    salt: {
      type: S.STRING
    },
    img: {
      type: S.TEXT
    }
  },
  { sequelize: db, modelName: "user" }
);

User.addHook("beforeCreate", user => {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.password = user.hashPassword(user.password);
});

User.addHook("beforeUpdate", user => {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.password = user.hashPassword(user.password);
});

User.prototype.hashPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};
User.prototype.validPassword = function(password) {
  return this.password === this.hashPassword(password);
};
module.exports = User;
