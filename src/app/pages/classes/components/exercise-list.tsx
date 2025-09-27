import ExerciseItemSkeleton from "@/components/skelton/exercise-item-skeleton";
import { useExercises } from "@/hooks/use-exercise";
import { useLocale } from "use-intl";
import ExerciseItem from "./exercise-item";
import type { Exercise } from "@/lib/types/levels";
import { useSelectedExercise } from "../context/selected-exercise.context";
import { useEffect } from "react";

type props = {
    id: string | undefined
    level: string | null
}
export default function ExerciseList({ id, level }: props) {
    //Locale
    const locale = useLocale()

    //Use hooks
    const { data: list, isLoading } = useExercises(locale, id, level);
    const { setSelectedExercise } = useSelectedExercise()
    useEffect(() => {
        if (list?.exercises?.length) {
            setSelectedExercise(list.exercises[0]);
        }
    }, [list]);

    //Skeleton
    if (isLoading) return <ExerciseItemSkeleton />;

    return (
        <div className="p-4">
            {list?.exercises.map((item: Exercise) => <ExerciseItem key={item._id} item={item} />
            )}
        </div>
    )


}
