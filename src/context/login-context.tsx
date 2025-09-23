import React, { createContext, useContext, useEffect, useState, type Dispatch, type SetStateAction } from 'react'

//context type 
interface LoginContextType {
    token: string | null,
    setToken: Dispatch<SetStateAction<string | null>>
    user: User | null,
    setUser: Dispatch<SetStateAction<User | null>>
}
//create context 
export const LoginContext = createContext<LoginContextType | undefined>(undefined);

export default function LoginContextProvider({ children }: { children: React.ReactNode }) {
    //states
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null)

    //effect
    useEffect(() => {
        setToken(localStorage.getItem("token"))
        setUser(JSON.parse(localStorage.getItem("user") ?? "null"));
    }, [])

    return (
        <LoginContext.Provider value={{ token, setToken, user, setUser }}>
            {children}
        </LoginContext.Provider>
    )
}

//custom hook
export function useLoginContext() {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("useLoginContext must be used within LoginContextProvider");
    }
    return context;
}
