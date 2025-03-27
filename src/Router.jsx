import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ExamChart from "./humidity/pages/ExamChart";
import Temperature from "./temperature/pages/Temperature";
import Home from "./pages/Dashboard/Home";
import AppLayout from "./layout/AppLayout";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/examples/chart" element={<ExamChart />} />

        {/* user */}
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/temp" element={<Temperature />} />
          <Route path="/new" element={<Temperature />} />
          <Route path="/hume" element={<ExamChart />} />
        </Route>

        {/* 페이지없음 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
