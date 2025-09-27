import axios from "axios"
import type { ExercisesResponse, LevelsResponse } from "../types/levels";

//Levels
export const level = async (lang: string): Promise<APIResponse<LevelsResponse>> => {
    const { data } = await axios.get(`${import.meta.env.VITE_API}/levels`, {
        headers: {
            "Accept-Language": lang
        }
    })
    return data;
}


//Get Exercises By Prime Mover Muscle and Difficulty Level
export const exercisees = async (lang: string, primeMoverMuscleId: string|undefined, difficultyLevelId: string|null): Promise<APIResponse<ExercisesResponse>> => {
    const { data } = await axios.get(`${import.meta.env.VITE_API}/exercises/by-muscle-difficulty`, {
        headers: {
            "Accept-Language": lang
        },
        params: {
            primeMoverMuscleId,
            difficultyLevelId
        },
    })
    return data
}