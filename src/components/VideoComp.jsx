
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NcfSubscriber from "../websocket/ncf_subscriber";
import { subscribePaths, webSocketPaths } from "../websocket/wobsocket_paths";

const VideoComp = () => {
  const [isMovig, setIsMoving] = useState(false);
  const [cameraLink, setCameraLink] = useState(null);
  const motionDetectTimer = useRef(undefined);
  const webSocketClient = useRef(undefined);

  useEffect(init, []);

  function init() {
    const subscriber = new NcfSubscriber(webSocketPaths.production, subscribePaths.motionDetecting);
    subscriber.onOpen = function(e) {
      subscriber.subscribe();
    }
    subscriber.onMessage = function(frame) {
      if (frame.body === 'detected') {
        // 3초 동안 true
        setIsMovingWithLifeTime(3_000);
      }
    }

    subscriber.connect();
    webSocketClient.current = subscriber;

    return () => {
      if (webSocketClient.current) {
        webSocketClient.current.close();
        webSocketClient.current = undefined;
      }
    };
  }

  function setIsMovingWithLifeTime(milliSeconds) {
    if (motionDetectTimer.current) {
      clearTimeout(motionDetectTimer.current);
    }

    setIsMoving(true);

    const newTimer = setTimeout(() =>{
      setIsMoving(false);
    }, milliSeconds);
    
    motionDetectTimer.current = newTimer;
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="compTitle">
          <div className="FarmBasicTop mb-3 flex justify-between items-center ">
            <p className="flex text-sm font-extrabold text-slate-400">
              실시간 CCTV
            </p>
            <Link to="" className="text-xs font-light text-slate-400">
              자세히 보기 +
            </Link>
          </div>
        </div>
        <div className="compCont">
          <div className="compCcty compCctyOne">
            <p className="flex justify-between compCctyTitle pb-4">
              1번 CCTV
              {isMovig ? (
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/20 ring-inset">
                  움직임 감지
                </span>
              ) : (
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-600/20 ring-inset">
                  움직임 없음
                </span>
              )}
            </p>
            <iframe
              className="aspect-video w-full"
              src={cameraLink}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default VideoComp;
