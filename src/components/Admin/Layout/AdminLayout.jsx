import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Admin/Sidebar";
import Topbar from "../../Admin/Topbar";

function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <div className="p-6 overflow-auto">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;