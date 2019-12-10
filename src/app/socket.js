import io from "socket.io-client";

class Socket {
  constructor() {
    this.socket = null;
  }

  init(userId) {
    if (!this.socket && userId) {
      this.socket = io(`http://192.168.1.15.:3000?token=${userId}`, {
        transport: ["websocket"]
      });
    }
  }

  emit(eventName, data) {
    this.socket && this.socket.emit(eventName, data);
  }

  on(eventName, callback) {
    this.socket && this.socket.on(eventName, callback);
  }

  //   emitToParticipants (userIds) {
  //     userIds.forEach(id => {
  //         const a = this.connections[id]
  //         a.emit('ticket-resolve')
  //     })
  //   }
}

export default new Socket();
