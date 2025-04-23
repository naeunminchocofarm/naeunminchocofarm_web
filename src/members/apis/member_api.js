import { axiosInstance } from "./axiosInstance";

const memberApi = {
  getMemList: function () {
    const token = localStorage.getItem("accessToken");
    console.log("회원목록불러와봐" + token);
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

    const token = localStorage.getItem("accessToken");
    console.log("회원정보불러와봐" + token);

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
  }
};
export default memberApi;
