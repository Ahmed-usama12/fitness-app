import axios from "axios";
import type { Register } from "@/lib/types/auth";

const API_URL = "https://fitness.elevateegy.com/api/v1/auth/signup";

export async function registerAction(data: Register) {
  const res = await axios.post(API_URL, data, {
    headers: { "Content-Type": "application/json" },
  });

  return res.data;
}
