import React, {
	createContext,
	useState,
	type Dispatch,
	type SetStateAction,
} from "react";
import { IntlProvider } from "use-intl";
import en from "@i18n/messages/en.json";
import ar from "@i18n/messages/ar.json";

// type
type LanguageContextType = {
	locale: "en" | "ar";
	setLocale: Dispatch<SetStateAction<"ar" | "en">>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextType>({
	locale: "en",
	setLocale: () => {},
});

// Language provider
export default function UseIntlProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	// Language state
	const [locale, setLocale] = useState<"en" | "ar">(
		localStorage.locale || "en"
	);

	// Languages
	const languages = {
		en,
		ar,
	};

	return (
		<LanguageContext.Provider value={{ locale, setLocale }}>
			<IntlProvider messages={languages[locale]} locale={locale}>
				{children}
			</IntlProvider>
		</LanguageContext.Provider>
	);
}
