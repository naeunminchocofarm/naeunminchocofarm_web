import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ExamChart from "./humidity/pages/ExamChart";
import Temperature from "./temperature/pages/Temperature";
import TestM from "./pages/TestM";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/examples/chart" element={<ExamChart />} />
        <Route path="/temp" element={<Temperature />} />
        <Route path="/testM" element={<TestM />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
