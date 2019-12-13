import io from "socket.io-client";

class Socket {
  constructor() {
    this.socket = null;
  }

  init(userId) {
    if (!this.socket && userId) {
      this.socket = io(`http://localhost:${process.env.PORT}?token=${userId}`, {
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
}

export default new Socket();
