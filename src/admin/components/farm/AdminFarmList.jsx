import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import adminApi from "../../apis/admin_api";

const AdminFarmList = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [farms, setFarms] = useState([]);
  const [filteredFarms, setFilteredFarms] = useState([]);

  const [searchField, setSearchField] = useState("loginId");
  const [searchKeyword, setSearchKeyword] = useState("");

  const fetchFarms = () => {
    adminApi
      .getFarmsWithMember()
      .then((res) => {
        setFarms(res.data);
        setFilteredFarms(res.data);
      })
      .catch((err) => console.error("스마트팜 목록 조회 실패", err));
  };

  useEffect(() => {
    fetchFarms();
    const handler = (event) => {
      if (event.data === "refreshFarms") {
        fetchFarms();
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "운영중":
        return "text-green-600";
      case "점검중":
        return "text-yellow-500";
      case "운영종료":
        return "text-red-600";
      default:
        return "text-gray-500";
    }
  };

  const openCreateWindow = () => {
    window.open(
      "/admin/farms/create",
      "_blank",
      "width=800,height=600,scrollbars=yes"
    );
  };

  const handleSearch = () => {
    const keyword = searchKeyword.toLowerCase().trim();
    const filtered = farms.filter((farm) => {
      if (!farm.member) return false;
      switch (searchField) {
        case "loginId":
          return farm.member.loginId?.toLowerCase().includes(keyword);
        case "name":
          return farm.member.name?.toLowerCase().includes(keyword);
        case "farmName":
          return farm.farmName?.toLowerCase().includes(keyword);
        default:
          return false;
      }
    });
    setFilteredFarms(filtered);
  };

  return (
    <div className="p-6 space-y-6">
      <section className="flex justify-between items-center text-sm text-gray-500">
        {/* 검색창 */}
        <div className="flex items-center space-x-2">
          <select
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            className="border px-3 py-2 rounded h-10"
          >
            <option value="loginId">회원아이디</option>
            <option value="name">이름</option>
            <option value="farmName">스마트팜 이름</option>
          </select>
          <input
            type="text"
            placeholder="검색어 입력"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="border px-3 py-2 rounded w-60 h-10"
          />
          <button
            onClick={handleSearch}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow h-10"
          >
            검색
          </button>
        </div>

        {/* 등록 버튼 */}
        <button
          onClick={openCreateWindow}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm shadow"
        >
          + 스마트팜 등록
        </button>
      </section>

      {/* 테이블 */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-green-100 text-sm">
            <tr className="text-left">
              <th className="px-4 py-2 border-b">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedIds(
                      e.target.checked ? filteredFarms.map((f) => f.id) : []
                    )
                  }
                  checked={selectedIds.length === filteredFarms.length}
                />
              </th>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">UUID</th>
              <th className="px-4 py-2 border-b">회원아이디(이름)</th>
              <th className="px-4 py-2 border-b">스마트팜 이름</th>
              <th className="px-4 py-2 border-b">주소</th>
              <th className="px-4 py-2 border-b">이용 시작일</th>
              <th className="px-4 py-2 border-b">상태</th>
              <th className="px-4 py-2 border-b">설정</th>
            </tr>
          </thead>
          <tbody>
            {filteredFarms.map((farm) => (
              <tr key={farm.id} className="bg-white text-sm hover:bg-gray-50">
                <td className="px-4 py-3 border-b">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(farm.id)}
                    onChange={() =>
                      setSelectedIds((prev) =>
                        prev.includes(farm.id)
                          ? prev.filter((id) => id !== farm.id)
                          : [...prev, farm.id]
                      )
                    }
                  />
                </td>
                <td className="px-4 py-3 border-b">{farm.uuidId}</td>
                <td className="px-4 py-3 border-b">{farm.id}</td>
                <td className="px-4 py-3 border-b">
                  {farm.member?.loginId} ({farm.member?.name})
                </td>
                <td className="px-4 py-3 border-b">{farm.farmName}</td>
                <td className="px-4 py-3 border-b">{farm.farmAddr}</td>
                <td className="px-4 py-3 border-b">
                  {farm.useDate ? farm.useDate.slice(0, 10) : "-"}
                </td>
                <td
                  className={`px-4 py-3 border-b ${getStatusColor(
                    farm.status
                  )}`}
                >
                  {farm.status || "-"}
                </td>

                <td className="px-4 py-3 border-b">
                  <Link to={`/admin/farmsDetail/${farm.id}`}>관리</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminFarmList;
