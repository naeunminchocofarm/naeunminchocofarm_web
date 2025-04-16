import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { isAdmin } from "../apis/authCheck";

const ProtectedAdminRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  const [isAccessible, setIsAccessible] = useState(null);

  useEffect(() => {
    if (!isAdmin(token)) {
      alert("접근할 수 없습니다.\n첫 화면으로 이동합니다.");
      setIsAccessible(false);
    } else {
      setIsAccessible(true);
    }
  }, [token]);

  if (isAccessible === null) return null;
  return isAccessible ? children : <Navigate to={"/web/home"} />;
};

export default ProtectedAdminRoute;
