import React, { useState } from "react";
import { TextField, Button, MenuItem, IconButton } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import {useProductStore} from "../../../store/ProductStore";

function AddProduct() {
  const addProduct = useProductStore((state) => state.addProduct);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      variants: [{ size: "", color: "", stock: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants"
  });

  const [images, setImages] = useState([]);

  const categories = [
    "Electronics",
    "Clothing",
    "Books",
    "Home",
    "Sports"
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setImages((prev) => [...prev, ...imageUrls]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

const onSubmit = async (data) => {
  const productData = {
    ...data,
    images
  };

  await addProduct(productData);

  console.log("Saved to Zustand:", productData);
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 ml-24 mr-24 shadow rounded "
    >

      <h2 className="text-2xl font-bold mb-6">
        Add Product
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

        <TextField
          label="Product Name"
          {...register("name", { required: true })}
          fullWidth
        />

        <TextField
          label="Price"
          type="number"
          {...register("price", { required: true })}
          fullWidth
        />

        <TextField
          label="Stock"
          type="number"
          {...register("stock")}
          fullWidth
        />

        <TextField
          select
          label="Category"
          {...register("category")}
          fullWidth
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
          multiline
          rows={4}
          {...register("description")}
          fullWidth
        />

      </div>



      <div className="mt-6">

        <label className="cursor-pointer inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">

          Upload Images

          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />

        </label>

      </div>



      <div className="flex gap-4 mt-4 flex-wrap">

        {images.map((img, index) => (

          <div key={index} className="relative">

            <img
              src={img.preview}
              alt=""
              className="w-60 h-60 object-cover rounded border"
            />

            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 bg-red-500  rounded-full px-2 text-black transition"
            >
              x
            </button>

          </div>

        ))}

      </div>

     

      <div className="mt-6">

        <h3 className="font-bold mb-2">
          Product Variants
        </h3>

        {fields.map((field, index) => (

          <div
            key={field.id}
            className="grid grid-cols-4 gap-3 mb-3 items-center"
          >

            <TextField
              label="Size"
              {...register(`variants.${index}.size`)}
            />

            <TextField
              label="Color"
              {...register(`variants.${index}.color`)}
            />

            <TextField
              label="Stock"
              type="number"
              {...register(`variants.${index}.stock`)}
            />

            <IconButton
              color="error"
              onClick={() => remove(index)}
            >
              <DeleteIcon />
            </IconButton>

          </div>

        ))}

        <Button 
       
          type="button"
          variant="outlined"
          onClick={() =>
            append({ size: "", color: "", stock: "" })
          }
        >
          Add Variant
        </Button>

      </div>



      <Button
        type="submit"
        variant="contained"
        className="mt-8"
      >
        Save Product
      </Button>

    </form>
  );
}

export default AddProduct;