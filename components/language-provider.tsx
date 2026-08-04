"use client";

import * as React from "react";

export type Language = "es" | "en";

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
}

const LanguageContext = React.createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}>({
  language: "es",
  setLanguage: () => null,
  toggleLanguage: () => null,
});

export function LanguageProvider({
  children,
  defaultLanguage = "es",
}: LanguageProviderProps) {
  const [mounted, setMounted] = React.useState(false);
  const [currentLanguage, setCurrentLanguage] =
    React.useState<Language>(defaultLanguage);

  React.useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem("language") as Language | null;
    const initialLanguage = savedLanguage || defaultLanguage;
    setCurrentLanguage(initialLanguage);
    document.documentElement.lang = initialLanguage;
  }, [defaultLanguage]);

  const setLanguage = React.useCallback((language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, []);

  const toggleLanguage = React.useCallback(() => {
    const newLanguage = currentLanguage === "es" ? "en" : "es";
    setLanguage(newLanguage);
  }, [currentLanguage, setLanguage]);

  const value = React.useMemo(
    () => ({
      language: currentLanguage,
      setLanguage,
      toggleLanguage,
    }),
    [currentLanguage, setLanguage, toggleLanguage],
  );

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
