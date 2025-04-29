import React, { useEffect, useRef, useState } from "react";
import UserTitle from "../../header/UserTitle";
import { useNavigate, useParams } from "react-router-dom";
import memberApi from "../../members/apis/member_api";
import FullPageSpinner from "../FullPageSpinner";
import { subscribeFarmSettings, subscribeFarmStatus } from "../../smart_farm/farm_subscribe_manager";
import FarmSensorMonitor from "../../smart_farm/components/FarmMonitor";
import FarmController from "../../smart_farm/components/FarmController";
import SensorData from "../../smart_farm/components/SensorData";

// 센서 종류 탭 정의
const SENSOR_TABS = [
  { key: "soil_moisture", label: "토양습도", unit: "" },
  { key: "air_temp", label: "기온", unit: "℃" },
  { key: "humidity", label: "습도", unit: "%" },
  { key: "ldr", label: "조도", unit: "lx" },
  { key: "motion", label: "움직임", unit: "" },
];

export default function UserFarmDetail() {
  const {farmId} = useParams();
  const nav = useNavigate();
  const [settings, setSettings] = useState(undefined);
  const [status, setStatus] = useState(undefined);
  const updateSettings = useRef(undefined);
  const [activeTab, setActiveTab] = useState("soil_moisture");
  const cleanUpTasks = useRef([]);

  useEffect(() => {
    memberApi.getFarmDetail(farmId)
      .then(res => {
        if (!res.data) {
          alert("스마트팜을 보유하고 있지 않습니다. 이전 화면으로 이동합니다.");
          nav(-1);
        }
        const disconnectFarm = connectFarm(res.data.uuid);
        cleanUpTasks.current.push(disconnectFarm);
      })
      .catch(e => console.error(e));

    return () => {
      cleanUpTasks.current.forEach(task => task());
    }
  }, [farmId]);

  function connectFarm(farmUuid) {
    const [unsubscribeSettings, _updateSettings] = subscribeFarmSettings(farmUuid, setSettings);
    updateSettings.current = _updateSettings;
    const unsubscribeStatus = subscribeFarmStatus(farmUuid, setStatus);
    return () => {
      unsubscribeSettings();
      updateSettings.current = undefined;
      unsubscribeStatus();
    }
  }

  if (!status || !settings) {
    return <FullPageSpinner title={"스마트팜 정보를 불러오는 중입니다."} />;
  }

  function farmDataProvider(dataName) {
    const data = status.controllers?.map(c => c.sensor_datas?.find(s => s.name === dataName)?.value)?.find(x => true);
    return data;
  }

  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      <UserTitle pageTitle={"스마트팜 상세"}/>
      <SensorTab tabs={SENSOR_TABS} value={activeTab} onChange={setActiveTab} dataProvider={farmDataProvider} DataComponent={SensorData} />
      {/* 조건 설정 카드 */}
      <FarmController dataName={activeTab} settings={settings} onChangeSettings={s => updateSettings.current?.(s)} />
      <FarmSensorMonitor status={status} dataName={activeTab} />
    </div>
  );
}

function SensorTab({tabs, value, onChange, dataProvider, DataComponent}) {
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-3">
        {tabs.map(({key, label, unit}) => (
          <button
            key={key}
            className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
              value === key
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => onChange(key)}
          >
            {label}
            <div className="ml-2 px-2 py-0.5 bg-white border rounded text-xs font-semibold text-gray-700 min-w-8">
              <DataComponent name={key} value={dataProvider(key)} />
            </div>
          </button>
        ))}
      </div>
    </>
  );
}