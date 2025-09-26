import { Skeleton } from "@/components/ui/skeleton";

export default function ExerciseItemSkeleton() {
    return (
        <div className="w-1/4 p-4">
            {
                Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg">
                        <Skeleton className="size-12 rounded-lg flex-shrink-0" />
                        <div className="flex-1">
                            <Skeleton className="h-2 w-14 my-2"></Skeleton>
                            <Skeleton className="h-2 w-16 my-2"></Skeleton>
                            <Skeleton className="h-2 w-18 my-2"></Skeleton>
                        </div>
                        <Skeleton className="rounded-full size-8 p-0" />

                    </div>
                ))
            }
        </div>

    )
}
