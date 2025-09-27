import axios from "axios";

export interface ChatTurn {
  sender: "user" | "ai";
  content: string;
}

export const generateBotResponse = async (history: ChatTurn[]) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string;
  const model = (import.meta.env.VITE_GEMINI_MODEL as string) || "gemini-2.0-flash";

  if (!apiKey) {
    throw new Error("Missing VITE_GEMINI_API_KEY env var");
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const contents = history.map(({ sender, content }) => ({
    role: sender === "user" ? "user" : "model",
    parts: [{ text: content }],
  }));

  try {
    const response = await axios.post(
      url,
      { contents },
      { headers: { "Content-Type": "application/json" } },
    );

    console.log(response);

    const text = response?.data?.candidates?.[0]?.content?.parts
      ?.map((p: { text?: string }) => p.text)
      .filter(Boolean)
      .join("\n");

    return text || "";
  } catch (error) {
    console.error("Gemini request failed", error);
    throw error;
  }
};
