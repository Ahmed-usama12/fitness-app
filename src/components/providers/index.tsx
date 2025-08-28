import React from "react";
import { ThemeProvider } from "./theme-provider";
import ReactQueryProvider from "./react-query-provider";
import UserProvider from "./user-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<UserProvider>
			<ThemeProvider defaultTheme="dark">
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</ThemeProvider>
		</UserProvider>
	);
}
