import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Dashboard,
  Inventory,
  AddBox,
  ShoppingCart,
  People,
  Category,
  LocalOffer,
  Settings,
  Menu,
  Close,
  Brightness4,
  Brightness7,
  Search
} from "@mui/icons-material";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const role = "admin";
  const newOrdersCount = 3;

  const sections = [
    {
      title: "Overview",
      items: [
        { name: "Dashboard", icon: <Dashboard />, path: "/admin/dashboard" }
      ]
    },
    {
      title: "Catalog",
      items: [
        { name: "Product List", icon: <Inventory />, path: "/admin/products" },
        { name: "Add Product", icon: <AddBox />, path: "/admin/products/add" },
        { name: "Categories", icon: <Category />, path: "/admin/categories" }
      ]
    },
    {
      title: "Sales",
      items: [
        {
          name: "Orders",
          icon: <ShoppingCart />,
          path: "/admin/orders",
          badge: newOrdersCount
        },
        { name: "Customers", icon: <People />, path: "/admin/customers" }
      ]
    },
    {
      title: "Marketing",
      items: [
        { name: "Coupons", icon: <LocalOffer />, path: "/admin/coupons" }
      ]
    },
    {
      title: "System",
      items: [
        { name: "Settings", icon: <Settings />, path: "/admin/settings" }
      ]
    }
  ];

  
  const filteredSections = sections.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  }));

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-gray-900 text-white h-screen flex flex-col transition-all duration-300`}
    >
    
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && <h2 className="text-xl font-bold">Admin Panel</h2>}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="bg-gray-900 dark:bg-gray-900 border-none outline-none p-1 rounded hover:bg-gray-800 transition"
        >
          {collapsed ? <Menu className="text-black " /> : <Close className="text-black" />}
        </button>
      </div>

      {/* Dark/Light Toggle */}
      {/* <div className="flex items-center justify-center p-2 border-b border-gray-700">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 p-1 rounded bg-gray-900 dark:bg-gray-900 border-none outline-none hover:bg-gray-800 transition"
        >
          {darkMode ? <Brightness7 className="text-black" /> : <Brightness4 className="text-black" />}
          {!collapsed && <span className="text-sm">{darkMode ? "Light" : "Dark"}</span>}
        </button>
      </div> */}

    
      {!collapsed && (
        <div className="p-2 border-b border-gray-700">
          <div className="flex items-center gap-2 bg-gray-800 rounded px-2 py-1">
            <Search fontSize="small" className="text-white" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-2">
        {filteredSections.map((section) => (
          <div key={section.title} className="mb-4">
            {!collapsed && (
              <p className="text-xs text-gray-400 uppercase mb-2">{section.title}</p>
            )}

            <ul className="space-y-1">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-3 p-2 rounded cursor-pointer transition
                    ${
                      location.pathname === item.path
                        ? "bg-yellow-500 text-black"
                        : "hover:bg-gray-800"
                    }`}
                >
                  {item.icon}
                  {!collapsed && <span className="flex-1">{item.name}</span>}

                  
                  {item.badge && !collapsed && (
                    <span className="bg-red-500 text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-700 flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
          A
        </div>

        {!collapsed && (
          <div>
            <p className="text-sm font-semibold">Admin User</p>
            <p className="text-xs text-gray-400">{role.toUpperCase()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;