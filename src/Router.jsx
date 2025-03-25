import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Temperature from "./temperature/temperature";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/temp" element={<Temperature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
