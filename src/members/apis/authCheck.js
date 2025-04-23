//토큰 존재 + 만료되지 않음 + 관리자권한 => 리턴 true
export const isFammer = (loginInfo) => {
  return loginInfo && loginInfo.roleName === 'ROLE_FARMMER';
};

export const isAdmin = (loginInfo) => {
  return loginInfo && loginInfo.roleName === 'ROLE_ADMIN';
};