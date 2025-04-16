import { axiosInstance } from "./axiosInstance";

const memberApi = {
  getMemList: function () {
    const token = localStorage.getItem("accessToken");
    console.log("회원목록불러와봐" + token);
    const response = axiosInstance.get("/admin/members", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
    const response = axiosInstance.get("/member/memberInfo", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  },
};
export default memberApi;
