import axios from "axios";
import { axiosInstance } from "../../members/apis/axiosInstance";

const adminApi = {
  // 스마트팜 api
  // 스마트팜 목록 조회
  getFarmsWithMember: function () {
    return axiosInstance.get("farms/with-member");
  },

  // 스마트팜 등록 요청
  insertFarm: function (data) {
    return axiosInstance.post("farms", data);
  },

  // 스마트팜 수정
  updateFarm: function (id, data) {
    return axiosInstance.put(`farms/${id}`, data);
  },

  // 스마트팜 삭제
  deleteFarm: function (id) {
    return axiosInstance.delete(`farms/${id}`);
  },

  // 특정 id의 스마트팜 상세 조회
  getFarmById: function (id) {
    return axiosInstance.get(`farms/${id}`);
  },


  // 구역 api
  // 특정 스마트팜의 구역 목록 조회 
  getSectionsByFarmId: function (farmId) {
    return axiosInstance.get(`sections/farm/${farmId}`);
  },

  // 구역 등록 api
  insertSection: function ({ farmId, name }) {
    return axiosInstance.post(`sections/farm/${farmId}`, {
      name,
    });
  },

  // 구역 수정
  updateSection: function (id, name) {
    return axiosInstance.put(`sections/${id}`, {
      name,
    });
  },
  
  // 구역 삭제
  deleteSection: function (id) {
    return axiosInstance.delete(`sections/${id}`);
  },



  // 센서 api
  // 특정 section의 센서 목록 조회
  getSensorBySectionId: function (sectionId) {
    return axiosInstance.get(`sensors/section/${sectionId}`);
  },

  //센서 등록 api
  insertSensor: function ({sectionId, name, sensorType}) {
    return axiosInstance.post(`sensors/section/${sectionId}`, {
      name,
      sensorType
    });
  },

  // 센서 수정
  updateSensor: function (id, name, sensorType) {
    return axiosInstance.put(`sensors/${id}`, {
      name,
      sensorType,
    });
  },

  // 센서 삭제
  deleteSensor: function (id) {
    return axiosInstance.delete(`sensors/${id}`);
  },
};


export default adminApi;