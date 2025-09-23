// Categories of meals
import axios from "axios";

export async function GetMealsCategories(locale: string): Promise<MealsCategoriesResponse> {
  const { data } = await axios.get<MealsCategoriesResponse>(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    { headers: { "accept-language": locale } },
  );

  if (!data.categories) {
    throw new Error("No categories found");
  }

  return data;
}

// meals by category
export async function GetMealsByCategory(category: string) {
  const { data } = await axios.get<MealsResponse>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  return data;
}
