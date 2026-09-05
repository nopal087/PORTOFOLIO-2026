"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ResparkingProject from "@/components/ResparkingProject";
import WmsProject from "@/components/WmsProject";
import LokoCafeProject from "@/components/LokoCafeProject";
import IrisProject from "@/components/IrisProject";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("naufalfaruq285@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Background Decor Grids & Ambient Accents */}
      <div className="fixed inset-0 bg-grid opacity-80 pointer-events-none -z-20"></div>

      {/* Floating Ambient Stickers for Depth (Safe bounds) */}
      <div className="fixed top-24 -left-6 w-16 h-16 bg-brutal-yellow border-[3px] border-black rotate-12 -z-10 shadow-[4px_4px_0_0_#000] hidden lg:block"></div>
      <div className="fixed bottom-28 -right-6 w-20 h-20 bg-brutal-cyan border-[3px] border-black -rotate-12 -z-10 shadow-[4px_4px_0_0_#000] hidden lg:block"></div>

      {/* Navigation Header */}
      <Navigation />

      <main className="flex-grow flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 gap-16 sm:gap-24 md:gap-32 w-full max-w-[1720px] 2xl:max-w-[1920px] mx-auto">
        
        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 md:pt-6">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6 z-10">
            
            {/* Status & Role Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-brutal-yellow text-black border-2 md:border-[3px] border-black px-3.5 py-1 font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0_0_#000] hover:rotate-1 transition-transform inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">bolt</span>
                <span>{t.hero.role1}</span>
              </span>
              <span className="bg-brutal-lime-electric text-black border-2 md:border-[3px] border-black px-3.5 py-1 font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0_0_#000] hover:-rotate-1 transition-transform inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">smart_toy</span>
                <span>{t.hero.role2}</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="w-full">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter text-ink">
                {lang === "en" ? (
                  <>
                    BUILDING <br />
                    <span className="bg-black text-brutal-yellow px-2.5 sm:px-4 py-0.5 inline-block transform -skew-x-6 my-1 shadow-[4px_4px_0_0_#00e5ff]">
                      RELIABLE
                    </span>{" "}
                    <br className="hidden sm:inline" />
                    SYSTEMS &amp; AI
                  </>
                ) : (
                  <>
                    MEMBANGUN <br />
                    <span className="bg-black text-brutal-yellow px-2.5 sm:px-4 py-0.5 inline-block transform -skew-x-6 my-1 shadow-[4px_4px_0_0_#00e5ff]">
                      SISTEM HANDAL
                    </span>{" "}
                    <br className="hidden sm:inline" />
                    &amp; TEKNOLOGI AI
                  </>
                )}
              </h1>
            </div>

            {/* Value Proposition Description */}
            <div className="bg-white border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] md:shadow-[8px_8px_0_0_#000] w-full relative">
              <div className="absolute -top-3 right-4 bg-brutal-pink text-white font-mono font-black text-[10px] sm:text-xs uppercase px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0_0_#000] rotate-1">
                {lang === "en" ? "SOLVING COMPLEX TECH" : "SOLUSI TEKNOLOGI NYATA"}
              </div>
              <p className="font-body text-base sm:text-lg md:text-xl font-bold text-ink leading-relaxed">
                {lang === "en" ? (
                  <>
                    Hi, I&apos;m <span className="bg-brutal-yellow px-2 py-0.5 border-2 border-black font-black shadow-[2px_2px_0_0_#000]">Muhammad Naufal Faruq</span>. 
                    I build high-concurrency web applications (Next.js &amp; Golang), maintain enterprise IT infrastructure, and engineer autonomous Agentic AI workflows to accelerate software delivery.
                  </>
                ) : (
                  <>
                    Halo, saya <span className="bg-brutal-yellow px-2 py-0.5 border-2 border-black font-black shadow-[2px_2px_0_0_#000]">Muhammad Naufal Faruq</span>. 
                    Saya membangun aplikasi web berkonkurensi tinggi (Next.js &amp; Golang), mengelola infrastruktur IT enterprise, dan merancang alur kerja Agentic AI otonom untuk mempercepat pengiriman software.
                  </>
                )}
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full pt-1">
              <a
                href="#projects"
                className="bg-black text-white border-[3px] md:border-[3.5px] border-black px-6 py-3.5 sm:py-4 font-display font-black text-base sm:text-lg uppercase text-center shadow-[4px_4px_0_0_#ffe600] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#ffe600] active:translate-y-0.5 active:shadow-[1px_1px_0_0_#ffe600] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.hero.viewProjects}</span>
                <span className="material-symbols-outlined text-xl text-brutal-yellow">arrow_downward</span>
              </a>

              <a
                href="/CV-Muhammad-Naufal-Faruq.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brutal-yellow text-black border-[3px] md:border-[3.5px] border-black px-6 py-3.5 sm:py-4 font-display font-black text-base sm:text-lg uppercase text-center shadow-[4px_4px_0_0_#000] hover:-translate-y-0.5 hover:bg-brutal-yellow-dark hover:shadow-[6px_6px_0_0_#000] active:translate-y-0.5 active:shadow-[1px_1px_0_0_#000] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">download</span>
                <span>CV (PDF)</span>
              </a>

              <a
                href="#contact"
                className="bg-brutal-cyan text-black border-[3px] md:border-[3.5px] border-black px-5 py-3.5 sm:py-4 font-display font-black text-base sm:text-lg uppercase text-center shadow-[4px_4px_0_0_#000] hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[6px_6px_0_0_#000] active:translate-y-0.5 active:shadow-[1px_1px_0_0_#000] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{t.nav.contact}</span>
              </a>
            </div>

            {/* Quick Link Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 text-xs sm:text-sm font-mono font-bold">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1 border-2 border-black shadow-[2px_2px_0_0_#000]">
                <span className="material-symbols-outlined text-base text-brutal-blue">pin_drop</span> {t.hero.basedIn}
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1 border-2 border-black shadow-[2px_2px_0_0_#000]">
                <span className="material-symbols-outlined text-base text-brutal-pink">school</span> {t.education.degreeTitle} (3.77 GPA)
              </span>
            </div>
          </div>

          {/* Right Column: Visual Avatar Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md relative group">
              
              {/* Backing decorative cards */}
              <div className="absolute inset-0 bg-brutal-lime-electric border-[3px] md:border-[4px] border-black translate-x-3 sm:translate-x-5 translate-y-3 sm:translate-y-5 -z-10 bg-stripes"></div>
              <div className="absolute inset-0 bg-brutal-cyan border-[3px] md:border-[4px] border-black translate-x-1.5 sm:translate-x-2.5 translate-y-1.5 sm:translate-y-2.5 -z-10"></div>

              {/* Main Avatar Container */}
              <div className="bg-white border-[3px] md:border-[4px] border-black p-3.5 sm:p-4 shadow-[5px_5px_0_0_#000] md:shadow-[8px_8px_0_0_#000] relative">
                
                {/* LinkedIn #OpenToWork Badge Sticker */}
                <div className="absolute -top-4 -left-2 bg-[#057642] text-white border-2 md:border-[3px] border-black px-3 py-1 font-display font-black text-xs uppercase shadow-[2.5px_2.5px_0_0_#000] -rotate-3 z-20 inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse"></span>
                  <span>{t.nav.openToWork}</span>
                </div>

                {/* Top Badge Sticker */}
                <div className="absolute -top-4 -right-2 bg-brutal-yellow border-2 md:border-[3px] border-black px-3.5 py-1 font-display font-black text-xs uppercase shadow-[2.5px_2.5px_0_0_#000] rotate-3 z-20 inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span>{lang === "en" ? "3+ Yrs Exp" : "3+ Thn Pengalaman"}</span>
                </div>

                {/* Profile Image Frame */}
                <div className="w-full aspect-[4/5] overflow-hidden border-2 md:border-[3px] border-black bg-zinc-100 relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt="Portrait of Muhammad Naufal Faruq"
                    src="/images/pasfoto.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 bg-black/95 text-white p-3 border-2 border-brutal-yellow flex items-center justify-between shadow-[3px_3px_0_0_#ffe600]">
                    <div>
                      <div className="font-display font-black text-sm uppercase text-brutal-yellow">Muhammad Naufal Faruq</div>
                      <div className="text-[11px] font-mono text-zinc-300">{t.hero.role1}</div>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-brutal-lime-electric animate-pulse"></span>
                  </div>
                </div>

                {/* Bottom Badges */}
                <div className="mt-3.5 grid grid-cols-2 gap-2.5 text-center">
                  <div className="bg-brutal-yellow border-2 border-black p-2 shadow-[2px_2px_0_0_#000]">
                    <span className="block font-mono text-[10px] uppercase font-bold text-zinc-800">Domain</span>
                    <span className="font-display font-black text-xs uppercase text-black">Enterprise WMS</span>
                  </div>
                  <div className="bg-brutal-cyan border-2 border-black p-2 shadow-[2px_2px_0_0_#000]">
                    <span className="block font-mono text-[10px] uppercase font-bold text-zinc-800">Workflow</span>
                    <span className="font-display font-black text-xs uppercase text-black">Agentic AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* STATS STRIP / PROVEN IMPACT (Vibrant Block Colors) */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-6">
          
          <div className="bg-brutal-yellow border-[3px] md:border-[4px] border-black p-4 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <span className="font-mono text-xs uppercase font-black text-zinc-900 border-b-2 border-black pb-1.5 mb-2">{t.stats.experienceTitle}</span>
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-black">{t.stats.experienceValue}</div>
              <p className="font-body text-xs sm:text-sm font-bold text-zinc-900 mt-1">{t.stats.experienceDesc}</p>
            </div>
          </div>

          <div className="bg-brutal-cyan border-[3px] md:border-[4px] border-black p-4 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <span className="font-mono text-xs uppercase font-black text-zinc-900 border-b-2 border-black pb-1.5 mb-2">{t.stats.productionTitle}</span>
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-black">{t.stats.productionValue}</div>
              <p className="font-body text-xs sm:text-sm font-bold text-zinc-900 mt-1">{t.stats.productionDesc}</p>
            </div>
          </div>

          <div className="bg-brutal-lime-electric border-[3px] md:border-[4px] border-black p-4 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <span className="font-mono text-xs uppercase font-black text-zinc-900 border-b-2 border-black pb-1.5 mb-2">{t.stats.credentialsTitle}</span>
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-black">{t.stats.credentialsValue}</div>
              <p className="font-body text-xs sm:text-sm font-bold text-zinc-900 mt-1">{t.stats.credentialsDesc}</p>
            </div>
          </div>

          <div className="bg-brutal-pink border-[3px] md:border-[4px] border-black p-4 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between text-white hover:-translate-y-1 transition-transform">
            <span className="font-mono text-xs uppercase font-black text-white border-b-2 border-white/40 pb-1.5 mb-2">{t.stats.supportTitle}</span>
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white">{t.stats.supportValue}</div>
              <p className="font-body text-xs sm:text-sm font-bold text-white mt-1">{t.stats.supportDesc}</p>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* MARQUEE BANNER */}
        {/* ========================================================================= */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden border-y-[3px] md:border-y-[4px] border-black bg-black py-3 sm:py-4 text-white shadow-[0_4px_0_0_#000]">
          <div className="flex w-max animate-marquee" style={{ animation: "marquee 22s linear infinite" }}>
            <div className="flex gap-8 sm:gap-12 pr-8 sm:pr-12 items-center font-display font-black text-lg sm:text-2xl uppercase tracking-wider">
              <span className="flex items-center gap-2 text-brutal-yellow">
                <span className="material-symbols-outlined">terminal</span> {t.marquee.fullstack}
              </span>
              <span className="text-zinc-600">✦</span>
              <span className="flex items-center gap-2 text-brutal-cyan">
                <span className="material-symbols-outlined">psychology</span> {t.marquee.agenticAi}
              </span>
              <span className="text-zinc-600">✦</span>
              <span className="flex items-center gap-2 text-brutal-lime-electric">
                <span className="material-symbols-outlined">dns</span> {t.marquee.infra}
              </span>
              <span className="text-zinc-600">✦</span>
              <span className="flex items-center gap-2 text-brutal-pink">
                <span className="material-symbols-outlined">bolt</span> {t.marquee.golangNext}
              </span>
              <span className="text-zinc-600">✦</span>
            </div>
            <div className="flex gap-8 sm:gap-12 pr-8 sm:pr-12 items-center font-display font-black text-lg sm:text-2xl uppercase tracking-wider">
              <span className="flex items-center gap-2 text-brutal-yellow">
                <span className="material-symbols-outlined">terminal</span> {t.marquee.fullstack}
              </span>
              <span className="text-zinc-600">✦</span>
              <span className="flex items-center gap-2 text-brutal-cyan">
                <span className="material-symbols-outlined">psychology</span> {t.marquee.agenticAi}
              </span>
              <span className="text-zinc-600">✦</span>
              <span className="flex items-center gap-2 text-brutal-lime-electric">
                <span className="material-symbols-outlined">dns</span> {t.marquee.infra}
              </span>
              <span className="text-zinc-600">✦</span>
              <span className="flex items-center gap-2 text-brutal-pink">
                <span className="material-symbols-outlined">bolt</span> {t.marquee.golangNext}
              </span>
              <span className="text-zinc-600">✦</span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ABOUT ME SECTION */}
        {/* ========================================================================= */}
        <section id="about" className="flex flex-col gap-8 scroll-mt-24">
          
          {/* Section Title */}
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase bg-black text-white px-4 py-2 border-[3px] border-black shadow-[4px_4px_0_0_#ffe600]">
              {`${t.about.sectionNum} // ${t.about.sectionTitle}`}
            </h2>
            <span className="h-[3px] flex-grow bg-black hidden sm:block"></span>
          </div>

          {/* Content Card */}
          <div className="bg-white border-[3px] md:border-[4px] border-black p-6 sm:p-8 md:p-10 shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Overview Story */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight text-ink">
                  {t.about.title}
                </h3>
                
                <p className="font-body text-base sm:text-lg font-medium text-zinc-900 leading-relaxed">
                  {t.about.p1}
                </p>

                <p className="font-body text-base sm:text-lg font-medium text-zinc-900 leading-relaxed bg-brutal-yellow/20 p-4 border-l-[6px] border-brutal-yellow border-y border-r border-black/10">
                  {t.about.p2}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-brutal-cyan/20 border-2 border-black shadow-[2px_2px_0_0_#000]">
                    <span className="font-display font-black text-sm uppercase flex items-center gap-1.5 mb-1">
                      <span className="material-symbols-outlined text-base text-brutal-blue">location_on</span>
                      <span>{lang === "en" ? "Location" : "Lokasi"}</span>
                    </span>
                    <span className="text-sm font-bold text-zinc-800">{t.about.specLocation}</span>
                  </div>
                  <div className="p-3 bg-brutal-lime-electric/20 border-2 border-black shadow-[2px_2px_0_0_#000]">
                    <span className="font-display font-black text-sm uppercase flex items-center gap-1.5 mb-1">
                      <span className="material-symbols-outlined text-base text-brutal-pink">school</span>
                      <span>{lang === "en" ? "Degree" : "Pendidikan"}</span>
                    </span>
                    <span className="text-sm font-bold text-zinc-800">{t.about.specEducation}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 3 Core Pillars */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="bg-brutal-yellow border-[3px] border-black p-4 sm:p-5 shadow-[4px_4px_0_0_#000] hover:-translate-y-0.5 transition-transform">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-2xl font-bold bg-black text-brutal-yellow p-1">code</span>
                    <h4 className="font-display font-black text-base uppercase">
                      {lang === "en" ? "Full Stack Engineering" : "Rekayasa Full Stack"}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-relaxed">
                    {lang === "en"
                      ? "Building robust frontend UIs (Next.js, React, TypeScript) and high-concurrency backend services (Golang, PostgreSQL, PHP)."
                      : "Membangun antarmuka modern (Next.js, React, TypeScript) dan layanan backend berkecepatan tinggi (Golang, PostgreSQL, PHP)."}
                  </p>
                </div>

                <div className="bg-brutal-cyan border-[3px] border-black p-4 sm:p-5 shadow-[4px_4px_0_0_#000] hover:-translate-y-0.5 transition-transform">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-2xl font-bold bg-black text-brutal-cyan p-1">router</span>
                    <h4 className="font-display font-black text-base uppercase">
                      {lang === "en" ? "IT Infrastructure & SLA" : "Infrastruktur IT & SLA"}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-relaxed">
                    {lang === "en"
                      ? "Managing LAN/Wi-Fi network topology, hardware maintenance, e-Channel systems, and maintaining a 98% resolution SLA."
                      : "Mengelola topologi jaringan LAN/Wi-Fi, perawatan perangkat keras workstation, dan mempertahankan SLA resolusi 98%."}
                  </p>
                </div>

                <div className="bg-brutal-lime-electric border-[3px] border-black p-4 sm:p-5 shadow-[4px_4px_0_0_#000] hover:-translate-y-0.5 transition-transform">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-2xl font-bold bg-black text-brutal-lime-electric p-1">smart_toy</span>
                    <h4 className="font-display font-black text-base uppercase">
                      {lang === "en" ? "Agentic AI & Automation" : "Agentic AI & Otomasi"}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-relaxed">
                    {lang === "en"
                      ? "Implementing autonomous coding agents, custom prompt engineering, and intelligent workflow automation."
                      : "Menerapkan agen AI otonom, rekayasa prompt tingkat lanjut, dan percepatan siklus rilis fitur 2-3x lebih cepat."}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SYSTEM INFO / TECH STACK SECTION (Vibrant Category Cards) */}
        {/* ========================================================================= */}
        <section id="system-info" className="flex flex-col gap-8 scroll-mt-24">
          
          {/* Section Title */}
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase bg-black text-white px-4 py-2 border-[3px] border-black shadow-[4px_4px_0_0_#00e5ff]">
              02 // {lang === "en" ? "System Info & Tech Stack" : "Info Sistem & Tech Stack"}
            </h2>
            <span className="h-[3px] flex-grow bg-black hidden sm:block"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Category 1: Frontend & UI */}
            <div className="bg-brutal-yellow border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                  <h3 className="font-display font-black text-lg uppercase text-black">{t.about.stackCat1Title}</h3>
                  <span className="material-symbols-outlined text-2xl bg-black text-white p-1">devices</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "JavaScript (ES6+)", "Figma UI/UX", "HTML5 / Semantic CSS"].map((tech) => (
                    <span key={tech} className="bg-white text-black border-2 border-black px-2.5 py-1 text-xs font-mono font-bold uppercase shadow-[2px_2px_0_0_#000] hover:bg-black hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-3 border-t-2 border-black text-xs font-mono font-bold text-zinc-900">
                {t.about.stackCat1Sub}
              </div>
            </div>

            {/* Category 2: Backend & Systems */}
            <div className="bg-brutal-cyan border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                  <h3 className="font-display font-black text-lg uppercase text-black">{t.about.stackCat2Title}</h3>
                  <span className="material-symbols-outlined text-2xl bg-black text-white p-1">memory</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Golang (Go)", "PHP", "Laravel", "Node.js", "Express.js", "RESTful APIs", "Microservices"].map((tech) => (
                    <span key={tech} className="bg-white text-black border-2 border-black px-2.5 py-1 text-xs font-mono font-bold uppercase shadow-[2px_2px_0_0_#000] hover:bg-black hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-3 border-t-2 border-black text-xs font-mono font-bold text-zinc-900">
                {t.about.stackCat2Sub}
              </div>
            </div>

            {/* Category 3: AI & Agentic Tooling */}
            <div className="bg-brutal-lime-electric border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                  <h3 className="font-display font-black text-lg uppercase text-black">{t.about.stackCat3Title}</h3>
                  <span className="material-symbols-outlined text-2xl bg-black text-white p-1">psychology</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Agentic AI", "Antigravity CLI", "Claude Code", "Cursor / Copilot", "LangChain", "Prompt Engineering", "Deep Learning"].map((tech) => (
                    <span key={tech} className="bg-white text-black border-2 border-black px-2.5 py-1 text-xs font-mono font-bold uppercase shadow-[2px_2px_0_0_#000] hover:bg-black hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-3 border-t-2 border-black text-xs font-mono font-bold text-zinc-900">
                {t.about.stackCat3Sub}
              </div>
            </div>

            {/* Category 4: Database & Infrastructure */}
            <div className="bg-secondary-fixed-dim border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                  <h3 className="font-display font-black text-lg uppercase text-black">{t.about.stackCat4Title}</h3>
                  <span className="material-symbols-outlined text-2xl bg-black text-white p-1">dns</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "Supabase", "MySQL", "Firebase", "Linux / CLI", "Git &amp; GitHub", "LAN / Wi-Fi / DNS", "Hardware Hardening"].map((tech) => (
                    <span key={tech} className="bg-white text-black border-2 border-black px-2.5 py-1 text-xs font-mono font-bold uppercase shadow-[2px_2px_0_0_#000] hover:bg-black hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-3 border-t-2 border-black text-xs font-mono font-bold text-zinc-900">
                {t.about.stackCat4Sub}
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXPERIENCE & CAREER TIMELINE */}
        {/* ========================================================================= */}
        <section id="experience" className="flex flex-col gap-8 scroll-mt-24">
          
          {/* Section Title */}
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase bg-black text-white px-4 py-2 border-[3px] border-black shadow-[4px_4px_0_0_#b8ff00]">
              {`${t.experience.sectionNum} // ${t.experience.sectionTitle}`}
            </h2>
            <span className="h-[3px] flex-grow bg-black hidden sm:block"></span>
          </div>

          <div className="flex flex-col gap-6">
            
            {/* Timeline Item 1: PT Reska Multi Usaha (KAI Services) */}
            <div className="bg-white border-[3px] md:border-[4px] border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#000] relative">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b-2 border-black pb-4 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="bg-brutal-yellow text-black border-2 border-black px-3 py-0.5 font-display font-black text-xs uppercase shadow-[2px_2px_0_0_#000]">
                      {t.experience.job1Badge}
                    </span>
                    <span className="bg-black text-brutal-lime-electric px-3 py-0.5 font-mono text-xs uppercase font-bold">
                      Enterprise KAI
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase text-ink">
                    {t.experience.job1Role}
                  </h3>
                  <h4 className="font-body font-bold text-base sm:text-lg text-zinc-800">
                    {t.experience.job1Company}
                  </h4>
                </div>
                <div className="bg-brutal-lime-electric border-2 border-black px-3.5 py-1.5 font-mono font-bold text-xs sm:text-sm shadow-[2px_2px_0_0_#000] self-start lg:self-auto">
                  {t.experience.job1Period}
                </div>
              </div>

              <div className="flex flex-col gap-3 font-body text-sm sm:text-base text-zinc-900">
                {t.experience.job1Points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-lg text-brutal-blue mt-0.5 font-bold">check_circle</span>
                    <p>
                      <strong>{pt.title}</strong> {pt.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t-2 border-black border-dashed">
                {["Next.js", "Golang", "PostgreSQL", "Agentic AI", "Barcode Systems", "IT Support", "Networking"].map((badge) => (
                  <span key={badge} className="bg-brutal-yellow/30 border border-black px-2.5 py-1 text-xs font-mono font-bold">
                    #{badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline Item 2: PT Bank Rakyat Indonesia (BRI) */}
            <div className="bg-white border-[3px] md:border-[4px] border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#000] relative">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b-2 border-black pb-4 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="bg-brutal-cyan text-black border-2 border-black px-3 py-0.5 font-display font-black text-xs uppercase shadow-[2px_2px_0_0_#000]">
                      {t.experience.job2Badge}
                    </span>
                    <span className="bg-black text-white px-3 py-0.5 font-mono text-xs uppercase font-bold">
                      SLA 98%
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase text-ink">
                    {t.experience.job2Role}
                  </h3>
                  <h4 className="font-body font-bold text-base sm:text-lg text-zinc-800">
                    {t.experience.job2Company}
                  </h4>
                </div>
                <div className="bg-brutal-yellow border-2 border-black px-3.5 py-1.5 font-mono font-bold text-xs sm:text-sm shadow-[2px_2px_0_0_#000] self-start lg:self-auto">
                  {t.experience.job2Period}
                </div>
              </div>

              <div className="flex flex-col gap-3 font-body text-sm sm:text-base text-zinc-900">
                {t.experience.job2Points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-lg text-brutal-blue mt-0.5 font-bold">check_circle</span>
                    <p>
                      <strong>{pt.title}</strong> {pt.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t-2 border-black border-dashed">
                {["IT Support", "Hardware Maintenance", "Digital Archive", "LAN Network", "Windows Server", "SLA 98%"].map((badge) => (
                  <span key={badge} className="bg-brutal-cyan/30 border border-black px-2.5 py-1 text-xs font-mono font-bold">
                    #{badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline Item 3: PT Stechoq Robotika Indonesia */}
            <div className="bg-white border-[3px] md:border-[4px] border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#000] relative">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b-2 border-black pb-4 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="bg-brutal-lime-electric text-black border-2 border-black px-3 py-0.5 font-display font-black text-xs uppercase shadow-[2px_2px_0_0_#000]">
                      {t.experience.job3Badge}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase text-ink">
                    {t.experience.job3Role}
                  </h3>
                  <h4 className="font-body font-bold text-base sm:text-lg text-zinc-800">
                    {t.experience.job3Company}
                  </h4>
                </div>
                <div className="bg-brutal-yellow border-2 border-black px-3.5 py-1.5 font-mono font-bold text-xs sm:text-sm shadow-[2px_2px_0_0_#000] self-start lg:self-auto">
                  {t.experience.job3Period}
                </div>
              </div>

              <div className="flex flex-col gap-3 font-body text-sm sm:text-base text-zinc-900">
                {t.experience.job3Points.map((desc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-lg text-brutal-blue mt-0.5 font-bold">check_circle</span>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t-2 border-black border-dashed">
                {["Express.js", "RFID IoT", "Figma UI/UX", "Node.js", "Embedded Systems"].map((badge) => (
                  <span key={badge} className="bg-brutal-lime-electric/30 border border-black px-2.5 py-1 text-xs font-mono font-bold">
                    #{badge}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* EDUCATION & CERTIFICATIONS SUMMARY (Vibrant Cards) */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Education Card */}
          <div className="bg-brutal-yellow border-[3px] md:border-[4px] border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#000] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                <span className="bg-black text-white font-display font-black text-xs uppercase px-3 py-1 border border-black shadow-[2px_2px_0_0_#fff]">
                  {t.education.formalEdu}
                </span>
                <span className="font-mono text-xs font-bold text-zinc-900">{t.education.period}</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-black">
                {t.education.degreeTitle}
              </h3>
              <h4 className="font-body font-bold text-lg text-zinc-900 mt-1 mb-3">
                {t.education.university}
              </h4>
              <p className="font-body text-sm sm:text-base text-zinc-900 leading-relaxed bg-white p-4 border-2 border-black shadow-[3px_3px_0_0_#000]">
                {t.education.details}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t-2 border-black flex items-center justify-between text-xs font-mono font-black text-black">
              <span>{t.education.degreeFooter}</span>
              <span>{t.education.graduated}</span>
            </div>
          </div>

          {/* Certifications Gallery Banner */}
          <div className="bg-brutal-cyan border-[3px] md:border-[4px] border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#000] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                <span className="bg-black text-brutal-yellow font-display font-black text-xs uppercase px-3 py-1 border border-black shadow-[2px_2px_0_0_#ffe600]">
                  {t.education.accreditations}
                </span>
                <span className="font-mono text-xs font-bold text-zinc-900">{t.education.certCount}</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-black">
                {t.education.certTitle}
              </h3>
              <h4 className="font-body font-bold text-lg text-zinc-900 mt-1 mb-3">
                {t.education.certIssuers}
              </h4>
              <p className="font-body text-sm sm:text-base text-zinc-900 leading-relaxed bg-white p-4 border-2 border-black shadow-[3px_3px_0_0_#000]">
                {t.education.certSummary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black border-dashed flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="font-mono text-xs font-black text-black">
                {t.education.exploreCredentials}
              </span>
              <Link
                href="/certifications"
                className="bg-black text-white font-display font-black text-xs sm:text-sm uppercase px-5 py-2.5 border-2 border-black shadow-[3px_3px_0_0_#ffe600] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#ffe600] active:translate-y-0.5 transition-all text-center inline-flex items-center justify-center gap-2"
              >
                <span>{t.education.openGallery}</span>
                <span className="material-symbols-outlined text-base text-brutal-yellow">arrow_forward</span>
              </Link>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* SELECTED WORKS / PROJECTS SHOWCASE */}
        {/* ========================================================================= */}
        <section id="projects" className="flex flex-col gap-8 scroll-mt-24">
          
          {/* Section Title */}
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase bg-black text-white px-4 py-2 border-[3px] border-black shadow-[4px_4px_0_0_#ff3399]">
              {`${t.projects.sectionNum} // ${t.projects.sectionTitle}`}
            </h2>
            <span className="h-[3px] flex-grow bg-black hidden sm:block"></span>
          </div>

          {/* Featured Project: Warehouse Management System */}
          <WmsProject />

          {/* Featured Project: Resparking Pendapatan (Interactive Slider) */}
          <ResparkingProject />

          {/* Grid of Other Works */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 2: Loko Cafe System Management */}
            <LokoCafeProject />

            {/* Card 3: IRIS Industrial Relations Information System */}
            <IrisProject />

            {/* Card 4: Web Portfolio 2026 */}
            <div className="bg-white border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between group hover:-translate-y-1 transition-all">
              <div>
                <div className="border-2 border-black bg-zinc-100 overflow-hidden mb-4 shadow-[3px_3px_0_0_#000] aspect-[16/10] relative">
                  <img
                    className="w-full h-full object-contain p-2 bg-white transition-transform duration-500 group-hover:scale-105"
                    alt="Web Portfolio Interface"
                    src="/images/portofolio.png"
                  />
                  <div className="absolute top-2 left-2 bg-brutal-lime-electric text-black text-[10px] font-mono font-bold px-2.5 py-0.5 border-2 border-black uppercase shadow-[2px_2px_0_0_#000]">
                    {t.projects.portfolioTag}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  <span className="bg-brutal-lime-electric/30 border border-black px-2 py-0.5 text-[11px] font-mono font-bold">Next.js 16</span>
                  <span className="bg-brutal-yellow/30 border border-black px-2 py-0.5 text-[11px] font-mono font-bold">Tailwind v4</span>
                  <span className="bg-brutal-cyan/30 border border-black px-2 py-0.5 text-[11px] font-mono font-bold">TypeScript</span>
                </div>

                <h3 className="font-display font-black text-xl uppercase leading-tight text-ink mb-2">
                  {t.projects.portfolioTitle}
                </h3>
                
                <p className="font-body text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  {t.projects.portfolioDesc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t-2 border-black border-dashed flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-zinc-700">{t.projects.portfolioBadge}</span>
                <span className="bg-brutal-lime-electric text-black px-2 py-0.5 uppercase border border-black font-bold">Active</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* CORE PHILOSOPHY / ENGINEERING PRINCIPLES (Vibrant Cards) */}
        {/* ========================================================================= */}
        <section className="flex flex-col gap-8">
          
          {/* Section Title */}
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase bg-black text-white px-4 py-2 border-[3px] border-black shadow-[4px_4px_0_0_#ffe600]">
              {`${t.principles.sectionNum} // ${t.principles.sectionTitle}`}
            </h2>
            <span className="h-[3px] flex-grow bg-black hidden sm:block"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Principle 1 */}
            <div className="bg-brutal-yellow border-[3px] md:border-[4px] border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <span className="font-display font-black text-4xl sm:text-5xl text-black">01</span>
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase mt-2 mb-3 text-black">
                  {t.principles.p1Title}
                </h3>
                <p className="font-body text-sm sm:text-base font-bold text-zinc-950 leading-relaxed bg-white p-4 border-2 border-black shadow-[3px_3px_0_0_#000]">
                  &quot;{t.principles.p1Desc}&quot;
                </p>
              </div>
              <div className="mt-6 pt-3 border-t-2 border-black flex items-center gap-2 font-mono text-xs font-black uppercase text-black">
                <span className="material-symbols-outlined text-base">dns</span>
                <span>System Stability &amp; SLA</span>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="bg-brutal-cyan border-[3px] md:border-[4px] border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <span className="font-display font-black text-4xl sm:text-5xl text-black">02</span>
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase mt-2 mb-3 text-black">
                  {t.principles.p2Title}
                </h3>
                <p className="font-body text-sm sm:text-base font-bold text-zinc-950 leading-relaxed bg-white p-4 border-2 border-black shadow-[3px_3px_0_0_#000]">
                  &quot;{t.principles.p2Desc}&quot;
                </p>
              </div>
              <div className="mt-6 pt-3 border-t-2 border-black flex items-center gap-2 font-mono text-xs font-black uppercase text-black">
                <span className="material-symbols-outlined text-base">psychology</span>
                <span>Autonomous Agent Loops</span>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="bg-brutal-lime-electric border-[3px] md:border-[4px] border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <span className="font-display font-black text-4xl sm:text-5xl text-black">03</span>
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase mt-2 mb-3 text-black">
                  {t.principles.p3Title}
                </h3>
                <p className="font-body text-sm sm:text-base font-bold text-zinc-950 leading-relaxed bg-white p-4 border-2 border-black shadow-[3px_3px_0_0_#000]">
                  &quot;{t.principles.p3Desc}&quot;
                </p>
              </div>
              <div className="mt-6 pt-3 border-t-2 border-black flex items-center gap-2 font-mono text-xs font-black uppercase text-black">
                <span className="material-symbols-outlined text-base">bolt</span>
                <span>Zero Layout Shift</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* CONTACT / CONNECT SECTION */}
        {/* ========================================================================= */}
        <section id="contact" className="bg-black text-white border-[3px] md:border-[4px] border-black p-6 sm:p-10 md:p-14 shadow-[8px_8px_0_0_#ffe600] scroll-mt-24 relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Message */}
            <div className="lg:col-span-6 flex flex-col items-start gap-4">
              <span className="bg-[#057642] text-white font-display font-black text-xs uppercase px-3.5 py-1.5 border-2 border-white shadow-[2px_2px_0_0_#fff] inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-200 animate-pulse"></span>
                <span className="tracking-wide">{t.contact.statusBadge}</span>
              </span>
              
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
                {lang === "en" ? (
                  <>
                    LET&apos;S BUILD <br />
                    <span className="text-brutal-yellow">SOMETHING LOUD.</span>
                  </>
                ) : (
                  <>
                    MARI BANGUN <br />
                    <span className="text-brutal-yellow">KARYA BERDAMPAK.</span>
                  </>
                )}
              </h2>

              <p className="font-body text-sm sm:text-base text-zinc-300 max-w-lg leading-relaxed">
                {t.contact.subheadline}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="bg-brutal-yellow text-black font-display font-black text-sm sm:text-base uppercase px-6 py-3.5 border-2 border-white shadow-[4px_4px_0_0_#fff] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#fff] active:translate-y-0.5 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">
                    {copied ? "check" : "mail"}
                  </span>
                  <span>{copied ? t.contact.copied : t.contact.copyEmail}</span>
                </button>

                <a
                  href="https://www.linkedin.com/in/muhammad-naufal-faruq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brutal-cyan text-black font-display font-black text-sm sm:text-base uppercase px-5 py-3.5 border-2 border-white shadow-[4px_4px_0_0_#ffe600] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#ffe600] active:translate-y-0.5 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>LinkedIn</span>
                  <span className="material-symbols-outlined text-base">arrow_outward</span>
                </a>
              </div>
            </div>

            {/* Right Column: Direct Contact Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              <button
                type="button"
                onClick={handleCopyEmail}
                className="bg-zinc-900 border-2 border-zinc-700 p-4 hover:border-brutal-yellow hover:bg-zinc-800 transition-all flex flex-col justify-between shadow-[3px_3px_0_0_#ffe600] text-left cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-zinc-400 uppercase font-bold">
                    {copied ? t.contact.copied : "Email (Click to Copy)"}
                  </span>
                  <span className="material-symbols-outlined text-brutal-yellow text-2xl">mail</span>
                </div>
                <span className="font-display font-bold text-sm text-white truncate">naufalfaruq285@gmail.com</span>
              </button>

              <a
                href="https://www.linkedin.com/in/muhammad-naufal-faruq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 border-2 border-zinc-700 p-4 hover:border-brutal-cyan hover:bg-zinc-800 transition-all flex flex-col justify-between shadow-[3px_3px_0_0_#00e5ff]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-zinc-400 uppercase font-bold">LinkedIn</span>
                  <span className="material-symbols-outlined text-brutal-cyan text-2xl">badge</span>
                </div>
                <span className="font-display font-bold text-sm text-white truncate">muhammad-naufal-faruq</span>
              </a>

              <a
                href="https://github.com/nopal087"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 border-2 border-zinc-700 p-4 hover:border-brutal-lime-electric hover:bg-zinc-800 transition-all flex flex-col justify-between shadow-[3px_3px_0_0_#b8ff00]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-zinc-400 uppercase font-bold">GitHub</span>
                  <span className="material-symbols-outlined text-brutal-lime-electric text-2xl">code</span>
                </div>
                <span className="font-display font-bold text-sm text-white truncate">github.com/nopal087</span>
              </a>

              <div className="bg-zinc-900 border-2 border-zinc-700 p-4 flex flex-col justify-between shadow-[3px_3px_0_0_#ff3399]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-zinc-400 uppercase font-bold">
                    {lang === "en" ? "Location" : "Lokasi"}
                  </span>
                  <span className="material-symbols-outlined text-brutal-pink text-2xl">pin_drop</span>
                </div>
                <span className="font-display font-bold text-sm text-white truncate">Pekalongan / Semarang</span>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* ========================================================================= */}
      {/* FOOTER */}
      {/* ========================================================================= */}
      <footer className="bg-white border-t-[3px] md:border-t-[4px] border-black py-8 mt-16">
        <div className="w-full max-w-[1720px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-lg uppercase bg-brutal-yellow px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0_0_#000]">
              NPL DEV
            </span>
            <span className="font-mono text-xs text-zinc-700 font-bold">
              © 2026 Muhammad Naufal Faruq • {t.footer.rights}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-display font-bold uppercase">
            <a href="#about" className="hover:underline">{t.nav.about}</a>
            <a href="#system-info" className="hover:underline">{t.nav.skills}</a>
            <a href="#experience" className="hover:underline">{t.nav.experience}</a>
            <a href="#projects" className="hover:underline">{t.nav.projects}</a>
            <Link href="/certifications" className="hover:underline">{t.nav.certifications}</Link>
            <a href="#contact" className="hover:underline">{t.nav.contact}</a>
          </div>

          <a
            href="#"
            className="font-display font-black text-xs uppercase bg-black text-white px-3 py-1.5 border-2 border-black shadow-[2px_2px_0_0_#ffe600] hover:bg-zinc-800 active:translate-y-0.5 transition-all inline-flex items-center gap-1 cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
          </a>
        </div>
      </footer>
    </>
  );
}
