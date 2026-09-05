"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LokoCafeProject() {
  const { lang } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <>
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
              {lang === "en" ? "F&B Operations" : "Operasional F&B"}
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
            {lang === "en"
              ? "Integrated operations platform for Loko Cafe outlets across Semarang Tawang & Poncol: recipes, raw materials inventory, AI sticker label generation, and Trainmart POS data integration."
              : "Platform operasional terpadu untuk gerai Loko Kafe Stasiun Semarang Tawang & Poncol: manajemen resep, stok bahan baku, pembuatan stiker label dengan AI, dan integrasi data POS Trainmart."}
          </p>
        </div>

        <div className="mt-5 pt-3 border-t-2 border-black border-dashed flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white hover:bg-zinc-800 font-display font-black text-[11px] uppercase px-3 py-1.5 border border-black shadow-[2px_2px_0_0_#ffe600] active:translate-y-0.5 transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm text-brutal-yellow">info</span>
            <span>{lang === "en" ? "System Overview" : "Gambaran Umum"}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-zinc-700 hidden sm:inline">PT Reska Multi Usaha</span>
            <span className="bg-black text-white px-2 py-0.5 uppercase">Internal</span>
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
                  Loko Cafe System Management
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
                  <span className="material-symbols-outlined text-amber-600 font-bold">coffee</span>
                  <span>{lang === "en" ? "What is Loko Cafe System Management?" : "Apa itu Loko Cafe System Management?"}</span>
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-800 font-medium">
                  {lang === "en" ? (
                    <>
                      <strong>Loko Cafe System Management</strong> is an all-in-one operations and inventory platform designed for <strong>Loko Cafe outlets (Semarang Tawang &amp; Poncol stations)</strong> under PT Reska Multi Usaha (KAI Services). It unites daily sales tracking, recipe-based ingredient stock control, barista crew evaluations, and physical inventory labeling into a single web application—eliminating manual paper logbooks and guesswork.
                    </>
                  ) : (
                    <>
                      <strong>Loko Cafe System Management</strong> adalah platform operasional dan inventaris terpadu untuk gerai <strong>Loko Kafe (Stasiun Semarang Tawang &amp; Poncol)</strong> di bawah naungan PT Reska Multi Usaha (KAI Services). Sistem ini menyatukan pencatatan omzet harian, pemotongan stok bahan baku berbasis resep, penilaian kinerja barista, hingga pencetakan stiker label inventaris ke dalam satu sistem yang rapi dan terotomasi.
                    </>
                  )}
                </p>
              </div>

              {/* How It Helps Operations (Non-Technical Explanation) */}
              <div>
                <h4 className="font-display font-black text-sm sm:text-base uppercase mb-3 text-ink flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-600 font-bold">lightbulb</span>
                  <span>{lang === "en" ? "How This System Powers Daily Cafe Operations" : "Bagaimana Sistem Ini Membantu Operasional Kafe?"}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-600 font-bold text-lg">monitoring</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "1. Live Sales & Revenue Dashboard" : "1. Dasbor Penjualan & Omzet Real-Time"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Outlet managers can monitor revenue, top 5 best-selling food and drink items, and payment breakdowns (Cash, QRIS, crew meals) updating in real time without refreshing the page."
                        : "Pengelola gerai dapat memantau pendapatan, 5 menu makanan/minuman terlaris, serta rincian metode pembayaran (Tunai, QRIS, makan crew) secara langsung tanpa perlu memuat ulang halaman."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-brutal-blue font-bold text-lg">liquor</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "2. Automatic Recipe-Based Stock Cuts" : "2. Potong Stok Bahan Baku Otomatis"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "When daily drink sales are recorded, the system automatically deducts the exact raw ingredients (coffee beans, fresh milk, flavored syrups, cups) according to recipe formulas."
                        : "Ketika penjualan minuman harian dicatat, sistem otomatis menghitung dan memotong sisa stok bahan baku (biji kopi, susu segar, sirup perisa, cup) sesuai takaran resep produk."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-purple-600 font-bold text-lg">label</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "3. AI-Powered Expiration Labels" : "3. Stiker Kedaluwarsa Berbantuan AI"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Baristas can instantly generate and print physical date and barcode labels for syrups and prepared batches. An on-device AI automatically cleans up photo backgrounds before printing."
                        : "Barista dapat langsung mencetak stiker fisik tanggal kedaluwarsa dan barcode untuk sirup olahan atau botol bahan. AI bawaan secara otomatis membersihkan latar foto produk sebelum dicetak."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-rose-600 font-bold text-lg">sync_lock</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "4. Clean Shift Handover Snapshots" : "4. Penguncian Serah Terima Shift"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Revenues and stock are automatically locked at the end of each work shift, preventing Shift 1 numbers from shifting or mixing with Shift 2 cashier transactions."
                        : "Pendapatan dan stok fisik dikunci otomatis di akhir jam kerja shift kasir, mencegah percampuran angka antara kasir Shift 1 dan Shift 2 saat serah terima kassa."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-amber-600 font-bold text-lg">badge</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "5. Barista & Crew Appraisals" : "5. Penilaian Kinerja Crew Kafe"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Supervisors can conduct daily and monthly staff evaluations covering service quality, cleanliness, punctuality, and barista skills for fair and transparent performance reviews."
                        : "Supervisor dapat melakukan evaluasi staf harian dan bulanan mencakup keramahan pelayanan, kebersihan area bar, kedisiplinan, dan ketelitian barista untuk bahan evaluasi tim."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-teal-600 font-bold text-lg">tablet_android</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "6. Tablet & Mobile Counter Ready" : "6. Nyaman di Tablet & HP Barista"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Engineered to work seamlessly on bar counter tablets and smartphones, allowing baristas to check recipes, perform blind stock counts, and chat with team members easily."
                        : "Didesain optimal untuk tablet meja bar maupun smartphone barista, mempermudah pengecekan panduan resep, input opname harian, dan komunikasi tim di satu layar."}
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
