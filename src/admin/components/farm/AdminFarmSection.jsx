import React, { useEffect, useState } from "react";
import adminApi from "../../apis/admin_api";
import AdminFarmSensor from "./AdminFarmSensor";

const AdminFarmSection = ({ farmId }) => {
  const [sections, setSections] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newSectionName, setNewSectionName] = useState("");

  const toggleSection = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const fetchSections = () => {
    adminApi
      .getSectionsByFarmId(farmId)
      .then((res) => {
        setSections(res.data);
        setIsAdding(false);
        setNewSectionName("");
      })
      .catch((err) => {
        console.error("구역 목록 조회 실패:", err);
      });
  };

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleAddComplete = () => {
    const trimmedName = newSectionName.trim();
    if (!trimmedName) {
      alert("구역 이름을 입력해주세요.");
      return;
    }

    adminApi
      .insertSection({ farmId, name: trimmedName })
      .then(() => fetchSections())
      .catch((err) => {
        console.error("구역 등록 실패:", err);
        alert("구역 등록에 실패했습니다.");
      });
  };

  const handleAddCancel = () => {
    setIsAdding(false);
    setNewSectionName("");
  };

  useEffect(() => {
    if (farmId) fetchSections();
  }, [farmId]);

  return (
    <section className="space-y-4">
      {/* 상단 제목 및 추가 버튼 */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">구역 정보</h2>
        {!isAdding ? (
          <button
            onClick={handleAddClick}
            className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded shadow"
          >
            + 구역 추가
          </button>
        ) : (
          <div className="flex gap-2 items-center">
            <input
              type="text"
              className="border px-2 py-1 rounded text-sm"
              placeholder="구역 이름"
              value={newSectionName}
              onChange={(e) => setNewSectionName(e.target.value)}
            />
            <button
              onClick={handleAddComplete}
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded shadow"
            >
              등록
            </button>
            <button
              onClick={handleAddCancel}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              취소
            </button>
          </div>
        )}
      </div>

      {/* 구역 목록 테이블 */}
      <div className="overflow-x-auto space-y-4">
        <table className="w-full border-collapse shadow-sm rounded-xl overflow-hidden text-sm">
          <thead className="bg-green-100">
            <tr className="text-left">
              <th className="px-4 py-2 border-b">구역 ID</th>
              <th className="px-4 py-2 border-b">구역 이름</th>
              <th className="px-4 py-2 border-b">UUID</th>
              <th className="px-4 py-2 border-b">관리</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section) => (
              <React.Fragment key={section.id}>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 border-b">{section.id}</td>
                  <td className="px-4 py-3 border-b">{section.name}</td>
                  <td className="px-4 py-3 border-b">{section.uuidId}</td>
                  <td className="px-4 py-3 border-b">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      센서 정보
                    </button>
                  </td>
                </tr>

                {/* 센서 정보 확장 영역 */}
                {expandedId === section.id && (
                  <tr>
                    <td colSpan={4} className="px-4 py-4 bg-gray-50 border-b">
                      <AdminFarmSensor sectionId={section.id} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminFarmSection;
