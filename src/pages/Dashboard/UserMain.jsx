import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserProfileBox from "../../components/user/UserProfileBox";
import FarmIssueList from "../../components/user/FarmIssueList";
import BadgeCompo from "../../common_components/BadgeCompo";
import UserTitle from "../../header/UserTitle";
import adminApi from "../../admin/apis/admin_api";
import memberApi from "../../members/apis/member_api";

const UserMain = () => {
  const mainStyle = "flex-1 p-6 space-y-6 overflow-auto";
  const summaryCardStyle = "bg-gray-900 text-white rounded-xl p-6 shadow text-center space-y-2";
  const filterInputStyle = "border px-3 py-2 rounded-md w-1/2";
  const filterSelectStyle = "border px-3 py-2 rounded-md";
  const farmCardStyle = "bg-white shadow rounded-xl p-4 space-y-4 flex flex-col justify-between hover:ring-2 hover:ring-green-300 transition";
  const footerBoxStyle = "flex justify-between items-center bg-white p-6 rounded-xl shadow mt-8";
  const noDataCardStyle = "bg-white shadow rounded-xl p-6 text-center text-gray-500 col-span-3 min-h-[40vh] flex items-center justify-center";

  const [farms, setFarms] = useState([]);
  const [summary, setSummary] = useState({ total: 0, running: 0, warning: 0 });

  useEffect(() => {
    bindFarms();
  }, []);

  function bindFarms() {
    memberApi.getFarms()
      .then(res => {
        const farms = res.data;
        setFarms(farms);
        const total = farms.length;
        const running = farms.filter(x => x.status === '정상' || x.status === '운영중').length;
        const warning = farms.filter(x => x.status === '경고').length;
        setSummary({total, running, warning});
      })
      .catch(e => {});
  }

  const getStatusType = (status) => {
    switch (status) {
      case "정상": return "success";
      case "경고": return "warning";
      case "오류": return "error";
      default: return "default";
    }
  };

  const gridColClass = farms.length >= 3
    ? "grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
    : "grid sm:grid-cols-2 grid-cols-1 gap-6";

  return (
    <div className="flex h-screen bg-gray-50 text-sm">
      <main className={mainStyle}>
        <UserTitle pageTitle = {'홈'}/>

        {/* 상단 요약 카드 */}
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className={summaryCardStyle}>
            <div className="text-sm">총 농장 수</div>
            <div className="text-2xl font-bold">{summary.total}개</div>
          </div>
          <div className={summaryCardStyle}>
            <div className="text-sm">운영중 농장</div>
            <div className="text-2xl font-bold">{summary.running}개</div>
          </div>
          <div className={summaryCardStyle}>
            <div className="text-sm">센서 경고</div>
            <div className="text-2xl font-bold text-red-400">{summary.warning}건</div>
          </div>
        </div>

        {/* 검색/필터 UI */}
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
        <div className={gridColClass}>
          {farms.length > 0 ? (
            farms.map((farm, i) => (
              <Link
                key={farm.id || i}
                to={`/user/farms/${farm.id}`}
                className={farmCardStyle}
              >
                <div className="flex items-center gap-4">
                  <img
                    src="/src/assets/images/contents/ico-farm.png"
                    alt="스마트팜 아이콘"
                    className="w-12 h-12 object-contain"
                  />
                  <div className="flex-1">
                    <div className="text-lg font-semibold border-b pb-1">
                      {farm.name || `스마트팜 ${i + 1}`}
                    </div>
                    {/* <div className="text-sm text-gray-800 font-medium">구역 수: {farm.zoneCount ?? 0}</div> */}
                    {/* <div className="text-sm text-gray-800 font-medium">센서 수: {farm.sensorCount ?? 0}</div> */}
                    <div className="text-sm text-gray-800 font-medium">작물 이름: {farm.cropName}</div>
                    <div className="text-sm font-medium">
                      상태: <BadgeCompo label={farm.status || "정상"} type={getStatusType(farm.status)} />
                    </div>
                  </div>
                </div>
                <div className="text-right pt-3">
                  <span className="text-sm text-blue-600 hover:underline font-semibold">상세보기</span>
                </div>
              </Link>
            ))
          ) : (
            <div className={noDataCardStyle}>운영 중인 스마트팜이 없습니다.</div>
          )}
        </div>

        {/* 농장 설치 요청 */}
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
