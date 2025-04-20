import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserProfileBox from "../../components/user/UserProfileBox";
import FarmIssueList from "../../components/user/FarmIssueList";
import BadgeCompo from "../../common_components/BadgeCompo";
import UserTitle from "../../header/UserTitle";
import adminApi from "../../admin/apis/admin_api";

const UserMain = () => {
  const mainStyle = "flex-1 p-6 space-y-6 overflow-auto";
  const summaryCardStyle = "bg-gray-900 text-white rounded-xl p-6 shadow text-center space-y-2";
  const gridCol3 = "grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6";
  const filterInputStyle = "border px-3 py-2 rounded-md w-1/2";
  const filterSelectStyle = "border px-3 py-2 rounded-md";
  const farmCardStyle = "bg-white shadow rounded-xl p-6 space-y-4 flex flex-col justify-between hover:ring-2 hover:ring-green-300 transition";
  const farmButtonStyle = "text-blue-600 hover:underline text-sm mt-2 text-right";
  const footerBoxStyle = "flex justify-between items-center bg-white p-6 rounded-xl shadow mt-8";
  const noDataCardStyle = "bg-white shadow rounded-xl p-6 text-center text-gray-500 col-span-3";

  const [farms, setFarms] = useState([]);
  const [filteredFarms, setFilteredFarms] = useState([]);

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

  const getStatusType = (status) => {
    switch (status) {
      case "정상": return "success";
      case "경고": return "warning";
      case "오류": return "error";
      default: return "default";
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-sm">
      <main className={mainStyle}>
        <UserTitle/>

        {/* 상단 요약 카드 */}
        <div className={gridCol3}>
          <div className={summaryCardStyle}>
            <div className="text-sm">총 농장 수</div>
            <div className="text-2xl font-bold">{farms.length}개</div>
          </div>
          <div className={summaryCardStyle}>
            <div className="text-sm">운영중 농장</div>
            <div className="text-2xl font-bold">3개</div>
          </div>
          <div className={summaryCardStyle}>
            <div className="text-sm">센서 경고</div>
            <div className="text-2xl font-bold text-red-400">1건</div>
          </div>
        </div>

        {/* 검색/필터 */}
        <div className="flex justify-between items-center mt-6">
          <input
            type="text"
            placeholder="농장명 검색"
            className={filterInputStyle}
          />
          <select className={filterSelectStyle}>
            <option>전체 보기</option>
            <option>운영중</option>
            <option>비운영</option>
          </select>
        </div>

        {/* 농장 카드 리스트 */}
        <div className={gridCol3}>
          {filteredFarms.length > 0 ? (
            filteredFarms.map((farm, i) => (
              <Link
                key={farm.id || i}
                to={`/user/farm/${farm.id}`}
                className={farmCardStyle}
              >
                <div>
                  <div className="text-lg font-semibold border-b pb-1">{farm.name || `스마트팜 ${i + 1}`}</div>
                  <div className="text-sm text-gray-800 font-medium">구역 수: {farm.zoneCount ?? 3}</div>
                  <div className="text-sm text-gray-800 font-medium">센서 수: {farm.sensorCount ?? 12}</div>
                  <div className="text-sm font-medium">상태: <BadgeCompo label={farm.status || '정상'} type={getStatusType(farm.status)} /></div>
                </div>
                <div className="text-center pt-2">
                  <span className="text-sm text-gray-600 hover:text-blue-600 font-semibold">상세보기</span>
                </div>
              </Link>
            ))
          ) : (
            // <div className={noDataCardStyle}>등록된 농장이 없습니다.</div>
            <Link
              to={`/user/farm/1`}
              className={farmCardStyle}
            >
              <div>
                <div className="text-lg font-semibold border-b pb-1">민초팜 테스트팜</div>
                <div className="text-sm text-gray-700 font-semibold mt-2">구역 수: 3</div>
                <div className="text-sm text-gray-700 font-semibold">센서 수: 10</div>
                <div className="text-sm font-semibold">
                  상태: <BadgeCompo label="정상" />
                </div>
              </div>
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500 hover:underline">상세보기</span>
              </div>
            </Link>
          )}
        </div>

        {/* 농장 추가 요청 영역 */}
        <div className={footerBoxStyle}>
          <a href="/service/applys" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            ➕ 농장 설치 요청
          </a>
          <div className="text-sm text-gray-600">
            <a href="#" className="hover:underline">스마트팜 설치 안내</a>
          </div>
        </div>
      </main>

      <aside className="w-72 shadow px-4 py-6 space-y-4">
        <UserProfileBox />
        <FarmIssueList />
      </aside>
    </div>
  );
};

export default UserMain;