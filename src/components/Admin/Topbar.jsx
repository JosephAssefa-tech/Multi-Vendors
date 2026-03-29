import React from "react";
import { Avatar } from "@mui/material";

function Topbar() {
  return (
    <div className="bg-white shadow flex justify-between items-center px-6 py-4">

      <h1 className="text-xl font-bold">
        Admin Dashboard
      </h1>

      {/* <Avatar /> */}
       <img
    src="../../assets/logo.png"
    alt="User"
    className="w-10 h-10 rounded-full object-cover"
  />

    </div>
  );
}

export default Topbar;