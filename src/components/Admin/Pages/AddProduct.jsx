import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";

function AddProduct() {

  const categories = [
    "Electronics",
    "Clothing",
    "Books",
    "Home",
    "Sports"
  ];
const [variants, setVariants] = useState([
  { size: "", color: "", stock: "" }
]);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: ""
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setImages([...images, ...imageUrls]);
  };

  const handleSubmit = () => {
    console.log(product);
    console.log(images);
  };

  return (
    <div className="bg-white p-6 shadow rounded max-w-3xl">

      <h2 className="text-2xl font-bold mb-6">
        Add Product
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <TextField
          label="Product Name"
          name="name"
          fullWidth
          onChange={handleChange}
        />

        <TextField
          label="Price"
          name="price"
          type="number"
          fullWidth
          onChange={handleChange}
        />

        <TextField
          label="Stock"
          name="stock"
          type="number"
          fullWidth
          onChange={handleChange}
        />

        <TextField
          select
          label="Category"
          name="category"
          fullWidth
          onChange={handleChange}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

      </div>

      <div className="mt-4">

        <TextField
          label="Description"
          name="description"
          multiline
          rows={4}
          fullWidth
          onChange={handleChange}
        />

      </div>

      {/* Image Upload */}

      <div className="mt-6">

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
        />

      </div>

      {/* Image Preview */}

      <div className="flex gap-4 mt-4 flex-wrap">

        {images.map((img, index) => (
          <img
            key={index}
            src={img.preview}
            alt=""
            className="w-24 h-24 object-cover rounded border"
          />
        ))}

      </div>
<div className="mt-6">

<h3 className="font-bold mb-2">Product Variants</h3>

{variants.map((variant, index) => (

<div key={index} className="grid grid-cols-3 gap-3 mb-3">

<TextField label="Size" />

<TextField label="Color" />

<TextField label="Stock" />

</div>

))}

</div>
      <Button
        variant="contained"
        className="mt-6"
        onClick={handleSubmit}
      >
        Save Product
      </Button>

    </div>
  );
}

export default AddProduct;