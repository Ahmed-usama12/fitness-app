declare type MuscleGroup = { _id: string; name: string };

declare type MusclesGroup = {
  musclesGroup: MuscleGroup[];
};

declare type Muscle = { _id: string; name: string; image: string };

declare type MusclesByGroup = { muscleGroup: MuscleGroup; muscles: Muscle[] };
