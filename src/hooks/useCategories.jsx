import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/products-react-bootstrap/category.api";

export function useCategories() {
  return useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });
}