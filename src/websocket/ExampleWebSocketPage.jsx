import { useEffect, useRef, useState } from "react";
import ncfApiWebSocketHandler from "./ncf_api_websocket_client";

export default function ExampleWebSocketPage() {
  const [message, setMessage] = useState('');
  const [received, setReceived] = useState('');
  const socketClient = useRef(undefined);

  useEffect(init, []);

  function init() {
    const client = ncfApiWebSocketHandler.createTestClient();

    ncfApiWebSocketHandler.connect(client, {}, frame => {
      console.log('Connected: ' + frame);
      ncfApiWebSocketHandler.subscribeTest(client, messageOutput => {
        setReceived(messageOutput.body);
      })
      socketClient.current = client;
    });

    return () => {
      if (socketClient.current) {
        socketClient.current.disconnect();
        socketClient.current = undefined;
      }
    }
  }

  function sendMessage() {
    if (socketClient.current) {
      socketClient.current.send('/publish/test-send', {}, message);
    }
    
    setMessage('');
  }

  const containerCss = "p-5";
  const titleCss = "text-4xl font-bold mb-10";
  const inputCss = "border border-gray-600 rounded-lg outline-purple-600 mx-3";
  const btnCss = "px-5 rounded-md hover:cursor-pointer hover:bg-purple-600 hover:text-white border border-purple-600"

  return (
    <>
      <div className={containerCss}>
        <h1 className={titleCss}>WebSocket Example Page</h1>
        <label>
          text: 
          <input type="text" className={inputCss} value={message} onChange={e => setMessage(e.target.value)}/>
        </label>
        <button type="button" className={btnCss} onClick={sendMessage}>send</button>
        <div>server: {received}</div>
      </div>
    </>
  );
}