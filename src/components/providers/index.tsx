import React from "react";
import { ThemeProvider } from "./components/theme-provider";
import ReactQueryProvider from "./components/react-query-provider";
import UserProvider from "./components/user-provider";
import UseIntlProvider from "./components/use-intel-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<UseIntlProvider>
			<ThemeProvider defaultTheme="dark">
				<UserProvider>
					<ReactQueryProvider>{children}</ReactQueryProvider>
				</UserProvider>
			</ThemeProvider>
		</UseIntlProvider>
	);
}
