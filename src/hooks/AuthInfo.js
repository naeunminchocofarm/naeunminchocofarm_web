import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { logoutReducer } from "../redux/authSlice";

export const useAuthInfo = () => { //head들에 권한 확인용임
  const dispatch = useDispatch();
  const nav = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const isLogin = !!token;
  let roleName = null;
  let roleFlag = null;
  let loginId = null;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      roleName = decoded.roleName;
      roleFlag = decoded.roleFlag;
      loginId = decoded.loginId;
    } catch (e) {
      console.error("안됨:", e);
    }
  }

  const logout = () => {
    dispatch(logoutReducer());
    nav("/web/home");
  };

  return {
    isLogin,
    token,
    roleName,
    roleFlag,
    loginId,
    logout,
  };
};
