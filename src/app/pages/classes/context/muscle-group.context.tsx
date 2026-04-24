import { getMuscleGroup } from "@/lib/api/workouts.api";
import { useQuery } from "@tanstack/react-query";
import { createContext, useState, type Dispatch, type SetStateAction } from "react";
import { useLocale } from "use-intl";

// context type
type TMusclesGroupContext = {
  muscleGroup: MusclesByGroup | undefined;
  muscleGroupId: string;
  setMuscleGroupId: Dispatch<SetStateAction<string>>;
  isFetching: boolean;
  error: Error | null;
};

// eslint-disable-next-line react-refresh/only-export-components
export const musclesGroupContext = createContext<TMusclesGroupContext>({
  muscleGroup: undefined,
  muscleGroupId: "",
  setMuscleGroupId: () => {},
  isFetching: false,
  error: null,
});

export default function MuscleGroupProvider({ children }: { children: React.ReactNode }) {
  // locale
  const locale = useLocale();

  const [muscleGroupId, setMuscleGroupId] = useState<string>("");

  // fetch muscle group by id
  const {
    data: muscleGroup,
    isFetching,
    error,
  } = useQuery<MusclesByGroup>({
    queryKey: [`muscleGroup/${muscleGroupId}`],
    queryFn: async () => await getMuscleGroup(muscleGroupId, locale),
    enabled: !!muscleGroupId,
  });

  return (
    // Muscle group provider
    <musclesGroupContext.Provider
      value={{ muscleGroup, muscleGroupId, setMuscleGroupId, isFetching, error }}
    >
      {children}
    </musclesGroupContext.Provider>
  );
}
