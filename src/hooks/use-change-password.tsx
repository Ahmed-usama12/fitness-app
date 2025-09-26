import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import type { ChangePasswordFields } from "@/lib/schema/auth.schema";
import type { ChangePassword } from "@/lib/types/auth";
import { useLoginContext } from "@/context/login-context";
import { changePassword } from "@/lib/api/profile.api";
import type { AxiosError } from "axios";

export default function useChangePassword() {
    //context
    const { setToken, token } = useLoginContext();

    return useMutation<ChangePassword, AxiosError<{ error: string }>, ChangePasswordFields>({
        mutationFn: async (values) => {
            if (!token) {
                throw new Error("No token found");
            }
            const data = await changePassword(values, token);

            if ("error" in data) {
                throw new Error(data.error);
            }

            return data;
        },
        onSuccess: (data) => {
            toast.success(data.message);
            setToken(data.token);
            localStorage.setItem("token", data.token);
        },
        onError: () => {
            toast.error("error");
        },
    });
}

