var S = require("sequelize");
var db = require("../index");
const crypto = require("crypto");

class User extends S.Model {}
User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    },
    lastname: {
      type: S.STRING,
      allowNull: false
    },
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
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    salt: {
      type: S.TEXT
    },
    img: {
      type: S.STRING,
      defaultValue: "/images/anonimo.jpg"
    },
    isAdmin: {
      type: S.INTEGER,
      get() {
        if (this.getDataValue("isAdmin") === 1) {
          return true;
        } else {
          return false;
        }
      }
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
