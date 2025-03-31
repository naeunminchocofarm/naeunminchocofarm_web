import NcfFrame from "./ncf_frame";

function NcfSubscriber(webSocketPath, destination) {
  this.destination = destination;
  this.socket = new WebSocket(webSocketPath);

  this.onOpen = _ => {};
  this.onMessage = _ => {};
  this.onSubscribeFaild = _ => {};
  this.onSubscribeSuccess = _ => {};
  this.onClose = _ => {};
  this.onError = _ => {};

  this.socket.onopen = e => {
    this.onOpen(e);
  };
  this.socket.onmessage = e => {
    const frame = NcfFrame.parse(e.data);

    switch (frame.command) {
      case 'MESSAGE':
        this.onMessage(frame);
        break;
      case 'SUBSCRIBE_SUCCESS':
        this.onSubscribeSuccess(frame);
        break;
      case 'SUBSCRIBE_FAILD':
        this.onSubscribeFaild(frame);
        break;
      default:
        break;
    };
  };
  this.socket.onerror = e => {
    this.onError(e);
  };
  this.socket.onclose = e => {
    this.onClose(e);
  }
}

function _send(socket, message) {
  if (socket && socket.readyState == WebSocket.OPEN) {
    socket.send(message);
  }
}

NcfSubscriber.prototype.subscribe = function() {
  _send(this.socket, NcfFrame.createSubscribe(this.destination).toString());
}

NcfSubscriber.prototype.unsubscribe = function() {
  _send(this.socket, NcfFrame.createUnsubscribe(this.destination).toString());
}

NcfSubscriber.prototype.send = function(message = '', headers = {}) {
  headers['destination'] = this.destination;
  _send(this.socket, NcfFrame.createSend(headers, message).toString());
}

NcfSubscriber.prototype.close = function() {
  this.unsubscribe();
  this.socket.close();
}

NcfSubscriber.prototype.getReadyState = function() {
  return this.socket.readyState;
}

export default NcfSubscriber;