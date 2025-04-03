import React from "react";
import UserHeader from "../header/UserHeader";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="p-4 sm:ml-65 bg-gray-100 h-screen overflow-scroll">
        <UserHeader />
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
