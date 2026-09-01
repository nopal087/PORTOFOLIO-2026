"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isCertificationsPage = pathname === "/certifications";

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: isCertificationsPage ? "/#about" : "#about" },
    { name: "Skills", href: isCertificationsPage ? "/#system-info" : "#system-info" },
    { name: "Experience", href: isCertificationsPage ? "/#experience" : "#experience" },
    { name: "Projects", href: isCertificationsPage ? "/#projects" : "#projects" },
    { name: "Certifications", href: "/certifications" },
    { name: "Contact", href: isCertificationsPage ? "/#contact" : "#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b-[3px] md:border-b-[4px] border-black shadow-[0_4px_0_0_#000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo & Live Status */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tighter bg-brutal-yellow px-3 py-1 border-[2.5px] md:border-[3px] border-black shadow-[3px_3px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-2"
            >
              <span>NPL DEV</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 bg-[#057642] text-white px-3 py-1 text-xs font-display font-black uppercase border-2 border-black tracking-wider shadow-[2px_2px_0_0_#000] hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse"></span>
              <span>#OpenToWork</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = isCertificationsPage && link.href === "/certifications";
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-display font-bold text-sm uppercase px-3.5 py-1.5 border-2 transition-all rounded-none text-ink cursor-pointer ${
                    isActive
                      ? "bg-brutal-yellow border-black shadow-[2.5px_2.5px_0_0_#000]"
                      : "border-transparent hover:border-black hover:bg-brutal-yellow hover:text-black hover:shadow-[2.5px_2.5px_0_0_#000]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Action Group */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/CV-Muhammad-Naufal-Faruq.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-black text-xs md:text-sm uppercase bg-white text-black px-3.5 py-2 border-[2.5px] border-black shadow-[3px_3px_0_0_#000] hover:-translate-y-0.5 hover:bg-brutal-cyan hover:shadow-[4px_4px_0_0_#000] active:translate-y-0.5 active:shadow-[1px_1px_0_0_#000] transition-all inline-flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base">download</span>
              <span>CV</span>
            </a>

            <a
              href={isCertificationsPage ? "/#contact" : "#contact"}
              className="font-display font-black text-xs md:text-sm uppercase bg-black text-white px-4 py-2 border-[2.5px] border-black shadow-[3px_3px_0_0_#ffe600] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#ffe600] active:translate-y-0.5 active:shadow-[1px_1px_0_0_#ffe600] transition-all inline-flex items-center gap-1.5"
            >
              <span>Hire Me</span>
              <span className="material-symbols-outlined text-base text-brutal-yellow">arrow_forward</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/CV-Muhammad-Naufal-Faruq.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden font-display font-black text-xs uppercase bg-white text-black px-2.5 py-1.5 border-2 border-black shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:shadow-none"
              aria-label="Download CV"
            >
              <span className="material-symbols-outlined text-sm">download</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-[2.5px] border-black bg-brutal-yellow shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span className="material-symbols-outlined text-2xl font-bold">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 top-16 md:top-20 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="w-full bg-white border-b-[4px] border-black shadow-[0_8px_0_0_#000] p-6 flex flex-col gap-4 max-h-[calc(100vh-4rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Status bar */}
            <div className="flex items-center justify-between bg-[#057642] text-white p-3 border-2 border-black shadow-[3px_3px_0_0_#000]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-200">Status</span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-200 animate-pulse"></span>
                <span className="text-xs font-display font-black uppercase text-white tracking-wide">#OpenToWork (Full-Time &amp; Projects)</span>
              </div>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link, idx) => {
                const colors = ["bg-brutal-yellow", "bg-brutal-cyan", "bg-brutal-lime-electric", "bg-brutal-pink-light", "bg-brutal-purple", "bg-white"];
                const colorClass = colors[idx % colors.length];
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`w-full py-3 px-4 font-display font-black text-lg uppercase border-[2.5px] border-black shadow-[3px_3px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-between ${colorClass}`}
                  >
                    <span>{link.name}</span>
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </Link>
                );
              })}
            </nav>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t-2 border-black border-dashed">
              <a
                href="/CV-Muhammad-Naufal-Faruq.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 px-4 text-center font-display font-black text-base uppercase bg-white text-black border-[2.5px] border-black shadow-[3px_3px_0_0_#000] active:translate-y-1 active:shadow-none inline-flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">download</span>
                <span>Download CV (PDF)</span>
              </a>

              <a
                href={isCertificationsPage ? "/#contact" : "#contact"}
                onClick={() => setIsOpen(false)}
                className="w-full py-3 px-4 text-center font-display font-black text-base uppercase bg-black text-white border-[2.5px] border-black shadow-[3px_3px_0_0_#ffe600] active:translate-y-1 active:shadow-none inline-flex items-center justify-center gap-2"
              >
                <span>Let&apos;s Connect</span>
                <span className="material-symbols-outlined text-lg text-brutal-yellow">rocket_launch</span>
              </a>
            </div>

            {/* Direct contact info footer */}
            <div className="text-center text-xs font-mono text-zinc-600 font-bold pt-2">
              Pekalongan / Semarang, Indonesia • naufalfaruq285@gmail.com
            </div>
          </div>
        </div>
      )}
    </>
  );
}
