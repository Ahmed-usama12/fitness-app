import { createContext, useContext, useEffect, useState } from "react";
import type { Register } from "@/lib/types/auth";

// 1) define context type
type RegisterContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData: Register;
  setFormData: React.Dispatch<React.SetStateAction<Register>>;
};

// 2) create context
const RegisterContext = createContext<RegisterContextType | null>(null);

// 3) provider
export const RegisterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Register>({
    firstName: "",
    lastName: "",
    email: "" as `${string}@${string}`,
    password: "",
    rePassword: "",
    gender: "male",
    height: 0,
    weight: 0,
    age: 0,
    goal: "",
    activityLevel: "",
  });
  useEffect(() => {
    console.log(
      `[RegisterProvider] Step ${step} - Current formData:`,
      formData
    );
  }, [step, formData]);

  return (
    <RegisterContext.Provider value={{ step, setStep, formData, setFormData }}>
      {children}
    </RegisterContext.Provider>
  );
};

// 4) custom hook
export const useRegisterContext = () => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("UseRegisterContext must be used inside RegisterProvider");
  }
  return context;
};
