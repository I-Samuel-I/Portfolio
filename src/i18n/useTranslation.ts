"use client";

import { useEffect, useState } from "react";
import { translation } from "./translation";

export type SupportedLanguage = keyof typeof translation;


const STORAGE_KEY = "portfolio-language";
const LANGUAGE_EVENT = "portfolio-language-change";

export function getStoredLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "pt" || stored === "en" ? stored : "en";
}

export function useTranslation() {
  const [language, setLanguageState] = useState<SupportedLanguage>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = getStoredLanguage();
    setLanguageState(stored);
    setIsHydrated(true);
  }, []);

  const setLanguage = (nextLanguage: SupportedLanguage) => {
    setLanguageState(nextLanguage);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
      window.dispatchEvent(new CustomEvent(LANGUAGE_EVENT, { detail: nextLanguage }));
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const nextLanguage = (event as CustomEvent<SupportedLanguage>).detail;
      if (nextLanguage === "pt" || nextLanguage === "en") {
        setLanguageState(nextLanguage);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener(LANGUAGE_EVENT, handleLanguageChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener(LANGUAGE_EVENT, handleLanguageChange);
      }
    };
  }, []);

  return {
    language,
    setLanguage,
    t: isHydrated ? translation[language] : translation.en,
  };
}
