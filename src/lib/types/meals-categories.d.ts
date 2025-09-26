declare type MealsCategory = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

declare type MealsCategoriesResponse = {
  categories: Category[];
};

declare type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

declare type MealsResponse = {
  meals: Meal[];
};
