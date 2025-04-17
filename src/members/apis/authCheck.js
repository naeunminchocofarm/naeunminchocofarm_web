import { jwtDecode } from "jwt-decode";

//토큰 만료 => 리턴 true
export const isTokenExpired = (token) => {
  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decodedToken.exp < currentTime;
};

//토큰 존재 + 만료되지 않음 => 리턴 true
export const isAuthenticated = (token) => {
  if (!token) return false;
  if (isTokenExpired(token)) {
    localStorage.removeItem("accessToken");
    return false;
  }

  return true;
};

//토큰 존재 + 만료되지 않음 + 관리자권한 => 리턴 true
export const isFammer = (token) => {
  if (!token) return false;
  try {
    const decoded = jwtDecode(token);
    return decoded.roleName === "ROLE_FAMMER"; // 이거 정확히 일치해야 함!
  } catch {
    return false;
  }
};

//토큰 존재 + 만료되지 않음 + 관리자권한 => 리턴 true
export const isAdmin = (token) => {
  if (!token) return false;
  try {
    const decoded = jwtDecode(token);
    return decoded.roleName === "ROLE_ADMIN"; // 이거 정확히 일치해야 함!
  } catch {
    return false;
  }
};

export const getLoginId = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.id;
  } catch (e) {
    console.error("getLoginId - 토큰 파싱 실패:", e);
    return null;
  }
};