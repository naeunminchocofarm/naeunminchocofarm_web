import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const NCF_API_SERVER_WEBSOCKET_PATH = 'http://192.168.30.128:8080/ws';
const TEST_NCF_API_SERVER_WEBSOCKET_PATH = 'http://localhost:8081/ws';

const WEBSOCKET_TEST_SUBSCRIBE_PATH = '/subscribes/test-subject';
const SUBSCRIBE_AIR_TEMPERATURE_PATH = '/subscribes/air-temperature';

const ncfApiWebSocketHandler = {
  createClient: function() {
    return Stomp.over(new SockJS(NCF_API_SERVER_WEBSOCKET_PATH));
  },
  createTestClient: function() {
    return Stomp.over(new SockJS(TEST_NCF_API_SERVER_WEBSOCKET_PATH));
  },
  connect: function(client, header = {}, onConnect = frame => console.log('connected: ', frame)) {
    client.connect(header, onConnect);
  },
  disconnect: function(client) {
    client.disconnect();
  },
  subscribeTest: function(client, onReceive = messageOutput => console.log(messageOutput.body)) {
    client.subscribe(WEBSOCKET_TEST_SUBSCRIBE_PATH, onReceive);
  },
  subscribeAirTemperature: function(client, onReceive) {
    client.subscribe(SUBSCRIBE_AIR_TEMPERATURE_PATH, onReceive);
  }
};

export default ncfApiWebSocketHandler;

function NcfSubscriber(client) {
  this.client = client
  this.onConnect = frame => console.log('connected: ' + frame);
  this.onReceive = messageOutput => console.log('received: ' + messageOutput.body);
} 

NcfSubscriber.createTestSubscriber = function() {
  const client = new Stomp.over(new SockJS(TEST_NCF_API_SERVER_WEBSOCKET_PATH));
  return new NcfSubscriber(client);
}


NcfSubscriber.prototype.subscribe = function() {
  this.client.connect(this.header, this.onConnect);
}