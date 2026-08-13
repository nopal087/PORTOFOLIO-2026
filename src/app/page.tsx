import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      {/*  Floating Background Decor  */}
      <div className="fixed top-20 right-10 w-20 h-20 bg-secondary-fixed-dim border-[6px] border-black rotate-12 -z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-stripes"></div>
      <div className="fixed bottom-40 left-10 w-32 h-32 rounded-full bg-cyan-brutal border-[6px] border-black -z-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
        <span className="font-display font-black text-4xl rotate-45">*</span>
      </div>
      <div className="fixed top-1/2 left-4 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-lime-brutal -rotate-45 -z-10 filter drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]"></div>
      <div className="fixed bottom-20 right-20 w-16 h-16 bg-primary-fixed border-[4px] border-black rotate-[30deg] -z-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"></div>
      {/*  TopNavBar (Client Component)  */}
      <Navigation />
      <main className="flex-grow flex flex-col px-margin-mobile md:px-margin-desktop py-20 gap-32 max-w-7xl mx-auto w-full">
        {/*  Hero Section  */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          {/*  Stickers  */}
          <div className="absolute -top-12 left-5 bg-cyan-brutal border-[5px] border-black px-6 py-2 font-display font-black text-3xl rotate-[-18deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-20 hover:rotate-0 transition-transform">
            HELLO WORLD
          </div>
          <div className="absolute bottom-24 left-1/3 bg-lime-brutal border-[5px] border-black px-6 py-2 font-display font-black text-2xl rotate-[25deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-20 hover:rotate-0 transition-transform hidden md:block">
            ! ERROR 404: BORING NOT FOUND
          </div>
          <div className="absolute top-1/2 -right-10 bg-secondary-fixed-dim border-[5px] border-black px-4 py-10 font-display font-black text-4xl rotate-[90deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-20 hover:rotate-0 transition-transform hidden lg:block">
            X_X
          </div>
          <div className="flex flex-col items-start gap-6 md:gap-8 z-10 bg-surface-container-lowest p-6 md:p-10 border-[4px] md:border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] relative bg-stripes">
            <div className="absolute -top-6 -right-6 bg-primary-fixed border-[3px] md:border-[4px] border-black p-3 md:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12 z-30">
              <span className="material-symbols-outlined text-2xl md:text-4xl">
                bolt
              </span>
            </div>
            <div className="absolute -bottom-3 right-4 md:right-8 bg-black text-white px-3 py-1 font-display font-black text-[10px] md:text-xs uppercase border-[2px] md:border-[3px] border-lime-brutal rotate-[2deg] shadow-[3px_3px_0px_0px_#a3e635] z-30 tracking-widest">
              BUILDING THINGS. FIXING THINGS.
            </div>
            <h1 className="font-display text-[38px] sm:text-[50px] md:text-[110px] font-black text-on-background uppercase leading-[0.9] tracking-tighter bg-white p-3 md:p-4 border-[3px] md:border-[4px] border-black inline-block shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
              CREATIVE
              <br />
              <span className="text-white bg-black px-2 py-1 inline-block transform -skew-x-12">
                DEVELOPER
              </span>
              <br />
              &amp; DESIGNER
            </h1>
            <p className="font-body-lg text-lg md:text-2xl text-on-surface-variant max-w-xl bg-lime-brutal p-4 md:p-6 border-[4px] md:border-[5px] border-black font-black uppercase rotate-[1deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              IT Support &amp; Full Stack Developer. Focused on system
              reliability, Agentic AI, and scalable technical problem-solving.
            </p>
            <div className="flex gap-4 md:gap-6 flex-wrap w-full">
              <a
                href="#contact"
                className="bg-black text-white border-[5px] border-primary-fixed shadow-[12px_12px_0px_0px_#fde400] px-10 py-5 font-display font-black text-xl hover:-translate-y-2 hover:shadow-[20px_20px_0px_0px_#fde400] active:translate-y-2 active:shadow-none transition-all uppercase flex-grow text-center"
              >
                LET&apos;S WORK TOGETHER
              </a>

            </div>
          </div>
          <div className="relative justify-self-center lg:justify-self-end w-[85%] md:w-full max-w-md aspect-[4/5] z-10 group mt-4 md:mt-0">
            <div className="absolute inset-0 bg-lime-brutal border-[4px] md:border-[6px] border-black translate-x-6 md:translate-x-12 translate-y-6 md:translate-y-12 -z-10 bg-stripes"></div>
            <div className="absolute inset-0 bg-cyan-brutal border-[4px] md:border-[6px] border-black translate-x-3 md:translate-x-6 translate-y-3 md:translate-y-6 -z-10 group-hover:translate-x-8 md:group-hover:translate-x-16 group-hover:translate-y-8 md:group-hover:translate-y-16 transition-transform duration-500"></div>
            <div className="absolute -bottom-6 md:-bottom-8 -left-6 md:-left-8 bg-primary-fixed border-[4px] md:border-[5px] border-black p-3 md:p-4 font-display font-black text-xl md:text-2xl rotate-[-10deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-20 uppercase">
              #LOUD_AF
            </div>
            <img
              className="w-full h-full object-cover border-[4px] md:border-[6px] border-black shadow-[8px_8px_0px_0px_#ffd7f0] md:shadow-[16px_16px_0px_0px_#ffd7f0] transition-transform hover:-translate-y-2 md:hover:-translate-y-4 hover:shadow-[12px_12px_0px_0px_#ffd7f0] md:hover:shadow-[24px_24px_0px_0px_#ffd7f0] duration-300 relative z-0 grayscale contrast-150"
              alt="A portrait of a creative professional"
              src="/images/pasfoto.png"
            />
          </div>
        </section>
        {/*  Marquee / Skills  */}
        <section className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden border-y-[8px] border-black py-8 bg-tertiary text-on-tertiary shadow-[0_12px_0_0_rgba(0,0,0,1)] rotate-[-2deg] my-10">
          <div className="flex w-max animate-marquee" style={{ animation: 'marquee 12s linear infinite' }}>
            <div className="flex gap-16 pr-16">
              <span className="font-display text-[70px] font-black uppercase flex items-center gap-6">
                BREAK THE RULES{" "}
                <span className="material-symbols-outlined text-6xl text-primary-fixed bg-black rounded-full p-2 border-4 border-white">
                  local_fire_department
                </span>
              </span>
              <span className="font-display text-[70px] font-black uppercase flex items-center gap-6 text-cyan-brutal drop-shadow-[4px_4px_0px_#000]">
                SHIP IT FAST{" "}
                <span className="material-symbols-outlined text-6xl text-primary-fixed bg-black rounded-full p-2 border-4 border-white">
                  rocket_launch
                </span>
              </span>
              <span className="font-display text-[70px] font-black uppercase flex items-center gap-6">
                CODE LIKE HELL{" "}
                <span className="material-symbols-outlined text-6xl text-primary-fixed bg-black rounded-full p-2 border-4 border-white">
                  bolt
                </span>
              </span>
              <span className="font-display text-[70px] font-black uppercase flex items-center gap-6 text-secondary-fixed-dim drop-shadow-[4px_4px_0px_#000]">
                AUTOMATE EVERYTHING{" "}
                <span className="material-symbols-outlined text-6xl text-primary-fixed bg-black rounded-full p-2 border-4 border-white">
                  smart_toy
                </span>
              </span>
              <span className="font-display text-[70px] font-black uppercase flex items-center gap-6 text-lime-brutal drop-shadow-[4px_4px_0px_#000]">
                AI EVERYDAYS{" "}
                <span className="material-symbols-outlined text-6xl text-primary-fixed bg-black rounded-full p-2 border-4 border-white">
                  psychology
                </span>
              </span>
            </div>
            <div className="flex gap-16 pr-16">
              <span className="font-display text-[70px] font-black uppercase flex items-center gap-6">
                BREAK THE RULES{" "}
                <span className="material-symbols-outlined text-6xl text-primary-fixed bg-black rounded-full p-2 border-4 border-white">
                  local_fire_department
                </span>
              </span>
              <span className="font-display text-[70px] font-black uppercase flex items-center gap-6 text-cyan-brutal drop-shadow-[4px_4px_0px_#000]">
                SHIP IT FAST{" "}
                <span className="material-symbols-outlined text-6xl text-primary-fixed bg-black rounded-full p-2 border-4 border-white">
                  rocket_launch
                </span>
              </span>
              <span className="font-display text-[70px] font-black uppercase flex items-center gap-6">
                CODE LIKE HELL{" "}
                <span className="material-symbols-outlined text-6xl text-primary-fixed bg-black rounded-full p-2 border-4 border-white">
                  bolt
                </span>
              </span>
              <span className="font-display text-[70px] font-black uppercase flex items-center gap-6 text-secondary-fixed-dim drop-shadow-[4px_4px_0px_#000]">
                AUTOMATE EVERYTHING{" "}
                <span className="material-symbols-outlined text-6xl text-primary-fixed bg-black rounded-full p-2 border-4 border-white">
                  smart_toy
                </span>
              </span>
              <span className="font-display text-[70px] font-black uppercase flex items-center gap-6 text-lime-brutal drop-shadow-[4px_4px_0px_#000]">
                AI EVERYDAYS{" "}
                <span className="material-symbols-outlined text-6xl text-primary-fixed bg-black rounded-full p-2 border-4 border-white">
                  psychology
                </span>
              </span>
            </div>
          </div>
        </section>

        {/*  About Me Section  */}
        <section
          id="about"
          className="flex flex-col md:flex-row gap-12 items-stretch bg-lime-brutal border-[8px] border-black p-10 md:p-16 shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden bg-dots group"
        >
          {/* Background Watermarks */}
          <div className="absolute -top-10 -right-10 text-[120px] md:text-[200px] font-display font-black text-black opacity-10 rotate-12 pointer-events-none leading-none">
            WHO_AM_I
          </div>
          <div className="absolute bottom-10 -left-10 text-[80px] md:text-[150px] font-display font-black text-black opacity-10 -rotate-12 pointer-events-none leading-none">
            NPL_DEV
          </div>

          {/* Decorative Stickers & Crosshairs */}
          <div className="absolute top-6 left-1/2 bg-primary-fixed border-[4px] border-black p-2 md:p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-15deg] z-20 group-hover:rotate-6 transition-transform duration-300 hidden md:block">
            <span className="font-display font-black text-lg md:text-xl uppercase tracking-widest text-black">
              Caution: High Energy
            </span>
          </div>

          <div className="absolute bottom-8 left-1/4 bg-cyan-brutal border-[4px] border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[20deg] z-20 group-hover:scale-125 transition-transform hidden md:flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl font-bold text-black">
              verified
            </span>
          </div>

          <div className="absolute top-10 left-10 text-black text-4xl font-black opacity-40">
            +
          </div>
          <div className="absolute bottom-10 right-10 text-black text-4xl font-black opacity-40">
            +
          </div>
          <div className="absolute top-1/2 right-4 text-black text-4xl font-black opacity-40 rotate-45">
            +
          </div>

          <div className="w-full md:w-1/3 flex flex-col justify-center items-start border-b-[6px] md:border-b-0 md:border-r-[6px] border-black pb-8 md:pb-0 md:pr-10 gap-6 relative z-10">
            <h2 className="font-display text-[60px] md:text-[70px] lg:text-[80px] font-black uppercase text-black leading-none bg-white p-4 border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -skew-y-3 group-hover:skew-y-0 group-active:skew-y-0 transition-transform duration-300">
              ABOUT
              <br />
              <span className="text-white bg-black px-2 py-1 inline-block transform skew-y-3 mt-2 group-hover:-skew-y-3 group-active:-skew-y-3 transition-transform duration-300">
                ME_
              </span>
            </h2>
            <div className="bg-black text-white font-display font-black px-4 py-2 text-xl border-[4px] border-white transform rotate-2">
              USER_PROFILE
            </div>

            {/* Abstract Barcode */}
            <div className="hidden md:flex gap-1 mt-6 opacity-80">
              <div className="w-2 h-12 bg-black"></div>
              <div className="w-4 h-12 bg-black"></div>
              <div className="w-1 h-12 bg-black"></div>
              <div className="w-6 h-12 bg-black"></div>
              <div className="w-2 h-12 bg-black"></div>
              <div className="w-3 h-12 bg-black"></div>
              <div className="w-1 h-12 bg-black"></div>
              <div className="w-8 h-12 bg-black"></div>
              <div className="w-2 h-12 bg-black"></div>
              <div className="w-5 h-12 bg-black"></div>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col justify-center gap-8 z-10 relative">
            <div className="absolute -top-6 -right-6 bg-secondary-fixed-dim border-[4px] border-black p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[15deg] z-30 group-hover:rotate-[30deg] transition-transform">
              <span className="material-symbols-outlined text-4xl text-black">
                rocket_launch
              </span>
            </div>

            <p className="font-body-lg font-bold text-xl md:text-2xl text-on-surface bg-white p-6 md:p-8 border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] leading-relaxed hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all">
              Hello! I&apos;m{" "}
              <span className="bg-primary-fixed px-2 border-2 border-black inline-block transform rotate-1 mt-1 mb-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Muhammad Naufal Faruq
              </span>
              , a Full Stack Developer, IT Support and AI Enthusiast. I am
              obsessed with solving complex technical problems and designing
              highly reliable system architectures.
            </p>
            <p className="font-body-lg font-bold text-lg md:text-xl text-on-surface bg-cyan-brutal p-6 md:p-8 border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] leading-relaxed hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all rotate-[-1deg]">
              With experience ranging from building enterprise-scale systems to
              integrating Agentic AI, I combine structured logic with brutalist
              creativity to craft digital solutions that are both visually
              striking and highly functional.
            </p>
          </div>
        </section>

        {/*  System Info Section  */}
        <section className="flex flex-col gap-16">
          <div className="relative inline-block self-start">
            <div className="absolute inset-0 bg-secondary-fixed-dim border-[5px] border-black translate-x-3 translate-y-3 -z-10 rotate-[4deg]"></div>
            <h2 className="font-display text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-black border-[6px] border-black bg-primary-fixed p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] uppercase tracking-tighter max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
              System_Info
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/*  Skills Box  */}
            <div className="bg-secondary-fixed-dim border-[6px] border-black p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative lg:col-span-4">
              <div className="absolute -top-8 -right-8 bg-cyan-brutal border-[5px] border-black p-3 font-display font-black text-2xl rotate-[20deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-transform cursor-crosshair">
                CAPABILITIES
              </div>
              <h3 className="font-display text-[40px] font-black border-b-[6px] border-black pb-4 mb-8 uppercase bg-white p-2 inline-block">
                Skills
              </h3>
              <ul className="flex flex-col gap-6 font-display font-bold text-xl uppercase bg-white p-6 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <li className="border-b-[4px] border-black border-dotted pb-4">
                  Full Stack
                </li>
                <li className="border-b-[4px] border-black border-dotted pb-4">
                  IT Infrastructure
                </li>
                <li className="border-b-[4px] border-black border-dotted pb-4">
                  Agentic AI &amp; LLMs
                </li>
                <li className="border-b-[4px] border-black border-dotted pb-4">
                  Database
                </li>
                <li className="pb-2">Network/Support</li>
              </ul>
            </div>
            {/*  Tech Stack Box  */}
            <div className="bg-lime-brutal border-[6px] border-black p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative lg:col-span-4">
              <div className="absolute -top-8 -left-8 bg-primary-fixed border-[5px] border-black p-3 font-display font-black text-2xl rotate-[-15deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-transform cursor-crosshair">
                TOOLBOX
              </div>
              <h3 className="font-display text-[40px] font-black border-b-[6px] border-black pb-4 mb-8 uppercase bg-white p-2 inline-block whitespace-nowrap">
                Tech Stack
              </h3>
              <div className="flex flex-col gap-6">
                <div className="bg-white p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-display font-black text-sm uppercase mb-3 bg-black text-white px-2 py-1 inline-block">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-cyan-brutal border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Next.js</span>
                    <span className="bg-cyan-brutal border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">React</span>
                    <span className="bg-cyan-brutal border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">TypeScript</span>
                    <span className="bg-cyan-brutal border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Tailwind</span>
                  </div>
                </div>
                <div className="bg-white p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-display font-black text-sm uppercase mb-3 bg-black text-white px-2 py-1 inline-block">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary-fixed-dim border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Golang</span>
                    <span className="bg-secondary-fixed-dim border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Laravel</span>
                    <span className="bg-secondary-fixed-dim border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">PHP</span>
                    <span className="bg-secondary-fixed-dim border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Express.js</span>
                    <span className="bg-secondary-fixed-dim border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Node.js</span>
                    <span className="bg-secondary-fixed-dim border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">REST API</span>
                  </div>
                </div>
                <div className="bg-white p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-display font-black text-sm uppercase mb-3 bg-black text-white px-2 py-1 inline-block">AI / Database</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">LangChain</span>
                    <span className="bg-primary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">PostgreSQL</span>
                    <span className="bg-primary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Supabase</span>
                  </div>
                </div>
                <div className="bg-white p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-display font-black text-sm uppercase mb-3 bg-black text-white px-2 py-1 inline-block">DevOps / Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-tertiary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Git</span>
                    <span className="bg-tertiary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Vercel</span>
                    <span className="bg-tertiary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Linux</span>
                    <span className="bg-tertiary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Figma</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  AI & Tools Box  */}
            <div className="bg-cyan-brutal border-[6px] border-black p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative lg:col-span-4">
              <div className="absolute -top-8 -right-8 bg-secondary-fixed-dim border-[5px] border-black p-3 font-display font-black text-2xl rotate-[12deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-transform cursor-crosshair">
                WORKFLOW
              </div>
              <h3 className="font-display text-[40px] font-black border-b-[6px] border-black pb-4 mb-8 uppercase bg-white p-2 inline-block">
                AI &amp; Tools
              </h3>
              <div className="flex flex-col gap-5">
                <div className="bg-white p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-display font-black text-sm uppercase mb-3 bg-black text-white px-2 py-1 inline-block">AI Agents</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-lime-brutal border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Antigravity</span>
                    <span className="bg-lime-brutal border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Antigravity CLI</span>
                    <span className="bg-lime-brutal border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Claude Code</span>
                  </div>
                </div>
                <div className="bg-white p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-display font-black text-sm uppercase mb-3 bg-black text-white px-2 py-1 inline-block">AI IDE / Copilot</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary-fixed-dim border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Cursor</span>
                    <span className="bg-secondary-fixed-dim border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">GitHub Copilot</span>
                    <span className="bg-secondary-fixed-dim border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Windsurf</span>
                  </div>
                </div>
                <div className="bg-white p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-display font-black text-sm uppercase mb-3 bg-black text-white px-2 py-1 inline-block">AI Assistant</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">ChatGPT</span>
                    <span className="bg-primary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Gemini</span>
                    <span className="bg-primary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Claude</span>
                  </div>
                </div>
                <div className="bg-white p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-display font-black text-sm uppercase mb-3 bg-black text-white px-2 py-1 inline-block">Dev Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-tertiary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">VSCode</span>
                    <span className="bg-tertiary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Insomnia</span>
                    <span className="bg-tertiary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">Postman</span>
                    <span className="bg-tertiary-fixed border-[3px] border-black px-3 py-1 font-display font-bold text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">DBeaver</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  Experience Box  */}
            <div className="bg-tertiary-fixed border-[6px] border-black p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] lg:col-span-12 relative">
              <div className="absolute -top-8 -left-8 bg-lime-brutal border-[5px] border-black p-3 font-display font-black text-2xl rotate-[-15deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-10 hover:rotate-0 transition-transform">
                TIMELINE
              </div>
              <h3 className="font-display text-[40px] font-black border-b-[6px] border-black pb-4 mb-8 uppercase bg-white p-2 inline-block">
                Experience
              </h3>
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start relative group">
                  <div className="absolute -left-12 top-6 w-8 h-8 bg-black rounded-full border-[4px] border-white z-20 hidden md:block group-hover:scale-150 transition-transform"></div>
                  <div className="absolute left-[-32px] top-10 w-[6px] h-full bg-black z-10 hidden md:block"></div>
                  <div className="bg-black text-white font-display font-black text-xl p-4 text-center rotate-[-3deg] shadow-[6px_6px_0px_0px_#ccff00] uppercase border-[3px] border-black">
                    NOV 25 - PRESENT
                  </div>
                  <div className="bg-white border-[5px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <h4 className="font-display font-black text-2xl uppercase bg-primary-fixed inline-block px-2 mb-2 border-[2px] border-black">
                      IT Support / Developer
                    </h4>
                    <h5 className="font-display font-bold text-xl uppercase mb-4">
                      @ PT Reska Multi Usaha
                    </h5>
                    <p className="font-body-lg text-xl font-bold bg-gray-100 p-4 border-[3px] border-black border-dashed">
                      Merancang aplikasi web end-to-end (WMS, Loko Cafe) dengan
                      Next.js &amp; Golang, mengelola infrastruktur IT, serta
                      memanfaatkan Workflow AI Agents untuk akselerasi SDLC.
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      <span className="bg-black text-white px-3 py-1 font-bold uppercase text-sm border-2 border-black">
                        Next.js
                      </span>
                      <span className="bg-black text-white px-3 py-1 font-bold uppercase text-sm border-2 border-black">
                        Golang
                      </span>
                      <span className="bg-black text-white px-3 py-1 font-bold uppercase text-sm border-2 border-black">
                        Agentic AI
                      </span>
                      <span className="bg-black text-white px-3 py-1 font-bold uppercase text-sm border-2 border-black">
                        IT Infrastructure
                      </span>
                      <span className="bg-black text-white px-3 py-1 font-bold uppercase text-sm border-2 border-black">
                        Networking
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start relative group">
                  <div className="absolute -left-12 top-6 w-8 h-8 bg-primary-fixed rounded-full border-[4px] border-black z-20 hidden md:block group-hover:scale-150 transition-transform"></div>
                  <div className="absolute left-[-32px] top-10 w-[6px] h-full bg-black z-10 hidden md:block"></div>
                  <div className="bg-secondary-fixed-dim text-black font-display font-black text-xl p-4 text-center rotate-[3deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase border-[4px] border-black">
                    AUG 23 - JAN 25
                  </div>
                  <div className="bg-white border-[5px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <h4 className="font-display font-black text-2xl uppercase bg-cyan-brutal inline-block px-2 mb-2 border-[2px] border-black">
                      IT Support
                    </h4>
                    <h5 className="font-display font-bold text-xl uppercase mb-4">
                      @ PT Bank Rakyat Indonesia
                    </h5>
                    <p className="font-body-lg text-xl font-bold bg-gray-100 p-4 border-[3px] border-black border-dashed">
                      Menangani 120+ tiket per bulan, memelihara LAN/Wi-Fi,
                      e-Channel (ATM, CRM), serta hardening sistem dengan
                      tingkat SLA 98%.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start relative group">
                  <div className="absolute -left-12 top-6 w-8 h-8 bg-cyan-brutal rounded-full border-[4px] border-black z-20 hidden md:block group-hover:scale-150 transition-transform"></div>
                  <div className="bg-lime-brutal text-black font-display font-black text-xl p-4 text-center rotate-[-2deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase border-[4px] border-black">
                    FEB 22 - JUN 22
                  </div>
                  <div className="bg-white border-[5px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <h4 className="font-display font-black text-2xl uppercase bg-white inline-block px-2 mb-2 border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      Software Engineer Intern
                    </h4>
                    <h5 className="font-display font-bold text-xl uppercase mb-4">
                      @ PT Stechoq Robotika
                    </h5>
                    <p className="font-body-lg text-xl font-bold bg-gray-100 p-4 border-[3px] border-black border-dashed">
                      Mengembangkan sistem Self-Checkout berbasis RFID secara
                      end-to-end dengan Express.js dan mendesain UI di Figma.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  Education Box  */}
            <div className="bg-secondary-fixed-dim border-[4px] md:border-[6px] border-black p-6 md:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] lg:col-span-12 relative bg-stripes">
              <div className="absolute -top-6 md:-top-8 right-6 md:right-10 bg-black text-white border-[3px] md:border-[5px] border-white p-2 md:p-3 font-display font-black text-lg md:text-2xl rotate-[5deg] shadow-[4px_4px_0px_0px_#00ffff] md:shadow-[6px_6px_0px_0px_#00ffff] z-10 hover:rotate-0 transition-transform uppercase">
                KNOWLEDGE_BASE
              </div>
              <h3 className="font-display text-[32px] md:text-[40px] font-black border-b-[4px] md:border-b-[6px] border-black pb-2 md:pb-4 mb-6 md:mb-8 uppercase bg-white p-2 inline-block">
                Education
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white border-[4px] md:border-[5px] border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
                  <div className="absolute -right-10 -bottom-10 text-[100px] text-primary-fixed opacity-30 font-black rotate-[-20deg] pointer-events-none group-hover:scale-110 transition-transform">
                    S.KOM
                  </div>
                  <div className="bg-primary-fixed border-[3px] border-black font-display font-black px-4 py-1 inline-block mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -skew-x-12">
                    2019 - 2023
                  </div>
                  <h4 className="font-display font-black text-3xl uppercase mb-2 leading-tight">
                    S1 Teknik Informatika
                  </h4>
                  <h5 className="font-display font-bold text-xl uppercase mb-4 text-tertiary">
                    Univ Muhammadiyah Surakarta
                  </h5>
                  <p className="font-body-lg text-lg font-bold border-l-[6px] border-black pl-4">
                    IPK 3.77. Mengembangkan aplikasi SI-BUMDES untuk manajemen
                    layanan Wi-Fi desa digital.
                  </p>
                </div>
                <Link
                  href="/certifications"
                  className="bg-white border-[4px] md:border-[5px] border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer block"
                >
                  <div className="absolute -right-10 -bottom-10 text-[80px] md:text-[100px] text-cyan-brutal opacity-30 font-black rotate-[20deg] pointer-events-none group-hover:scale-110 group-hover:text-lime-brutal transition-all">
                    CERT
                  </div>
                  <div className="bg-lime-brutal border-[2px] md:border-[3px] border-black font-display font-black px-3 md:px-4 py-1 inline-block mb-3 md:mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -skew-x-12">
                    2025
                  </div>
                  <h4 className="font-display font-black text-3xl uppercase mb-2 leading-tight group-hover:underline">
                    AI &amp; Data Science Certifications
                  </h4>
                  <h5 className="font-display font-bold text-xl uppercase mb-4 text-secondary">
                    Komdigi / DQLab / Dicoding
                  </h5>
                  <p className="font-body-lg text-lg font-bold border-l-[6px] border-black pl-4">
                    Memiliki 20+ sertifikasi di bidang Generative AI, Deep
                    Learning, Python, Networking, dan Cloud.
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t-[4px] border-black border-dashed pt-4">
                    <span className="font-display font-black text-lg uppercase bg-black text-white px-3 py-1">
                      View Gallery
                    </span>
                    <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*  Projects Section  */}
        <section id="projects" className="flex flex-col gap-16">
          <div className="relative inline-block self-end">
            <div className="absolute inset-0 bg-primary-fixed border-[5px] border-black translate-x-[-10px] translate-y-3 -z-10 rotate-[-3deg]"></div>
            <h2 className="font-display text-[36px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-black border-[6px] border-black bg-secondary-fixed-dim p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-[2deg] uppercase tracking-tighter max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
              Selected_Works
            </h2>
          </div>
          {/*  Featured Project  */}
          <div className="bg-cyan-brutal border-[4px] md:border-[8px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] p-5 md:p-10 flex flex-col gap-6 md:gap-10 transition-transform hover:-translate-y-4 relative bg-dots">
            <div className="absolute -top-4 -left-2 md:-top-8 md:-left-8 bg-primary-fixed border-[3px] md:border-[6px] border-black px-4 py-2 md:px-8 md:py-3 font-display font-black text-xl md:text-3xl rotate-[-8deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-20 hover:rotate-0 transition-transform uppercase tracking-widest">
              FEATURED
            </div>
            <div className="w-full border-[4px] md:border-[6px] border-black overflow-hidden relative group bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mt-2 md:mt-0">
              <img
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                alt="A screenshot of WMS KAI Services website interface."
                src="/images/wms.png"
              />
              <div className="absolute inset-0 bg-primary-fixed opacity-0 group-hover:opacity-20 mix-blend-multiply transition-opacity duration-500"></div>
            </div>
            <div className="w-full flex flex-col gap-6 md:gap-8 justify-center bg-white p-5 md:p-8 border-[4px] md:border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative">
              <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-lime-brutal border-2 md:border-4 border-black w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center animate-spin-slow scale-75 md:scale-100">
                <span className="material-symbols-outlined text-black">
                  star
                </span>
              </div>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-black text-white px-4 py-2 font-display font-black text-sm uppercase border-[2px] border-black shadow-[4px_4px_0px_0px_#fde400]">
                  Next.js
                </span>
                <span className="bg-black text-white px-4 py-2 font-display font-black text-sm uppercase border-[2px] border-black shadow-[4px_4px_0px_0px_#fde400]">
                  Golang
                </span>
                <span className="bg-black text-white px-4 py-2 font-display font-black text-sm uppercase border-[2px] border-black shadow-[4px_4px_0px_0px_#fde400]">
                  PostgreSQL
                </span>
              </div>
              <div>
                <h3 className="font-display text-[30px] md:text-[40px] font-black uppercase leading-[0.85] mb-6 tracking-tighter bg-secondary-fixed-dim inline-block p-2 border-[4px] border-black transform -skew-x-6">
                  Warehouse Management System <br />
                  KAI Services
                </h3>
                <p className="font-body-lg text-lg font-bold text-on-surface bg-gray-100 p-4 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  Warehouse Management System (WMS) kelas Enterprise yang
                  dirancang khusus untuk operasional Gudang PT Reska Multi Usaha
                  (KAI Services) Regional Office 04 Semarang. Sistem ini
                  menggunakan arsitektur modern Next.js di frontend dan Go
                  (Golang) + PostgreSQL di backend.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 border-t-[6px] border-black pt-6 mt-auto">
                <div className="bg-primary-fixed p-3 border-[3px] border-black">
                  <span className="block font-display font-black text-sm uppercase border-b-2 border-black pb-1 mb-1">
                    Role
                  </span>
                  <span className="font-body-lg font-bold text-lg leading-tight uppercase">
                    Full Stack Dev
                  </span>
                </div>
                <div className="bg-lime-brutal p-3 border-[3px] border-black">
                  <span className="block font-display font-black text-sm uppercase border-b-2 border-black pb-1 mb-1">
                    Status
                  </span>
                  <span className="font-body-lg font-bold text-lg leading-tight uppercase">
                    Enterprise
                  </span>
                </div>
              </div>
              <div className="mt-6 border-[6px] border-black bg-black py-4 px-8 font-display font-black text-xl uppercase tracking-widest inline-flex items-center gap-3 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <span className="material-symbols-outlined text-lime-brutal">
                  lock
                </span>
                <span className="text-white">INTERNAL PROJECT</span>
                <span className="bg-lime-brutal text-black px-3 py-1 text-sm border-[2px] border-white">ENTERPRISE</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {/*  Card 2  */}
            <div className="bg-secondary-fixed-dim border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col gap-8 transition-transform hover:-translate-y-4 group relative bg-stripes">
              <div className="absolute -top-6 -right-6 bg-white border-[5px] border-black p-4 rounded-full z-20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-180 transition-transform duration-700">
                <span className="material-symbols-outlined text-4xl text-black">
                  article
                </span>
              </div>
              <div className="aspect-video border-[6px] border-black w-full overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white p-2">
                <div className="absolute inset-0 bg-secondary-fixed-dim/40 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                <img
                  className="w-full h-full object-contain bg-white border-[2px] border-black transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  alt="Loko Cafe System Management"
                  src="/images/lsm.png"
                />
              </div>
              <div className="flex flex-col gap-6 bg-white p-6 border-[5px] border-black flex-grow shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex gap-3">
                  <span className="border-[3px] border-black px-3 py-1 font-display font-black text-xs uppercase bg-primary-fixed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Next.js
                  </span>
                  <span className="border-[3px] border-black px-3 py-1 font-display font-black text-xs uppercase bg-cyan-brutal shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Supabase
                  </span>
                </div>
                <h3 className="font-display text-[26px] xl:text-[32px] uppercase font-black leading-none bg-black text-white inline-block p-2 transform -skew-x-6">
                  LOKO CAFE
                  <br />
                  SYSTEM MANAGEMENT
                </h3>
                <p className="font-body-lg font-bold text-sm xl:text-base text-on-surface border-l-[6px] border-primary-fixed pl-4">
                  LOKO KAFE APPS adalah platform manajemen operasional yang
                  terintegrasi dengan Warehouse Management System (WMS)
                  terintegrasi untuk jajaran outlet Loko Kafe (termasuk Semarang
                  Tawang dan Semarang Poncol). Sistem ini dirancang untuk
                  menghubungkan seluruh rantai operasional kafe: dari manajemen
                  persediaan bahan baku, resep produk, penerimaan/pengeluaran
                  barang, audit stock opname, cetak label stiker inventaris
                  dengan AI background removal, penarikan data transaksi POS
                  Trainmart (Reska), penilaian kinerja crew, hingga komunikasi
                  internal tim secara real-time.
                </p>
                <div className="mt-auto border-[5px] border-black bg-black text-white py-3 px-6 font-display font-black text-lg self-start shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] uppercase inline-flex items-center gap-3">
                  <span className="material-symbols-outlined text-lime-brutal text-xl">
                    lock
                  </span>
                  INTERNAL PROJECT
                </div>
              </div>
            </div>
            {/*  Card 3  */}
            <div className="bg-lime-brutal border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col gap-8 transition-transform hover:-translate-y-4 group relative bg-dots">
              <div className="absolute -top-6 -left-6 bg-white border-[5px] border-black p-4 rounded-full z-20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-[-180deg] transition-transform duration-700">
                <span className="material-symbols-outlined text-4xl text-black">
                  code
                </span>
              </div>
              <div className="aspect-video border-[6px] border-black w-full overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white p-2">
                <div className="absolute inset-0 bg-lime-brutal/40 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                <img
                  className="w-full h-full object-contain bg-white border-[2px] border-black transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  alt="This Web Portofolio interface"
                  src="/images/portofolio.png"
                />
              </div>
              <div className="flex flex-col gap-6 bg-white p-6 border-[5px] border-black flex-grow shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex gap-3">
                  <span className="border-[3px] border-black px-3 py-1 font-display font-black text-xs uppercase bg-secondary-fixed-dim shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Next.js
                  </span>
                  <span className="border-[3px] border-black px-3 py-1 font-display font-black text-xs uppercase bg-primary-fixed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Tailwind v4
                  </span>
                </div>
                <h3 className="font-display text-[32px] md:text-[36px] uppercase font-black leading-none bg-black text-white inline-block p-2 transform -skew-x-6">
                  THIS WEB
                  <br />
                  PORTOFOLIO
                </h3>
                <p className="font-body-lg font-bold text-sm xl:text-base text-on-surface border-l-[6px] border-cyan-brutal pl-4">
                  Portofolio pribadi yang dirancang menggunakan gaya desain
                  Neobrutalism yang berani, mencolok, dan highly-functional.
                  Dibangun dari nol menggunakan Next.js App Router, Tailwind CSS
                  v4, dan dikembangkan secara interaktif dengan bantuan
                  teknologi Agentic AI terkini.
                </p>
                <div className="mt-auto border-[5px] border-black bg-black text-white py-3 px-6 font-display font-black text-lg self-start shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] uppercase inline-flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-brutal text-xl">
                    lock
                  </span>
                  INTERNAL PROJECT
                </div>
              </div>
            </div>
            {/*  Card 4  */}
            <div className="bg-primary-fixed border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col gap-8 transition-transform hover:-translate-y-4 group relative bg-stripes">
              <div className="absolute -top-6 -right-6 bg-white border-[5px] border-black p-4 rounded-full z-20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-180 transition-transform duration-700">
                <span className="material-symbols-outlined text-4xl text-black">
                  gavel
                </span>
              </div>
              <div className="aspect-video border-[6px] border-black w-full overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white p-2">
                <div className="absolute inset-0 bg-primary-fixed/40 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                <img
                  className="w-full h-full object-contain bg-white border-[2px] border-black transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  alt="IRIS System Interface"
                  src="/images/iris.png"
                />
              </div>
              <div className="flex flex-col gap-6 bg-white p-6 border-[5px] border-black flex-grow shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex gap-3">
                  <span className="border-[3px] border-black px-3 py-1 font-display font-black text-xs uppercase bg-secondary-fixed-dim shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Next.js
                  </span>
                  <span className="border-[3px] border-black px-3 py-1 font-display font-black text-xs uppercase bg-cyan-brutal shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Firebase
                  </span>
                </div>
                <h3 className="font-display text-[32px] md:text-[36px] uppercase font-black leading-none bg-black text-white inline-block p-2 transform -skew-x-6">
                  IRIS
                  <br />
                  SYSTEM
                </h3>
                <p className="font-body-lg font-bold text-sm xl:text-base text-on-surface border-l-[6px] border-lime-brutal pl-4">
                  IRIS (Industrial Relations Information System) adalah platform
                  manajemen hubungan industrial terpadu yang dirancang untuk
                  memudahkan pendataan. Sistem ini mendigitalisasi seluruh
                  proses penanganan kasus karyawan, mulai dari pembinaan
                  (SP1-SP3) hingga penanganan pelanggaran berat (PHK Mendesak)
                  secara objektif, transparan, dan terukur.
                </p>
                <div className="mt-auto border-[5px] border-black bg-black text-white py-3 px-6 font-display font-black text-lg self-start shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] uppercase inline-flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed text-xl">
                    lock
                  </span>
                  INTERNAL PROJECT
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Social / Connect Section  */}
        <section className="flex flex-col gap-16 border-[8px] border-black p-12 bg-white relative overflow-hidden shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] my-10 bg-stripes">
          <div className="absolute -top-20 -right-20 text-[250px] font-display font-black opacity-10 rotate-12 pointer-events-none leading-none">
            CONNECT
          </div>
          <div className="relative inline-block self-center z-10">
            <h2 className="font-display text-[40px] md:text-[70px] lg:text-[100px] font-black border-[8px] border-black bg-cyan-brutal px-6 md:px-10 py-4 md:py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] uppercase tracking-tighter text-center max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
              LINK_UP
            </h2>
          </div>
          <div className="font-body-lg font-black text-center max-w-3xl mx-auto bg-primary-fixed p-6 border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[1deg] uppercase z-10 flex flex-col items-center gap-4">
            <span className="text-3xl">
              Don&apos;t be a stranger. Drop a line, fork a repo, or just yell at me
              on the internet.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-10 mt-8">
            {/*  Instagram  */}
            <a
              className="bg-black text-white border-[6px] border-black p-8 flex flex-col items-center justify-center gap-6 hover:bg-primary-fixed hover:text-black transition-colors shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 group rotate-[2deg] hover:rotate-0"
              href="https://www.instagram.com/nopal_087/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[80px] group-hover:scale-110 transition-transform">
                photo_camera
              </span>
              <span className="font-display font-black text-2xl lg:text-3xl uppercase tracking-widest bg-white text-black px-4 py-1 border-[4px] border-black">
                INSTAGRAM
              </span>
            </a>
            {/*  GitHub  */}
            <a
              className="bg-black text-white border-[6px] border-black p-8 flex flex-col items-center justify-center gap-6 hover:bg-cyan-brutal hover:text-black transition-colors shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 group rotate-[-3deg] hover:rotate-0"
              href="https://github.com/nopal087/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[80px] group-hover:scale-110 transition-transform">
                code
              </span>
              <span className="font-display font-black text-2xl lg:text-3xl uppercase tracking-widest bg-white text-black px-4 py-1 border-[4px] border-black">
                GITHUB
              </span>
            </a>
            {/*  LinkedIn  */}
            <a
              className="bg-black text-white border-[6px] border-black p-8 flex flex-col items-center justify-center gap-6 hover:bg-secondary-fixed-dim hover:text-black transition-colors shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 group rotate-[4deg] hover:rotate-0"
              href="https://www.linkedin.com/in/muhammadnaufalfaruq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[80px] group-hover:scale-110 transition-transform">
                work
              </span>
              <span className="font-display font-black text-2xl lg:text-3xl uppercase tracking-widest bg-white text-black px-4 py-1 border-[4px] border-black">
                LINKEDIN
              </span>
            </a>
            {/*  Email  */}
            <a
              className="bg-black text-white border-[6px] border-black p-8 flex flex-col items-center justify-center gap-6 hover:bg-lime-brutal hover:text-black transition-colors shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 group rotate-[-1deg] hover:rotate-0"
              href="mailto:naufalfaruq285@gmail.com"
            >
              <span className="material-symbols-outlined text-[80px] group-hover:scale-110 transition-transform">
                mail
              </span>
              <span className="font-display font-black text-2xl lg:text-3xl uppercase tracking-widest bg-white text-black px-4 py-1 border-[4px] border-black">
                EMAIL
              </span>
            </a>
          </div>
        </section>
        {/*  Testimonials  */}
        <section className="flex flex-col gap-16 relative mt-20">
          <div className="relative inline-block self-start z-10">
            <div className="absolute inset-0 bg-black border-[5px] border-black translate-x-3 translate-y-3 -z-10 rotate-[2deg]"></div>
            <h2 className="font-display text-[32px] sm:text-[45px] md:text-[60px] lg:text-[80px] font-black border-[6px] border-black bg-white p-4 md:p-6 shadow-[8px_8px_0px_0px_#ccff00] md:shadow-[12px_12px_0px_0px_#ccff00] rotate-[3deg] uppercase tracking-tighter max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
              Core_Philosophy
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12">
            <div className="bg-secondary-fixed-dim border-[6px] border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg] flex flex-col gap-6 hover:rotate-0 hover:-translate-y-4 transition-all relative group bg-dots">
              <div className="absolute -top-8 -left-8 bg-black text-white w-16 h-16 rounded-full flex items-center justify-center border-[4px] border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                <span className="font-display font-black text-2xl">01</span>
              </div>
              <span className="material-symbols-outlined text-[80px] text-black leading-none h-16 opacity-50">
                terminal
              </span>
              <p className="font-body-lg font-black text-2xl uppercase bg-white p-4 border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                &quot;Code must be robust. Design must be relentless. We do not
                tolerate fragile systems.&quot;
              </p>
              <div className="mt-auto pt-6 border-t-[6px] border-black flex items-center gap-6">
                <div className="w-16 h-16 bg-black rounded-full border-[4px] border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">
                    dns
                  </span>
                </div>
                <div>
                  <p className="font-display text-2xl font-black uppercase bg-black text-white px-2 inline-block">
                    RELIABILITY
                  </p>
                  <p className="font-body-lg font-bold text-lg uppercase bg-primary-fixed px-2 border-[2px] border-black mt-1 inline-block">
                    Architecture
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary-fixed border-[6px] border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rotate-[2deg] flex flex-col gap-6 hover:rotate-0 hover:-translate-y-4 transition-all md:translate-y-12 relative group">
              <div className="absolute -top-8 -left-8 bg-black text-white w-16 h-16 rounded-full flex items-center justify-center border-[4px] border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                <span className="font-display font-black text-2xl">02</span>
              </div>
              <span className="material-symbols-outlined text-[80px] text-black leading-none h-16 opacity-50">
                smart_toy
              </span>
              <p className="font-body-lg font-black text-2xl uppercase bg-white p-4 border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                &quot;AI is not magic. It&apos;s workflow acceleration. Automate the
                mundane, engineer the complex.&quot;
              </p>
              <div className="mt-auto pt-6 border-t-[6px] border-black flex items-center gap-6">
                <div className="w-16 h-16 bg-black rounded-full border-[4px] border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">
                    memory
                  </span>
                </div>
                <div>
                  <p className="font-display text-2xl font-black uppercase bg-black text-white px-2 inline-block">
                    AGENTIC AI
                  </p>
                  <p className="font-body-lg font-bold text-lg uppercase bg-cyan-brutal px-2 border-[2px] border-black mt-1 inline-block">
                    Automation
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-cyan-brutal border-[6px] border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] flex flex-col gap-6 hover:rotate-0 hover:-translate-y-4 transition-all relative group bg-stripes">
              <div className="absolute -top-8 -left-8 bg-black text-white w-16 h-16 rounded-full flex items-center justify-center border-[4px] border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                <span className="font-display font-black text-2xl">03</span>
              </div>
              <span className="material-symbols-outlined text-[80px] text-black leading-none h-16 opacity-50 bg-white inline-block rounded-full p-2 border-[4px] border-black">
                code_blocks
              </span>
              <p className="font-body-lg font-black text-2xl uppercase bg-white p-4 border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                &quot;No fluff. No overengineering. Pure, raw performance wrapped in
                unignorable aesthetics.&quot;
              </p>
              <div className="mt-auto pt-6 border-t-[6px] border-black flex items-center gap-6 bg-white p-4 border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-16 h-16 bg-lime-brutal rounded-full border-[4px] border-black flex items-center justify-center">
                  <span className="material-symbols-outlined text-black">
                    bolt
                  </span>
                </div>
                <div>
                  <p className="font-display text-2xl font-black uppercase">
                    PERFORMANCE
                  </p>
                  <p className="font-body-lg font-bold text-lg uppercase text-secondary">
                    Optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Contact Info  */}
        <section
          id="contact"
          className="bg-black border-[8px] border-primary-fixed shadow-[24px_24px_0px_0px_#fde400] flex flex-col relative mt-20"
        >
          {/* Top Marquee Tape */}
          <div className="w-full overflow-hidden bg-lime-brutal border-b-[6px] border-black py-2 whitespace-nowrap rotate-1 origin-left absolute top-0 z-20 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex w-max animate-marquee" style={{ animation: 'marquee 90s linear infinite' }}>
              <div className="font-display font-black uppercase text-xl inline-block pl-4">
                {"INITIALIZE CONNECTION // SYSTEM PING // OPEN PORT 8080 // AWAITING HANDSHAKE // ".repeat(6)}
              </div>
              <div className="font-display font-black uppercase text-xl inline-block pl-4">
                {"INITIALIZE CONNECTION // SYSTEM PING // OPEN PORT 8080 // AWAITING HANDSHAKE // ".repeat(6)}
              </div>
            </div>
          </div>

          <div className="p-10 md:p-20 flex flex-col md:flex-row gap-16 items-center justify-between relative overflow-hidden bg-dots pt-24">
            {/*  Background decor  */}
            <div className="absolute -top-10 -right-10 text-[200px] md:text-[300px] opacity-20 text-white font-black leading-none font-display pointer-events-none rotate-12 drop-shadow-[10px_10px_0px_rgba(255,255,255,0.2)]">
              SYS
            </div>
            <div className="absolute bottom-5 left-5 w-40 h-40 border-[12px] border-cyan-brutal rounded-full opacity-40 pointer-events-none animate-ping"></div>
            <div className="absolute top-20 left-1/3 w-40 h-40 bg-secondary-fixed-dim border-[8px] border-black rotate-45 opacity-60 pointer-events-none mix-blend-exclusion"></div>
            <div className="absolute bottom-20 right-1/3 text-[100px] opacity-30 text-lime-brutal rotate-[-20deg] font-display pointer-events-none">
              *
            </div>

            <div className="flex flex-col gap-6 z-10 w-full md:w-1/2 relative">
              {/* Decorative Sticker */}
              <div className="absolute -top-10 -left-6 bg-cyan-brutal border-[4px] border-black shadow-[4px_4px_0px_0px_#000] rotate-[-15deg] px-3 py-1 z-20 hidden md:block text-black font-display font-black text-xl">
                STATUS: ONLINE
              </div>

              <h2 className="font-display text-[60px] md:text-[100px] font-black uppercase text-white leading-none tracking-tighter relative z-10">
                System
                <br />
                <span className="text-lime-brutal bg-white px-4 py-2 border-[6px] border-lime-brutal inline-block transform -skew-x-12 ml-4 md:ml-8 shadow-[8px_8px_0px_0px_#fde400]">
                  Ping
                </span>
              </h2>
              <p className="font-body-lg text-xl md:text-2xl text-black font-black bg-primary-fixed inline-block p-4 self-start border-[4px] border-white shadow-[8px_8px_0px_0px_#fff] uppercase rotate-[-2deg] mt-4 relative z-10">
                Need to scale your IT infrastructure or automate workflows?
                Let&apos;s connect.
              </p>

              {/* Abstract Barcode */}
              <div className="flex items-end h-16 gap-1 mt-4 opacity-50 bg-white p-2 self-start border-[3px] border-black rotate-[2deg]">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-black"
                    style={{
                      width: `${(i * 13) % 8 + 2}px`,
                      height: `${(i * 17) % 60 + 40}%`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 z-20 bg-white p-5 md:p-8 border-[4px] md:border-[8px] border-cyan-brutal shadow-[8px_8px_0px_0px_#00ffff] md:shadow-[16px_16px_0px_0px_#00ffff] rotate-[2deg] flex flex-col gap-6 relative hover:rotate-0 transition-transform duration-500 mt-8 md:mt-0">
              {/* Corner Pin */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-black rounded-full border-[3px] md:border-[4px] border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>

              <h3 className="font-display font-black text-xl md:text-3xl uppercase bg-black text-white self-start px-4 md:px-6 py-2 border-[4px] border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] -mt-8 md:-mt-12 ml-0 md:ml-4">
                CONTACT_INFO
              </h3>

              <div className="flex flex-col gap-5 mt-4">
                <a
                  href="mailto:naufalfaruq285@gmail.com"
                  className="group flex items-center gap-4 bg-gray-100 p-4 border-[4px] border-black hover:bg-lime-brutal active:bg-lime-brutal hover:-translate-y-1 active:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="w-14 h-14 bg-black flex items-center justify-center border-[3px] border-black group-hover:scale-110 group-active:scale-110 group-hover:rotate-6 group-active:rotate-6 transition-transform shadow-[4px_4px_0px_0px_#fff]">
                    <span className="material-symbols-outlined text-white text-3xl">
                      mail
                    </span>
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-display font-bold text-sm uppercase text-gray-500 group-hover:text-black group-active:text-black">
                      Email
                    </span>
                    <span className="font-body-lg font-black text-lg md:text-xl truncate">
                      naufalfaruq285@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/muhammad-naufal-faruq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-gray-100 p-4 border-[4px] border-black hover:bg-primary-fixed active:bg-primary-fixed hover:-translate-y-1 active:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="w-14 h-14 bg-black flex items-center justify-center border-[3px] border-black group-hover:scale-110 group-active:scale-110 group-hover:rotate-6 group-active:rotate-6 transition-transform shadow-[4px_4px_0px_0px_#fff]">
                    <span className="material-symbols-outlined text-white text-3xl">
                      person
                    </span>
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-display font-bold text-sm uppercase text-gray-500 group-hover:text-black group-active:text-black">
                      LinkedIn
                    </span>
                    <span className="font-body-lg font-black text-lg md:text-xl truncate">
                      muhammad-naufal-faruq
                    </span>
                  </div>
                </a>

                <div className="group flex items-center gap-4 bg-gray-100 p-4 border-[4px] border-black hover:bg-secondary-fixed-dim active:bg-secondary-fixed-dim hover:-translate-y-1 active:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="w-14 h-14 bg-black flex items-center justify-center border-[3px] border-black group-hover:scale-110 group-active:scale-110 group-hover:rotate-6 group-active:rotate-6 transition-transform shadow-[4px_4px_0px_0px_#fff]">
                    <span className="material-symbols-outlined text-white text-3xl">
                      location_on
                    </span>
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-display font-bold text-sm uppercase text-gray-500 group-hover:text-black group-active:text-black">
                      Location
                    </span>
                    <span className="font-body-lg font-black text-lg md:text-xl truncate">
                      Pekalongan, Indonesia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*  Footer  */}
      <footer className="bg-black text-white w-full border-t-[12px] border-primary-fixed mt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none"></div>
        <div className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20 flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
          <div className="flex flex-col gap-8 w-full md:w-1/3">
            <div className="font-display text-[60px] font-black text-primary-fixed uppercase tracking-tighter bg-white text-black inline-block px-6 py-2 rotate-[-4deg] border-[6px] border-black shadow-[8px_8px_0px_0px_#fde400]">
              NPL DEV
            </div>
            <p className="font-body-lg text-2xl font-bold max-w-sm border-l-[6px] border-lime-brutal pl-6 uppercase text-gray-300">
              Designing for the brutal web. No fluff, just structure and impact.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-20 w-full md:w-2/3 justify-end">
            <div className="flex flex-col gap-6">
              <h4 className="font-display font-black text-3xl text-primary-fixed uppercase border-b-[4px] border-primary-fixed pb-4 inline-block">
                Navigation
              </h4>
              <a
                className="font-display font-bold text-xl hover:text-black hover:bg-cyan-brutal active:text-black active:bg-cyan-brutal uppercase hover:translate-x-4 active:translate-x-4 transition-all px-4 py-2 border-[3px] border-transparent hover:border-white active:border-white inline-block"
                href="#about"
              >
                About
              </a>
              <a
                className="font-display font-bold text-xl hover:text-black hover:bg-lime-brutal active:text-black active:bg-lime-brutal uppercase hover:translate-x-4 active:translate-x-4 transition-all px-4 py-2 border-[3px] border-transparent hover:border-white active:border-white inline-block"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="font-display font-bold text-xl hover:text-black hover:bg-secondary-fixed-dim active:text-black active:bg-secondary-fixed-dim uppercase hover:translate-x-4 active:translate-x-4 transition-all px-4 py-2 border-[3px] border-transparent hover:border-white active:border-white inline-block"
                href="/certifications"
              >
                Certifications
              </a>
              <a
                className="font-display font-bold text-xl hover:text-black hover:bg-primary-fixed active:text-black active:bg-primary-fixed uppercase hover:translate-x-4 active:translate-x-4 transition-all px-4 py-2 border-[3px] border-transparent hover:border-white active:border-white inline-block"
                href="#contact"
              >
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-display font-black text-3xl text-secondary-fixed-dim uppercase border-b-[4px] border-secondary-fixed-dim pb-4 inline-block">
                Socials
              </h4>
              <a
                className="font-display font-bold text-xl hover:text-black hover:bg-secondary-fixed-dim active:text-black active:bg-secondary-fixed-dim uppercase hover:translate-x-4 active:translate-x-4 transition-all px-4 py-2 border-[3px] border-transparent hover:border-white active:border-white inline-flex items-center gap-3"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram{" "}
                <span className="material-symbols-outlined text-xl">
                  arrow_outward
                </span>
              </a>
              <a
                className="font-display font-bold text-xl hover:text-black hover:bg-secondary-fixed-dim active:text-black active:bg-secondary-fixed-dim uppercase hover:translate-x-4 active:translate-x-4 transition-all px-4 py-2 border-[3px] border-transparent hover:border-white active:border-white inline-flex items-center gap-3"
                href="https://github.com/nopal087"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub{" "}
                <span className="material-symbols-outlined text-xl">
                  arrow_outward
                </span>
              </a>
              <a
                className="font-display font-bold text-xl hover:text-black hover:bg-secondary-fixed-dim active:text-black active:bg-secondary-fixed-dim uppercase hover:translate-x-4 active:translate-x-4 transition-all px-4 py-2 border-[3px] border-transparent hover:border-white active:border-white inline-flex items-center gap-3"
                href="https://www.linkedin.com/in/muhammad-naufal-faruq"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn{" "}
                <span className="material-symbols-outlined text-xl">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border-t-[4px] border-white/20 px-margin-mobile md:px-margin-desktop py-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 max-w-7xl mx-auto bg-black">
          <div className="font-display font-black uppercase tracking-widest text-sm bg-white text-black px-3 py-1 border-[3px] border-black">
            © 2026 MUHAMMAD NAUFAL FARUQ
          </div>
          <div className="font-display font-black uppercase tracking-widest text-lg text-black bg-lime-brutal px-4 py-2 border-[3px] border-white shadow-[4px_4px_0px_0px_#fff] flex items-center gap-3 animate-pulse">
            <span className="w-4 h-4 bg-black rounded-full block"></span> STATUS
            : OPEN TO WORK & READY TO BUILD SOMETHING
          </div>
        </div>
      </footer>
    </>
  );
}
