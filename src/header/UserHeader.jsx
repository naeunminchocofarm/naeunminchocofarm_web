import React, { useState } from "react";
import {
  BsChevronDown,
  BsClipboardData,
  BsFlower3,
  BsPlusLg,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/images/layouts/h1-logo.png";

const UserHeader = () => {
  const [activeMenu, setActiveMenu] = useState(null); // 현재 열린 메뉴를 추적
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // 사이드바 열림 상태

  // 메뉴 토글 함수
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); // 동일한 메뉴를 다시 클릭하면 토글
  };

  // 사이드바 토글 함수 (링크 클릭 시 사이드바 숨기기)
  const closeSidebar = () => {
    setIsSidebarOpen(false); // 링크 클릭 시 사이드바 숨기기
  };

  // 메뉴 데이터 배열 (반복되는 부분을 배열로 관리)
  const menuItems = [
    {
      name: "My Farm",
      link: "/home",
      icon: <BsClipboardData />,
      subMenu: [],
    },
    {
      name: "작물1",
      link: "#",
      icon: <BsFlower3 />,
      subMenu: [
        { name: "온도", link: "/temp" },
        { name: "습도", link: "/hume" },
        { name: "조도량", link: "/examples/chart" },
      ],
    },
    {
      name: "신규작물추가",
      link: "#",
      icon: <BsFlower3 />,
      subMenu: [],
    },
  ];

  return (
    <header className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform sm:translate-x-0 translate-x-full">
      <h2 className="w-full p-4 pb-0">
        <img src={logo} alt="logo" className="w-full" />
      </h2>
      <aside id="sidebar-multi-level-sidebar" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-semibold">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-300"
                  onClick={() => toggleMenu(item.name)} // 메뉴 이름을 기준으로 토글
                  to={item.link} // 링크 이동
                >
                  {item.icon}
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    {item.name}
                  </span>
                  {item.subMenu.length > 0 && <BsChevronDown />}{" "}
                  {/* 서브 메뉴가 있을 때만 아이콘 표시 */}
                </Link>

                {/* 서브 메뉴가 있을 경우 토글된 상태에 따라 보여주기 */}
                {item.subMenu.length > 0 && activeMenu === item.name && (
                  <ul className="py-2 space-y-2 transition duration-75">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.link}
                          onClick={closeSidebar} // 서브 메뉴 클릭 시 사이드바 숨기기
                          className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group"
                        >
                          {subItem.name}
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
    </header>
  );
};

export default UserHeader;
