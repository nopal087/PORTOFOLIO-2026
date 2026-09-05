"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function IrisProject() {
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
              {lang === "en" ? "HR & Compliance" : "HR & Kepatuhan"}
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
            {lang === "en"
              ? "Centralized HR platform to manage employee relations workflows, transparent disciplinary procedures, and workplace climate surveys with real-time audit logs."
              : "Platform HR terpusat untuk mengelola hubungan industrial, prosedur pembinaan karyawan yang transparan, dan survei iklim kerja dengan audit log real-time."}
          </p>
        </div>

        <div className="mt-5 pt-3 border-t-2 border-black border-dashed flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white hover:bg-zinc-800 font-display font-black text-[11px] uppercase px-3 py-1.5 border border-black shadow-[2px_2px_0_0_#00e5ff] active:translate-y-0.5 transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm text-brutal-cyan">info</span>
            <span>{lang === "en" ? "System Overview" : "Gambaran Umum"}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-zinc-700 hidden sm:inline">KAI Services HR</span>
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
                <span className="bg-brutal-cyan text-black font-display font-black text-xs uppercase px-2.5 py-1 border border-black shadow-[2px_2px_0_0_#fff]">
                  {lang === "en" ? "SYSTEM OVERVIEW" : "GAMBARAN UMUM"}
                </span>
                <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-white">
                  IRIS (Industrial Relations)
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
                  <span className="material-symbols-outlined text-brutal-cyan font-bold">shield_person</span>
                  <span>{lang === "en" ? "What is the IRIS System?" : "Apa itu Sistem IRIS?"}</span>
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-800 font-medium">
                  {lang === "en" ? (
                    <>
                      The <strong>Industrial Relations Information System (IRIS)</strong> is an enterprise HR platform developed to modernize workplace relations, policy compliance, and organizational climate management. It replaces cumbersome paper trails with a transparent, structured, and confidential digital hub for managing employee relations fairly and objectively.
                    </>
                  ) : (
                    <>
                      <strong>Industrial Relations Information System (IRIS)</strong> adalah platform manajemen hubungan industrial terpadu untuk KAI Services. Sistem ini mendigitalisasi penanganan kasus pembinaan karyawan, kepatuhan regulasi kerja, hingga survei kepuasan iklim kerja secara objektif, transparan, dan terjaga kerahasiaannya.
                    </>
                  )}
                </p>
              </div>

              {/* How It Helps Operations (Non-Technical & Confidentiality-Safe) */}
              <div>
                <h4 className="font-display font-black text-sm sm:text-base uppercase mb-3 text-ink flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-600 font-bold">lightbulb</span>
                  <span>{lang === "en" ? "How This System Powers HR & Employee Relations" : "Bagaimana Sistem Ini Membantu Hubungan Industrial & SDM?"}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-600 font-bold text-lg">account_tree</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "1. Structured Case Management" : "1. Manajemen Kasus Terstruktur"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Guides HR officers through standard procedural steps with an interactive chronological timeline, ensuring every employee relations case is handled thoroughly and fairly."
                        : "Memandu tim HR melalui alur kerja prosedural standar dengan linimasa interaktif, memastikan setiap kasus pembinaan ditangani secara adil, rapi, dan sesuai aturan perusahaan."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-brutal-blue font-bold text-lg">event_available</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "2. Validity Period Monitoring" : "2. Pemantauan Masa Berlaku Sanksi"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Provides real-time tracking of letters of warning and disciplinary status, automatically highlighting active versus expired periods to avoid administrative oversights."
                        : "Menampilkan masa berlaku surat peringatan dan status pembinaan secara real-time, memisahkan status aktif vs kedaluwarsa secara otomatis untuk menghindari kelalaian administratif."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-purple-600 font-bold text-lg">query_stats</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "3. Objective HR Analytics" : "3. Analisis Data & Tren HR"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Executive visual charts display resolution rates and case trends across divisions, giving management clear insight into organizational health."
                        : "Grafik visual eksekutif menyajikan tingkat penyelesaian kasus dan tren perkembangan hubungan kerja antar divisi guna memberikan gambaran objektif bagi manajemen."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-rose-600 font-bold text-lg">rate_review</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "4. Exit Interview Insights" : "4. Evaluasi Wawancara Keluar"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Gathers structured feedback from departing personnel to categorize turnover reasons (career growth, compensation, environment) and provide actionable retention insights."
                        : "Menghimpun masukan terstruktur dari karyawan yang mengundurkan diri untuk memetakan faktor turnover (karir, lingkungan kerja, kompensasi) demi evaluasi retensi SDM."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-amber-600 font-bold text-lg">psychology</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "5. Workplace Climate Surveys" : "5. Survei Kepuasan Iklim Kerja"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Runs periodic satisfaction and culture surveys measuring team camaraderie, leadership, and workplace environment to foster positive corporate culture."
                        : "Mengukur kepuasan kerja berkala di berbagai dimensi strategis (kekompakan tim, kepemimpinan, lingkungan kerja, dan budaya) untuk mewujudkan suasana kerja yang sehat."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-teal-600 font-bold text-lg">lock</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "6. Secure Archival & Privacy" : "6. Keamanan & Kerahasiaan Dokumen"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Guarantees strict confidentiality with role-based access control, compressed evidence document archiving, and automated activity audit trails."
                        : "Menjaga kerahasiaan data karyawan secara ketat dengan pembatasan hak akses berbasis peran, kompresi berkas dokumen bukti, dan pencatatan riwayat audit log otomatis."}
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
                className="bg-black text-white hover:bg-zinc-800 font-display font-black text-xs uppercase px-5 py-2.5 border-2 border-black shadow-[2px_2px_0_0_#00e5ff] active:translate-y-0.5 transition-all cursor-pointer"
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
