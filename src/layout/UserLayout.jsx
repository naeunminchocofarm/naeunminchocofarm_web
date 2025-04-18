// src/layouts/UserDashboardLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import UserHeader from "../header/UserHeader";

const UserLayout = () => {

  return (
    <div className="flex h-screen bg-gray-50">
      <UserHeader/>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
