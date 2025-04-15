// src/routes/routesMeta.jsx
// web
import Login from "../members/pages/Login";
import Signup from "../members/pages/Signup";
import Web from "../pages/Web/WebMain";
import Company from "../pages/Web/Company";
import AboutFarms from "../pages/Web/AboutFarms";
import Business from "../pages/Web/Business";
import ApplySmartFarms from "../pages/Web/ApplySmartFarms";

//admin
import Admin from "../admin/pages/AdminHome";
import AdminMemberList from "../admin/components/members/MemberList";
import ApplicationList from "../admin/components/farm_apply/AdminFarmApplyList";
import FarmList from "../admin/components/farm/AdminFarmList";
import AdminFarmDetail from "../admin/components/farm/AdminFarmDetail";
import CropList from "../admin/components/crops/AdminCropsList";
import AdminFarmCreate from "../admin/components/farm/AdminFarmCreate";

//user
import Home from "../pages/Dashboard/Home";
import TemperaturePage from "../temperature/pages/TemperaturePage";
import HumidityPage from "../humidity/pages/HumidityPage";
import SunshinePage from "../sunshine/pages/SunshinePage";
import SoilPage from "../soil/pages/SoilPage";
import CoTwo from "../Cotwo/pages/CoTwo";


export const routesLink = [
  // web
  { layout: "web", path: "home", title: "home", element: <Web />, depth: 1, hidden: true },
  { layout: "web", path: "login", title: "로그인", element: <Login />, depth: 1, hidden: true },
  { layout: "web", path: "signup", title: "회원가입", element: <Signup />, depth: 1, hidden: true },
//  { layout: "web", path: "privacy", title: "개인정보처리방침", element: <Signup />, depth: 1, hidden: true },
  { layout: "web", path: "company", title: "회사소개", element: <Company />, depth: 1, hidden: false },
  { layout: "web", path: "aboutFarms", title: "스마트팜소개", element: <AboutFarms />, depth: 1, hidden: false },
  { layout: "web", path: "business", title: "비즈니스", element: <Business />, depth: 1, hidden: false },
  { layout: "web", path: "applySmartFarm", title: "스마트팜신청", element: <ApplySmartFarms />, depth: 1, hidden: false },

  // admin

  { layout: "admin", path: "home", title: "관리자 홈", element: <Admin />, depth: 1, hidden: false },
  { layout: "admin", path: "members", title: "회원 목록", element: <AdminMemberList />, depth: 1, hidden: false },
  { layout: "admin", path: "applications", title: "신청 목록", element: <ApplicationList />, depth: 1, hidden: false },
  { layout: "admin", path: "farms", title: "농장 목록", element: <FarmList />, depth: 1, hidden: false },
  { layout: "admin", path: "farms/create", title: "농장 등록", element: <AdminFarmCreate />, depth: 2, hidden: true  },
  { layout: "admin", path: "farmsDetail/:id", title: "농장 상세", element: <AdminFarmDetail />, depth: 2, hidden: true },
  { layout: "admin", path: "crops", title: "작물 목록", element: <CropList />, depth: 1, hidden: false },

  // user
  { layout: "user", path: "home", title: "사용자 홈", element: <Home />, depth: 1, hidden: false }, // 버튼 용
  { layout: "user", path: "temp", title: "온도", element: <TemperaturePage />, depth: 2, hidden: false },
  { layout: "user", path: "hume", title: "습도", element: <HumidityPage />, depth: 2, hidden: false },
  { layout: "user", path: "sunshine", title: "일조량", element: <SunshinePage />, depth: 2, hidden: false },
  { layout: "user", path: "soil", title: "토양", element: <SoilPage />, depth: 2, hidden: false },
  { layout: "user", path: "cotwo", title: "이산화탄소", element: <CoTwo />, depth: 2, hidden: false },
];
