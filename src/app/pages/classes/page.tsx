import WorkoutHeader from "./components/header";
import MuscleGroups from "./components/muscle-group";
import Navbar from "./components/navbar";

export default function Workouts() {
  return (
    <main className="relative min-h-[750px] bg-[url(@assets/images/workouts-background.jpg)] bg-cover text-center md:min-h-[1220px]">
      {/* workout header */}
      <WorkoutHeader />

      {/* background layer */}
      <div className="absolute top-0 left-0 h-full min-h-[350px] w-full bg-zinc-50/40 px-5 pt-8 backdrop-blur-3xl md:px-20 dark:bg-zinc-800/60"></div>

      {/* page components */}
      <div className="absolute z-10 mt-6 w-full space-y-5 px-5 md:px-20">
        <Navbar />

        <MuscleGroups />
      </div>
    </main>
  );
}
