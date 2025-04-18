import React, { useEffect, useState } from "react";
import adminApi from "../../apis/admin_api";

const AdminFarmSensor = ({ sectionId }) => {
  const [sensors, setSensors] = useState([]);
  const [selectedSensorId, setSelectedSensorId] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newSensorName, setNewSensorName] = useState("");
  const [newSensorType, setNewSensorType] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const fetchSensors = () => {
    if (!sectionId) return;
    adminApi
      .getSensorBySectionId(sectionId)
      .then((res) => {
        setSensors(res.data);
        setSelectedSensorId([]);
      })
      .catch((err) => {
        console.error("센서 조회 실패:", err);
      });
  };

  useEffect(() => {
    fetchSensors();
  }, [sectionId]);

  const handleAddSensor = () => {
    const trimmedName = newSensorName.trim();
    const trimmedType = newSensorType.trim();
    if (!trimmedName || !trimmedType) {
      alert("이름과 타입을 모두 입력해주세요.");
      return;
    }

    adminApi
      .insertSensor({
        sectionId,
        name: trimmedName,
        sensorType: trimmedType,
      })
      .then(() => {
        fetchSensors();
        setIsAdding(false);
        setNewSensorName("");
        setNewSensorType("");
      })
      .catch((err) => {
        console.error("센서 등록 실패:", err);
        alert("센서 등록에 실패했습니다.");
      });
  };

  const handleChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    if (selectedSensorId.length !== 1) {
      alert("하나의 센서만 선택해주세요.");
      return;
    }
    const targetId = selectedSensorId[0];
    const target = sensors.find((s) => s.id === targetId);
    setEditingId(targetId);
    setEditedData({ 
      name: target.name,
      sensorType: target.sensorType,
    });
  };

  const handleSave = () => {
    if (!editingId) return;

    const targetSensor = sensors.find((s) => s.id === editingId);
    if (!targetSensor) {
      alert("수정할 센서를 찾을 수 없습니다.");
      return;
    }

    const dataToSend = {
      id: editingId,
      name: editedData.name,
      sectionId: targetSensor.sectionId,
      uuidId: targetSensor.uuidId,
      sensorType: editedData.sensorType,
      uuid: targetSensor.uuid,
    };

    adminApi
      .updateSensor(editingId, dataToSend)
      .then(() => {
        setEditingId(null);
        fetchSensors();
      })
      .catch((err) => {
        console.error("수정 실패", err);
        alert("수정에 실패했습니다.");
      });
  };

  const handleCancel = () => {
    setEditedData({});
    setEditingId(null);
  };

  const handleDeleteSensors = async () => {
    if (selectedSensorId.length === 0) {
      alert("삭제할 센서를 선택해주세요.");
      return;
    }
    if (window.confirm("선택한 센서를 삭제하시겠습니까?")) {
      await Promise.all(
        selectedSensorId.map((id) => adminApi.deleteSensor(id))
      );
      fetchSensors();
    }
  };

  return (
    <div className="space-y-4">
      {/* 상단 버튼 영역 */}
      <div className="flex justify-end gap-2">
        {!isAdding ? (
          <div className="flex gap-2">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded shadow"
              onClick={() => setIsAdding(true)}
            >
              + 센서 등록
            </button>

            <button
              type="button"
              onClick={handleEditClick}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded shadow"
            >
              수정
            </button>

            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded shadow"
              onClick={handleDeleteSensors}
            >
              삭제
            </button>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <input
              type="text"
              className="border px-2 py-1 rounded text-sm"
              placeholder="센서 이름"
              value={newSensorName}
              onChange={(e) => setNewSensorName(e.target.value)}
            />
            <input
              type="text"
              className="border px-2 py-1 rounded text-sm"
              placeholder="센서 타입"
              value={newSensorType}
              onChange={(e) => setNewSensorType(e.target.value)}
            />
            <button
              onClick={handleAddSensor}
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded shadow"
            >
              등록
            </button>
            <button
              onClick={() => {
                setIsAdding(false);
                setNewSensorName("");
                setNewSensorType("");
              }}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              취소
            </button>
          </div>
        )}
      </div>

      {/* 센서 테이블 */}
      {sensors.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border text-sm bg-white rounded-md overflow-hidden shadow">
            <thead className="bg-green-100 text-left">
              <tr>
                <th className="px-4 py-2 border-b">
                  <input
                    type="checkbox"
                    checked={selectedSensorId.length === sensors.length}
                    onChange={(e) =>
                      setSelectedSensorId(
                        e.target.checked ? sensors.map((s) => s.id) : []
                      )
                    }
                  />
                </th>
                <th className="px-4 py-2 border-b">센서 ID</th>
                <th className="px-4 py-2 border-b">센서 이름</th>
                <th className="px-4 py-2 border-b">UUID</th>
                <th className="px-4 py-2 border-b">센서 타입</th>
              </tr>
            </thead>
            <tbody>
              {sensors.map((sensor) => (
                <React.Fragment key={sensor.id}>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">
                      <input
                        type="checkbox"
                        checked={selectedSensorId.includes(sensor.id)}
                        onChange={() =>
                          setSelectedSensorId((prev) =>
                            prev.includes(sensor.id)
                              ? prev.filter((id) => id !== sensor.id)
                              : [...prev, sensor.id]
                          )
                        }
                      />
                    </td>
                    <td className="px-4 py-2 border-b">{sensor.id}</td>
                    <td className="px-4 py-2 border-b">
                      {editingId === sensor.id ? (
                        <input
                          type="text"
                          name="name"
                          value={editedData.name || ""}
                          onChange={handleChange}
                          className="border px-2 py-1 rounded w-full"
                        />
                      ) : (
                        sensor.name
                      )}
                    </td>
                    <td className="px-4 py-2 border-b">{sensor.uuid}</td>
                    <td className="px-4 py-2 border-b">
                      {editingId === sensor.id ? (
                        <input
                          type="text"
                          name="sensorType"
                          value={editedData.sensorType || ""}
                          onChange={handleChange}
                          className="border px-2 py-1 rounded w-full"
                        />
                      ) : (
                        sensor.sensorType
                      )}
                    </td>
                  </tr>

                  {editingId === sensor.id && (
                    <tr>
                      <td colSpan={5} className="bg-gray-100 px-4 py-2 border-b text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={handleSave}
                            className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                          >
                            저장
                          </button>
                          <button
                            onClick={handleCancel}
                            className="bg-gray-400 text-white px-3 py-1 rounded text-sm hover:bg-gray-500"
                          >
                            취소
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-sm text-gray-500">센서 없음</div>
      )}

      {/* 차트 영역 */}
      <div className="bg-gray-100 rounded-md h-32 mt-4 flex items-center justify-center text-gray-500 text-sm">
        [ 차트 영역 – 센서 데이터 시각화 예정 ]
      </div>
    </div>
  );
};

export default AdminFarmSensor;
