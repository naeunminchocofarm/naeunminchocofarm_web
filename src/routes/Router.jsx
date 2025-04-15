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
import TestControllerPage from "../smart_farm/pages/TestControllerPage"

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
        <Route path="/test/controller" element={<TestControllerPage />} />

        {/* 컨텐츠들 */}
        <Route path="/web/*" element={<WebLayout />}>
          <Route index element={<WebMain />} />
          {layoutRoutes.web}
        </Route>
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {layoutRoutes.admin}
        </Route>
        <Route path="/user/*" element={<AppLayout />}>
          <Route index element={<Home />} />
          {layoutRoutes.user}
        </Route>

        {/* 빈페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
