import { useEffect, useRef, useState } from "react";
import NcfSubscriber from "../../websocket/ncf_subscriber";
import { subscribePaths, webSocketPaths } from "../../websocket/wobsocket_paths";
import { AirTempControlCard, HumidControlCard, LdrControlCard, SoilMoistureControlCard } from "../components/SensorControlCard";
import FarmMonitor from "../components/FarmMonitor";

export default function TestControllerPage() {
  const [settings, setSettings] = useState(undefined);
  const [currentStatus, setCurrentStatus] = useState(undefined);
  const webSocketClient = useRef(undefined);

  useEffect(init, []);
  
  function init() {
    const subscriber = new NcfSubscriber(webSocketPaths.production, subscribePaths.testUserFarmUuid)
    subscriber.onOpen = e => {
      subscriber.subscribe();
      subscriber.sendJson({'method': 'get-status'});
      subscriber.sendJson({'method': 'get-settings'});
    }

    subscriber.onJson = frame => {
      const data = JSON.parse(frame.body)
      switch (data['method']) {
        case 'current-settings':
          setSettings(data['settings']);
          break;
        case 'current-status':
          setCurrentStatus(data['status']);
          break;
        default:
          break;
      }
    }

    subscriber.connect();
    webSocketClient.current = subscriber;

    return () => {
      if (webSocketClient.current) {
        webSocketClient.current.unsubscribe();
        webSocketClient.current.close();
        webSocketClient.current = undefined;
      }
    }
  }

  function updateFarmSettings(settings) {
    webSocketClient.current?.sendJson({'method': 'update-settings', 'settings': settings});
  }

  const titleCss = "text-4xl font-bold";

  return (
    <>
      <h1 className={titleCss}>Controller 테스트 페이지</h1>
      <h1 className="text-2xl font-bold mt-10">스마트팜 원격 제어</h1>
      {
        settings
        ?
        <>
          <div className="flex flex-col gap-5">
            <AirTempControlCard settings={settings} onChangeSettings={s => updateFarmSettings(s)} />
            <HumidControlCard settings={settings} onChangeSettings={s => updateFarmSettings(s)} />
            <LdrControlCard settings={settings} onChangeSettings={s => updateFarmSettings(s)} />
            <SoilMoistureControlCard settings={settings} onChangeSettings={s => updateFarmSettings(s)} />
          </div>
        </>
        :
        <p>제어 데이터를 불러오지 못함!!!!</p>
      }
      <h1 className="text-2xl font-bold mt-10">스마트팜 원격 모니터링</h1>
      {
        currentStatus
        ?
        <>
          <div>
            <FarmMonitor status={currentStatus} />
          </div>
        </>
        :
        <p>현재 스마트팜의 상태를 불러오지 못함!!!!</p>
      }
    </>
  );
}