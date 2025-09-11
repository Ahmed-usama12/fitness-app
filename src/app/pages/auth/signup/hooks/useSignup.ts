import type { RegistrationFields } from "@/lib/schema/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { registerAction } from "../api/register.action";
import { toast } from "sonner";

export default function useRegister() {
  const { error, mutate, isPending } = useMutation({
    mutationFn: async (registerFiled: RegistrationFields) =>
      await registerAction(registerFiled),
    onSuccess() {
      toast.success("Account Created Successfully");
      console.log("Account Created Successfully");
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
