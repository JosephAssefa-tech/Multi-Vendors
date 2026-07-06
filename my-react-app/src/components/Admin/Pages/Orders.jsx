import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    customer: "John",
    total: 1200,
    status: "Pending"
  },
  {
    id: 2,
    customer: "Mike",
    total: 300,
    status: "Delivered"
  }
];

function Orders() {

  const columns = [
    { field: "id", headerName: "Order ID", width: 120 },
    { field: "customer", headerName: "Customer", width: 200 },
    { field: "total", headerName: "Total", width: 150 },
    { field: "status", headerName: "Status", width: 150 }
  ];

  return (
    <div style={{ height: 500 }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default Orders;