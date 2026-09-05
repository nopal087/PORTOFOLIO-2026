"use client";

import { useLanguage } from "@/context/LanguageContext";

interface LanguageSwitchProps {
  className?: string;
  isMobile?: boolean;
}

export default function LanguageSwitch({ className = "", isMobile = false }: LanguageSwitchProps) {
  const { lang, setLang } = useLanguage();

  if (isMobile) {
    return (
      <div className={`flex items-center gap-2 p-1.5 bg-zinc-100 border-2 border-black shadow-[2px_2px_0_0_#000] ${className}`}>
        <span className="font-mono text-[10px] font-black uppercase text-zinc-700 px-1">Lang:</span>
        <div className="flex items-center gap-1 flex-1">
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`flex-1 py-1.5 px-2 text-xs font-display font-black uppercase transition-all border border-black cursor-pointer flex items-center justify-center gap-1 ${
              lang === "en"
                ? "bg-brutal-yellow text-black shadow-[1.5px_1.5px_0_0_#000]"
                : "bg-white text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            <span>🇬🇧</span>
            <span>EN</span>
          </button>
          <button
            type="button"
            onClick={() => setLang("id")}
            className={`flex-1 py-1.5 px-2 text-xs font-display font-black uppercase transition-all border border-black cursor-pointer flex items-center justify-center gap-1 ${
              lang === "id"
                ? "bg-brutal-cyan text-black shadow-[1.5px_1.5px_0_0_#000]"
                : "bg-white text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            <span>🇮🇩</span>
            <span>ID</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center p-0.5 bg-black border-2 border-black shadow-[2px_2px_0_0_#000] ${className}`}>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-label="Switch to English"
        className={`px-2 py-1 text-xs font-display font-black uppercase transition-all cursor-pointer inline-flex items-center gap-1 ${
          lang === "en"
            ? "bg-brutal-yellow text-black shadow-[1px_1px_0_0_#000]"
            : "bg-transparent text-white hover:text-brutal-yellow"
        }`}
      >
        <span>EN</span>
      </button>
      <button
        type="button"
        onClick={() => setLang("id")}
        aria-label="Ganti ke Bahasa Indonesia"
        className={`px-2 py-1 text-xs font-display font-black uppercase transition-all cursor-pointer inline-flex items-center gap-1 ${
          lang === "id"
            ? "bg-brutal-cyan text-black shadow-[1px_1px_0_0_#000]"
            : "bg-transparent text-white hover:text-brutal-cyan"
        }`}
      >
        <span>ID</span>
      </button>
    </div>
  );
}
