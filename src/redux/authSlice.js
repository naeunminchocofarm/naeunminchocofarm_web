import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { getAccessToken, setAccessToken, deleteAccessToken } from "../auth/auth_storage";
import { useDispatch, useSelector } from "react-redux";
import memberApi from "../members/apis/member_api";

const initAccessToken = () => {
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
      // localStorage.setItem("accessToken", token);
      setAccessToken(token);
      localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    },
    logoutReducer: (state) => {
      state.token = null;
      state.loginInfo = null;
      // localStorage.removeItem("accessToken");
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

export function useAuthActions() {
  const dispatch = useDispatch();

  return {
    login: async (loginData) => {
      const res = await memberApi.login(loginData);
      dispatch(authSlice.actions.loginReducer({token: res.headers['authorization'], loginInfo: res.data}));
      return res.data;
    },
    logout: () => {
      dispatch(authSlice.actions.logoutReducer());
    }
  }
}

export const { loginReducer, logoutReducer } = authSlice.actions;
export default authSlice;
