export const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data.products;
};

export const fetchCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json();

  return data; 
};