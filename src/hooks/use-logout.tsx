import { useLoginContext } from "@/context/login-context";
import { logout } from "@/lib/api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    //Navigation
    const navigate = useNavigate();

    //Use context
    const { setToken, setUser } = useLoginContext();

    return useMutation({
        mutationFn: logout,
        onError: (error) => {
            console.error("❌ Logout failed:", error);
        },
        onSettled: () => {
            // Clear local storage 
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            //clear context
            setToken(null);
            setUser(null);

            //navigate
            navigate("/auth/login");
        },
    });
};
