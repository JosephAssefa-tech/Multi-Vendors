import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const rows = [
  { id: 1, name: "iPhone 15", price: 1200, stock: 10 },
  { id: 2, name: "Nike Shoes", price: 150, stock: 20 },
];

function Products() {
  const products = useProductStore((state) => state.products);
  
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Product", width: 200 },
    { field: "name", headerName: "Category", width: 200 },
    { field: "price", headerName: "Price", width: 130 },
    { field: "stock", headerName: "Stock", width: 130 },
  ];

  return (
    <div>

      <div className="flex justify-between mb-4">

        <h2 className="text-2xl font-bold">
          Products
        </h2>

        <Button
          variant="contained"
          onClick={() => navigate("/admin/products/add")}
        >
          Add Product
        </Button>

      </div>

      <div style={{ height: 500 }}>
        <DataGrid rows={rows} columns={columns} />
      </div>

    </div>
  );
}

export default Products;