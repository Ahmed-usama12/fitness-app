import { createContext } from "react";
import type { StepsResetPassContext } from "./types";

export const StepsResetPass = createContext<StepsResetPassContext | undefined>(undefined);
