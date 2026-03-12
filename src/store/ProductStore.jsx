import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,

  fetchProducts: async () => {
    set({ loading: true });

    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      set({
        products: data.products,
        loading: false
      });

    } catch (error) {
      console.error("Error fetching products", error);
      set({ loading: false });
    }
  }
}));