import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { login } from "@/lib/api/auth.api";
import type { LoginFields } from "@/lib/schema/auth.schema";
import type { AuthResponse } from "@/lib/types/auth";
import { useLoginContext } from "@/context/login-context";

export function useLogin() {
    const navigate = useNavigate();

    //context
    const { setToken, setUser } = useLoginContext();
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
            setToken(data.token);
            setUser(data.user);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

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
