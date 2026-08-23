"use client";

import { useEffect, useState } from "react";
import { translation } from "./translation";

export type SupportedLanguage = keyof typeof translation;

export const DEFAULT_LANGUAGE: SupportedLanguage = "en";

const STORAGE_KEY = "portfolio-language";
const LANGUAGE_EVENT = "portfolio-language-change";

export function getStoredLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "pt" || stored === "en" ? stored : DEFAULT_LANGUAGE;
}

export function useTranslation() {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => getStoredLanguage());

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
    t: translation[language],
  };
}
