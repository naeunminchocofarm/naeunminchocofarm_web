import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import TemperaturePage from "./temperature/pages/TemperaturePage";
import ExampleWebSocketPage from "./websocket/ExampleWebSocketPage";
// web
import Web from "./pages/Web/WebMain";
import Company from "./pages/Web/Company";
import AboutFarms from "./pages/Web/AboutFarms";
import Business from "./pages/Web/Business";
import ApplySmartFarms from "./pages/Web/ApplySmartFarms";
//admin
import AdminLayout from "./layout/AdminLayout";
import Admin from "./admin/pages/AdminHome";
import AdminMemberList from "./admin/components/members/AdminMemberList";
import ApplicationList from "./admin/components/farm_apply/AdminFarmApplyList";
import FarmList from "./admin/components/farm/AdminFarmList";
import CropList from "./admin/components/crops/AdminCropsList";

//user
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Dashboard/Home";
import SunshinePage from "./sunshine/pages/SunshinePage";
import CoTwo from "./Cotwo/pages/CoTwo";
import SoilPage from "./soil/pages/SoilPage";
import HumidityPage from "./humidity/pages/HumidityPage";
//members
import Login from "./members/pages/Login";
import Signup from "./members/pages/Signup";


export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/examples/websocket" element={<ExampleWebSocketPage />} />

        {/*web*/}
        <Route>
          <Route path="/web" element={<Web />} />
          <Route path="/company" element={<Company />} />
          <Route path="/aboutFarms" element={<AboutFarms />} />
          <Route path="/business" element={<Business />} />
          <Route path="/applySmartFarm" element={<ApplySmartFarms />} />
        </Route>

        {/*admin*/}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/members" element={<AdminMemberList />} /> 
          <Route path="/applications" element={<ApplicationList />} />
          <Route path="/farms" element={<FarmList />} /> 
          <Route path="/crops" element={<CropList />} /> 
        </Route>

        {/* user*/}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/temp" element={<TemperaturePage />} />
          <Route path="/hume" element={<HumidityPage />} />
          <Route path="/sunshine" element={<SunshinePage />} />
          <Route path="/soil" element={<SoilPage />} />
          <Route path="/cotwo" element={<CoTwo />} />
        </Route>

        {/* member*/}
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* 페이지없음 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
