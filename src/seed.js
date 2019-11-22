const { Status, Ticket, Tag } = require("./db/models/index");

Status.create({ state: "open" }).then(state =>
  console.log(JSON.stringify(state))
);
Status.create({ state: "process" }).then(state =>
  console.log(JSON.stringify(state))
);
Status.create({ state: "close" }).then(state =>
  console.log(JSON.stringify(state))
);
Status.create({ state: "rejected" }).then(state =>
  console.log(JSON.stringify(state))
);

Tag.create({ name: "sequelize" }).then(state =>
  console.log(JSON.stringify(state))
);
Tag.create({ name: "express" }).then(state =>
  console.log(JSON.stringify(state))
);

Tag.create({ name: "react" }).then(state => console.log(JSON.stringify(state)));

Ticket.findByPk(1).then(ticket => {
  ticket.addTag(1);
});

Ticket.findByPk(2).then(ticket => {
  ticket.addTag(1);
});

Ticket.findByPk(2).then(ticket => {
  ticket.addTag(2);
});

Ticket.findByPk(2).then(ticket => {
  ticket.addTag(3);
});

Ticket.findByPk(3).then(ticket => {
  ticket.addTag(2);
});
