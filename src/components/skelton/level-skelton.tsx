import { Skeleton } from "@/components/ui/skeleton";

export default function LevelSkeleton() {
    return (
        <div className="flex gap-2 py-2 px-4 rounded-full">
            {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-xl p-2" />
            ))}
        </div>
    )
}
