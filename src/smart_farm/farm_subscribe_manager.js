import { getAccessToken } from "../redux/store";
import NcfSocketClient from "../websocket/ncf_socket_client";
import { authWebSocketUrl } from "../config";

const sockets = {};
const settingsSubscribers = {};
const statusSubscribers = {};

function _readySmartFarmSubscriber(farmUuid) {
  if (!sockets[farmUuid]) {
    const socketClient = new NcfSocketClient(authWebSocketUrl);

    socketClient.accessTokenProvider = async () => {
      return await getAccessToken();
    }

    socketClient.onHandshakeSuccess = e => {
      socketClient.subscribe(farmUuid);
      _requestCurrentSettings(socketClient, farmUuid);
      _requestCurrentStatus(socketClient, farmUuid);
    }

    socketClient.onJson = frame => {
      const data = JSON.parse(frame.body)
      switch (data['method']) {
        case 'current-settings':
          settingsSubscribers[farmUuid]?.forEach(cb => {
            cb(data['settings']);
          });
          break;
        case 'current-status':
          statusSubscribers[farmUuid]?.forEach(cb => {
            cb(data['status']);
          })
          break;
        default:
          break;
      }
    }

    sockets[farmUuid] = socketClient;
  }

  sockets[farmUuid].connect();
}

function _subscribe(farmUuid, subscribers, callback) {
  _readySmartFarmSubscriber(farmUuid);
  if (!subscribers[farmUuid]) {
    subscribers[farmUuid] = []
  }
  subscribers[farmUuid].push(callback);
}

function _unsubscribe(farmUuid, subscribers, callback) {
  const index = subscribers[farmUuid]?.indexOf(callback);
  if (index == undefined || index == -1) {
    return;
  }
  subscribers[farmUuid].splice(index, 1);
  if (subscribers[farmUuid].length == 0) {
    delete subscribers[farmUuid];
  }
  _closeSubscriberIfEmpty(farmUuid);
}

function _requestCurrentSettings(socket, farmUuid) {
  socket?.sendJson(farmUuid, {'method': 'get-settings'});
}

function _requestCurrentStatus(socket, farmUuid) {
  socket?.sendJson(farmUuid, {'method': 'get-status'});
}

function subscribeFarmSettings(farmUuid, callback) {
  if (!farmUuid || farmUuid == "") {
    throw new TypeError("farmUuid cannot be empty");
  }
  _subscribe(farmUuid, settingsSubscribers, callback);
  _requestCurrentSettings(sockets[farmUuid], farmUuid);
  return [() => _unsubscribe(farmUuid, settingsSubscribers, callback), newSettings => _sendUpdateSettings(farmUuid, newSettings)];
}

function subscribeFarmStatus(farmUuid, callback) {
  if (!farmUuid || farmUuid == '') {
    throw new TypeError("farmUuid cannot be empty");
  }
  _subscribe(farmUuid, statusSubscribers, callback);
  _requestCurrentStatus(sockets[farmUuid], farmUuid);
  return () => _unsubscribe(farmUuid, statusSubscribers, callback);
}

function _closeSubscriberIfEmpty(farmUuid) {
  const settingsSubscriberLength = settingsSubscribers[farmUuid]?.length;
  const statusSubscriberLength = statusSubscribers[farmUuid]?.length;

  if (
    (settingsSubscriberLength == undefined || settingsSubscriberLength == 0)
    && (statusSubscriberLength == undefined || settingsSubscriberLength == 0)
  ) {
    if (sockets[farmUuid]) {
      sockets[farmUuid].unsubscribe(farmUuid);
      sockets[farmUuid].close();
    }
  }
}

function _sendUpdateSettings(farmUuid, newSettings) {
  sockets[farmUuid].sendJson({'method': 'update-settings', 'settings': newSettings});
}

export {
  subscribeFarmSettings,
  subscribeFarmStatus
}