const socketIO = require("socket.io");

class Socket {
  constructor() {
    this.sockets = {};
  }
  connect(server) {
    const io = socketIO(server);
    io.on("connection", function(socket) {
      let id = socket.handshake.query.token;
      this.sockets[id] = socket;

      console.log("CONNECTION: user id", id);

      socket.on("delete-ticket", this.deleteTicket);
      //   socket.on("reject-ticket", this.deleteTicket);
      socket.on("disconnect", () => {
        this.sockets[id] = null;
        console.log("DISCONNECTION: user id", id);
      });
    });
  }

  emitToParticipants = id => {
    this.sockets[id].emit();
  };

  deleteTicket = ticket => {
    console.log(ticket.authorId);
    this.sockets[ticket.authorId] &&
      this.sockets[ticket.authorId].emit(
        "deleted",
        `Eliminamos tu ticket ${ticket.title}`
      );
  };
}

module.exports = new Socket();

// const io = socketIO(http);
//   io.on("connection", function(socket) {
//     console.log("CONNECTION: user id", socket.handshake.query.token);
//     socket.on("delete-ticket", function(ticketId) {
//       console.log("Se borro el ticket de id", ticketId);
//     });
//   });
