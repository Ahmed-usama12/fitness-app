import type { Register } from "@/lib/types/auth";

const API_URL = "https://fitness.elevateegy.com/api/v1/auth/signup";

export async function registerAction(data: Register) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to register");
  }

  return res.json();
}
