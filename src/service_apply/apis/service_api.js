import { axiosInstance } from "../../members/apis/axiosInstance";

const serviceApi = {
  getServiceApplyList: function () {
    const token = localStorage.getItem("accessToken");
    console.log("서비스신청목록불러와봐" + token);
    const response = axiosInstance.get("/admin/list", {});
    return response;
  },
};
export default serviceApi;
