import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}