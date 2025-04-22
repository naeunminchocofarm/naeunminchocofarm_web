import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { getAccessToken, setAccessToken, deleteAccessToken } from "../auth/auth_storage";
import { useDispatch, useSelector } from "react-redux";
import memberApi from "../members/apis/member_api";

function initAccessToken() {
  const token = getAccessToken();
  if (!token || !token.includes(".")) {
    deleteAccessToken();
    return null;
  }

  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000;
    if (decoded.exp < now) {
      deleteAccessToken();
      return null;
    }
    return token;
  } catch (e) {
    console.error("유효하지 않은 토큰:", e);
    deleteAccessToken();
    return null;
  }
};

function initLoginInfo() {
  try {
    const stored = localStorage.getItem("loginInfo");
    return stored && stored !== "undefined" ? JSON.parse(stored) : null;
  } catch (e) {
    console.error("⚠️ loginInfo 파싱 실패:", e);
    localStorage.removeItem("loginInfo");
    return null;
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: initAccessToken(),
    loginInfo: initLoginInfo(),
  },
  reducers: {
    loginReducer: (state, action) => {
      const { token, loginInfo } = action.payload;
      state.token = token;
      state.loginInfo = loginInfo;
      setAccessToken(token);
      localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    },
    logoutReducer: (state) => {
      state.token = null;
      state.loginInfo = null;
      deleteAccessToken();
      localStorage.removeItem("loginInfo");
    },
  },
});

export function useAccessToken() {
  return useSelector(state => state.auth.token);
}
export function useLoginInfo() {
  return useSelector(state => state.auth.loginInfo);
}
export function useLogin() {
  const dispatch = useDispatch();
  return async (loginData) => {
    const res = await memberApi.login(loginData);
    const loginInfo = {
      id: res.data.id,
      roleName: res.data.roleName,
      roleFlag: res.data.roleFlag,
      loginId: res.data.loginId,
      email: res.data.email,
      name: res.data.name,
      tell: res.data.tell
    }
    dispatch(authSlice.actions.loginReducer({token: res.headers['authorization'], loginInfo}));
    return res.data;
  }
}
export function useLogout() {
  const dispatch = useDispatch();
  return () => {
    dispatch(authSlice.actions.logoutReducer());
  }
}

export default authSlice;