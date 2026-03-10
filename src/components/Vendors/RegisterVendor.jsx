import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function RegisterVendor() {
  const [vendor, setVendor] = useState({ name: "", store: "", email: "", password: "" });

  const handleChange = (e) => setVendor({ ...vendor, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("Vendor submitted:", vendor);
  };

  return (
    <div className="bg-white p-6 shadow rounded max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Register Vendor</h2>

      <div className="grid grid-cols-2 gap-4">
        <TextField label="Name" name="name" fullWidth onChange={handleChange} />
        <TextField label="Store Name" name="store" fullWidth onChange={handleChange} />
        <TextField label="Email" name="email" fullWidth onChange={handleChange} />
        <TextField label="Password" name="password" type="password" fullWidth onChange={handleChange} />
      </div>

      <Button variant="contained" className="mt-4" onClick={handleSubmit}>
        Register Vendor
      </Button>
    </div>
  );
}

export default RegisterVendor;