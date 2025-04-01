import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ExamChart from "./humidity/pages/ExamChart";
import Temperature from "./temperature/pages/Temperature";
import ExampleWebSocketPage from "./websocket/ExampleWebSocketPage";
import Home from "./pages/Dashboard/Home";
import AppLayout from "./layout/AppLayout";
import SunshinePage from "./sunshine/pages/SunshinePage";
import CoTwo from "./Cotwo/pages/CoTwo";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/examples/chart" element={<ExamChart />} />
        <Route path="/examples/websocket" element={<ExampleWebSocketPage />} />

        {/* user */}
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/temp" element={<Temperature />} />
          <Route path="/new" element={<Temperature />} />
          <Route path="/hume" element={<ExamChart />} />
          <Route path="/sunshine" element={<SunshinePage />} />
          <Route path="/cotwo" element={<CoTwo />} />
        </Route>

        {/* 페이지없음 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
