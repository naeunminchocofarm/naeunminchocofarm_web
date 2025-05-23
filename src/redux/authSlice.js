import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const ACCESS_TOKEN_KEY = "accessToken";
const LOGIN_INFO_KEY = "loginInfo";

function _setAccessToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

function _getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function _deleteAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

function _setLoginInfo(loginInfo) {
  localStorage.setItem(LOGIN_INFO_KEY, JSON.stringify(loginInfo));
}

function _getLoginInfo() {
  try {
    return JSON.parse(localStorage.getItem(LOGIN_INFO_KEY));
  } catch (e) {
    _deleteLoginInfo();
    return null;
  }
}

function _deleteLoginInfo() {
  localStorage.removeItem(LOGIN_INFO_KEY);
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
  return _getLoginInfo()
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
      _setLoginInfo(loginInfo);
    },
    logoutReducer: (state) => {
      state.accessToken = null;
      state.loginInfo = null;
      _deleteAccessToken();
      _deleteLoginInfo();
    },
  },
});

export function accessTokenSelector(state) {
  return state.auth.accessToken;
}

export function loginInfoSelector(state) {
  return state.auth.loginInfo;
}

export function loginAction(dispatch, {accessToken, loginInfo: {id, roleName, roleFlag, loginId, name}}) {
  const loginInfo = {
    id, 
    roleName, 
    roleFlag, 
    loginId, 
    name};
  dispatch(authSlice.actions.loginReducer({accessToken, loginInfo}));
}

export function logoutAction(dispatch) {
  dispatch(authSlice.actions.logoutReducer());
}

export default authSlice;