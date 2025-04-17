import { useEffect, useRef, useState } from "react";
import RadioPannel from "../components/RadioPannel";
import { subscribeFarmSettings, subscribeFarmStatus } from "../setting_manager";
import { ControlCard } from "../components/ControlCard";
import { FarmSensorMonitor, FarmSensorMonitorV2 } from "../components/FarmMonitor";

function FarmDetailPage() {
  const [dataName, setDataName] = useState('soil_moisture');
  const [settings, setSettings] = useState(undefined);
  const [status, setStatus] = useState(undefined);
  const updateSettings = useRef(undefined);

  const farmUuid = "0bbd8aa9-02af-4dc6-af0e-c1c5aaa45790";
  useEffect(init, [farmUuid]);

  function init() {
    const [unsubscribeSettings, _updateSettings] = subscribeFarmSettings(farmUuid, setSettings);
    updateSettings.current = _updateSettings;
    const unsubscribeStatus = subscribeFarmStatus(farmUuid, setStatus);

    return () => {
      unsubscribeSettings();
      updateSettings.current = undefined;
      unsubscribeStatus();
    };
  }

  if (!settings) {
    return <p>스마트팜 정보를 불러오지 못했습니다.</p>;
  }

  const fields = [
    {label: '토양습도', value: 'soil_moisture'},
    {label: '기온', value: 'air_temp'},
    {label: '습도', value: 'humidity'},
    {label: '조도', value: 'ldr'},
    {label: '움직임감지', value: 'motion'}
  ]

  const {[dataName]: sensorSettings} = settings;

  const titleCss = "font-bold text-4xl mb-10 mt-20";

  return (
    <>
      <h1 className={titleCss}>스마트팜 상세 페이지</h1>
      <RadioPannel name={"data_name"} fields={fields} value={dataName} onChange={setDataName} />
      <ControlCard dataName={dataName} settings={sensorSettings} onChangeSettings={s => updateSettings.current?.({...settings, [dataName]: s})}/>
      <FarmSensorMonitorV2 farmStatus={status} dataName={dataName} />
    </>
  );
}

export default FarmDetailPage;