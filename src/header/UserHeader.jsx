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

  let pageTitle = "HOME";
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
        <aside className={`fixed z-20 top-0 left-0 h-full w-64 bg-white shadow transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:flex-shrink-0`}>
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <div className="text-xl font-bold text-green-700">ChocoFarm</div>
            <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
              x
            </button>
          </div>
          <nav className="px-4 py-6 space-y-2">
            {navItems.map((item, idx) => (
              <Link key={idx} to={item.path} className="block px-3 py-2 rounded hover:bg-green-100">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
      </header>
      <UserTitle pageTitle={pageTitle} menuItems={menuItems} />
    </>
  );
};

export default UserHeader;
