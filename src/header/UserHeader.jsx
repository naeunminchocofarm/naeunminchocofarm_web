import React, { useEffect, useState } from "react";
import {
  BsChevronDown,
  BsClipboardData,
  BsFlower3,
  BsPlusLg,
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/layouts/h1-logo.png";
import UserTitle from "./UserTitle";
import { userMenu } from "../routes/MenuByLayout";
import { useAuthInfo } from "../hooks/AuthInfo";


const UserHeader = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const { roleName } = useAuthInfo();
  
    useEffect(() => {
      console.log("🔁 WebHeader 리렌더링");
      console.log("권한:", roleName);
    }, [roleName]);

  const location = useLocation();

  // 메뉴 토글 함수
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); // 동일한 
  };


  const menuItems = [
    {
      name: "My Farm",
      link: "/home",
      icon: <BsClipboardData />,
      subMenu: [],
    },
    {
      name: "농장",
      link: "#",
      icon: <BsFlower3 />,
      subMenu: [
        userMenu,
        { name: "작물 기본 정보", link: "/plant" },
        { name: "온도", link: "/temp" },
        { name: "습도", link: "/hume" },
        { name: "조도량", link: "/sunshine" },
        { name: "이산화탄소", link: "/cotwo" },
        { name: "토양습도", link: "/soil" },
      ],
    },
    {
      name: "신규작물추가",
      link: "#",
      icon: <BsPlusLg />,
      subMenu: [],
    },
  ];

  let pageTitle = "HOME";
  // menuItems 안에서 subMenu 항목을 확인하여 해당하는 제목을 찾음
  menuItems.forEach((item) => {
    const subMenuItem = item.subMenu.find(
      (sub) => sub.link === location.pathname
    );
    if (subMenuItem) {
      pageTitle = subMenuItem.name;
    }
  });

  return (
    <>
      <header className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform sm:translate-x-0 translate-x-full">
        <h1 className="text-xl font-bold text-green-600">
          <NavLink to="/user">
            <img src={logo} alt="나은민초코팜 로고" className="h-10" />
          </NavLink>
        </h1>
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
      <UserTitle pageTitle={pageTitle} menuItems={menuItems} />
    </>
  );
};

export default UserHeader;
