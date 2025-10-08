import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useMealsCategories from "../../hooks/use-meals-categories";


export default function SidbarHeader({currentCategories}:{currentCategories:string}) {
  const { categories ,isLoading } = useMealsCategories();
  return (
    <Carousel>
      <CarouselContent>
        {!isLoading && categories
          ? categories.map((category: MealCategory) => (
              <CarouselItem key={category.idCategory} className="flex justify-center">
                <Button
                  variant={currentCategories === category.strCategory.toLowerCase() ? "default" : "ghost"}
                  icon={false}
                >
                  {category.strCategory}
                </Button>
              </CarouselItem>
            ))
          : "loading"}
      </CarouselContent>
    </Carousel>
  );
}
