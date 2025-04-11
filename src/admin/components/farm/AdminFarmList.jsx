import React, { useState } from "react";
import AdminFarmDetail from "./AdminFarmDetail";
import { Link } from "react-router-dom";

const FarmTable = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  const farms = [
    {
      id: 1,
      owner: { id: "user001", name: "홍길동" },
      farm_name: "그린팜 A",
      farm_addr: "경기도 고양시 덕양구",
      cropList: ["상추", "치커리", "청경채"],
      use_date: "2023-01-15",
      status: "운영중",
      zones: ["1구역", "2구역"],
    },
    {
      id: 2,
      owner: { id: "green92", name: "김철수" },
      farm_name: "청정팜 B",
      farm_addr: "강원도 원주시 반곡동",
      cropList: ["딸기"],
      use_date: "2022-10-01",
      status: "점검중",
      zones: [],
    },
    {
      id: 3,
      owner: { id: "eco_farmer", name: "이영희" },
      farm_name: "에코팜 C",
      farm_addr: "전라북도 남원시",
      cropList: ["고추", "파프리카"],
      use_date: "2024-03-10",
      status: "운영중",
      zones: ["동측", "서측", "중앙"],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "운영중":
        return "text-green-600";
      case "점검중":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* SECTION TOOLTIP */}
      <section className="text-sm text-gray-500">
        스마트팜 정보를 확인하고 관리할 수 있는 페이지입니다.
      </section>

      {/* SECTION TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-green-100 text-sm">
            <tr className="text-left">
              <th className="px-4 py-2 border-b">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedIds(e.target.checked ? farms.map((f) => f.id) : [])
                  }
                  checked={selectedIds.length === farms.length}
                />
              </th>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">회원아이디(이름)</th>
              <th className="px-4 py-2 border-b">상세보기</th>
              <th className="px-4 py-2 border-b">스마트팜 이름</th>
              <th className="px-4 py-2 border-b">주소</th>
              <th className="px-4 py-2 border-b">작물 수</th>
              <th className="px-4 py-2 border-b">이용 시작일</th>
              <th className="px-4 py-2 border-b">상태</th>
              <th className="px-4 py-2 border-b">설정</th>
            </tr>
          </thead>
          <tbody>
            {farms.map((farm, idx) => (
              <React.Fragment key={farm.id}>
                <tr className="bg-white text-sm hover:bg-gray-50">
                  <td className="px-4 py-3 border-b">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(farm.id)}
                      onChange={() => {
                        setSelectedIds((prev) =>
                          prev.includes(farm.id)
                            ? prev.filter((id) => id !== farm.id)
                            : [...prev, farm.id]
                        );
                      }}
                    />
                  </td>
                  <td className="px-4 py-3 border-b">{farm.id}</td>
                  <td className="px-4 py-3 border-b">
                    {farm.owner.id} ({farm.owner.name})
                  </td>
                  <td className="px-4 py-3 border-b">
                    {farm.zones.length > 0 && (
                      <button
                        onClick={() =>
                          setExpandedIndex(expandedIndex === idx ? null : idx)
                        }
                        className="text-gray-600 hover:text-green-600 text-sm"
                      >
                        {expandedIndex === idx ? "▲" : "▼"}
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-3 border-b">{farm.farm_name}</td>
                  <td className="px-4 py-3 border-b">{farm.farm_addr}</td>
                  <td className="px-4 py-3 border-b">
                    {farm.cropList.length}개
                  </td>
                  <td className="px-4 py-3 border-b">{farm.use_date}</td>
                  <td className={`px-4 py-3 border-b ${getStatusColor(farm.status)}`}>
                    {farm.status}
                  </td>
                  <td className="px-4 py-3 border-b">
                    <Link to="/admin/farmsDetail">관리</Link>
                  </td>
                </tr>

                {/* 하위 구역 */}
                {expandedIndex === idx && (
                  <tr className="bg-gray-50 text-sm">
                    <td colSpan={11} className="px-6 py-3 border-b">
                      <div className="space-y-1">
                        <div className="font-semibold text-gray-600 mb-1">하위 구역:</div>
                        <ul className="list-disc list-inside text-gray-700">
                          {farm.zones.map((zone, i) => (
                            <li key={i}>{zone}</li>
                          ))}
                        </ul>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FarmTable;
