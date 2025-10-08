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
  try {
    const { data } : { data: APIResponse<MealsResponse> }= await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );

    if ("error" in data) throw new Error(data.error);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
    }
    throw error;
  }
 
}



// Get  Details
export const getMealsDetails = async (id: string) => {
  try {
    const { data }: { data: APIResponse<MealsByIdOrSearchResponse> } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );

    if ("error" in data) throw new Error(data.error);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
    }
    throw error;
  }
};
