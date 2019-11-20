const S = require("sequelize");
const db = require("../index");

class Status extends S.Model {}
Status.init(
  {
    state: {
      type: S.ENUM,
      values: ["open", "close", "pending", "rejected"],
      defaultValue: "open"
    }
  },
  { sequelize: db, modelName: "status" }
);

module.exports = Status;
