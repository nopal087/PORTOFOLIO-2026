"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface SlideItem {
  src: string;
  title: string;
  badge: string;
  caption: string;
}

export default function ResparkingProject() {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const slides: Record<"en" | "id", SlideItem[]> = {
    en: [
      {
        src: "/images/lapark.png",
        title: "Admin Portal & Revenue Monitoring Dashboard",
        badge: "Admin & Executive Portal",
        caption: "Real-time monitoring of daily revenue per shift, target tracking, and EDC settlement verification.",
      },
      {
        src: "/images/lapark1.png",
        title: "Field Cashier Portal & Shift Reporting Form",
        badge: "Field Cashier Portal",
        caption: "Multi-vehicle transaction entry, shift reporting, automatic lock, and physical receipt upload.",
      },
    ],
    id: [
      {
        src: "/images/lapark.png",
        title: "Portal Admin & Dasbor Monitoring Pendapatan",
        badge: "Portal Admin & Eksekutif",
        caption: "Monitoring real-time akumulasi penerimaan harian per shift, perbandingan target, dan verifikasi settlement EDC.",
      },
      {
        src: "/images/lapark1.png",
        title: "Portal Petugas & Form Pelaporan Transaksi Shift",
        badge: "Portal Kasir Lapangan",
        caption: "Input transaksi kasir multi-kendaraan, pelaporan per-shift, penguncian otomatis, dan unggah bukti struk fisik.",
      },
    ],
  };

  const activeSlides = slides[lang];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* FEATURED ENTERPRISE CARD: RESPARKING PENDAPATAN */}
      {/* ========================================================================= */}
      <div className="bg-white border-[3px] md:border-[4px] border-black p-6 sm:p-8 md:p-10 shadow-[8px_8px_0_0_#000] relative">
        {/* Top Highlight Badge */}
        <div className="absolute -top-3.5 left-6 bg-brutal-cyan text-black border-2 border-black px-3.5 py-0.5 font-display font-black text-xs uppercase tracking-wider shadow-[2px_2px_0_0_#000] inline-flex items-center gap-1.5">
          <span className="material-symbols-outlined text-sm font-bold text-black">local_parking</span>
          <span>{lang === "en" ? "ENTERPRISE RECONCILIATION PLATFORM" : "PLATFORM REKONSILIASI ENTERPRISE"}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          {/* Left Column: Interactive Image Slider */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col gap-3">
            <div
              className="border-[3px] border-black bg-zinc-950 overflow-hidden shadow-[5px_5px_0_0_#000] relative aspect-video group select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Slides Container */}
              <div
                className="flex w-full h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {activeSlides.map((slide, idx) => (
                  <div key={idx} className="w-full h-full flex-shrink-0 relative bg-zinc-900">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-full object-cover sm:object-contain bg-zinc-950"
                    />
                  </div>
                ))}
              </div>

              {/* Top Badge on Slide */}
              <div className="absolute top-2.5 left-2.5 bg-black/90 text-brutal-yellow text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 uppercase border border-white/30 backdrop-blur-sm shadow-[2px_2px_0_0_#000]">
                {activeSlides[currentSlide]?.badge}
              </div>

              {/* Slide Counter Badge */}
              <div className="absolute top-2.5 right-2.5 bg-brutal-yellow text-black text-[10px] sm:text-xs font-mono font-black px-2.5 py-1 uppercase border-2 border-black shadow-[2px_2px_0_0_#000]">
                {currentSlide + 1} / {activeSlides.length}
              </div>

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous image"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white hover:bg-brutal-yellow text-black border-2 border-black flex items-center justify-center shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer z-10"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl font-bold">chevron_left</span>
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next image"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white hover:bg-brutal-yellow text-black border-2 border-black flex items-center justify-center shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer z-10"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl font-bold">chevron_right</span>
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/75 px-3 py-1.5 border border-white/20 backdrop-blur-sm z-10">
                {activeSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Jump to slide ${idx + 1}`}
                    className={`h-2.5 transition-all rounded-none border border-black cursor-pointer ${
                      currentSlide === idx
                        ? "w-7 bg-brutal-yellow"
                        : "w-2.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Slide Caption Box */}
            <div className="bg-zinc-100 border-2 border-black p-3 text-xs font-body font-medium text-zinc-900 flex items-center justify-between gap-3 shadow-[2px_2px_0_0_#000]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-brutal-blue">info</span>
                <span className="font-bold">{activeSlides[currentSlide]?.title}</span>
              </div>
              <span className="hidden sm:inline font-mono text-[10px] uppercase font-bold text-zinc-600 bg-white border border-black px-1.5 py-0.5">
                {lang === "en" ? "Swipe / Click Arrows" : "Geser / Klik Panah"}
              </span>
            </div>
          </div>

          {/* Right Column: Project Details & Features */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-4">
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-brutal-yellow border-2 border-black px-2.5 py-0.5 text-xs font-mono font-bold uppercase shadow-[2px_2px_0_0_#000]">Next.js (App Router)</span>
              <span className="bg-brutal-cyan border-2 border-black px-2.5 py-0.5 text-xs font-mono font-bold uppercase shadow-[2px_2px_0_0_#000]">Supabase &amp; PostgreSQL</span>
              <span className="bg-brutal-lime-electric border-2 border-black px-2.5 py-0.5 text-xs font-mono font-bold uppercase shadow-[2px_2px_0_0_#000]">TypeScript</span>
              <span className="bg-[#ffd7f0] border-2 border-black px-2.5 py-0.5 text-xs font-mono font-bold uppercase shadow-[2px_2px_0_0_#000]">PWA Offline</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase text-ink leading-tight">
              Resparking Pendapatan
            </h3>

            <h4 className="font-body font-bold text-sm sm:text-base text-zinc-700">
              {lang === "en"
                ? "PT Reska Multi Usaha (KAI Services) • Railway Station Parking Revenue Reconciliation System"
                : "PT Reska Multi Usaha (KAI Services) • Sistem Rekonsiliasi Keuangan Parkir Stasiun Kereta Api"}
            </h4>

            <p className="font-body text-sm sm:text-base text-zinc-900 leading-relaxed bg-zinc-50 p-3.5 border-l-4 border-brutal-cyan">
              {lang === "en" ? (
                <>
                  Integrated Management, Reporting, and Revenue Reconciliation System for Railway Station Parking Operations. Built to support <strong>multi-location, 3-shift operational cycles, and multi-cashier workflows</strong> with physical EDC settlement validation, electronic money/QRIS reconciliation, and management accounting exports.
                </>
              ) : (
                <>
                  Sistem Informasi Manajemen, Pelaporan, dan Rekonsiliasi Pendapatan Parkir Stasiun Kereta Api terpadu. Mendukung operasional <strong>multi-lokasi, 3 shift kerja, dan multi-kasir</strong> secara terintegrasi dengan validasi settlement EDC fisik, rekonsiliasi QRIS/e-Money, hingga ekspor laporan akuntansi manajemen.
                </>
              )}
            </p>

            {/* Role & Status Bar */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-2.5 bg-brutal-yellow/30 border-2 border-black shadow-[2px_2px_0_0_#000]">
                <span className="block font-mono text-[10px] uppercase font-bold text-zinc-700">
                  {lang === "en" ? "Role" : "Peran"}
                </span>
                <span className="font-display font-black text-xs sm:text-sm uppercase text-black">Full Stack Developer</span>
              </div>
              <div className="p-2.5 bg-brutal-lime-electric/40 border-2 border-black shadow-[2px_2px_0_0_#000]">
                <span className="block font-mono text-[10px] uppercase font-bold text-zinc-700">
                  {lang === "en" ? "Status" : "Status"}
                </span>
                <span className="font-display font-black text-xs sm:text-sm uppercase text-black">
                  {lang === "en" ? "Production Live" : "Produksi Aktif"}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white hover:bg-zinc-800 font-display font-black text-xs sm:text-sm uppercase px-5 py-3 border-2 border-black shadow-[4px_4px_0_0_#00e5ff] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#00e5ff] active:translate-y-0.5 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base text-brutal-yellow">info</span>
                <span>{lang === "en" ? "System Overview" : "Gambaran Umum Sistem"}</span>
              </button>

              <span className="inline-flex items-center gap-2 bg-zinc-100 text-black px-3.5 py-2.5 text-xs font-mono font-bold uppercase border-2 border-black shadow-[2px_2px_0_0_#000]">
                <span className="material-symbols-outlined text-sm text-emerald-600">lock</span>
                <span>{lang === "en" ? "Internal System (KAI Services)" : "Sistem Internal (KAI Services)"}</span>
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* SYSTEM OVERVIEW MODAL (Neo-Brutalism Theme) */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-canvas border-[4px] border-black w-full max-w-3xl max-h-[90vh] flex flex-col shadow-[12px_12px_0_0_#000] relative overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-black text-white p-4 sm:p-5 flex items-center justify-between border-b-[4px] border-black">
              <div className="flex items-center gap-3">
                <span className="bg-brutal-yellow text-black font-display font-black text-xs uppercase px-2.5 py-1 border border-black shadow-[2px_2px_0_0_#fff]">
                  {lang === "en" ? "SYSTEM OVERVIEW" : "GAMBARAN UMUM"}
                </span>
                <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-white">
                  Resparking Pendapatan
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-brutal-pink hover:bg-pink-600 text-white font-display font-black text-sm uppercase w-8 h-8 sm:w-9 sm:h-9 border-2 border-white flex items-center justify-center shadow-[2px_2px_0_0_#fff] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-7 md:p-8 overflow-y-auto font-body text-zinc-900 space-y-6">
              
              {/* Executive Plain-Language Summary */}
              <div className="bg-white border-2 border-black p-4 sm:p-5 shadow-[4px_4px_0_0_#000]">
                <h4 className="font-display font-black text-base sm:text-lg uppercase mb-2 text-ink flex items-center gap-2">
                  <span className="material-symbols-outlined text-brutal-blue font-bold">domain</span>
                  <span>{lang === "en" ? "What is Resparking Pendapatan?" : "Apa itu Resparking Pendapatan?"}</span>
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-800 font-medium">
                  {lang === "en" ? (
                    <>
                      <strong>Resparking Pendapatan</strong> is a modern web-based enterprise application engineered to streamline recording, managing, and reconciling all parking revenues across railway stations in a reliable, accurate, and real-time environment.
                    </>
                  ) : (
                    <>
                      <strong>Resparking Pendapatan</strong> adalah aplikasi web enterprise yang dirancang untuk mempermudah pencatatan, pengelolaan, dan pencocokan (rekonsiliasi) seluruh uang pendapatan parkir di stasiun kereta api secara rapi, akurat, dan langsung (<em>real-time</em>).
                    </>
                  )}
                </p>
              </div>

              {/* How It Helps Operations (Non-Technical Explanation) */}
              <div>
                <h4 className="font-display font-black text-sm sm:text-base uppercase mb-3 text-ink flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-600 font-bold">lightbulb</span>
                  <span>{lang === "en" ? "How This System Powers Daily Operations" : "Bagaimana Sistem Ini Membantu Operasional?"}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-600 font-bold text-lg">edit_note</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "1. Multi-Shift Recording" : "1. Pencatatan Per Shift"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Station cashiers can effortlessly log parking revenue at the end of each work shift (Shifts 1, 2, and 3), covering cash, electronic money cards (e-Money), and QRIS digital transactions."
                        : "Petugas kasir di stasiun dapat mencatat uang hasil parkir di setiap akhir jam kerja (Shift 1, 2, dan 3) dengan mudah, baik dari pembayaran tunai, kartu uang elektronik (e-Money), maupun QRIS."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-brutal-blue font-bold text-lg">receipt_long</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "2. Eliminating Discrepancies" : "2. Mencegah Selisih Uang"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Every cashier report is cross-verified with uploaded physical EDC settlement receipts, preventing deposit discrepancies, missing funds, or manual calculation errors."
                        : "Setiap laporan kasir diverifikasi dengan bukti foto struk settlement mesin EDC, memastikan tidak ada selisih uang setoran atau salah hitung manual."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-purple-600 font-bold text-lg">monitoring</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "3. Real-Time Executive Monitoring" : "3. Pemantauan Pimpinan"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Operations leaders and regional management can monitor station-wide revenue streams live without waiting days for manual spreadsheet rollups."
                        : "Pimpinan dan manajemen kantor dapat memantau pendapatan seluruh stasiun secara langsung tanpa perlu menunggu rekap manual berhari-hari."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-rose-600 font-bold text-lg">devices</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "4. Mobile & Desktop Ready" : "4. Praktis di HP & Komputer"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Accessible directly through mobile browsers for field officers at parking gates as well as office desktops with an intuitive, responsive interface."
                        : "Dapat diakses langsung melalui browser smartphone oleh petugas di pos parkir maupun komputer kantor dengan tampilan yang jelas dan ramah pengguna."}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-white border-t-2 border-black p-4 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-black text-white hover:bg-zinc-800 font-display font-black text-xs uppercase px-5 py-2.5 border-2 border-black shadow-[2px_2px_0_0_#ffe600] active:translate-y-0.5 transition-all cursor-pointer"
              >
                {lang === "en" ? "Close" : "Tutup"}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
