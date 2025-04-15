import axios from "axios";

const adminApi = {
  // 스마트팜팜 api
  // 스마트팜 목록 조회
  getFarmsWithMember: function () {
    return axios.get("/api/farms/with-member");
  },

  // 스마트팜 등록 요청
  insertFarm: function (data) {
    return axios.post("/api/farms", data);
  },

  // 스마트팜 수정
  updateFarm: function (id, data) {
    return axios.put(`/api/farms/${id}`, data);
  },

  // 스마트팜 삭제
  deleteFarm: function (id) {
    return axios.delete(`/api/farms/${id}`);
  },

  // 특정 id의 스마트팜 상세 조회
  getFarmById: function (id) {
    return axios.get(`/api/farms/${id}`);
  },


  // 구역 api
  // 특정 스마트팜의 구역 목록 조회 
  getSectionsByFarmId: function (farmId) {
    return axios.get(`/api/sections/farm/${farmId}`);
  },

  // 구역 등록 api
  insertSection: function ({ farmId, name }) {
    return axios.post(`/api/sections/farm/${farmId}`, {
      name,
    });
  },


  // 센서 api
  // 특정 section의 센서 목록 조회
  getSensorBySectionId: function (sectionId) {
    return axios.get(`/api/sensors/section/${sectionId}`);
  },

  //센서 등록 api
  insertSensor: function ({sectionId, name, sensorType}) {
    return axios.post(`/api/sensors/section/${sectionId}`, {
      name,
      sensorType
    });
  }

};

export default adminApi;