import { GetMealsByCategory } from "@/lib/api/meals-categories.api";
import { useQuery } from "@tanstack/react-query";

export default function useMeals(category: string | null) {
  const { data, isLoading, error } = useQuery<MealsResponse>({
    queryKey: ["meals", category],
    queryFn: () => {
      if (!category) return Promise.resolve({ meals: [] });
      return GetMealsByCategory(category);
    },
    enabled: !!category,
  });

  const meals = data?.meals ?? [];

  return { meals, isLoading, error };
}
