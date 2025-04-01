import { useEffect, useRef, useState } from "react";
import NcfSubscriber from "./ncf_subscriber";
import { webSocketPaths, subscribePaths } from "./wobsocket_paths";

export default function ExampleWebSocketPage() {
  const [message, setMessage] = useState("");
  const [received, setReceived] = useState("");
  const socketClient = useRef(undefined);

  useEffect(init, []);

  function init() {
    const ncfSubscriber = new NcfSubscriber(webSocketPaths.local, subscribePaths.testSubject);

    ncfSubscriber.onOpen = function (e) {
      ncfSubscriber.subscribe();
    };

    ncfSubscriber.onMessage = function (frame) {
      setReceived(frame.body);
    };

    ncfSubscriber.connect();
    socketClient.current = ncfSubscriber;

    return () => {
      if (socketClient.current) {
        socketClient.current.close();
        socketClient.current = undefined;
      }
    };
  }

  function sendMessage() {
    if (
      socketClient.current &&
      socketClient.current.getReadyState() === WebSocket.OPEN
    ) {
      socketClient.current.send(message);
    }

    setMessage("");
  }

  const containerCss = "p-5";
  const titleCss = "text-4xl font-bold mb-10";
  const inputCss = "border border-gray-600 rounded-lg outline-purple-600 mx-3";
  const btnCss =
    "px-5 rounded-md hover:cursor-pointer hover:bg-purple-600 hover:text-white border border-purple-600";

  return (
    <>
      <div className={containerCss}>
        <h1 className={titleCss}>WebSocket Example Page</h1>
        <label>
          text:
          <input
            type="text"
            className={inputCss}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="button" className={btnCss} onClick={sendMessage}>
          send
        </button>
        <div>server: {received}</div>
      </div>
      <MotionDetecting />
    </>
  );
}

function MotionDetecting() {
  const [count, setCount] = useState(0);
  const websocketClient = useRef(undefined);

  useEffect(init, []);

  function init() {
    const subscriber = new NcfSubscriber(webSocketPaths.local, subscribePaths.motionDetecting);
    subscriber.onOpen = (e) => {
      subscriber.subscribe();
    }
    subscriber.onMessage = (frame) => {
      if (frame.body === 'detected') {
        setCount(c => c + 1);
      }
    }

    subscriber.connect()
    websocketClient.current = subscriber;

    return () => {
      if (websocketClient.current) {
        websocketClient.current.close();
        websocketClient.current = undefined;
      }
    }
  }

  return (
    <>
      <p className="text-4xl font-bold">Detected Count: {count}</p>
    </>
  );
}