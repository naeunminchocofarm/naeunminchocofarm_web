import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const getToken = () => {
  const token = localStorage.getItem("accessToken");
  if (!token || !token.includes(".")) {
    localStorage.removeItem("accessToken");
    return null;
  }

  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000;
    if (decoded.exp < now) {
      localStorage.removeItem("accessToken");
      return null;
    }
    return token;
  } catch (e) {
    console.error("유효하지 않은 토큰:", e);
    localStorage.removeItem("accessToken");
    return null;
  }
};

function getLoginInfo() {
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
    token: getToken(),
    loginInfo: getLoginInfo(),
  },
  reducers: {
    loginReducer: (state, action) => {
      const { token, loginInfo } = action.payload;
      state.token = token;
      state.loginInfo = loginInfo;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    },
    logoutReducer: (state) => {
      state.token = null;
      state.loginInfo = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("loginInfo");
    },
  },
});

export const { loginReducer, logoutReducer } = authSlice.actions;
export default authSlice;
