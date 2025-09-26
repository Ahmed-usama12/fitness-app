import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import useNavbar from "../hooks/use-navbar";
import { cn } from "@/lib/utils";

export default function Navbar() {
    // hook
    const { groups, locale, t, muscleGroupId, setMuscleGroupId } = useNavbar();

    return (
        <>
            {/* navbar paragraph */}
            <p className="font-baloo mx-auto max-w-xl text-3xl font-bold md:text-[40px]">
                {t.rich("nav-paragraph", { span: (value) => <span className="text-main">{value}</span> })}
            </p>

            <nav className="mx-auto mt-10 w-full md:w-2/3">
                {groups?.length > 0 && (
                    <Carousel
                        opts={{
                            align: "start",
                            direction: locale === "ar" ? "rtl" : "ltr",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {/* Muscles */}
                            {groups.map((item) => (
                                <CarouselItem key={item._id} className="basis-1/3 md:basis-1/6">
                                    <Button onClick={() => {
                                        setMuscleGroupId(item._id);
                                    }}
                                        icon={false}
                                        variant={"ghost"}
                                        className={cn(
                                            "w-28 text-zinc-800 dark:text-white",
                                            item._id === muscleGroupId &&
                                            "bg-main hover:bg-main pointer-events-none rounded-full text-white",
                                        )}
                                    >
                                        {item.name}
                                    </Button>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                )}
            </nav>
        </>
    );
}