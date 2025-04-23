import { axiosInstance } from "./axiosInstance";

const memberApi = {
  getMemList: function () {
    const response = axiosInstance.get("/admin/members", {});
    return response;
  },
  signUp: function (memberInfo) {
    const response = axiosInstance.post("/member/signup", memberInfo);
    return response;
  },
  login: function (loginData) {
    return axiosInstance.post("/member/login", loginData);
  },
  refresh: function() {
    return axiosInstance.post("/member/refresh");
  },
  logout: function() {
    return axiosInstance.delete("/member/refresh");
  },
  getMemInfo: function () {
    const response = axiosInstance.get("/member/memberInfo", {});
    return response;
  },
  checkEmail: (email) => {
    return axiosInstance.get("/member/check-email", {
      params: { email },
    });
  },
  checkId: (loginId) => {
    return axiosInstance.get("/member/check-id", {
      params: { loginId },
    });
  },
  getFarms: function () {
    return axiosInstance.get("/member/farms");
  },
  getFarmDetail: function(farmId) {
    return axiosInstance.get(`/member/farms/${farmId}`)
  }
};
export default memberApi;
