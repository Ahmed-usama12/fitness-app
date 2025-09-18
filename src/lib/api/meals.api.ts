import axios from "axios";

// Get Meals Categories
export const getMealsCategories = async () => {
  try {
    const { data }: { data: APIResponse<MealsCategoriesResponse> } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
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

// Get Meals Categories
export const getMealsDetails = async (Id: string) => {
  try {
    const { data }: { data: APIResponse<MealsByIdOrSearchResponse> } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Id}`,
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
