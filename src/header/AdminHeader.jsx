import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const linkClass = "hover:text-green-600 transition px-2 py-1 text-sm";
  const activeClass = "text-green-700 font-bold border-b-2 border-green-500";

  return (
    <header className="bg-white shadow fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">
          🌱 나은민초코팜 관리자
        </h1>

        {/* 햄버거 메뉴 버튼 (모바일용) */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6 text-green-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
            />
          </svg>
        </button>

        {/* PC 메뉴 */}
        <nav className="space-x-4">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            대시보드
          </NavLink>
          <NavLink
            to="/members"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            회원관리
          </NavLink>
          <NavLink
            to="/applications"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            신청관리
          </NavLink>
          <NavLink
            to="/farms"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            농장관리
          </NavLink>
          <NavLink
            to="/crops"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            작물관리
          </NavLink>

          <button className="ml-4 text-red-500 hover:underline">
            로그아웃
          </button>
        </nav>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 text-sm text-gray-700 bg-white shadow">
          <Link to="/admin" className="block hover:text-green-600">
            대시보드
          </Link>
          <Link to="/admin/members" className="block hover:text-green-600">
            회원관리
          </Link>
          <Link to="/admin/applications" className="block hover:text-green-600">
            신청관리
          </Link>
          <Link to="/admin/farms" className="block hover:text-green-600">
            농장관리
          </Link>
          <Link to="/admin/crops" className="block hover:text-green-600">
            작물관리
          </Link>
          <button className="text-red-500 hover:underline">로그아웃</button>
        </nav>
      )}
    </header>
  );
};

export default AdminHeader;
