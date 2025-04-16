import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ExampleWebSocketPage from "../websocket/ExampleWebSocketPage";

import AdminLayout from "../layout/AdminLayout";
import WebLayout from "../layout/WebLayout";
import UserLayout from "../layout/UserLayout";
import { routesLink } from "../routes/RoutesLink";
import WebMain from "../pages/Web/WebMain";
import AdminDashboard from "../admin/pages/AdminHome";
import ProtectedAdminRoute from "../members/components/ProtectedAdminRoute";
import ProtectedRoute from "../members/components/ProtectedRoute";
import TestControllerPage from "../smart_farm/pages/TestControllerPage";
import UserMain from "../pages/Dashboard/UserMain";

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
      <Routes >
        {/* 루트링크있어야함 */}

        {/* 소켓 */}
        <Route path="/examples/websocket" element={<ExampleWebSocketPage />} />
        <Route path="/test/controller" element={<TestControllerPage />} />

        <Route path="/web/*" element={<WebLayout />}>
          <Route index element={<WebMain />} />
          {layoutRoutes.web}
        </Route>

        <Route
          path="/admin/*"
          element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
          {layoutRoutes.admin}
        </Route>

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

        {/* 빈페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
