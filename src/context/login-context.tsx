import React, { createContext, useContext, useEffect, useState, type Dispatch, type SetStateAction } from 'react'

//context type 
interface LoginContextType {
    token: string | null,
    setToken: Dispatch<SetStateAction<string | null>>
}
//create context 
export const LoginContext = createContext<LoginContextType | undefined>(undefined);

export default function LoginContextProvider({ children }: { children: React.ReactNode }) {
    //state
    const [token, setToken] = useState<string | null>(null);

    //effect
    useEffect(() => {
        setToken(localStorage.getItem("token"))
    },)

    return (
        <LoginContext.Provider value={{ token, setToken }}>
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
