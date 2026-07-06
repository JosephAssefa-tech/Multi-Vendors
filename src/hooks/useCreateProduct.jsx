import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../services/products-react-bootstrap/products.api";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,

    onSuccess: () => {
      // refresh product list
      queryClient.invalidateQueries(["products"]);
    },
  });
}