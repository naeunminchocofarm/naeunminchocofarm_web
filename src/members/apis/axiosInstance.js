import axios from "axios";
import { getAccessToken } from "../../redux/store";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token) {
      config.headers.Authorization = token.startsWith("Bearer ")
      ? token
      : `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);