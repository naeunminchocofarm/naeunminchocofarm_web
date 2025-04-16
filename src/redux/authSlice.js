import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const getToken = () => {
  const token = localStorage.getItem("accessToken");

  if (token === null) return null;

  //복호화된 토큰
  const decodedToken = jwtDecode(token);

  //현재날짜및시간
  const currentTime = Date.now() / 1000;

  //토큰의 만료기간이 지났으면
  if (decodedToken.exp < currentTime) {
    localStorage.removeItem("accessToken");
    return null;
  } else {
    return token;
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: { token: getToken() },
  reducers: {
    loginReducer: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    logoutReducer: (state) => {
      state.token = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { loginReducer, logoutReducer } = authSlice.actions;
export default authSlice;
