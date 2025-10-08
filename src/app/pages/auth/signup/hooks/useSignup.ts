import type { RegistrationFields } from "@/lib/schema/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { registerAction } from "../api/register.action";
import { toast } from "sonner";

export default function useRegister() {
  const { error, mutate, isPending } = useMutation({
    mutationFn: async (registerFiled: RegistrationFields) => {
      const payload = {
        ...registerFiled,
        weight:
          typeof registerFiled.weight === "number"
            ? registerFiled.weight
            : Number(registerFiled.weight),
        goal:
          typeof registerFiled.goal === "string" ? registerFiled.goal : String(registerFiled.goal),
        activityLevel:
          typeof registerFiled.activityLevel === "string"
            ? registerFiled.activityLevel
            : String(registerFiled.activityLevel),
      };
      return await registerAction(payload);
    },
    onSuccess() {
      toast.success("Account Created Successfully");
    },
    onError(error: Error) {
      console.error("Registration Error:", error.message);
    },
  });

  const RegisterSubmit = (Fields: RegistrationFields) => {
    mutate(Fields);
  };

  return { error, RegisterSubmit, isPending };
}
