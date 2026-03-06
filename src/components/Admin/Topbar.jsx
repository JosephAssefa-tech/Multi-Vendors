import React from "react";
import { Avatar } from "@mui/material";

function Topbar() {
  return (
    <div className="bg-white shadow flex justify-between items-center px-6 py-4">

      <h1 className="text-xl font-bold">
        Admin Dashboard
      </h1>

      <Avatar />

    </div>
  );
}

export default Topbar;