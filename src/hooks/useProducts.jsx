import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/products-react-bootstrap/products.api";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}