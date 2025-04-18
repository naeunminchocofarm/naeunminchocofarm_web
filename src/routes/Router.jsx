import { Navigate, Route, Routes } from "react-router-dom";
import { routesLink } from "./RoutesLink";
import ProtectedAdminRoute from "../members/components/ProtectedAdminRoute";
import ProtectedRoute from "../members/components/ProtectedRoute";

import AdminLayout from "../layout/AdminLayout";
import WebLayout from "../layout/WebLayout";
import UserLayout from "../layout/UserLayout";

import WebMain from "../pages/web/WebMain";
import UserMain from "../pages/Dashboard/UserMain";
import AdminMain from "../admin/pages/AdminMain";
import Home from "../pages/Dashboard/Home";

import NotFound from "../pages/NotFound";
import FullPageSpinner from "../pages/FullPageSpinner";

import FarmDetailPage from "../smart_farm/pages/FarmDetailPage";
import TestControllerPage from "../smart_farm/pages/TestControllerPage";
import ExampleWebSocketPage from "../websocket/ExampleWebSocketPage";

export default function Router() {
  const layoutRoutes = {
    web: [],
    admin: [],
    user: [],
    member: [],
  };

  routesLink.forEach(({ layout, path, element }) => {
    layoutRoutes[layout].push(
      <Route key={`${layout}-${path}`} path={path} element={element} />
    );
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/web" />} />

        {/* 웹 */}
        <Route path="/web/*" element={<WebLayout />}>
          <Route index element={<WebMain />} />
          {layoutRoutes.web}
        </Route>

        {/* 어드민 */}
        <Route
          path="/admin/*"
          element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<AdminMain />} />
          {layoutRoutes.admin}
        </Route>

        {/* 사용자 */}
        <Route
          path="/user/*"
          element={
            <ProtectedRoute>
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<UserMain />} />
          {layoutRoutes.user}
        </Route>

        {/* 빈페이지&로딩 */}
        <Route path="*" element={<NotFound />} />
        <Route path="/loading" element={<FullPageSpinner />} />

        {/* 소켓&테스트 */}
        <Route path="/examples/websocket" element={<ExampleWebSocketPage />} />
        <Route path="/test/controller" element={<TestControllerPage />} />
        <Route path="/test/farms-detail" element={<FarmDetailPage />} />
        <Route path="/homebackup" element={<Home />} />
      </Routes>
    </>
  );
}
