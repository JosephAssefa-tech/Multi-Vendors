import axios from "axios";

// const API_URL = "http://localhost:60330/api/products";
// const CATEGORY_API_URL = "http://localhost:60330/api/Category";
// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
// const CATEGORY_API_URL = `${BASE_URL}/Category`;

const BASE_URL = "http://localhost:60330/api"//import.meta.env.VITE_API_BASE_URL;
const API_URL = `${BASE_URL}/category`;



export const getCategories = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
