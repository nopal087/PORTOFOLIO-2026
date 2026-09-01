import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      {/* Background Decor Grids & Ambient Accents */}
      <div className="fixed inset-0 bg-grid opacity-80 pointer-events-none -z-20"></div>

      {/* Floating Ambient Stickers for Depth (Safe bounds) */}
      <div className="fixed top-24 -left-6 w-16 h-16 bg-brutal-yellow border-[3px] border-black rotate-12 -z-10 shadow-[4px_4px_0_0_#000] hidden lg:block"></div>
      <div className="fixed bottom-28 -right-6 w-20 h-20 bg-brutal-cyan border-[3px] border-black -rotate-12 -z-10 shadow-[4px_4px_0_0_#000] hidden lg:block"></div>

      {/* Navigation Header */}
      <Navigation />

      <main className="flex-grow flex flex-col px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 gap-16 sm:gap-24 md:gap-32 max-w-7xl mx-auto w-full">
        
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
                <span>IT Support &amp; Full Stack Dev</span>
              </span>
              <span className="bg-brutal-lime-electric text-black border-2 md:border-[3px] border-black px-3.5 py-1 font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0_0_#000] hover:-rotate-1 transition-transform inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">smart_toy</span>
                <span>Agentic AI Specialist</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="w-full">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter text-ink">
                BUILDING <br />
                <span className="bg-black text-brutal-yellow px-2.5 sm:px-4 py-0.5 inline-block transform -skew-x-6 my-1 shadow-[4px_4px_0_0_#00e5ff]">
                  RELIABLE
                </span>{" "}
                <br className="hidden sm:inline" />
                SYSTEMS &amp; AI
              </h1>
            </div>

            {/* Value Proposition Description */}
            <div className="bg-white border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] md:shadow-[8px_8px_0_0_#000] w-full relative">
              <div className="absolute -top-3 right-4 bg-brutal-pink text-white font-mono font-black text-[10px] sm:text-xs uppercase px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0_0_#000] rotate-1">
                SOLVING COMPLEX TECH
              </div>
              <p className="font-body text-base sm:text-lg md:text-xl font-bold text-ink leading-relaxed">
                Hi, I&apos;m <span className="bg-brutal-yellow px-2 py-0.5 border-2 border-black font-black shadow-[2px_2px_0_0_#000]">Muhammad Naufal Faruq</span>. 
                I build high-concurrency web applications (Next.js &amp; Golang), maintain enterprise IT infrastructure, and engineer autonomous Agentic AI workflows to accelerate software delivery.
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full pt-1">
              <a
                href="#projects"
                className="bg-black text-white border-[3px] md:border-[3.5px] border-black px-6 py-3.5 sm:py-4 font-display font-black text-base sm:text-lg uppercase text-center shadow-[4px_4px_0_0_#ffe600] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#ffe600] active:translate-y-0.5 active:shadow-[1px_1px_0_0_#ffe600] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Projects</span>
                <span className="material-symbols-outlined text-xl text-brutal-yellow">arrow_downward</span>
              </a>

              <a
                href="/CV-Muhammad-Naufal-Faruq.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brutal-yellow text-black border-[3px] md:border-[3.5px] border-black px-6 py-3.5 sm:py-4 font-display font-black text-base sm:text-lg uppercase text-center shadow-[4px_4px_0_0_#000] hover:-translate-y-0.5 hover:bg-brutal-yellow-dark hover:shadow-[6px_6px_0_0_#000] active:translate-y-0.5 active:shadow-[1px_1px_0_0_#000] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">download</span>
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="bg-brutal-cyan text-black border-[3px] md:border-[3.5px] border-black px-5 py-3.5 sm:py-4 font-display font-black text-base sm:text-lg uppercase text-center shadow-[4px_4px_0_0_#000] hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[6px_6px_0_0_#000] active:translate-y-0.5 active:shadow-[1px_1px_0_0_#000] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Contact</span>
              </a>
            </div>

            {/* Quick Link Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 text-xs sm:text-sm font-mono font-bold">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1 border-2 border-black shadow-[2px_2px_0_0_#000]">
                <span className="material-symbols-outlined text-base text-brutal-blue">pin_drop</span> Pekalongan / Semarang
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1 border-2 border-black shadow-[2px_2px_0_0_#000]">
                <span className="material-symbols-outlined text-base text-brutal-pink">school</span> S1 Teknik Informatika (3.77 GPA)
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
                  <span>#OpenToWork</span>
                </div>

                {/* Top Badge Sticker */}
                <div className="absolute -top-4 -right-2 bg-brutal-yellow border-2 md:border-[3px] border-black px-3.5 py-1 font-display font-black text-xs uppercase shadow-[2.5px_2.5px_0_0_#000] rotate-3 z-20 inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span>3+ Yrs Exp</span>
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
                      <div className="text-[11px] font-mono text-zinc-300">IT Support &amp; Full Stack Dev</div>
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
            <span className="font-mono text-xs uppercase font-black text-zinc-900 border-b-2 border-black pb-1.5 mb-2">EXPERIENCE</span>
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-black">3+ YRS</div>
              <p className="font-body text-xs sm:text-sm font-bold text-zinc-900 mt-1">IT Infrastructure &amp; Web Dev</p>
            </div>
          </div>

          <div className="bg-brutal-cyan border-[3px] md:border-[4px] border-black p-4 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <span className="font-mono text-xs uppercase font-black text-zinc-900 border-b-2 border-black pb-1.5 mb-2">PRODUCTION</span>
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-black">4+ APPS</div>
              <p className="font-body text-xs sm:text-sm font-bold text-zinc-900 mt-1">Enterprise Systems Built</p>
            </div>
          </div>

          <div className="bg-brutal-lime-electric border-[3px] md:border-[4px] border-black p-4 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <span className="font-mono text-xs uppercase font-black text-zinc-900 border-b-2 border-black pb-1.5 mb-2">CREDENTIALS</span>
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-black">20+ CERTS</div>
              <p className="font-body text-xs sm:text-sm font-bold text-zinc-900 mt-1">AI, Python &amp; Cloud Certified</p>
            </div>
          </div>

          <div className="bg-brutal-pink border-[3px] md:border-[4px] border-black p-4 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between text-white hover:-translate-y-1 transition-transform">
            <span className="font-mono text-xs uppercase font-black text-white border-b-2 border-white/40 pb-1.5 mb-2">SUPPORT SLA</span>
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white">98% SLA</div>
              <p className="font-body text-xs sm:text-sm font-bold text-white mt-1">120+ Monthly Tickets Solved</p>
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
                <span className="material-symbols-outlined">terminal</span> FULL STACK ENGINEERING
              </span>
              <span className="text-zinc-600">✦</span>
              <span className="flex items-center gap-2 text-brutal-cyan">
                <span className="material-symbols-outlined">psychology</span> AGENTIC AI WORKFLOWS
              </span>
              <span className="text-zinc-600">✦</span>
              <span className="flex items-center gap-2 text-brutal-lime-electric">
                <span className="material-symbols-outlined">dns</span> IT INFRASTRUCTURE &amp; NETWORKING
              </span>
              <span className="text-zinc-600">✦</span>
              <span className="flex items-center gap-2 text-brutal-pink">
                <span className="material-symbols-outlined">bolt</span> GOLANG &amp; NEXT.JS APPS
              </span>
              <span className="text-zinc-600">✦</span>
            </div>
            <div className="flex gap-8 sm:gap-12 pr-8 sm:pr-12 items-center font-display font-black text-lg sm:text-2xl uppercase tracking-wider">
              <span className="flex items-center gap-2 text-brutal-yellow">
                <span className="material-symbols-outlined">terminal</span> FULL STACK ENGINEERING
              </span>
              <span className="text-zinc-600">✦</span>
              <span className="flex items-center gap-2 text-brutal-cyan">
                <span className="material-symbols-outlined">psychology</span> AGENTIC AI WORKFLOWS
              </span>
              <span className="text-zinc-600">✦</span>
              <span className="flex items-center gap-2 text-brutal-lime-electric">
                <span className="material-symbols-outlined">dns</span> IT INFRASTRUCTURE &amp; NETWORKING
              </span>
              <span className="text-zinc-600">✦</span>
              <span className="flex items-center gap-2 text-brutal-pink">
                <span className="material-symbols-outlined">bolt</span> GOLANG &amp; NEXT.JS APPS
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
              01 // About Me
            </h2>
            <span className="h-[3px] flex-grow bg-black hidden sm:block"></span>
          </div>

          {/* Content Card */}
          <div className="bg-white border-[3px] md:border-[4px] border-black p-6 sm:p-8 md:p-10 shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Overview Story */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight text-ink">
                  Bridging Software Engineering, System Reliability, &amp; Artificial Intelligence
                </h3>
                
                <p className="font-body text-base sm:text-lg font-medium text-zinc-900 leading-relaxed">
                  With over 3 years of hands-on experience spanning enterprise web development, IT systems support, and network infrastructure, I specialize in architecting solutions that solve tangible operational challenges.
                </p>

                <p className="font-body text-base sm:text-lg font-medium text-zinc-900 leading-relaxed bg-brutal-yellow/20 p-4 border-l-[6px] border-brutal-yellow border-y border-r border-black/10">
                  In today&apos;s AI-driven era, I proactively leverage <strong>Agentic AI &amp; LLM-assisted workflows</strong> (such as Claude Code, Antigravity, and autonomous agent loops) to accelerate the software development lifecycle by 2-3x while maintaining rock-solid architectural standards.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-brutal-cyan/20 border-2 border-black shadow-[2px_2px_0_0_#000]">
                    <span className="font-display font-black text-sm uppercase flex items-center gap-1.5 mb-1">
                      <span className="material-symbols-outlined text-base text-brutal-blue">location_on</span>
                      <span>Location</span>
                    </span>
                    <span className="text-sm font-bold text-zinc-800">Pekalongan / Semarang, Central Java</span>
                  </div>
                  <div className="p-3 bg-brutal-lime-electric/20 border-2 border-black shadow-[2px_2px_0_0_#000]">
                    <span className="font-display font-black text-sm uppercase flex items-center gap-1.5 mb-1">
                      <span className="material-symbols-outlined text-base text-brutal-pink">school</span>
                      <span>Degree</span>
                    </span>
                    <span className="text-sm font-bold text-zinc-800">S.Kom (Informatics) - 3.77 GPA</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 3 Core Pillars */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="bg-brutal-yellow border-[3px] border-black p-4 sm:p-5 shadow-[4px_4px_0_0_#000] hover:-translate-y-0.5 transition-transform">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-2xl font-bold bg-black text-brutal-yellow p-1">code</span>
                    <h4 className="font-display font-black text-base uppercase">Full Stack Engineering</h4>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-relaxed">
                    Building robust frontend UIs (Next.js, React, TypeScript) and high-concurrency backend services (Golang, PostgreSQL, PHP).
                  </p>
                </div>

                <div className="bg-brutal-cyan border-[3px] border-black p-4 sm:p-5 shadow-[4px_4px_0_0_#000] hover:-translate-y-0.5 transition-transform">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-2xl font-bold bg-black text-brutal-cyan p-1">router</span>
                    <h4 className="font-display font-black text-base uppercase">IT Infrastructure &amp; SLA</h4>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-relaxed">
                    Managing LAN/Wi-Fi network topology, hardware maintenance, e-Channel systems, and maintaining a 98% resolution SLA.
                  </p>
                </div>

                <div className="bg-brutal-lime-electric border-[3px] border-black p-4 sm:p-5 shadow-[4px_4px_0_0_#000] hover:-translate-y-0.5 transition-transform">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-2xl font-bold bg-black text-brutal-lime-electric p-1">smart_toy</span>
                    <h4 className="font-display font-black text-base uppercase">Agentic AI &amp; Automation</h4>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-relaxed">
                    Implementing autonomous coding agents, custom prompt engineering, and intelligent workflow automation.
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
              02 // System Info &amp; Tech Stack
            </h2>
            <span className="h-[3px] flex-grow bg-black hidden sm:block"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Category 1: Frontend & UI */}
            <div className="bg-brutal-yellow border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                  <h3 className="font-display font-black text-lg uppercase text-black">Frontend</h3>
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
                {"// Responsive, Fast, Accessible"}
              </div>
            </div>

            {/* Category 2: Backend & Systems */}
            <div className="bg-brutal-cyan border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                  <h3 className="font-display font-black text-lg uppercase text-black">Backend &amp; API</h3>
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
                {"// High Concurrency & Throughput"}
              </div>
            </div>

            {/* Category 3: AI & Agentic Tooling */}
            <div className="bg-brutal-lime-electric border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                  <h3 className="font-display font-black text-lg uppercase text-black">AI &amp; Agents</h3>
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
                {"// 2-3x Accelerated SDLC"}
              </div>
            </div>

            {/* Category 4: Database & Infrastructure */}
            <div className="bg-secondary-fixed-dim border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                  <h3 className="font-display font-black text-lg uppercase text-black">Cloud &amp; Infra</h3>
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
                {"// 98% Support SLA Availability"}
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
              03 // Experience
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
                      Current Role
                    </span>
                    <span className="bg-black text-brutal-lime-electric px-3 py-0.5 font-mono text-xs uppercase font-bold">
                      Enterprise KAI
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase text-ink">
                    IT Support &amp; Developer
                  </h3>
                  <h4 className="font-body font-bold text-base sm:text-lg text-zinc-800">
                    PT Reska Multi Usaha (KAI Services) • Semarang, Indonesia
                  </h4>
                </div>
                <div className="bg-brutal-lime-electric border-2 border-black px-3.5 py-1.5 font-mono font-bold text-xs sm:text-sm shadow-[2px_2px_0_0_#000] self-start lg:self-auto">
                  Nov 2025 – Present
                </div>
              </div>

              <div className="flex flex-col gap-3 font-body text-sm sm:text-base text-zinc-900">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-lg text-brutal-blue mt-0.5 font-bold">check_circle</span>
                  <p>
                    <strong>End-to-End Enterprise Web Apps:</strong> Architected and engineered high-impact operational systems, including the <strong>Warehouse Management System (WMS)</strong> and <strong>Loko Cafe Management System</strong> using Next.js (App Router) and Golang.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-lg text-brutal-blue mt-0.5 font-bold">check_circle</span>
                  <p>
                    <strong>WMS Real-time Logistics:</strong> Designed live item tracking, barcode scanning, and multi-tier shelf location management to eliminate manual discrepancies in Regional Office 04 Semarang.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-lg text-brutal-blue mt-0.5 font-bold">check_circle</span>
                  <p>
                    <strong>AI-Assisted Acceleration:</strong> Integrated autonomous Agentic AI workflows to expedite development cycles by 2-3x while maintaining comprehensive test coverage.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-lg text-brutal-blue mt-0.5 font-bold">check_circle</span>
                  <p>
                    <strong>Infrastructure Support:</strong> Overseeing preventive maintenance, LAN/Wi-Fi troubleshooting, and hardware configurations to guarantee operational continuity.
                  </p>
                </div>
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
                      Banking IT
                    </span>
                    <span className="bg-black text-white px-3 py-0.5 font-mono text-xs uppercase font-bold">
                      SLA 98%
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase text-ink">
                    IT Support &amp; Archive Systems
                  </h3>
                  <h4 className="font-body font-bold text-base sm:text-lg text-zinc-800">
                    PT Bank Rakyat Indonesia (Persero) Tbk • KC Yogyakarta Katamso
                  </h4>
                </div>
                <div className="bg-brutal-cyan border-2 border-black px-3.5 py-1.5 font-mono font-bold text-xs sm:text-sm shadow-[2px_2px_0_0_#000] self-start lg:self-auto">
                  Aug 2023 – Jan 2025
                </div>
              </div>

              <div className="flex flex-col gap-3 font-body text-sm sm:text-base text-zinc-900">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-lg text-brutal-blue mt-0.5 font-bold">check_circle</span>
                  <p>
                    Resolved <strong>120+ technical support tickets monthly</strong> with a 98% resolution SLA across client workstations, printers, core networks, and internal banking software.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-lg text-brutal-blue mt-0.5 font-bold">check_circle</span>
                  <p>
                    Maintained and monitored <strong>e-Channel infrastructure (ATM, CRM, EDC Merchant, UKO)</strong> and branch LAN/Wi-Fi systems, reducing hardware-related downtime by 30%.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-lg text-brutal-blue mt-0.5 font-bold">check_circle</span>
                  <p>
                    Performed security hardening and regular software updates across 100+ IT assets, ensuring compliance during internal audits.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t-2 border-black border-dashed">
                {["IT Support", "LAN / Wi-Fi", "ATM & e-Channel", "System Hardening", "Hardware SLA", "Inventory Audit"].map((badge) => (
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
                      IoT &amp; Robotics
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase text-ink">
                    Software Engineer Intern
                  </h3>
                  <h4 className="font-body font-bold text-base sm:text-lg text-zinc-800">
                    PT Stechoq Robotika Indonesia • Yogyakarta, Indonesia
                  </h4>
                </div>
                <div className="bg-brutal-yellow border-2 border-black px-3.5 py-1.5 font-mono font-bold text-xs sm:text-sm shadow-[2px_2px_0_0_#000] self-start lg:self-auto">
                  Feb 2022 – Jun 2022
                </div>
              </div>

              <div className="flex flex-col gap-3 font-body text-sm sm:text-base text-zinc-900">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-lg text-brutal-blue mt-0.5 font-bold">check_circle</span>
                  <p>
                    Engineered an automated <strong>Self-Checkout solution utilizing RFID technology</strong>, writing backend microservices with Express.js.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-lg text-brutal-blue mt-0.5 font-bold">check_circle</span>
                  <p>
                    Translated wireframes into high-fidelity interactive UI designs using Figma and conducted rigorous integration tests with RFID reader hardware.
                  </p>
                </div>
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
                  Formal Education
                </span>
                <span className="font-mono text-xs font-bold text-zinc-900">2019 – 2023</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-black">
                S1 Teknik Informatika
              </h3>
              <h4 className="font-body font-bold text-lg text-zinc-900 mt-1 mb-3">
                Universitas Muhammadiyah Surakarta
              </h4>
              <p className="font-body text-sm sm:text-base text-zinc-900 leading-relaxed bg-white p-4 border-2 border-black shadow-[3px_3px_0_0_#000]">
                <strong>IPK 3.77 / 4.00 (Cum Laude).</strong> Tugas Akhir: Mengembangkan aplikasi web SI-BUMDES untuk manajemen layanan Wi-Fi desa digital (manajemen user, billing, pelaporan).
              </p>
            </div>
            <div className="mt-6 pt-3 border-t-2 border-black flex items-center justify-between text-xs font-mono font-black text-black">
              <span>Degree: Sarjana Komputer (S.Kom)</span>
              <span>Graduated 2023</span>
            </div>
          </div>

          {/* Certifications Gallery Banner */}
          <div className="bg-brutal-cyan border-[3px] md:border-[4px] border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#000] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                <span className="bg-black text-brutal-yellow font-display font-black text-xs uppercase px-3 py-1 border border-black shadow-[2px_2px_0_0_#ffe600]">
                  Accreditations
                </span>
                <span className="font-mono text-xs font-bold text-zinc-900">20+ Certificates</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-black">
                AI &amp; Data Science Certifications
              </h3>
              <h4 className="font-body font-bold text-lg text-zinc-900 mt-1 mb-3">
                Komdigi • Dicoding • DQLab • RevoU
              </h4>
              <p className="font-body text-sm sm:text-base text-zinc-900 leading-relaxed bg-white p-4 border-2 border-black shadow-[3px_3px_0_0_#000]">
                Completed 20+ specialized certifications in Generative AI, Deep Learning, Python Data Science, Cloud Computing, and Virtual Lab Linux.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black border-dashed flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="font-mono text-xs font-black text-black">
                Explore verifiable credentials
              </span>
              <Link
                href="/certifications"
                className="bg-black text-white font-display font-black text-xs sm:text-sm uppercase px-5 py-2.5 border-2 border-black shadow-[3px_3px_0_0_#ffe600] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#ffe600] active:translate-y-0.5 transition-all text-center inline-flex items-center justify-center gap-2"
              >
                <span>Open Gallery</span>
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
              04 // Selected Works
            </h2>
            <span className="h-[3px] flex-grow bg-black hidden sm:block"></span>
          </div>

          {/* Featured Project: Warehouse Management System */}
          <div className="bg-white border-[3px] md:border-[4px] border-black p-6 sm:p-8 md:p-10 shadow-[8px_8px_0_0_#000] relative">
            <div className="absolute -top-3.5 left-6 bg-brutal-yellow text-black border-2 border-black px-3.5 py-0.5 font-display font-black text-xs uppercase tracking-wider shadow-[2px_2px_0_0_#000] inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm font-bold text-black">star</span>
              <span>FEATURED ENTERPRISE PROJECT</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
              
              {/* Project Image Frame */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="border-[3px] border-black bg-zinc-100 overflow-hidden shadow-[5px_5px_0_0_#000] group relative aspect-video">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt="Warehouse Management System Interface"
                    src="/images/wms.png"
                  />
                  <div className="absolute top-2 right-2 bg-black text-brutal-lime-electric text-[11px] font-mono font-bold px-2.5 py-1 uppercase border border-white/40">
                    Live System
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-brutal-yellow border-2 border-black px-2.5 py-0.5 text-xs font-mono font-bold uppercase shadow-[2px_2px_0_0_#000]">Next.js</span>
                  <span className="bg-brutal-cyan border-2 border-black px-2.5 py-0.5 text-xs font-mono font-bold uppercase shadow-[2px_2px_0_0_#000]">Golang</span>
                  <span className="bg-brutal-lime-electric border-2 border-black px-2.5 py-0.5 text-xs font-mono font-bold uppercase shadow-[2px_2px_0_0_#000]">PostgreSQL</span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase text-ink leading-tight">
                  Warehouse Management System (WMS)
                </h3>
                <h4 className="font-body font-bold text-sm sm:text-base text-zinc-700">
                  PT Reska Multi Usaha (KAI Services) Regional Office 04 Semarang
                </h4>

                <p className="font-body text-sm sm:text-base text-zinc-900 leading-relaxed bg-zinc-50 p-3.5 border-l-4 border-black">
                  Enterprise-grade Warehouse Management System designed to digitize end-to-end warehouse logistics: real-time stock allocation, barcode scanning validation, shelf location mapping, and multi-tier inventory auditing.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-2.5 bg-brutal-yellow/30 border-2 border-black shadow-[2px_2px_0_0_#000]">
                    <span className="block font-mono text-[10px] uppercase font-bold text-zinc-700">Role</span>
                    <span className="font-display font-black text-xs sm:text-sm uppercase text-black">Full Stack Developer</span>
                  </div>
                  <div className="p-2.5 bg-brutal-lime-electric/40 border-2 border-black shadow-[2px_2px_0_0_#000]">
                    <span className="block font-mono text-[10px] uppercase font-bold text-zinc-700">Status</span>
                    <span className="font-display font-black text-xs sm:text-sm uppercase text-black">Production Live</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 text-xs font-mono font-bold uppercase border-2 border-black shadow-[3px_3px_0_0_#ffe600]">
                    <span className="material-symbols-outlined text-sm text-brutal-lime-electric">lock</span>
                    <span>Internal Enterprise System</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Grid of Other Works */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 2: Loko Cafe System Management */}
            <div className="bg-white border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between group hover:-translate-y-1 transition-all">
              <div>
                <div className="border-2 border-black bg-zinc-100 overflow-hidden mb-4 shadow-[3px_3px_0_0_#000] aspect-[16/10] relative">
                  <img
                    className="w-full h-full object-contain p-2 bg-white transition-transform duration-500 group-hover:scale-105"
                    alt="Loko Cafe System Management"
                    src="/images/lsm.png"
                  />
                  <div className="absolute top-2 left-2 bg-brutal-yellow text-black text-[10px] font-mono font-bold px-2.5 py-0.5 border-2 border-black uppercase shadow-[2px_2px_0_0_#000]">
                    F&amp;B Operations
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  <span className="bg-brutal-yellow/30 border border-black px-2 py-0.5 text-[11px] font-mono font-bold">Next.js</span>
                  <span className="bg-brutal-cyan/30 border border-black px-2 py-0.5 text-[11px] font-mono font-bold">Supabase</span>
                  <span className="bg-brutal-lime-electric/30 border border-black px-2 py-0.5 text-[11px] font-mono font-bold">AI Stickers</span>
                </div>

                <h3 className="font-display font-black text-xl uppercase leading-tight text-ink mb-2">
                  Loko Cafe System Management
                </h3>
                
                <p className="font-body text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  Integrated operations platform for Loko Cafe outlets across Semarang Tawang &amp; Poncol: recipes, raw materials inventory, AI sticker label generation, and Trainmart POS data integration.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t-2 border-black border-dashed flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-zinc-700">PT Reska Multi Usaha</span>
                <span className="bg-black text-white px-2 py-0.5 uppercase">Internal</span>
              </div>
            </div>

            {/* Card 3: IRIS Industrial Relations Information System */}
            <div className="bg-white border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] flex flex-col justify-between group hover:-translate-y-1 transition-all">
              <div>
                <div className="border-2 border-black bg-zinc-100 overflow-hidden mb-4 shadow-[3px_3px_0_0_#000] aspect-[16/10] relative">
                  <img
                    className="w-full h-full object-contain p-2 bg-white transition-transform duration-500 group-hover:scale-105"
                    alt="IRIS System Interface"
                    src="/images/iris.png"
                  />
                  <div className="absolute top-2 left-2 bg-brutal-cyan text-black text-[10px] font-mono font-bold px-2.5 py-0.5 border-2 border-black uppercase shadow-[2px_2px_0_0_#000]">
                    HR &amp; Compliance
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  <span className="bg-brutal-cyan/30 border border-black px-2 py-0.5 text-[11px] font-mono font-bold">Next.js</span>
                  <span className="bg-brutal-pink/30 border border-black px-2 py-0.5 text-[11px] font-mono font-bold">Firebase</span>
                  <span className="bg-brutal-yellow/30 border border-black px-2 py-0.5 text-[11px] font-mono font-bold">Compliance</span>
                </div>

                <h3 className="font-display font-black text-xl uppercase leading-tight text-ink mb-2">
                  IRIS System (Industrial Relations)
                </h3>
                
                <p className="font-body text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  Centralized HR platform to manage employee relations workflows, transparent SP1–SP3 disciplinary procedures, and compliance tracking with real-time audit logs.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t-2 border-black border-dashed flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-zinc-700">KAI Services HR</span>
                <span className="bg-black text-white px-2 py-0.5 uppercase">Internal</span>
              </div>
            </div>

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
                    Portfolio
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  <span className="bg-brutal-lime-electric/30 border border-black px-2 py-0.5 text-[11px] font-mono font-bold">Next.js 16</span>
                  <span className="bg-brutal-yellow/30 border border-black px-2 py-0.5 text-[11px] font-mono font-bold">Tailwind v4</span>
                  <span className="bg-brutal-cyan/30 border border-black px-2 py-0.5 text-[11px] font-mono font-bold">TypeScript</span>
                </div>

                <h3 className="font-display font-black text-xl uppercase leading-tight text-ink mb-2">
                  Modern Portfolio Experience
                </h3>
                
                <p className="font-body text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  Personal engineering portfolio designed with vibrant, accessible Neo-Brutalism. Engineered with Next.js App Router, Tailwind CSS v4, and automated Agentic AI tools.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t-2 border-black border-dashed flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-zinc-700">Live Website</span>
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
              05 // Engineering Principles
            </h2>
            <span className="h-[3px] flex-grow bg-black hidden sm:block"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Principle 1 */}
            <div className="bg-brutal-yellow border-[3px] md:border-[4px] border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <span className="font-display font-black text-4xl sm:text-5xl text-black">01</span>
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase mt-2 mb-3 text-black">
                  Reliability First
                </h3>
                <p className="font-body text-sm sm:text-base font-bold text-zinc-950 leading-relaxed bg-white p-4 border-2 border-black shadow-[3px_3px_0_0_#000]">
                  &quot;Code must be resilient and architectures clean. Fragile systems waste time; dependable systems build trust.&quot;
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
                  Agentic Acceleration
                </h3>
                <p className="font-body text-sm sm:text-base font-bold text-zinc-950 leading-relaxed bg-white p-4 border-2 border-black shadow-[3px_3px_0_0_#000]">
                  &quot;AI is not a shortcut, it&apos;s leverage. Automate the repetitive boilerplate to focus deep attention on difficult engineering logic.&quot;
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
                  High-Craft Performance
                </h3>
                <p className="font-body text-sm sm:text-base font-bold text-zinc-950 leading-relaxed bg-white p-4 border-2 border-black shadow-[3px_3px_0_0_#000]">
                  &quot;No unnecessary bloat. Fast loading, responsive layouts on all screens, and clear visual hierarchy always.&quot;
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
                <span className="tracking-wide">#OpenToWork • Full-Time &amp; Projects</span>
              </span>
              
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
                LET&apos;S BUILD <br />
                <span className="text-brutal-yellow">SOMETHING LOUD.</span>
              </h2>

              <p className="font-body text-sm sm:text-base text-zinc-300 max-w-lg leading-relaxed">
                Whether you need a reliable Full Stack Engineer, IT Infrastructure Support, or Agentic AI automation consulting, my inbox is always open.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:naufalfaruq285@gmail.com"
                  className="bg-brutal-yellow text-black font-display font-black text-sm sm:text-base uppercase px-6 py-3.5 border-2 border-white shadow-[4px_4px_0_0_#fff] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#fff] active:translate-y-0.5 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">mail</span>
                  <span>Send Email</span>
                </a>

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
              
              <a
                href="mailto:naufalfaruq285@gmail.com"
                className="bg-zinc-900 border-2 border-zinc-700 p-4 hover:border-brutal-yellow hover:bg-zinc-800 transition-all flex flex-col justify-between shadow-[3px_3px_0_0_#ffe600]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-zinc-400 uppercase font-bold">Email</span>
                  <span className="material-symbols-outlined text-brutal-yellow text-2xl">mail</span>
                </div>
                <span className="font-display font-bold text-sm text-white truncate">naufalfaruq285@gmail.com</span>
              </a>

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
                  <span className="font-mono text-xs text-zinc-400 uppercase font-bold">Location</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-lg uppercase bg-brutal-yellow px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0_0_#000]">
              NPL DEV
            </span>
            <span className="font-mono text-xs text-zinc-700 font-bold">
              © 2026 Muhammad Naufal Faruq
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-display font-bold uppercase">
            <a href="#about" className="hover:underline">About</a>
            <a href="#system-info" className="hover:underline">Skills</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <Link href="/certifications" className="hover:underline">Certifications</Link>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>

          <a
            href="#"
            className="font-display font-black text-xs uppercase bg-black text-white px-3 py-1.5 border-2 border-black shadow-[2px_2px_0_0_#ffe600] hover:bg-zinc-800 active:translate-y-0.5 transition-all inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Top</span>
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
          </a>
        </div>
      </footer>
    </>
  );
}
