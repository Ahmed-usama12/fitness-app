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

export default function Muscle() {
  const { muscleGroup, isFetching } = useContext(musclesGroupContext);
  const { isMobile } = useContext(isMobileContext);
  const t = useTranslations();
  const locale = useLocale();
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

  return (
    <CardLoading status={isFetching}>
      {group.length > 0 ? (
        <Carousel
          opts={{
            align: "start",
            direction: locale === "ar" ? "rtl" : "ltr",
            slidesToScroll: isMobile ? 1 : 3,
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {group.map((item) => (
              <CarouselItem
                key={item._id}
                className="basis:full h-300px sm:basis-1/2 md:h-[400px] md:basis-1/3"
              >
                <MuscleCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {count > 1 && (
            <div className="mx-auto mt-8 flex w-fit gap-3">
              {Array.from({ length: count }).map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "block size-3 rounded-full bg-zinc-800",
                    current === index + 1 && "bg-main w-6",
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
