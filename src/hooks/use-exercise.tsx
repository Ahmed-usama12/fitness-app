import { exercisees } from "@/lib/api/exercise.api";
import { useQuery } from "@tanstack/react-query";

export const useExercises = (
    lang: string,
    primeMoverMuscleId: string|undefined,
    difficultyLevelId: string|null
) => {
    return useQuery({
        queryKey: ["exercises", lang, primeMoverMuscleId, difficultyLevelId],
        queryFn: () => exercisees(lang, primeMoverMuscleId, difficultyLevelId),
        enabled: !!primeMoverMuscleId && !!difficultyLevelId, 
    });
};
