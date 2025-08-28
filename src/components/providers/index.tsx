import React from "react";
import { ThemeProvider } from "./theme-provider";
import ReactQueryProvider from "./react-query-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider defaultTheme="dark">
			<ReactQueryProvider>{children}</ReactQueryProvider>
		</ThemeProvider>
	);
}
