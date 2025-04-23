import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./countSlice";
import authSlice, { accessTokenSelector, loginAction, loginInfoSelector, logoutAction } from "./authSlice";
import memberApi from "../members/apis/member_api";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AxiosError } from "axios";

export const store = configureStore({
  reducer: {
    signup: signupSlice.reducer,
    auth: authSlice.reducer
  },
});

function isExpiredToken(token) {
  try {
    const decoded = jwtDecode(token);
    return !decoded.exp || decoded.exp <= Date.now() / 1000;
  } catch (e) {
    return true;
  }
}

async function refreshIfAccessTokenIsExpired() {
  const accessToken = accessTokenSelector(store.getState());
  if (!isExpiredToken(accessToken)) {
    return;
  }
  console.log("액세스 토큰 갱신하기");
  await refresh();
}

export async function getAccessToken() {
  await refreshIfAccessTokenIsExpired();
  return accessTokenSelector(store.getState()); 
}

export function useLoginInfo() {
  const dispatch = useDispatch();
  const loginInfo = useSelector(loginInfoSelector);
  useEffect(() => {
    (async () => {
      await refreshIfAccessTokenIsExpired();
    })();
  }, [dispatch]);

  return loginInfo;
}

export async function login(loginData) {
  const res = await memberApi.login(loginData);
  const accessToken = res.headers['authorization'];
  const loginInfo = res.data;
  loginAction(store.dispatch, {accessToken, loginInfo});
  return loginInfo;
}

export async function logout() {
  try {
    const res = await memberApi.logout();
    logoutAction(store.dispatch);
    return res;
  } catch (e) {
  }
}

export async function refresh() {
  try {
    const res = await memberApi.refresh();
    const accessToken = res.headers['authorization'];
    const loginInfo = {
      id: res.data.id,
      roleName: res.data.roleName,
      roleFlag: res.data.roleFlag,
      loginId: res.data.loginId,
      name: res.data.name
    };
    loginAction(store.dispatch, {accessToken, loginInfo});
    return accessToken;
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.status === 400 && err.response?.data?.code === 'EMPTY_REFRESH') {
        logoutAction(store.dispatch);
        return null;
      }
    }

    throw err;
  }
}