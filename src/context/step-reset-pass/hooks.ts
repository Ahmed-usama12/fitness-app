import { useContext } from "react";
import { StepsResetPass } from "./context";

export function useStepResetPass() {
  const ctx = useContext(StepsResetPass);
  if (!ctx) throw new Error("useStepResetPass must be used within StepsRestPassProvider");
  return ctx;
}
