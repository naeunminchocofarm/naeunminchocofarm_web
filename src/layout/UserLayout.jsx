// src/layouts/UserDashboardLayout.jsx
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";

const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* TopBar for mobile */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow">
          <h1 className="text-xl font-bold text-green-600">
            <NavLink to="/user">
              <img src={logo} alt="나은민초코팜 로고" className="h-10" />
            </NavLink>
          </h1>
          <button onClick={() => setSidebarOpen(true)}>
            <BiMenu/>
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
