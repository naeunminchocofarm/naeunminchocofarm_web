import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
// import { useSelector } from "react-redux";
import { isFammer } from "../apis/authCheck";
import { useLoginInfo } from "../../redux/store";

const ProtectedRoute = ({ children }) => { 
  // const token = useSelector((state) => state.auth.token);
  const loginInfo = useLoginInfo();
  const [isAccessible, setIsAccessible] = useState(null);

  useEffect(() => {
    if (!isFammer(loginInfo)) {
      alert("로그인이 필요합니다.\n첫 화면으로 이동합니다.");
      setIsAccessible(false);
    } else {
      setIsAccessible(true);
    }
  }, [loginInfo]);

  if (isAccessible === null) return null;
  return isAccessible ? children : <Navigate to={"/web/home"} />;
};

export default ProtectedRoute;
