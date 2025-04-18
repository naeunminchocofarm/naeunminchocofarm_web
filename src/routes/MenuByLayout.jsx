import { routesLink } from "./RoutesLink";

const getMenuByLayout = (layout, options = {}) => {
  const { includeHidden = false } = options;

  return routesLink
    .filter(
      (route) => route.layout === layout && (includeHidden || !route.hidden)
    )
    .map((route) => ({
      ...route,
      path: `/${layout}/${route.path}`, // 절대 경로로 변환해서 메뉴에 사용
    }));
};

// 바로 쓸 수 있는 메뉴 export
export const webMenu = getMenuByLayout("web");
export const userMenu = getMenuByLayout("user");
export const adminMenu = getMenuByLayout("admin");
