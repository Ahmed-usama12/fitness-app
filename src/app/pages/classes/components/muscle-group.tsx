import React, { useContext } from "react";
import { musclesGroupContext } from "@/app/pages/classes/context/muscle-group.context";
import MuscleCard from "@/components/common/muscle-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "use-intl";

import CardLoading from "@/components/common/card-loading";
import { isMobileContext } from "@/components/providers/components/mobile.provider";

export default function MuscleGroups() {
  const { muscleGroup, isFetching } = useContext(musclesGroupContext);
  const t = useTranslations();
  const locale = useLocale();
  const { isMobile } = useContext(isMobileContext);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const group = muscleGroup?.muscles ?? [];

  const pages = [];
  for (let i = 0; i < group.length; i += 6) {
    pages.push(group.slice(i, i + 6));
  }

  return (
    <CardLoading status={isFetching}>
      {group.length > 0 ? (
        <Carousel
          opts={{
            align: "start",
            direction: locale === "ar" ? "rtl" : "ltr",
            slidesToScroll: 1,
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {isMobile
              ? group.map((item) => (
                  <CarouselItem key={item._id} className="basis:full h-300px sm:basis-1/2">
                    <MuscleCard item={item} />
                  </CarouselItem>
                ))
              : pages.map((page, index) => (
                  <CarouselItem key={index} className="basis:full">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                      {page.map((item) => (
                        <div key={item._id} className="h-[300px] md:h-[400px]">
                          <MuscleCard item={item} />
                        </div>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
          </CarouselContent>
          {count > 1 && (
            <div className="mx-auto mt-8 flex w-fit gap-3">
              {Array.from({ length: count }).map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "block size-3 rounded-full bg-zinc-800 dark:bg-zinc-50",
                    current === index + 1 && "!bg-main w-6",
                  )}
                ></span>
              ))}
            </div>
          )}
        </Carousel>
      ) : (
        <div className="font-baloo text-main mt-20 text-3xl font-bold">{t("no-items")}</div>
      )}
    </CardLoading>
  );
}
