import LevelsTabs from "./level-tabs"
import { useEffect, useState } from "react";
import { useLocale } from "use-intl";
import { useLevels } from "@/hooks/use-level";
import MealsCarsousel from "./meals-carsousel";
import Arrows from "./arrows";
import WorkoutHeader from "./header";
import { useParams } from "react-router-dom";
import type { Exercise } from "@/lib/types/levels";
import ExerciseList from "./exercise-list";
import Video from "./video";

export default function Exercise() {
    //States
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

    //Locale
    const lang = useLocale()

    //Id
    const { id } = useParams<{ id: string | undefined }>();

    //Use hooks
    const { data } = useLevels(lang);

    //To selected level when page load
    useEffect(() => {
        if (data && "levels" in data && data.levels.length > 0 && !selectedLevel) {
            setSelectedLevel(data.levels[0]._id);
        }
    }, [data, selectedLevel]);

    return (

        <div className="mx-10 min-h-screen mt-30 mb-10">
            {/*workout header*/}
            <WorkoutHeader />

            {/*content*/}
            <div className="flex gap-4  " >
                {/*Exercise section*/}
                <section className="w-1/4 text-white py-4  border-2 border-[#282828] rounded-[20px]">
                    {/*level tabs*/}
                    <LevelsTabs
                        lang={lang}
                        selectedLevel={selectedLevel}
                        onChange={setSelectedLevel}
                    />

                    {/*Exercises*/}
                    <ExerciseList id={id} level={selectedLevel} />

                </section>

                {/*Meals and show video*/}
                <section className="w-3/4">
                    {/*Video*/}
                    <Video/>

                    {/*arrows*/}
                    <Arrows />
                    {/*Meals*/}
                    <MealsCarsousel />
                </section>
            </div>
        </div>
    )
}
