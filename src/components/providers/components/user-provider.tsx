import React, { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext<{ token: string }>({ token: "" });

export default function UserProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const token = "sdnfsdfdskjfnkjn";
	return (
		<userContext.Provider value={{ token }}>{children}</userContext.Provider>
	);
}
