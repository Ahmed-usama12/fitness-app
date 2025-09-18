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

export const useMealsDetails = (Id: string) => {
  const {
    data: payload,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["meals-details"],
    queryFn: () => getMealsDetails(Id),
  });

  return { payload, isLoading, isError };
};
