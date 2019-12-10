const socketIO = require("socket.io");

const estados = {
  1: "Abierto",
  2: "Respondiendo",
  3: "Cerrado",
  4: "Rechazado"
};

class Socket {
  constructor() {
    this.sockets = {};
  }

  connect(server) {
    const io = socketIO(server);
    io.on("connection", socket => {
      let id = socket.handshake.query.token;
      this.sockets[id] = socket;

      console.log("CONNECTION: user id", id);

      socket.on("delete-ticket", this.deleteTicket());

      socket.on("disconnect", this.disconnectUser());

      socket.on("change-status", this.changeTicketStatus());
    });
  }
  deleteTicket() {
    return ticket => {
      console.log(ticket.authorId);
      this.sockets[ticket.authorId] &&
        this.sockets[ticket.authorId].emit(
          "deleted",
          `Eliminamos tu ticket ${ticket.title}`
        );
    };
  }

  disconnectUser() {
    return id => {
      this.sockets[id] = null;
      console.log("DISCONNECTION: user id", id);
    };
  }

  changeTicketStatus() {
    return ticket => {
      this.sockets[ticket.authorId] &&
        this.sockets[ticket.authorId].emit(
          "statusChanged",
          `${ticket.comment.replier.name} ${
            ticket.comment.replier.lastname
          } Cambió el estado de tu ticket: ${ticket.title} a 
            ${estados[ticket.statusId]}
          `
        );

      ticket.users
        ? ticket.users.map(user =>
            this.sockets[user.id]
              ? this.sockets[user.id].emit(
                  "statusChanged",
                  `${ticket.comment.replier.name} ${
                    ticket.comment.replier.lastname
                  } cambió el estado del ticket: ${ticket.title} a
                  ${estados[ticket.statusId]}`
                )
              : ""
          )
        : "";
    };
  }

  emitToParticipants(id) {
    this.sockets[id].emit();
  }
}

module.exports = new Socket();
