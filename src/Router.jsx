import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import TemperaturePage from "./temperature/pages/TemperaturePage";
import ExampleWebSocketPage from "./websocket/ExampleWebSocketPage";
import Home from "./pages/Dashboard/Home";
import AppLayout from "./layout/AppLayout";
import SunshinePage from "./sunshine/pages/SunshinePage";
import CoTwo from "./Cotwo/pages/CoTwo";
import SoilPage from "./soil/pages/SoilPage";
import HumidityPage from "./humidity/pages/HumidityPage";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/examples/websocket" element={<ExampleWebSocketPage />} />

        {/* user HOME및 DETAIL*/}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/temp" element={<TemperaturePage />} />
          <Route path="/hume" element={<HumidityPage />} />
          <Route path="/sunshine" element={<SunshinePage />} />
          <Route path="/soil" element={<SoilPage />} />
          <Route path="/cotwo" element={<CoTwo />} />
        </Route>

        {/* 페이지없음 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
