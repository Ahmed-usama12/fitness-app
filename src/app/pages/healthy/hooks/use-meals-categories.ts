import { GetMealsCategories } from "@/lib/api/meals-categories.api";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "use-intl";

export default function useMealsCategories() {
  const locale = useLocale();

  const { data, isLoading, error } = useQuery<MealsCategoriesResponse>({
    queryKey: ["mealsCategories", locale],
    queryFn: () => GetMealsCategories(locale),
  });

  const categories = data?.categories ?? [];

  return { locale, categories, isLoading, error };
}
