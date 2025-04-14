import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsMenuButton } from "react-icons/bs";
import { adminMenu } from "../routes/MenuByLayout";


const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

 //style
  const headerCss="bg-white shadow-sm fixed top-0 left-0 right-0 z-50"

  return (
    <header className={headerCss}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-green-600">
          <NavLink to="/admin">나은민초코팜 관리자</NavLink>
        </h1>

        {/* PC 메뉴 */}
        <nav className="hidden md:flex space-x-6">
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
          <NavLink to="/logout" className="hover:text-red-500">
            로그아웃
          </NavLink>
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
          <NavLink
            to="/logout"
            className="block text-red-500 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            로그아웃
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default AdminHeader;
