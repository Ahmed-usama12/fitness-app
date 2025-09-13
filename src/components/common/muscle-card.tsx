import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

import { MoveUpRight } from "lucide-react";
import { useTranslations } from "use-intl";

export default function MuscleCard({ item }: { item: Muscle }) {
  const t = useTranslations();
  return (
    <Card className="font-baloo h-full w-full max-w-sm overflow-hidden rounded-2xl p-0">
      <CardContent className="relative size-full p-0">
        {/* image */}
        <Link to={`/classes/${item._id}`}>
          {item.image ? (
            <img src={item.image} className="size-full object-cover" />
          ) : (
            <div className="size-full content-center bg-zinc-200 text-2xl text-zinc-400">
              No Photo
            </div>
          )}
        </Link>
        {/* card title */}
        <div className="absolute bottom-0 z-10 flex h-1/4 w-full flex-col bg-zinc-50/40 p-2 text-start backdrop-blur-3xl md:space-y-2 md:p-4 dark:bg-zinc-800/60">
          {/* name */}
          <span className="text-sm font-bold tracking-widest uppercase md:text-2xl">
            {item.name}
          </span>

          {/* explore button */}
          <Link
            to={`/classes/${item._id}`}
            className="text-main flex w-fit gap-5 text-sm font-medium md:text-xl"
          >
            {t("explore")}

            {/* icon */}
            <div className="bg-main flex size-4 items-center justify-center rounded-full text-white md:size-6">
              <MoveUpRight className="size-4/5" />
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
