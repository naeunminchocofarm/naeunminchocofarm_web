import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
  withCredentials: true, // 필요 시 쿠키 인증 리토큰발급해줄때쓸거임
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
