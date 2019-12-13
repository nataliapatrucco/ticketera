const { User, Status } = require("./src/db/models/index");

const promises = [
  Status.create({ state: "open" }),
  Status.create({ state: "process" }),
  Status.create({ state: "close" }),
  Status.create({ state: "rejected" }),
  User.create({
    name: "super",
    lastname: "admin",
    email: "contacto@plataforma5.la",
    isAdmin: 1,
    password: "ticketerawashere"
  })
];

Promise.all(promises).then(statusList => {
  statusList.forEach(status => console.log(status));

  process.exit();
});
