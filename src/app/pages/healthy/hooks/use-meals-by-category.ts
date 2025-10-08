import {  GetMealsByCategory, getMealsDetails } from "@/lib/api/meals-categories.api";
import { useQuery } from "@tanstack/react-query";

export default function useMeals(category: string) {
  console.log(category);
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["meals", category],
    queryFn: () => GetMealsByCategory(category),
    enabled: !!category,
  });

  return { payload:data, isLoading, error };
}



export const useMealsDataDetails = (id: string) => {
  const {
    data: payload,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["meals-details"],
    queryFn: () => getMealsDetails(id),
  });

  return { payload, isLoading, isError };
};
