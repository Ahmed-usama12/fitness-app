import WorkoutHeader from "@/app/pages/classes/components/header";
import Navbar from "@/app/pages/classes/components/navbar";
import MuscleGroupProvider from "@/app/pages/classes/context/muscle-group.context";

import Muscle from "./components/muscle";

export default function WorkoutSection() {
  return (
    <MuscleGroupProvider>
      <section className="relative my-10 min-h-[820px] bg-[url(@assets/images/workouts-background.jpg)] bg-cover pt-7 text-center">
        {/* Section header */}
        <WorkoutHeader />

        <div className="absolute left-0 z-0 min-h-[450px] w-full bg-zinc-50/60 px-5 pt-8 backdrop-blur-3xl md:px-20 dark:bg-zinc-800/40"></div>

        {/* Provider to support muscles group and muscle group id */}
        <MuscleGroupProvider>
          <div className="absolute top-32 left-0 z-10 w-full space-y-8 px-5 md:px-20">
            {/* muscles navbar */}
            <Navbar />

            {/* muscle group */}
            <Muscle />
          </div>
        </MuscleGroupProvider>
      </section>
    </MuscleGroupProvider>
  );
}
