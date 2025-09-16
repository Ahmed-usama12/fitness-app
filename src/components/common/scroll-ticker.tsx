import star from "@assets/images/star.png";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useLocale, useTranslations } from "use-intl";
export default function ScrollTicker() {
  const t = useTranslations("hero-section");
  const content = [
    t("online-trainers"),
    t("personal-trainers"),
    t("live-classes"),
    t("personal-training"),
  ];
  const locale = useLocale();
  return (
    <Carousel
      opts={{
        align: "start",
        direction: locale === "ar" ? "rtl" : "ltr",
        loop: true,
      }}
      plugins={[
        AutoScroll({
          startDelay: 1000,
          speed: 1,
        }),
      ]}
      orientation="horizontal"
      className="bg-main w-full overflow-hidden"
    >
      <CarouselContent className="-mt-1 h-fit">
        {Array.from({ length: content.length * 3 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="flex w-fit basis-auto items-center gap-3 py-6 text-lg font-bold text-zinc-50"
          >
            <span>{content[index % content.length]}</span>
            <img src={star} className="size-5" alt="star icon" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
