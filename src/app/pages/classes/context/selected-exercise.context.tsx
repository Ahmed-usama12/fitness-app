import { createContext, useContext, useState} from "react";
import type { Exercise } from "@/lib/types/levels";

type SelectedExerciseContextType = {
  selectedExercise: Exercise | null;
  setSelectedExercise: (exercise: Exercise | null) => void;
};
//context
const SelectedExerciseContext = createContext<SelectedExerciseContextType | undefined>(undefined);

// Provider
export function SelectedExerciseProvider({ children }: { children: React.ReactNode }) {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  return (
    <SelectedExerciseContext.Provider value={{ selectedExercise, setSelectedExercise }}>
      {children}
    </SelectedExerciseContext.Provider>
  );
}

export function useSelectedExercise() {
  const context = useContext(SelectedExerciseContext);
  if (!context) {
    throw new Error("useSelectedExercise must be used within a SelectedExerciseProvider");
  }
  return context;
}
