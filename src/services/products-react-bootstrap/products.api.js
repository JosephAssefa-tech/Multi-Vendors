import axios from "axios";


// const API_URL = "http://localhost:60330/api/products";
// const CATEGORY_API_URL = "http://localhost:60330/api/Category";
// const BASE_URL = env.REACT_APP_API_BASE_URL;
const BASE_URL = "http://localhost:60330/api"//import.meta.env.VITE_API_BASE_URL;
const API_URL = `${BASE_URL}/product`;



export const getProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createProduct = async (productData) => {
  const res = await axios.post(API_URL, productData);
  return res.data;
};

export const updateProduct = async (id, productData) => {
  const res = await axios.put(`${API_URL}/${id}`, productData);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};