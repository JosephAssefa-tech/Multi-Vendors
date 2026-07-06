import * as Yup from "yup";

const ValidationSchema = Yup.object({
  productName: Yup.string()
    .required("Product name is required")
    .min(3, "Minimum 3 characters"),

  category: Yup.number()
    .required("Category is required"),

  brand: Yup.string()
    .required("Brand is required"),

  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),

  stock: Yup.number()
    .required("Stock is required")
    .min(0, "Stock cannot be negative"),

  // imageUrl: Yup.string()
  //   .url("Invalid URL"),

  description: Yup.string()
    .required("Description is required")
    .min(20, "Description must be at least 20 characters"),
});

export default ValidationSchema;