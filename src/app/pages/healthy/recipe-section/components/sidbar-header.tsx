import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useGetMealsCategories } from "@/hooks/use-meals";

export default function SidbarHeader() {
  // Queris
  const { payload, isLoading } = useGetMealsCategories();
  console.log(payload);

  const check = "beef";

  return (
    <Carousel>
      <CarouselContent>
        {!isLoading && payload?.categories
          ? payload.categories.map((category: MealCategory) => (
              <CarouselItem key={category.idCategory} className="flex justify-center">
                <Button
                  variant={check === category.strCategory.toLowerCase() ? "default" : "ghost"}
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
