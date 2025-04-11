import React, { useState } from "react";
import { BsChevronDown, BsList, BsX } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/layouts/h1-logo.png";
import UserTitle from "./UserTitle";
import { routesLink } from "../routes/routesLink";

const UserHeader = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // 메뉴 토글 함수
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // 사이드바 토글 함수 (링크 클릭 시 사이드바 숨기기)
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // 웹 메뉴용 링크 필터링
  const webMenuLinks = routesLink
    .filter(
      (route) =>
        route.layout === "user" &&
        route.title !== "home" && // home 메뉴 제외
        route.title !== "-" // 숨기기 처리된 메뉴 제외
    )
    .map((route) => ({
      title: route.title,
      path: route.path,
      subMenu: route.subMenu || [], // 서브 메뉴가 있는 경우 처리
    }));

  let pageTitle = "HOME";
  // menuItems 안에서 subMenu 항목을 확인하여 해당하는 제목을 찾음
  webMenuLinks.forEach((item) => {
    const subMenuItem = item.subMenu.find(
      (sub) => sub.path === location.pathname
    );
    if (subMenuItem) {
      pageTitle = subMenuItem.title;
    }
  });

  return (
    <>
      <div className="w-full">
      <div className="sm:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex justify-between items-center px-4 py-3">
        <Link to="/home">
          <img src={logo} alt="logo" className="h-8" />
        </Link>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? (
            <BsX className="w-6 h-6 text-gray-700" />
          ) : (
            <BsList className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* ✅ 사이드바 (PC 고정 + 모바일 슬라이드) */}
      <aside
        className={`
          fixed top-0 left-0 z-40 w-64 h-screen bg-white overflow-y-auto transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:relative sm:flex
        `}
      >
        <h2 className="w-full p-4 pb-0 hidden sm:block">
          <Link to={"/home"}>
            <img src={logo} alt="logo" className="w-full" />
          </Link>
        </h2>

        <div className="h-full px-3 py-4">
          <ul className="space-y-2 font-semibold">
            {webMenuLinks.map((item, index) => (
              <li key={index}>
                <Link
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-300"
                  onClick={() => toggleMenu(item.title)}
                  to={item.path}
                >
                  <span className="flex-1 ms-3 text-left whitespace-nowrap">
                    {item.title}
                  </span>
                  {item.subMenu.length > 0 && <BsChevronDown />}
                </Link>

                {item.subMenu.length > 0 && activeMenu === item.title && (
                  <ul className="py-2 space-y-2">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.path}
                          onClick={closeSidebar}
                          className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <UserTitle pageTitle={pageTitle} menuItems={webMenuLinks} />
      </div>
    </>
  );
};

export default UserHeader;
