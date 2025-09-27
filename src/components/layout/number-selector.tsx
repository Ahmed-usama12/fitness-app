import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

interface NumberCarouselSelectorProps {
  title: string;
  min: number;
  max: number;
  defaultValue?: number;
  step?: number;
  unit?: string;
  onChange?: (value: number) => void;
  className?: string;
}

export function NumberCarouselSelector({
  title,
  min,
  max,
  defaultValue = min,
  step = 1,
  unit = "",
  onChange,
  className,
}: NumberCarouselSelectorProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    loop: false,
  });

  const [selectedValue, setSelectedValue] = useState(defaultValue);

  // Generate array of values
  const values: number[] = [];
  for (let i = min; i <= max; i += step) {
    values.push(i);
  }

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    const newValue = values[selectedIndex];
    setSelectedValue(newValue);
    onChange?.(newValue);
  }, [emblaApi, values, onChange]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);

    const initialIndex = values.findIndex((value) => value === defaultValue);
    if (initialIndex !== -1) {
      emblaApi.scrollTo(initialIndex, true);
      setSelectedValue(defaultValue);
    }

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, values, defaultValue, onSelect]);

  return (
    <div className={cn("w-full max-w-sm mx-auto", className)}>
      {/* Title */}
      <div className="text-center mb-3">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {values.map((value, index) => {
              const selectedIndex = emblaApi?.selectedScrollSnap() ?? 0;
              const distance = Math.abs(index - selectedIndex);

              // Styles based on distance from center
              let styleClass = "text-foreground/20 font-normal scale-90";
              if (distance === 0) {
                styleClass = "text-foreground font-bold scale-125";
              } else if (distance === 1) {
                styleClass = "text-foreground/60 font-semibold scale-105";
              } else if (distance === 2) {
                styleClass = "text-foreground/40 font-medium scale-95";
              }

              return (
                <div
                  key={value}
                  className="flex-[0_0_20%] min-w-0 text-center py-4"
                >
                  <span
                    className={cn(
                      "text-2xl transition-all duration-200",
                      styleClass
                    )}
                  >
                    {value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pointer (triangle) */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2">
          <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-blue-500" />
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          Selected: {selectedValue} {unit}
        </p>
      </div>
    </div>
  );
}
