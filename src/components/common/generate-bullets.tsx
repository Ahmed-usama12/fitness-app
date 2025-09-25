import { cn } from "@/lib/utils";

export default function GenerateBullets({ count, current }: { count: number; current: number }) {
  return (
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
  );
}
