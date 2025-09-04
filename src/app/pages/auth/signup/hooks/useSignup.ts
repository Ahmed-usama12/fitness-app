// import { useRegisterContext } from "@/lib/context/RegisterContext";

import type { RegistrationFields } from "@/lib/schema/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { registerAction } from "../api/register.action";

export default function useRegister() {
  const { error, mutate, isPending } = useMutation({
    mutationFn: async (registerFiled: RegistrationFields) =>
      await registerAction(registerFiled),

    onSuccess() {
      console.log("Account Created Successfully");
    },
    onError(error: Error) {
      console.log(error?.message);
    },
  });

  const RegisterSubmit = (Fields: RegistrationFields) => {
    mutate(Fields);
  };

  return { error, RegisterSubmit, isPending };
}
