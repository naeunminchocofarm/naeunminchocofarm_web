import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import memberApi from "../members/apis/member_api";

const ACCESS_TOKEN_KEY = "accessToken";

function setAccessToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function deleteAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

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
    accessToken: initAccessToken(),
    loginInfo: initLoginInfo(),
  },
  reducers: {
    loginReducer: (state, action) => {
      const { accessToken, loginInfo } = action.payload;
      state.accessToken = accessToken;
      state.loginInfo = loginInfo;
      setAccessToken(accessToken);
      localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    },
    logoutReducer: (state) => {
      state.accessToken = null;
      state.loginInfo = null;
      deleteAccessToken();
      localStorage.removeItem("loginInfo");
    },
  },
});

export function useAccessToken() {
  return useSelector(state => state.auth.accessToken);
}
export function useLoginInfo() {
  return useSelector(state => state.auth.loginInfo);
}
export function useLogin() {
  const dispatch = useDispatch();
  return async (loginData) => {
    const res = await memberApi.login(loginData);
    const accessToken = res.headers['authorization'];
    const loginInfo = {
      id: res.data.id,
      roleName: res.data.roleName,
      roleFlag: res.data.roleFlag,
      loginId: res.data.loginId,
      email: res.data.email,
      name: res.data.name,
      tell: res.data.tell
    }
    dispatch(authSlice.actions.loginReducer({accessToken, loginInfo}));
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