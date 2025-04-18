import { axiosInstance } from "../../members/apis/axiosInstance";

const serviceApi = {
  getServiceApplyList: function () {
    const token = localStorage.getItem("accessToken");
    console.log("서비스신청목록불러와봐" + token);
    return axiosInstance.get("/service/list");
  },

  // 2. 서비스 신청 작성 (사용자)
  serviceApplyWrite: function (form) {
    return axiosInstance.post("/service/apply", form);
  },

  // 3. 서비스 신청 상세 보기
  getServiceApplyDetail: function (id) {
    return axiosInstance.get(`/service/${id}`);
  },

  // 4. 나의 서비스 신청 리스트 보기
  getMyServiceApplyList: function () {
    return axiosInstance.get("/service/mylist");
  },

  // 5. 서비스 신청 수정 (메모/상태 등)
  updateServiceApply: function (form) {
    return axiosInstance.put("/service/update", form);
  },

  // 6. 서비스 신청 삭제
  deleteServiceApply: function (id) {
    return axiosInstance.delete(`/service/delete/${id}`);
  }
};
export default serviceApi;
