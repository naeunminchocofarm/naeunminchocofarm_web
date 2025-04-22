import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
// import { useSelector } from "react-redux";
// import { isAdmin, isAdminV2 } from "../apis/authCheck";
import { isAdmin } from "../apis/authCheck";
import FullPageSpinner from "../../pages/FullPageSpinner";
import { useLoginInfo } from "../../redux/store";

const ProtectedAdminRoute = ({ children }) => {
  // const token = useSelector((state) => state.auth.token);
  const loginInfo = useLoginInfo();
  const [isAccessible, setIsAccessible] = useState(null);

  useEffect(() => {
    if (!isAdmin(loginInfo)) {
      alert("접근할 수 없습니다.\n첫 화면으로 이동합니다.");
      setIsAccessible(false);
    } else {
      setIsAccessible(true);
    }
  }, [loginInfo]);

  if (isAccessible === null) return <FullPageSpinner />;
  if (!isAccessible) return <Navigate to="/web/home" replace />;
  return children;
  
};

export default ProtectedAdminRoute;
