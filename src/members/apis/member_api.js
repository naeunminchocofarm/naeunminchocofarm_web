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
  login: function (loginInfo) {
    const response = axiosInstance.post("/member/login", loginInfo);
    return response;
  },
  getMemInfo: function () {
    const response = axiosInstance.get("/member/memberInfo", { });

    const token = localStorage.getItem("accessToken");
    console.log("회원정보불러와봐" + token);
   
    return response;
  },
  checkEmailDuplicate: (email) => {
    return axiosInstance.get("/member/check-email", {
      params: { email }
    });
  }
};
export default memberApi;
