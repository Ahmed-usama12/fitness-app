import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useMealsCategories from "../hooks/use-meals-categories";

type MealsNavbarProps = {
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function MealsNavbar({ selectedCategory, setSelectedCategory }: MealsNavbarProps) {
  //  Hook
  const { categories, locale } = useMealsCategories();

  return (
    // Categories Navbar
    <nav className="mx-auto mt-5 w-full max-w-4xl">
      {categories?.length > 0 && (
        <Carousel
          opts={{
            align: "start",
            direction: locale === "ar" ? "rtl" : "ltr",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {categories.map((item) => {
              const isActive = selectedCategory === item.strCategory;

              return (
                <CarouselItem
                  key={item.idCategory}
                  className="flex basis-1/3 justify-center md:basis-1/6"
                >
                  {/* Category Name */}
                  <Button
                    icon={false}
                    variant="ghost"
                    className={cn(
                      "w-28 rounded-xl transition",
                      isActive
                        ? "bg-main rounded-4xl text-white"
                        : "hover:bg-main/20 bg-transparent text-zinc-800 hover:rounded-4xl dark:text-white",
                    )}
                    onClick={() => setSelectedCategory(item.strCategory)}
                  >
                    {item.strCategory}
                  </Button>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      )}
    </nav>
  );
}
