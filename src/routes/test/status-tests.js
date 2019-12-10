const expect = require("chai").expect;
const superagent = require("superagent");

const db = require("../../db/index");
const { Ticket, Comment } = require("../../db/models");
const { fullTicket } = require("../../resolvers/index");

const host = "http://localhost:3000";

// Para correr estos tests se necesita crear los siguientes usuarios

// {
//   isAdmin: 1,

//   name: "K-po",
//   lastname: " de fuego",
//   email: "river@plate.com",
//   password: "a",

// }
// {
//   isAdmin: 1,

//   name: "Pity",
//   lastname: "Martinez",
//   email: "river@plate.com",
//   password: "a",

// }

describe("Responder Tickets", function() {
  const agent = superagent.agent();
  const agent2 = superagent.agent();
  before(function() {
    return agent
      .post(`${host}/api/user/login`)
      .send({ email: "hola@hola.com", password: "a" });
  });
  before(function() {
    return agent2
      .post(`${host}/api/user/login`)
      .send({ email: "river@plate.com", password: "a" });
  });

  before(function() {
    return Ticket.sync({ force: true });
  });
  before(function() {
    return Comment.sync({ force: true });
  });

  before(function() {
    return Ticket.create({ title: "ticket 1", statusId: 1 });
  });
  before(function() {
    return Ticket.create({ title: "ticket 2", statusId: 1 });
  });
  before(function() {
    return Ticket.create({ title: "ticket 3", statusId: 1 });
  });

  it("deberia crearse un comment vacio si le llega status 2", function() {
    return agent
      .put(`${host}/api/status/1`)
      .send({ description: "soy una respuesta", status: 2 })
      .then(res =>
        Ticket.findOne({ where: { id: 1 }, include: fullTicket }).then(
          ticket => {
            expect(ticket.statusId).to.equal(2);
            expect(ticket.comment.description).to.equal("");
            expect(ticket.comment.replier.name).to.equal("K-po");
          }
        )
      );
  });
  it("deberia responder un ticket que ya tenia un comment", function() {
    return agent
      .put(`${host}/api/status/1`)
      .send({ description: "soy una respuesta", status: 3 })
      .then(res =>
        Ticket.findOne({ where: { id: 1 }, include: fullTicket }).then(
          ticket => {
            expect(ticket.statusId).to.equal(3);
            expect(ticket.comment.description).to.equal("soy una respuesta");
            expect(ticket.comment.replier.name).to.equal("K-po");
          }
        )
      );
  });
  it("deberia responder un ticket que no tenia un comment", function() {
    return agent
      .put(`${host}/api/status/2`)
      .send({ description: "soy la respuesta del ticket 2", status: 3 })
      .then(res =>
        Ticket.findOne({ where: { id: 2 }, include: fullTicket }).then(
          ticket => {
            expect(ticket.statusId).to.equal(3);
            expect(ticket.comment.description).to.equal(
              "soy la respuesta del ticket 2"
            );
            expect(ticket.comment.replier.name).to.equal("K-po");
          }
        )
      );
  });
  it("deberia poder editar un comment", function() {
    return agent
      .put(`${host}/api/status/2`)
      .send({ description: "ahora respondo yo perri", status: 3 })
      .then(res =>
        Ticket.findOne({ where: { id: 2 }, include: fullTicket }).then(
          ticket => {
            expect(ticket.statusId).to.equal(3);
            expect(ticket.comment.description).to.equal(
              "ahora respondo yo perri"
            );
            expect(ticket.comment.replier.name).to.equal("K-po");
          }
        )
      );
  });

  it("deberia rechazar un ticket que no tenia un comment", function() {
    return agent
      .put(`${host}/api/status/3`)
      .send({ description: "respondo al ticket 3", status: 4 })
      .then(res =>
        Ticket.findOne({ where: { id: 3 }, include: fullTicket }).then(
          ticket => {
            expect(ticket.statusId).to.equal(4);
            expect(ticket.comment.description).to.equal("respondo al ticket 3");
            expect(ticket.comment.replier.name).to.equal("K-po");
          }
        )
      );
  });

  it("no deberia poder rechazar un ticket sin una descripcion", function() {
    return agent
      .put(`${host}/api/status/3`)
      .send({ description: "", status: 4 })
      .catch(err => {
        expect(err.status).to.equal(403);
        expect(err.response.text).to.equal("Ingresar motivo");
      });
  });

  it("deberia rechazar un ticket que ya tenia un comment", function() {
    return agent
      .put(`${host}/api/status/2`)
      .send({ description: "rechazo al ticket 2", status: 4 })
      .then(res =>
        Ticket.findOne({ where: { id: 2 }, include: fullTicket }).then(
          ticket => {
            expect(ticket.statusId).to.equal(4);
            expect(ticket.comment.description).to.equal("rechazo al ticket 2");
            expect(ticket.comment.replier.name).to.equal("K-po");
          }
        )
      );
  });
  it("Joaco se da cuenta que contestó cualquier cosa y el ticket vuelve a open", function() {
    return agent
      .put(`${host}/api/status/1`)
      .send({ description: null, status: 1 })
      .then(res =>
        Ticket.findOne({ where: { id: 1 }, include: fullTicket }).then(
          ticket => {
            expect(ticket.statusId).to.equal(1);
            expect(ticket.comment).to.equal(null);
          }
        )
      );
  });
  it("a Hanoi le da fiaca ir a responder y el ticket queda open", function() {
    return agent
      .put(`${host}/api/status/1`)
      .send({ description: null, status: 1 })
      .then(res =>
        Ticket.findOne({ where: { id: 1 }, include: fullTicket }).then(
          ticket => {
            expect(ticket.statusId).to.equal(1);
            expect(ticket.comment).to.equal(null);
          }
        )
      );
  });

  it("deberia poder editar un comment otro profesor", function() {
    return agent2
      .put(`${host}/api/status/2`)
      .send({ description: "que loco que está", status: 3 })
      .then(res =>
        Ticket.findOne({ where: { id: 2 }, include: fullTicket }).then(
          ticket => {
            expect(ticket.statusId).to.equal(3);
            expect(ticket.comment.description).to.equal("que loco que está");
            expect(ticket.comment.replier.name).to.equal("Pity");
          }
        )
      );
  });

  it("deberia poder rechazar un ticket que aceptó otro profesor", function() {
    return agent
      .put(`${host}/api/status/2`)
      .send({ description: "volvé a river Pity", status: 4 })
      .then(res =>
        Ticket.findOne({ where: { id: 2 }, include: fullTicket }).then(
          ticket => {
            expect(ticket.statusId).to.equal(4);
            expect(ticket.comment.description).to.equal("volvé a river Pity");
            expect(ticket.comment.replier.name).to.equal("K-po");
            expect(ticket.comment.replier.lastname).to.equal(" de fuego");
          }
        )
      );
  });
});
