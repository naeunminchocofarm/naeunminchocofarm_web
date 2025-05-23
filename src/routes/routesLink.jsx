// src/routes/routesMeta.jsx

//member
import MyTab from "../members/pages/MyTab";
import MyPage from "../members/pages/Mypage";
import MyApply from "../members/pages/MyApply";
import MyPassword from "../members/pages/MyPassword";

// web
import Web from "../pages/web/WebMain";
import Company from "../pages/web/Company";
import AboutFarms from "../pages/web/AboutFarms";
import Business from "../pages/web/Business";
import ServiceApply from "../service_apply/pages/ServiceApply";
import Login from "../members/pages/Login";
import Signup from "../members/pages/Signup";

//admin
import Admin from "../admin/pages/AdminMain";
import AdminMemberList from "../admin/components/members/MemberList";
import ServiceApplyList from "../service_apply/pages/ServiceApplyList";
import ServiceApplyDetail from "../service_apply/pages/ServiceApplyDetail";
import ServiceApplyWrite from "../service_apply/pages/ServiceApplyWrite";
import FarmList from "../admin/components/farm/AdminFarmList";
import AdminFarmDetail from "../admin/components/farm/AdminFarmDetail";
import CropList from "../admin/components/crops/AdminCropsList";
import AdminFarmCreate from "../admin/components/farm/AdminFarmCreate";

//user
import UserMain from "../pages/Dashboard/UserMain";
import Privacy from "../pages/web/Privacy";
import UserFarmList from "../pages/user/UserFarmList";
import UserFarmDetail from "../pages/user/UserFarmDetail";



export const routesLink = [
  { layout: "web", path: "login", title: "로그인", element: <Login />, depth: 1, hidden: true },
  { layout: "web", path: "signup", title: "회원가입", element: <Signup />, depth: 1, hidden: true },
  { layout: "web", path: "home", title: "home", element: <Web />, depth: 1, hidden: true },
  { layout: "web", path: "privacy", title: "개인정보처리방침", element: <Privacy />, depth: 1, hidden: true },
  { layout: "web", path: "company", title: "회사소개", element: <Company />, depth: 1, hidden: false },
  { layout: "web", path: "aboutFarms", title: "스마트팜소개", element: <AboutFarms />, depth: 1, hidden: false },
  { layout: "web", path: "business", title: "비즈니스", element: <Business />, depth: 1, hidden: false },
  { layout: "web", path: "serviceApply", title: "스마트팜신청", element: <ServiceApply />, depth: 1, hidden: false },

  { layout: "admin", path: "home", title: "관리자 홈", element: <Admin />, depth: 1, hidden: true },
  { layout: "admin", path: "members", title: "회원 목록", element: <AdminMemberList />, depth: 1, hidden: false },
  { layout: "admin", path: "serviceApply", title: "신청 목록", element: <ServiceApplyList />, depth: 1, hidden: false },
  { layout: "admin", path: "serviceApplyDetail/:id", title: "신청 상세", element: <ServiceApplyDetail />, depth: 2, hidden: true },
  { layout: "admin", path: "serviceApplyWrite/:id", title: "신청 수정", element: <ServiceApplyWrite />, depth: 2, hidden: true },
  { layout: "admin", path: "farms", title: "농장 목록", element: <FarmList />, depth: 1, hidden: false },
  { layout: "admin", path: "farms/create", title: "농장 등록", element: <AdminFarmCreate />, depth: 2, hidden: true },
  { layout: "admin", path: "farmsDetail/:id", title: "농장 상세", element: <AdminFarmDetail />, depth: 2, hidden: true },
  { layout: "admin", path: "crops", title: "작물 목록", element: <CropList />, depth: 1, hidden: true },

  { layout: "member", path: "mytab", title: "계정관리", element: <MyTab />, depth: 1, hidden: true },
  { layout: "member", path: "mypage", title: "마이페이지", element: <MyPage />, depth: 2, hidden: true },
  { layout: "member", path: "myapply", title: "마이서비스", element: <MyApply />, depth: 2, hidden: true },
  { layout: "member", path: "mypassword", title: "마이비밀번호", element: <MyPassword />, depth: 2, hidden: true },

  { layout: "user", path: "home", title: "홈", element: <UserMain />, depth: 1, hidden: false },
  { layout: "user", path: "myfarms", title: "내 스마트팜", element: <UserFarmList />, depth: 1, hidden: false },
  { layout: "user", path: "farms/:farmId", title: "스마트팜 상세", element: <UserFarmDetail />, depth: 2, hidden: true },
  { layout: "user", path: "apply/list", title: "서비스 관리", element: <MyApply />, depth: 1, hidden: false },
  { layout: "user", path: "apply", title: "서비스 신청", element: <ServiceApply />, depth: 2, hidden: false },
  { layout: "user", path: "mypage", title: "마이페이지", element: <MyPage />, depth: 1, hidden: false },
];
