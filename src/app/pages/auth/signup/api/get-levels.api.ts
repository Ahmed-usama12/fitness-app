import axios from "axios";
import type { Level, LevelsResponse } from "@/lib/types/levels";

const API_URL = "https://fitness.elevateegy.com/api/v1/levels";

export async function getLevels(lang: "en" | "ar" = "en"): Promise<Level[]> {
  const res = await axios.get<LevelsResponse>(API_URL, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });

  if (res.status !== 200) {
    throw new Error("Failed to fetch levels");
  }

  return res.data.levels;
}
