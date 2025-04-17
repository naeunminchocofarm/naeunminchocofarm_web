import { useEffect, useRef, useState } from "react";
import { subscribeFarmSettings } from "../setting_manager";
import { ControlCard } from "./ControlCard";

export default function FarmController({farmUuid}) {
  const [settings, setSettings] = useState(undefined);
  const updateFarmSettings = useRef(undefined);
  
  useEffect(init, []);

  function init() {
    const [unsubscribeSettings, _updateSettings] = subscribeFarmSettings(farmUuid, settings => setSettings(settings));

    updateFarmSettings.current = _updateSettings;

    return () => {
      unsubscribeSettings();
    };
  }

  if (!settings) {
    return (
      <p>제어 데이터를 불러오지 못함!!!!</p>
    );
  }

  const containerCss = "flex flex-col gap-1";

  return (
    <div className={containerCss}>
      {
        Object.entries(settings).map(([k, v], i) => <ControlCard key={i} dataName={k} settings={v} onChangeSettings={s => updateFarmSettings.current?.({...settings, [k]: s})} />)
      }
    </div>
  );
}