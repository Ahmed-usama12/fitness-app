import { useMutation } from "@tanstack/react-query";
import { editProfile } from "@/lib/api/profile.api";
import { useLoginContext } from "@/context/login-context";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import type { AuthResponse } from "@/lib/types/auth";
import type { ChangeProfileFields } from "@/lib/schema/auth.schema";

export const useUpdateProfile = () => {
    //context
    const { token, setUser } = useLoginContext();
    return useMutation<AuthResponse, AxiosError<{ error: string }>, ChangeProfileFields>({
        mutationFn: async (values) => {
            if (!token) {
                throw new Error("No token found");
            }
            const data = await editProfile(values, token);

            if ("error" in data) {
                throw new Error(data.error);
            }

            return data;
        },

        onSuccess: (data) => {
            toast.success(data.message);
            setUser(data.user);
            localStorage.setItem("user", JSON.stringify(data.user));

        },
        onError: () => {
            toast.error("error")

        }
    });
};
