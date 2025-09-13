import WorkoutHeader from "./components/header";
import Navbar from "./components/navbar";
import MuscleGroups from "./components/muscle-group";

export default function Workouts() {
  return (
    <main className="relative min-h-[700px] bg-[url(@assets/images/workouts-background.jpg)] bg-cover text-center md:min-h-[1220px]">
      <WorkoutHeader />
      <div className="absolute top-0 left-0 h-full min-h-[350px] w-full bg-zinc-800/60 px-5 pt-8 backdrop-blur-3xl md:px-20"></div>
      <div className="absolute z-10 mt-6 w-full space-y-5 px-5 md:px-20">
        <Navbar />

        <MuscleGroups />
      </div>
    </main>
  );
}
