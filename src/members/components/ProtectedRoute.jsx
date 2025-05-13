import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { isFammer, isUser } from "../apis/authCheck";
import { useLoginInfo } from "../../redux/store";

const ProtectedRoute = ({ children }) => { 
  const loginInfo = useLoginInfo();
  const [isAccessible, setIsAccessible] = useState(null);

  useEffect(() => {
    if (!loginInfo) {
      alert("로그인이 필요합니다.\n첫 화면으로 이동합니다.");
      setIsAccessible(false);
      return;
    }

    if (!isFammer(loginInfo) && !isUser(loginInfo)) {
      alert("접근 권한이 없습니다.");
      setIsAccessible(false);
      return;
    }
      
    setIsAccessible(true);
  }, [loginInfo]);

  if (isAccessible === null) return null;
  return isAccessible ? children : <Navigate to={"/web/home"} />;
};

export default ProtectedRoute;
