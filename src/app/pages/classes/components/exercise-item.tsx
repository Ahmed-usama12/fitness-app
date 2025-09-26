import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import Image from "@/assets/images/9fc1479991afbe3e06994af84a9152cffeefc8d9.jpg"
import type { Exercise } from '@/lib/types/levels'
import { useSelectedExercise } from '../context/selected-exercise.context'

export default function ExerciseItem({ item }: { item: Exercise }) {
    const { setSelectedExercise } = useSelectedExercise()

    return (
        <div className="flex items-center gap-4 p-3 font-baloo rounded-lg cursor-pointer hover:bg-gray-800 transition-colors border-b border-b-[#2D2D2D]"
            onClick={() => setSelectedExercise(item)}
        >
            <div
                className="size-12 bg-gray-700 rounded-lg flex-shrink-0"
            >
                <img
                    src={Image}
                    alt="Exercise"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="flex-1">
                <h3 className="font-medium text-xl  text-white">
                    {item.exercise.length > 15
                        ? item.exercise.slice(0, 15) + "..."
                        : item.exercise}</h3>

                <p className="text-sm text-gray-400">target muscle is {item.target_muscle_group}</p>
                <p className="text-xs text-gray-500">{item.primary_equipment}</p>
            </div>
            <Button icon={false} className="bg-main rounded-full size-8 p-0">
                <Play className="size-4" />
            </Button>
        </div>
    )
}
