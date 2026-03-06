import React from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard, Inventory, ShoppingCart } from "@mui/icons-material";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-gray-900 text-white h-full p-4">

      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <ul className="space-y-4">

        <li
          className="flex items-center gap-2 cursor-pointer hover:text-yellow-400"
          onClick={() => navigate("/admin/dashboard")}
        >
          <Dashboard />
          Dashboard
        </li>

        <li
          className="flex items-center gap-2 cursor-pointer hover:text-yellow-400"
          onClick={() => navigate("/admin/products")}
        >
          <Inventory />
          Products
        </li>

        <li
          className="flex items-center gap-2 cursor-pointer hover:text-yellow-400"
          onClick={() => navigate("/admin/orders")}
        >
          <ShoppingCart />
          Orders
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;