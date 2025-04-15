import axios from "axios";

const memberApi = {
  getMemList: function () {
    const token = localStorage.getItem("accessToken");
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
  login: function (loginCheck) {
    const response = axios.post("/api/web/login", loginCheck);
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
