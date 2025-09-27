import { getMealsCategories, getMealsDetails } from "@/lib/api/meals.api";
import { useQuery } from "@tanstack/react-query";

export const useGetMealsCategories = () => {
  const {
    data: payload,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["meals-categories"],
    queryFn: getMealsCategories,
  });

  return { payload, isLoading, isError };
};

export const useMealsDetails = (id: string) => {
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
