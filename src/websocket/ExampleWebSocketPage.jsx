import { useState } from "react";

export default function ExampleWebSocketPage() {
  const [received, setReceived] = useState('');

  const containerCss = "p-5";
  const titleCss = "text-4xl font-bold mb-10";
  const inputCss = "border border-gray-600 rounded-lg outline-purple-600 mx-3";
  const btnCss = "px-5 rounded-md hover:cursor-pointer hover:bg-purple-600 hover:text-white border border-purple-600"

  function sendMessage() {
    
  }

  return (
    <>
      <div className={containerCss}>
        <h1 className={titleCss}>WebSocket Example Page</h1>
        <label>
          text: 
          <input type="text" className={inputCss}/>
        </label>
        <button type="button" className={btnCss} onClick={sendMessage}>send</button>
        <div>server: {received}</div>
      </div>
    </>
  );
}