import NcfFrame from "./ncf_frame";

const MAX_RECONNECT_DELAY = 30000;
const MIN_RECONNECT_DELAY = 1000;

function NcfSocketClient(webSocketPath) {
  this.webSocketPath = webSocketPath;
  this.socket = undefined;
  this.onOpen = _ => {};
  this.onText = _ => {};
  this.onJson = _ => {};
  this.onSubscribeFaild = _ => {};
  this.onSubscribeSuccess = _ => {};
  this.onClose = _ => {};
  this.onError = _ => {};
  this.accessTokenProvider = () => "";
  this.onHandshakeSuccess = (client, frame) => {};
  this.onHandshakeFailed = frame => {};
  this.reconnectDelay = MIN_RECONNECT_DELAY;
  this.isExit = false;
}

function _send(socket, message) {
  if (socket && socket.readyState == WebSocket.OPEN) {
    socket.send(message);
  }
}

NcfSocketClient.prototype.sendFrame = function(frame) {
  _send(this.socket, frame.toString());
}

NcfSocketClient.prototype._handshake = function() {
  (async () => {
    const accessToken = await Promise.resolve(this.accessTokenProvider());
    const headers = {
      'Authorization': `Bearer ${accessToken}`
    }
    const frame = new NcfFrame("AUTHENTICATE", headers, "");
    this.sendFrame(frame);
  })();
}

NcfSocketClient.prototype.connect = function() {
  if (this.socket?.readyState === WebSocket.CONNECTING || this.socket?.readyState === WebSocket.OPEN) {
    return;
  }
  console.log('trying connect websocket');

  this.socket = new WebSocket(this.webSocketPath);
  this.socket.onopen = e => {
    this.reconnectDelay = MIN_RECONNECT_DELAY;
    console.log('websocket is opened');
    this.onOpen(e);
    this._handshake();
  };
  this.socket.onmessage = e => {
    const frame = NcfFrame.parse(e.data);

    switch (frame.command) {
      case 'AUTH_SUCCESS':
        console.log('handshake success');
        this.onHandshakeSuccess(this, frame);
        break;
      case 'AUTH_FAIL':
        this.close();
        console.log('handshake failed');
        this.onHandshakeFailed(frame);
        break;
      case 'MESSAGE':
        switch (frame.headers['content-type']) {
          case 'text':
            this.onText(frame);
            break;
          case 'json':
            this.onJson(frame);
            break;
          default:
            break;
        }
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
    console.log('websocket is closed');
    this.onClose(e);
    if (this.isExit) {
      return;
    }
    console.log(`reconnect after ${this.reconnectDelay / 1000} seconds...`)
    setTimeout(() => {
      this.reconnectDelay = Math.min(this.reconnectDelay * 2, MAX_RECONNECT_DELAY);
      this.connect();
    }, this.reconnectDelay);
  }

  this.isExit = false;
}

NcfSocketClient.prototype.subscribe = function(destination) {
  (async () => {
    const accessToken = await Promise.resolve(this.accessTokenProvider());
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'destination': destination
    }
    const frame = new NcfFrame("SUBSCRIBE", headers, "");
    this.sendFrame(frame);
  })();
}

NcfSocketClient.prototype.unsubscribe = function(destination) {
  _send(this.socket, NcfFrame.createUnsubscribe(destination).toString());
}

NcfSocketClient.prototype.sendText = function(destination, text) {
  const headers = {
    'destination': destination,
    'content-type': 'text'
  }
  _send(this.socket, NcfFrame.createSend(headers, text).toString());
}

NcfSocketClient.prototype.sendJson = function(destination, dict) {
  const headers = {
    'destination': destination,
    'content-type': 'json'
  };
  _send(this.socket, NcfFrame.createSend(headers, JSON.stringify(dict)).toString());
}

NcfSocketClient.prototype.close = function() {
  if (this.socket && this.socket.readyState === WebSocket.OPEN) {
    this.isExit = true;
    this.unsubscribe();
    this.socket.close();
  }
}

NcfSocketClient.prototype.getReadyState = function() {
  return this.socket.readyState;
}

export default NcfSocketClient;