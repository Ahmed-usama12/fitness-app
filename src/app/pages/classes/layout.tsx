import Workouts from "./page";
import MuscleGroupProvider from "./context/muscle-group.context";

export default function WorkoutsLayout() {
  return (
    <div className="pt-24 md:pt-36">
      <MuscleGroupProvider>
        <Workouts />
      </MuscleGroupProvider>
    </div>
  );
}
