import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const ACCESS_TOKEN_KEY = "accessToken";

function _setAccessToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

function _getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function _deleteAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

function _initAccessToken() {
  const token = _getAccessToken();
  if (!token) {
    return null;
  }

  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000;
    if (decoded.exp < now) {
      _deleteAccessToken();
      return null;
    }
    return token;
  } catch (e) {
    _deleteAccessToken();
    return null;
  }
};

function _initLoginInfo() {
  try {
    const stored = localStorage.getItem("loginInfo");
    return stored && stored !== "undefined" ? JSON.parse(stored) : null;
  } catch (e) {
    console.error("⚠️ loginInfo 파싱 실패:", e);
    localStorage.removeItem("loginInfo");
    return null;
  }
}

function _initAuthState() {
  const accessToken = _initAccessToken();
  const loginInfo = _initLoginInfo();
  return {accessToken, loginInfo};
}

const authSlice = createSlice({
  name: "auth",
  initialState: _initAuthState(),
  reducers: {
    loginReducer: (state, action) => {
      const { accessToken, loginInfo } = action.payload;
      state.accessToken = accessToken;
      state.loginInfo = loginInfo;
      _setAccessToken(accessToken);
      localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    },
    logoutReducer: (state) => {
      state.accessToken = null;
      state.loginInfo = null;
      _deleteAccessToken();
      localStorage.removeItem("loginInfo");
    },
  },
});

export function accessTokenSelector(state) {
  return state.auth.accessToken;
}

export function loginInfoSelector(state) {
  return state.auth.loginInfo;
}

export function loginAction(dispatch, {accessToken, loginInfo}) {
  dispatch(authSlice.actions.loginReducer({accessToken, loginInfo}));
}

export function logoutAction(dispatch) {
  dispatch(authSlice.actions.logoutReducer());
}

export default authSlice;