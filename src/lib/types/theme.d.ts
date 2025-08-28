declare type Theme = "dark" | "light" | "system";

declare type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

declare type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};
