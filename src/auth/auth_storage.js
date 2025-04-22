const ACCESS_TOKEN_KEY = "accessToken";

export function setAccessToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function deleteAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}