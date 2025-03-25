import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ExamChart from "./humidity/pages/ExamChart";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/examples/chart" element={<ExamChart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}