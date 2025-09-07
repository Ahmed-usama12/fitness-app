import { useState, type ReactNode } from "react";
import { StepsResetPass } from "./context";

interface StepsRestPassProviderProps {
  children: ReactNode;
}

export default function StepsRestPassProvider({ children }: StepsRestPassProviderProps) {
  const [step, setStep] = useState("one");
  return <StepsResetPass.Provider value={{ step, setStep }}>{children}</StepsResetPass.Provider>;
}
