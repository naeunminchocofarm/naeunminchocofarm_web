// src/pages/mypage/MyPage.jsx
import React, { useState } from "react";
import MyPageCompo from "../components/MyPageCompo";

const MyPage = () => {
  const [tab, setTab] = useState("info");

  return (
      <>
        <MyPageCompo/>
      </>
  );
};

export default MyPage;
