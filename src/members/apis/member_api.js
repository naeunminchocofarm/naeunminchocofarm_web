import axios from "axios";

const memberApi = {
  getMemList: function () {
    const token = localStorage.getItem("accessToken");
    console.log("회원목록불러와봐"+token);
    const response = axios.get("/api/admin/members", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
  signUp: function (memberInfo) {
    const response = axios.post("/api/web/signup", memberInfo);
    return response;
  },
  login: function (loginInfo) {
    const response = axios.post("/api/web/login", loginInfo);
    return response;
  },
  getMemInfo: function () {
    const response = axios.get("/api/member/memberInfo", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  }
};
export default memberApi;
