"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 sticky top-0 z-50 bg-background dark:bg-inverse-surface border-b-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-headline-md font-black text-on-surface dark:text-inverse-on-surface uppercase tracking-tighter bg-primary-fixed px-3 py-1 border-[4px] border-black rotate-[-3deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 hover:scale-105 active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all relative z-50 cursor-pointer"
        >
          NPL DEV
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-gutter items-center bg-cyan-brutal border-[4px] border-black px-8 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[2deg]">
          <a className="text-on-surface font-display font-black text-lg hover:bg-black hover:text-white transition-colors px-4 py-2 border-[3px] border-transparent hover:border-black uppercase bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" href="#about">About</a>
          <a className="text-on-surface font-display font-black text-lg hover:bg-black hover:text-white transition-colors px-4 py-2 border-[3px] border-transparent hover:border-black uppercase bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" href="#projects">Projects</a>
          <a className="text-on-surface font-display font-black text-lg hover:bg-black hover:text-white transition-colors px-4 py-2 border-[3px] border-transparent hover:border-black uppercase bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" href="#contact">Contact</a>
        </nav>
        
        <a href="#contact" className="hidden md:block bg-secondary-fixed-dim text-black border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] px-8 py-3 font-display font-black text-xl hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none transition-all rotate-[-4deg] uppercase">
          Hire Me
        </a>
        
        {/* Mobile Menu Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden border-[4px] border-black p-3 bg-primary-fixed shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-lime-brutal transition-colors active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] relative z-50"
        >
          <span className="material-symbols-outlined font-bold text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-lime-brutal z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out border-b-[8px] border-black overflow-hidden bg-stripes ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Decorative elements for mobile menu */}
        <div className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 border-[4px] sm:border-[6px] border-black bg-cyan-brutal rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 border-[4px] sm:border-[6px] border-black bg-primary-fixed rotate-45"></div>
        <div className="absolute top-1/2 -left-2 text-black text-4xl sm:text-6xl font-black opacity-20 rotate-90 tracking-widest">MENU</div>
        
        <nav className="flex flex-col gap-4 sm:gap-6 w-[85%] sm:w-3/4 max-w-sm relative z-10 mt-12">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-white border-[4px] sm:border-[6px] border-black py-3 sm:py-4 font-display font-black text-xl sm:text-3xl uppercase shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] active:translate-y-1 active:shadow-[2px_2px_0px_0px_#000] transition-all rotate-[-2deg]"
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-cyan-brutal border-[4px] sm:border-[6px] border-black py-3 sm:py-4 font-display font-black text-xl sm:text-3xl uppercase shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] active:translate-y-1 active:shadow-[2px_2px_0px_0px_#000] transition-all rotate-[1deg]"
          >
            Projects
          </a>
          <a 
            href="/certifications" 
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-primary-fixed border-[4px] sm:border-[6px] border-black py-3 sm:py-4 font-display font-black text-xl sm:text-3xl uppercase shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] active:translate-y-1 active:shadow-[2px_2px_0px_0px_#000] transition-all rotate-[-1deg]"
          >
            Certifications
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-secondary-fixed-dim border-[4px] sm:border-[6px] border-black py-3 sm:py-4 font-display font-black text-xl sm:text-3xl uppercase shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] active:translate-y-1 active:shadow-[2px_2px_0px_0px_#000] transition-all rotate-[2deg]"
          >
            Contact
          </a>
          <div className="w-full border-t-[4px] sm:border-t-[6px] border-black border-dashed my-1 sm:my-2"></div>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="w-full flex justify-center items-center gap-2 bg-black text-white border-[4px] sm:border-[6px] border-primary-fixed py-3 sm:py-5 font-display font-black text-xl sm:text-3xl uppercase shadow-[8px_8px_0px_0px_#fde400] hover:-translate-y-1 active:translate-y-1 transition-all"
          >
            Hire Me <span className="material-symbols-outlined">rocket_launch</span>
          </a>
        </nav>
      </div>
    </>
  );
}
