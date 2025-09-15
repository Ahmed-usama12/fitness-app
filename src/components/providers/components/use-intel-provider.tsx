import React, {
  createContext,
  useEffect,
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
export default function UseIntlProvider({ children }: { children: React.ReactNode }) {
  // Language state
  const [locale, setLocale] = useState<"en" | "ar">(localStorage.locale || "en");

  // Languages
  const languages = {
    en,
    ar,
  };

  useEffect(() => {
    if (locale === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    }
  }, [locale]);

  const numberingSystem = locale === "ar" ? "arab" : "latin";
  const formats = {
    number: {
      units: {
        style: "decimal" as const,
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
        numberingSystem,
      },
      currency: {
        style: "currency" as const,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currency: "EGP",
      },
    },
  };
  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <IntlProvider messages={languages[locale]} locale={locale} formats={formats}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}
