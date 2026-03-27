import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,

//   fetchProducts: async () => {
//     set({ loading: true });

//     try {
//       const res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();

//       set({
//         products: data.products,
//         loading: false
//       });

//     } catch (error) {
//       console.error("Error fetching products", error);
//       set({ loading: false });
//     }
//   }

// Add product (local state)
  addProduct: async (product) => {
    set({ loading: true });

    try {
      //  Later replace with your .NET API
      // const res = await fetch('/api/products', { method: 'POST', body: JSON.stringify(product) });

      const newProduct = {
        ...product,
        id: Date.now(), // temp ID
        createdAt: new Date()
      };

      set((state) => ({
        products: [...state.products, newProduct],
        loading: false
      }));

    } catch (err) {
      set({ error: err.message, loading: false });
    }
  }


}));