import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./language-context";
import { translations } from "./language-data";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    return window.localStorage.getItem("portfolio-language") || "en";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
