import React, { useState } from "react";
import MyApply from "./MyApply";
import MyPage from "./MyPage";
import MyPassword from "./MyPassword";

const container =
  "w-full min-h-[calc(100vh-140px)] flex flex-col pt-20 items-center justify-start bg-gradient-to-r from-[#faf8f2] via-[#f4fef4] to-[#e6f6e6]";
const contentWrapper = "w-full max-w-[1200px] px-4";
const titleStyle = "text-2xl font-bold text-gray-800 mb-6";
const tabBox = "flex bg-gray-100 rounded-t-md overflow-hidden w-full max-w-[1200px]";
const tabBtn = "flex-1 py-2 text-sm font-medium text-center transition-all";
const tabActive = "bg-white text-black border-t border-l border-r rounded-t-md font-semibold";
const tabInactive = "bg-blue-100 text-gray-500";
const tabContent = "p-4 border border-t-0 rounded-b-md bg-white w-full max-w-[1200px]";

const MyTab = () => {
  const [tab, setTab] = useState("info");

  const tabTitle = {
    info: "마이페이지",
    apply: "서비스 신청 내역",
    password: "비밀번호 변경"
  };

  return (
    <div className={container}>
      <div className={contentWrapper}>
        <h3 className={titleStyle}>{tabTitle[tab]}</h3>
      </div>

      <div className={tabBox}>
        <button
          onClick={() => setTab("info")}
          className={`${tabBtn} ${tab === "info" ? tabActive : tabInactive}`}
        >
          마이페이지
        </button>
        <button
          onClick={() => setTab("apply")}
          className={`${tabBtn} ${tab === "apply" ? tabActive : tabInactive}`}
        >
          서비스 신청 내역
        </button>
        <button
          onClick={() => setTab("password")}
          className={`${tabBtn} ${tab === "password" ? tabActive : tabInactive}`}
        >
          비밀번호 변경
        </button>
      </div>

      <div className={tabContent}>
        {tab === "info" && <MyPage />}
        {tab === "apply" && <MyApply />}
        {tab === "password" && <MyPassword />}
      </div>
    </div>
  );
};

export default MyTab;