import React from 'react'
import AdminHeader from '../header/AdminHeader';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-20">
        <AdminHeader />
        <main className="max-w-7xl mx-auto p-6">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout