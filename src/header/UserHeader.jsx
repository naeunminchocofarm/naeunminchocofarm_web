import { useState } from "react";
import { NavLink } from "react-router-dom";
import { userMenu } from "../routes/MenuByLayout";
import logo from "../assets/images/layouts/h1-logo.png";

const UserHeader = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (path) => {
    setOpenMenus((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  console.log(userMenu.map((m) => [m.title, m.depth]));

  return (
    <>
      <aside className="hidden md:flex flex-col justify-between w-80 min-h-screen bg-white shadow-xl">
        <div>
          <div className="p-4 ">
            <NavLink to="/user" className="flex justify-center">
              <img src={logo} alt="로고" className="h-10" />
            </NavLink>
          </div>

          <nav className="p-4 space-y-1">
            {userMenu.map(({ path, title, depth }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => {
                  if (depth === 1) {
                    return `block px-3 py-2 text-2xl font-semibold ${
                      isActive
                        ? "text-green-600"
                        : "text-gray-800 hover:text-green-600"
                    }`;
                  } else {
                    return `block px-4 py-1 text-xl ${
                      isActive
                        ? "bg-gray-100 text-green-600 font-medium rounded-lg"
                        : "text-gray-600 hover:text-green-500"
                    }`;
                  }
                }}
              >
                {title}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* 하단 푸터 */}
        <footer className="text-xs text-center text-gray-400 p-4">
          ⓒ 나은민초코팜
        </footer>
      </aside>
    </>
  );
};

export default UserHeader;
