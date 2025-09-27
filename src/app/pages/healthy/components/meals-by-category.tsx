import React from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import GenerateBullets from "@/components/common/generate-bullets";
import useMeals from "../hooks/use-meals-by-category";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import { useLocale, useTranslations } from "use-intl";
import SkeletonMealsGrid from "./meals-skeleton";

type MealsNavbarProps = {
  selectedCategory: string | null;
};
export default function MealsGrid({ selectedCategory }: MealsNavbarProps) {
  const { payload, isLoading } = useMeals(selectedCategory||"");
  // Hooks

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  console.log(payload);
  

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Display Six Meals in Every Page
  const pages: Meal[][] = [];
  if (payload?.meals) {
    for (let i = 0; i < payload.meals.length; i += 6) {
      pages.push(payload.meals.slice(i, i + 6));
    }
  }
  // Translition
  const t = useTranslations();
  const locale = useLocale();
  if (isLoading) {
    return (
      <div className="text-center">
        <SkeletonMealsGrid />
      </div>
    );
  }

  return (
    <>
      {(payload?.meals ?? []).length > 0 ? (
        <Carousel
          opts={{ align: "start", slidesToScroll: 1 }}
          setApi={setApi}
          className="mx-auto w-full max-w-5xl"
        >
          <CarouselContent>
            {pages.map((page, index) => (
              <CarouselItem key={index} className="basis-full">
                {/* Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {page.map((meal) => (
                    <Link
                      to={`/healthy/${meal.idMeal}`}
                      key={meal.idMeal}
                      className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
                    >
                      {/* Meals Image */}
                      <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="h-72 w-full object-cover"
                      />
                      {/* Meals Name */}
                      <div className="absolute bottom-0 flex w-full flex-col gap-1 rounded-b-xl bg-radial-[at_25%_25%] from-neutral-200 to-neutral-400 p-3 py-4 opacity-95 dark:from-stone-600 dark:to-stone-800">
                        <h3 className="flex justify-start text-sm font-semibold text-zinc-800 dark:text-white">
                          {meal.strMeal}
                        </h3>
                        {/* Go To Meal Details Page */}
                        <Link
                          to={`/healthy/${meal.idMeal}`}
                          className="text-main flex items-center gap-2 text-sm font-medium sm:text-base"
                        >
                          {t("explore")}
                          {locale === "ar" ? (
                            <ArrowUpLeft className="bg-main h-5 w-5 rounded-full p-1 text-black" />
                          ) : (
                            <ArrowUpRight className="bg-main h-5 w-5 rounded-full p-1 text-black" />
                          )}{" "}
                        </Link>
                      </div>
                    </Link>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Bullets */}
          <div className="pb-5">
            {count > 1 && <GenerateBullets count={count} current={current} />}
          </div>
        </Carousel>
      ) : (
        <p className="text-main mt-20 text-center text-lg font-bold">{t("no-meals")}</p>
      )}
    </>
  );
}
