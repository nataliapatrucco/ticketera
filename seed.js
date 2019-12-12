const { Status } = require("./src/db/models/index");

const promises = [
  Status.create({ state: "open" }),
  Status.create({ state: "process" }),
  Status.create({ state: "close" }),
  Status.create({ state: "rejected" })
];

Promise.all(promises).then(statusList => {
  statusList.forEach(status => {
    console.log(JSON.stringify(status));
  });

  process.exit();
});
