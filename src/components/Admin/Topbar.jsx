import React from "react";
import { Avatar } from "@mui/material";
import Nav from 'react-bootstrap/Nav';

function Topbar() {
  return (
    <div className="bg-white shadow flex justify-between items-center px-6 py-4">

      <h1 className="text-xl font-bold">
        Admin Dashboard
      </h1>
      <Nav.Link href="/admin/profile" className="flex items-center space-x-2">
       <img
       className="w-50 h-20 rounded-full object-cover"
    src="../../src/assets/logo.png"
    alt="User"
    className="w-10 h-10 rounded-full object-cover"
  />
  </Nav.Link>

    </div>
  );
}

export default Topbar;