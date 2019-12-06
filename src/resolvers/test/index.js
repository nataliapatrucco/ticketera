var expect = require("chai").expect;
const db = require("../../db/index");
const { Ticket } = require("../../db/models");
const { fetchTickets, fetchStatus } = require("../ticket-Resolvers");

const reqMock = {
  params: {
    statusId: null
  }
};

describe("Testeando las capacidades del test", function() {
  it("confirma aritmética básica", function() {
    expect(2 + 2).to.equal(4);
  });
});

describe("RESOLVERS: tickets", function() {
  beforeEach(function() {
    return Ticket.sync({ force: true });
  });

  it("initially fetch all tickets return an empty array", function() {
    const fetchPromise = new Promise(resolve => {
      fetchTickets(null, { send: resolve });
    });

    return fetchPromise.then(tickets => {
      expect(tickets).to.be.an("array").that.is.empty;
    });
  });

  // it("fetch tickets should return an array of tickets", function() {
  //   return Ticket.create({ title: "hola facu" })
  //     .then(ticket => {
  //       return new Promise(resolve => {
  //         fetchTickets(null, { send: resolve });
  //       });
  //     })
  //     .then(tickets => {
  //       expect(tickets).to.be.an("array").that.is.not.empty;
  //       expect(tickets[0]).to.be.an.instanceOf(Ticket);
  //       expect(tickets[0].title).to.equal("hola facu");
  //     });
  // });

  // it("fetch status initially should return an empty array", function() {
  //   reqMock.params.statusId = 1;
  //   const fetchStatusPromise = new Promise(resolve => {
  //     fetchStatus(reqMock, { send: resolve });
  //   });

  //   return fetchStatusPromise.then(tickets => {
  //     expect(tickets).to.be.an("array").that.is.empty;
  //   });
  // });
  // it("fetch status should return an array of tickets", function() {
  //   reqMock.params.statusId = 1;
  //   return Ticket.bulkCreate([
  //     { title: "al toque perro", statusId: 1 },
  //     { title: "tu vieja", statusId: 2 }
  //   ])

  //     .then(() => {
  //       return new Promise(resolve => {
  //         fetchStatus(reqMock, { send: resolve });
  //       });
  //     })
  //     .then(tickets => {
  //       expect(tickets).to.be.an("array").that.is.not.empty;
  //       expect(tickets[0]).to.be.an.instanceOf(Ticket);
  //       expect(tickets[0].statusId).to.equal(1);
  //       expect(tickets.length).to.equal(1);
  //     });
  // });
});
