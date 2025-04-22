import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsMenuButton } from "react-icons/bs";
import { adminMenu } from "../routes/MenuByLayout";
import logo from "../assets/images/layouts/h1-logo.png";
import { logout, useLoginInfo } from "../redux/store";

const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate();
  const loginInfo = useLoginInfo();

  useEffect(() => {
    console.log("권한:", loginInfo?.roleName);
  }, [loginInfo?.roleName]);

  function handleLogout() {
    logout();
    nav("/web/home");
  }

  const headerCss = "bg-white shadow-sm fixed top-0 left-0 right-0 z-50";

  return (
    <header className={headerCss}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-green-600">
          <NavLink to="/admin">
            <img src={logo} alt="나은민초코팜 로고" className="h-10" />
          </NavLink>
        </h1>

        {/* PC 메뉴 */}
        <nav className="hidden md:flex space-x-6 items-center">
          {adminMenu.map(({ path, title }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "hover:text-green-600"
              }
            >
              {title}
            </NavLink>
          ))}

          {loginInfo && loginInfo.roleName === "ROLE_ADMIN" ? (
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-600 ml-4"
            >
              로그아웃
            </button>
          ) : (
            <NavLink
              to="/web/login"
              className="text-green-600 hover:underline ml-4"
            >
              로그인
            </NavLink>
          )}
        </nav>

        {/* 모바일 토글 */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <BsMenuButton />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          {adminMenu.map(({ path, title }) => (
            <NavLink
              key={path}
              to={path}
              className="block hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              {title}
            </NavLink>
          ))}

          {loginInfo && loginInfo.roleName === "ROLE_ADMIN" ? (
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="block text-red-500 hover:text-red-600 w-full text-left"
            >
              로그아웃
            </button>
          ) : (
            <NavLink
              to="/web/login"
              className="block text-green-600 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              로그인
            </NavLink>
          )}
        </nav>
      )}
    </header>
  );
};

export default AdminHeader;
