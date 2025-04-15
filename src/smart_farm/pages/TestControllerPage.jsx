import { useEffect, useRef, useState } from "react";
import { ControlCard } from "../components/SensorControlCard";
import FarmMonitor from "../components/FarmMonitor";
import {subscribeFarmSettings, subscribeFarmStatus} from "../setting_manager";

export default function TestControllerPage() {
  const [settings, setSettings] = useState(undefined);
  const [currentStatus, setCurrentStatus] = useState(undefined);
  const updateSettings = useRef(() => {});

  useEffect(init, []);
  
  function init() {
    const [unsubscribeSettings, _updateSettings] = subscribeFarmSettings("0bbd8aa9-02af-4dc6-af0e-c1c5aaa45790", settings => setSettings(settings));
    const unsubscribeStatus = subscribeFarmStatus("0bbd8aa9-02af-4dc6-af0e-c1c5aaa45790", status => setCurrentStatus(status));

    updateSettings.current = _updateSettings;

    return () => {
      unsubscribeSettings();
      unsubscribeStatus();
    }
  }

  function updateFarmSettings(settings) {
    updateSettings.current(settings);
  }

  const titleCss = "text-4xl font-bold";

  return (
    <>
      <h1 className={titleCss}>Controller 테스트 페이지</h1>
      <h1 className="text-2xl font-bold mt-10">스마트팜 원격 제어</h1>
      {
        settings
        ?
        <div className="flex flex-col gap-5">
          {
            Object.entries(settings).map(([k, v], i) => <ControlCard key={i} type={k} settings={v} onChangeSettings={s => updateFarmSettings({...settings, [k]: s})} />)
          }
        </div>
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