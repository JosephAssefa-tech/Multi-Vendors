import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(product);
  };

  return (
    <div className="bg-white p-6 shadow rounded w-[500px]">

      <h2 className="text-xl font-bold mb-4">
        Add Product
      </h2>

      <div className="space-y-4">

        <TextField
          label="Product Name"
          name="name"
          fullWidth
          onChange={handleChange}
        />

        <TextField
          label="Price"
          name="price"
          fullWidth
          onChange={handleChange}
        />

        <TextField
          label="Stock"
          name="stock"
          fullWidth
          onChange={handleChange}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Save Product
        </Button>

      </div>

    </div>
  );
}

export default AddProduct;