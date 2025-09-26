import LevelSkeleton from "@/components/skelton/level-skelton";
import { Button } from "@/components/ui/button";
import { useLevels } from "@/hooks/use-level";
import type { Level } from "@/lib/types/levels";

type LevelsTabsProps = {
    lang: string;
    selectedLevel: string | null;
    onChange: (id: string) => void;
};

export default function LevelsTabs({ lang, selectedLevel, onChange }: LevelsTabsProps) {
    //Lang
    const { data, isLoading, error } = useLevels(lang);

    //Filter levels
    const allowedNames = {
        en: ["Beginner", "Intermediate", "Advanced"],
        ar: ["مبتدئ", "متوسط", "متقدم"],
    };

    if (isLoading) return <LevelSkeleton />;
    if (error || !data || "error" in data) {
        return <p className="text-red-500">error</p>;
    } else {
        const displayedLevels = data.levels.filter((lvl: Level) =>
            [...allowedNames.en, ...allowedNames.ar].includes(lvl.name)
        );

        return (
            <div className="flex gap-2 py-2 px-4 rounded-full">
                {displayedLevels.map((lvl: Level) => (
                    <Button
                        icon={false}
                        key={lvl._id}
                        onClick={() => onChange(lvl._id)}
                        className={`p-2 text-sm font-baloo font-extrabold rounded-full transition ${selectedLevel === lvl._id
                            ? "bg-main text-white"
                            : "bg-transparent text-[#D3D3D3] hover:bg-gray-700"
                            }`}
                    >
                        {lvl.name}
                    </Button>
                ))}
            </div>
        );
    }
}
