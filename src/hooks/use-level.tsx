import { level } from "@/lib/api/exercise.api";
import type { LevelsResponse } from "@/lib/types/levels";
import { useQuery } from "@tanstack/react-query";

export function useLevels(lang: string) {
    return useQuery<APIResponse<LevelsResponse>>({
        queryKey: ["levels", lang],
        queryFn: () => level(lang),
    });
    
}
