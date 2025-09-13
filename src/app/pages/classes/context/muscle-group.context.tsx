import { getMuscleGroup } from "@/lib/api/workouts.api";
import { useQuery } from "@tanstack/react-query";
import { createContext, useState, type Dispatch, type SetStateAction } from "react";
import { useLocale } from "use-intl";

type TMusclesGroupContext = {
  muscleGroup: MusclesByGroup | undefined;
  muscleGroupId: string;
  setMuscleGroupId: Dispatch<SetStateAction<string>>;
  isFetching: boolean;
};

// eslint-disable-next-line react-refresh/only-export-components
export const musclesGroupContext = createContext<TMusclesGroupContext>({
  muscleGroup: undefined,
  muscleGroupId: "",
  setMuscleGroupId: () => {},
  isFetching: false,
});

export default function MuscleGroupProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const [muscleGroupId, setMuscleGroupId] = useState<string>("67c79f3526895f87ce0aa96f");

  const { data: muscleGroup, isFetching } = useQuery<MusclesByGroup>({
    queryKey: [`muscleGroup/${muscleGroupId}`],
    queryFn: async () => await getMuscleGroup(muscleGroupId, locale),
  });

  return (
    <musclesGroupContext.Provider
      value={{ muscleGroup, muscleGroupId, setMuscleGroupId, isFetching }}
    >
      {children}
    </musclesGroupContext.Provider>
  );
}
