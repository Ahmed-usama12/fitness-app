import axios from "axios";

export async function getMusclesGroup(locale: string) {
    const { data } = await axios.get<APIResponse<MusclesGroup>>(
        `https://fitness.elevateegy.com/api/v1/muscles`,
        {
            headers: { "accept-language": locale },
        },
    );

    return data;
}

export async function getMuscleGroup(id: string, locale: string) {
    try {
        const { data } = await axios.get<APIResponse<MusclesByGroup>>(
            `https://fitness.elevateegy.com/api/v1/musclesGroup/${id}`,
            {
                headers: { "accept-language": locale },
            },
        );
        if ("error" in data) throw new Error(data.error || "can't get the muscle group");
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) throw new Error(error.message);
        throw error;
    }
}