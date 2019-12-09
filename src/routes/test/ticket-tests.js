const expect = require("chai").expect;
const superagent = require("superagent");

const db = require("../../db/index");
const { Ticket } = require("../../db/models");

const host = "http://localhost:3000";

describe("Primer testeo de ruta", function() {
  beforeEach(function() {
    return Ticket.sync({ force: true });
  });

  //   it("deberia devolver un 403 si no estoy logueado", function() {
  //     return superagent
  //       .get(`${host}/api/ticket`)
  //       .catch(err => expect(err.status).to.equal(403));
  //   });
  //   it("deberia devolver un 200 si estoy logueado", function() {
  //     const agent = superagent.agent();

  //     return agent
  //       .post(`${host}/api/user/login`)
  //       .send({ email: "hola@hola.com", password: "a" })
  //       .then(() => {
  //         return agent.get(`${host}/api/ticket`).then(res => {
  //           expect(res.status).to.equal(200);
  //           expect(res.body).to.deep.equal([]);
  //         });
  //       });
  //   });
  // });

  // describe("Crear Tickets", function() {
  //   const agent = superagent.agent();
  //   before(function() {
  //     return agent
  //       .post(`${host}/api/user/login`)
  //       .send({ email: "hola@hola.com", password: "a" });
  //   });
  //   beforeEach(function() {
  //     return Ticket.sync({ force: true });
  //   });
  //   it("deberia crear un ticket", function() {
  //     return agent
  //       .post(`${host}/api/ticket`)
  //       .send({ title: "a" })
  //       .then(res => {
  //         expect(res.status).to.equal(201);
  //       });
  //   });
  //   it("deberia retornar un status 400 si no hay title", function() {
  //     return agent.post(`${host}/api/ticket`).catch(err => {
  //       expect(err.status).to.equal(400);
  //     });
  //   });

  //   it("deberia retornar un status 404 si el title no es un string", function() {
  //     return agent
  //       .post(`${host}/api/ticket`)
  //       .send({ title: {} })
  //       .catch(err => {
  //         expect(err.status).to.equal(404);
  //       });
  //   });
});
