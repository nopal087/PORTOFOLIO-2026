"use client";

import React, { createContext, useContext, useSyncExternalStore, useCallback } from "react";

export type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("local-lang-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("local-lang-change", callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("portfolio_lang");
  return saved === "id" ? "id" : "en";
}

function getServerSnapshot(): Language {
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((newLang: Language) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", newLang);
      window.dispatchEvent(new Event("local-lang-change"));
    }
  }, []);

  const toggleLang = useCallback(() => {
    const current = getSnapshot();
    const next = current === "en" ? "id" : "en";
    setLang(next);
  }, [setLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
