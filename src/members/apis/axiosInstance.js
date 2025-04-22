import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = token.startsWith("Bearer ")
        ? token
        : `Bearer ${token}`;

    }
    return config;
  },
  (error) => Promise.reject(error)
);

// axiosInstance.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && error.response?.data.code === "EXPIRED_TOKEN" && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const res = await axiosInstance.post("/member/refresh");
//         const newAccessToken = res.headers['authorization'];

//         localStorage.setItem('accessToken', newAccessToken)

//         originalRequest.headers.Authorization = newAccessToken.startsWith('Bearer ') ? newAccessToken : `Bearer ${newAccessToken}`;
//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         console.log('리프레시 실패!');
//         console.error(refreshError);
//         return Promise.reject(refreshError);
//       }
//     }
//   }
// );