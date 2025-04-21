import React, { useState } from "react";
import UserTitle from "../../header/UserTitle";
import { BsExclamationTriangle } from "react-icons/bs";
import BadgeCompo from "../../common_components/BadgeCompo";
import ToggleButton from "../../common_components/ToggleButton";

// 센서 종류 탭 정의
const SENSOR_TABS = [
  { key: "temperature", label: "기온", unit: "℃" },
  { key: "humidity", label: "습도", unit: "%" },
  { key: "light", label: "조도", unit: "lx" },
  { key: "motion", label: "움직임", unit: "" },
];

// 더미 센서값
const CURRENT_SENSOR_VALUES = {
  temperature: 23.2,
  humidity: 41,
  light: 678,
  motion: 1,
};

// 초기 기준값
const DEFAULT_CONDITIONS = {
  temperature: { min: 18, max: 26, enabled: true },
  humidity: { min: 35, max: 60, enabled: true },
  light: { min: 300, max: 900, enabled: false },
  motion: { min: 0, max: 1, enabled: true },
};

// 더미 센서 리스트
const SENSOR_LIST = [
  {
    name: "온도 센서 A",
    uuid: "8a2f-12aa-4567-bbcd",
    category: "temperature",
    type: "analog",
  },
  {
    name: "습도 센서 B",
    uuid: "1a3d-13bc-8934-ddff",
    category: "humidity",
    type: "digital",
  },
  {
    name: "조도 센서 C",
    uuid: "f781-40ab-4422-ffcc",
    category: "light",
    type: "BLE",
  },
  {
    name: "움직임 감지기",
    uuid: "77fa-22bb-9999-abab",
    category: "motion",
    type: "digital",
  },
];

const unitMap = Object.fromEntries(SENSOR_TABS.map(tab => [tab.key, tab.unit]));

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  alert("UUID가 복사되었습니다!");
};

export default function UserFarmDetail() {
  const [activeTab, setActiveTab] = useState("temperature");
  const [conditions, setConditions] = useState(DEFAULT_CONDITIONS);

  const handleChange = (field, value) => {
    setConditions((prev) => ({
      ...prev,
      [activeTab]: { ...prev[activeTab], [field]: value },
    }));
  };

  const handleToggle = () => {
    setConditions((prev) => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        enabled: !prev[activeTab].enabled,
      },
    }));
  };

  const sensorValue = CURRENT_SENSOR_VALUES[activeTab];
  const { min, max, enabled } = conditions[activeTab];

  const isBelowMin = Number(sensorValue) < Number(min);
  const isAboveMax = Number(sensorValue) > Number(max);
  const unit = unitMap[activeTab];

  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      <UserTitle/>
        <div className="mb-6 p-4 rounded-lg border bg-white shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            {/* 왼쪽: 구역명 + 상태 */}
            <div>
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                1구역 - 온실 A
                <BadgeCompo label="운영 중" type="success" />
            </h3>
            <p className="text-sm text-gray-500 mt-1">📍 위치: 온실 A의 위치</p>
            </div>

            {/* 오른쪽: 센서/장치 수 */}
            <div className="text-sm text-gray-600 mt-2 md:mt-0">
            센서 <span className="font-medium text-gray-800">4개</span> &nbsp;|&nbsp;
            작동 장치 <span className="font-medium text-gray-800">2개</span>
            </div>
        </div>
        </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {SENSOR_TABS.map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
              activeTab === tab.key
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            <span className="ml-2 px-2 py-0.5 bg-white border rounded text-xs font-semibold text-gray-700">
              {CURRENT_SENSOR_VALUES[tab.key]}
              {tab.unit}
            </span>
          </button>
        ))}
      </div>

      {/* 조건 설정 카드 */}
      <div className="w-full p-5 mb-4 rounded-xl border bg-white shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="p-2 flex flex-col items-center">
          <div className="text-xs text-gray-500 mb-1">최저값</div>
          <div className="relative w-full max-w-[140px]">
            <input
              type="number"
              className="w-full text-center text-2xl font-bold bg-white border rounded py-2 pr-8"
              value={min}
              onChange={e => handleChange("min", e.target.value)}
            />
            <span className="absolute top-1/2 right-2 -translate-y-1/2 text-base text-gray-500">{unit}</span>
          </div>
          {isBelowMin && (
            <div className="flex items-center mt-2 text-red-500 text-xs font-medium">
              <BsExclamationTriangle className="w-4 h-4 mr-1" />
              최저 기준 미달
            </div>
          )}
        </div>

        <div className="p-2 flex flex-col items-center">
          <div className="text-xs text-gray-500 mb-1">최대값</div>
          <div className="relative w-full max-w-[140px]">
            <input
              type="number"
              className="w-full text-center text-2xl font-bold bg-white border rounded py-2 pr-8"
              value={max}
              onChange={e => handleChange("max", e.target.value)}
            />
            <span className="absolute top-1/2 right-2 -translate-y-1/2 text-base text-gray-500">{unit}</span>
          </div>
          {isAboveMax && (
            <div className="flex items-center mt-2 text-red-500 text-xs font-medium">
              <BsExclamationTriangle className="w-4 h-4 mr-1" />
              최대 기준 초과
            </div>
          )}
        </div>

        <div className="flex flex-col items-center justify-center">
            <div className="mb-2 text-gray-700 font-medium">기준값 제어</div>
            <ToggleButton value={enabled} onChange={handleToggle} />
            </div>
        </div>

      {/* 센서 카드 리스트 */}
      <div className="mb-2 text-base font-semibold text-gray-800">센서 정보 (총 {SENSOR_LIST.length}개)</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {SENSOR_LIST.filter(s => s.category === activeTab).length === 0 ? (
          <div className="col-span-full text-gray-400 p-4 text-center rounded bg-gray-50 border">등록된 센서가 없습니다.</div>
        ) : (
          SENSOR_LIST.filter(s => s.category === activeTab).map((sensor, i) => (
            <div
              key={i}
              className="p-4 border rounded-xl shadow-sm bg-white flex flex-col gap-1"
            >
              <div className="font-bold text-lg mb-1">{sensor.name}</div>
              <div className="text-xs text-gray-600">종류: {sensor.category}</div>
              <div className="text-xs text-gray-600">타입: {sensor.type}</div>
              <div className="flex items-center text-xs text-gray-700 mt-1">
                UUID:&nbsp;
                <span className="font-mono">{sensor.uuid.slice(0,8)}...{sensor.uuid.slice(-4)}</span>
                <button
                  onClick={() => copyToClipboard(sensor.uuid)}
                  className="ml-1 text-blue-500 text-xs underline"
                >
                  복사
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
