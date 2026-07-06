import React from "react";
import { Button } from "@mui/material";

const dummyVendors = [
  { id: 1, name: "John Doe", store: "John's Store", email: "john@example.com", active: true },
  { id: 2, name: "Jane Smith", store: "Jane's Shop", email: "jane@example.com", active: false }
];

function VendorList() {
  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Vendor List</h2>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Store</th>
            <th className="p-2">Email</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyVendors.map((vendor) => (
            <tr key={vendor.id} className="border-b">
              <td className="p-2">{vendor.name}</td>
              <td className="p-2">{vendor.store}</td>
              <td className="p-2">{vendor.email}</td>
              <td className="p-2">{vendor.active ? "Active" : "Inactive"}</td>
              <td className="p-2 flex gap-2">
                <Button variant="contained" size="small">Edit</Button>
                <Button variant="outlined" size="small" color="error">Deactivate</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VendorList;