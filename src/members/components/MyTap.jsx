// src/pages/mypage/MyPage.jsx
import React, { useState } from "react";
import MyApply from "../pages/MyApply";
import Mypage from "../pages/Mypage";

const MyPage = () => {
  const [tab, setTab] = useState("info");

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">마이페이지</h2>

      {/* 탭 버튼 */}
      <div className="flex space-x-4 border-b">
        <button
          onClick={() => setTab("info")}
          className={`py-2 px-4 ${tab === "mypage" ? "border-b-2 border-green-500 font-semibold" : "text-gray-500"}`}
        >
          마이페이지
        </button>
        <button
          onClick={() => setTab("apply")}
          className={`py-2 px-4 ${tab === "apply" ? "border-b-2 border-green-500 font-semibold" : "text-gray-500"}`}
        >
          서비스 신청 내역
        </button>
      </div>

      {/* 탭 내용 */}
      <div>
        {tab === "info" ? <Mypage /> : <MyApply />}
      </div>
    </div>
  );
};

export default MyPage;
