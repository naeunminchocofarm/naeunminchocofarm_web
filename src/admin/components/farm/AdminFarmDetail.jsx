import React, { useState } from "react";

const AdminFarmDetail = () => {
  const [zones, setZones] = useState([]);

  const handleAddZone = () => {
    const newZoneId = `ZONE-${Date.now()}`;
    setZones([
      ...zones,
      {
        id: newZoneId,
        name: "",
        area: "",
        sensors: [],
      },
    ]);
  };

  const handleZoneChange = (index, field, value) => {
    const updated = [...zones];
    updated[index][field] = value;
    setZones(updated);
  };

  const handleRemoveZone = (index) => {
    setZones(zones.filter((_, i) => i !== index));
  };

  const handleAddSensor = (zoneIndex) => {
    const sensorId = `SNS-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const updated = [...zones];
    updated[zoneIndex].sensors.push({
      id: sensorId,
      name: "",
      type: "",
    });
    setZones(updated);
  };

  const handleSensorChange = (zoneIndex, sensorIndex, field, value) => {
    const updated = [...zones];
    updated[zoneIndex].sensors[sensorIndex][field] = value;
    setZones(updated);
  };

  const handleRemoveSensor = (zoneIndex, sensorIndex) => {
    const updated = [...zones];
    updated[zoneIndex].sensors.splice(sensorIndex, 1);
    setZones(updated);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-green-700">🌿 스마트팜 상세 관리</h2>

      {zones.map((zone, zoneIdx) => (
        <div key={zone.id} className="border p-4 rounded-xl bg-white mb-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">구역 {zoneIdx + 1} ({zone.id})</h3>
            <button
              onClick={() => handleRemoveZone(zoneIdx)}
              className="text-red-500 hover:underline text-sm"
            >
              구역 삭제
            </button>
          </div>

          <input
            type="text"
            placeholder="구역명"
            value={zone.name}
            onChange={(e) => handleZoneChange(zoneIdx, "name", e.target.value)}
            className="block w-full border p-2 rounded mb-2"
          />

          <input
            type="number"
            placeholder="면적 (㎡)"
            value={zone.area}
            onChange={(e) => handleZoneChange(zoneIdx, "area", e.target.value)}
            className="block w-full border p-2 rounded mb-4"
          />

          <div className="mb-2">
            <h4 className="font-medium text-gray-700 mb-2">📡 센서 목록</h4>
            {zone.sensors.map((sensor, sensorIdx) => (
              <div key={sensor.id} className="grid grid-cols-3 gap-3 mb-2">
                <input
                  type="text"
                  placeholder="센서명"
                  value={sensor.name}
                  onChange={(e) =>
                    handleSensorChange(zoneIdx, sensorIdx, "name", e.target.value)
                  }
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="센서 종류 (ex: 온도)"
                  value={sensor.type}
                  onChange={(e) =>
                    handleSensorChange(zoneIdx, sensorIdx, "type", e.target.value)
                  }
                  className="border p-2 rounded"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{sensor.id}</span>
                  <button
                    onClick={() => handleRemoveSensor(zoneIdx, sensorIdx)}
                    className="text-red-500 hover:underline text-xs ml-2"
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={() => handleAddSensor(zoneIdx)}
              className="text-sm text-green-600 hover:underline mt-2"
            >
              + 센서 추가
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={handleAddZone}
        className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 mt-4"
      >
        + 구역 추가
      </button>
    </div>
  );
};

export default AdminFarmDetail;