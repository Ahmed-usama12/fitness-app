import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { login } from "@/lib/api/auth.api";
import type { LoginFields } from "@/lib/schema/auth.schema";

interface AuthResponse {
    message: string;
    token: string;
}

export function useLogin() {
    const navigate = useNavigate();

    return useMutation<AuthResponse, Error, LoginFields>({
        mutationFn: async (values) => {
            const data = await login(values);

            if ("error" in data) {
                throw new Error(data.error);
            }

            return data;
        },
        onSuccess: (data) => {
            toast.success(data.message);
            localStorage.setItem("token", data.token);

            //navigate
            setTimeout(() => {
                navigate('/')
            }, 1000)
        },
        onError: (error) => {
            toast.error(error.message || "error");
        },
    });
}
