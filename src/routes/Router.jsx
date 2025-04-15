import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ExampleWebSocketPage from "../websocket/ExampleWebSocketPage";

import AdminLayout from "../layout/AdminLayout";
import AppLayout from "../layout/AppLayout";
import WebLayout from "../layout/WebLayout";
import { routesLink } from "../routes/RoutesLink";
import WebMain from "../pages/Web/WebMain";
import Home from "../pages/Dashboard/Home";
import AdminDashboard from "../admin/pages/AdminHome";
import ProtectedAdminRoute from "../members/components/ProtectedAdminRoute";
import ProtectedRoute from "../members/components/ProtectedRoute";

export default function Router() {
  const layoutRoutes = {
    web: [],
    admin: [],
    user: [],
  };

  routesLink.forEach(({ layout, path, element }) => {
    layoutRoutes[layout].push(
      <Route key={`${layout}-${path}`} path={path} element={element} />
    );
  });

  return (
    <>
      <Routes>
        {/* 소켓 */}
        <Route path="/examples/websocket" element={<ExampleWebSocketPage />} />

        {/* 컨텐츠들 */}
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
          <Route index element={<AdminDashboard />} />
          {layoutRoutes.admin}
        </Route>

        <Route path="/user/*"
              element={<AppLayout />}>
          <Route index element={
             <ProtectedRoute>
              <Home />
            </ProtectedRoute>
            } />
          {layoutRoutes.user}
        </Route>

        {/* 빈페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
