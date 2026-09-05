"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function WmsProject() {
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
      {/* ========================================================================= */}
      {/* FEATURED ENTERPRISE CARD: WAREHOUSE MANAGEMENT SYSTEM (WMS) */}
      {/* ========================================================================= */}
      <div className="bg-white border-[3px] md:border-[4px] border-black p-6 sm:p-8 md:p-10 shadow-[8px_8px_0_0_#000] relative">
        <div className="absolute -top-3.5 left-6 bg-brutal-yellow text-black border-2 border-black px-3.5 py-0.5 font-display font-black text-xs uppercase tracking-wider shadow-[2px_2px_0_0_#000] inline-flex items-center gap-1.5">
          <span className="material-symbols-outlined text-sm font-bold text-black">star</span>
          <span>{lang === "en" ? "FEATURED ENTERPRISE PROJECT" : "PROYEK ENTERPRISE UNGGULAN"}</span>
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
                {lang === "en" ? "Live System" : "Sistem Aktif"}
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
              {lang === "en" ? (
                <>
                  Enterprise-grade Warehouse Management System designed to digitize end-to-end warehouse logistics: real-time stock allocation, barcode scanning validation, shelf location mapping, and multi-tier inventory auditing.
                </>
              ) : (
                <>
                  Warehouse Management System kelas Enterprise yang dirancang untuk mendigitalisasi logistik pergudangan terpadu: alokasi stok real-time, validasi pemindaian barcode, denah penempatan rak fisik, dan audit inventaris bertingkat.
                </>
              )}
            </p>

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
                className="bg-black text-white hover:bg-zinc-800 font-display font-black text-xs sm:text-sm uppercase px-5 py-3 border-2 border-black shadow-[4px_4px_0_0_#ffe600] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#ffe600] active:translate-y-0.5 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base text-brutal-yellow">info</span>
                <span>{lang === "en" ? "System Overview" : "Gambaran Umum Sistem"}</span>
              </button>

              <span className="inline-flex items-center gap-2 bg-zinc-100 text-black px-3.5 py-2.5 text-xs font-mono font-bold uppercase border-2 border-black shadow-[2px_2px_0_0_#000]">
                <span className="material-symbols-outlined text-sm text-emerald-600">lock</span>
                <span>{lang === "en" ? "Internal Enterprise System" : "Sistem Enterprise Internal"}</span>
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
                  Warehouse Management System
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
                  <span className="material-symbols-outlined text-brutal-blue font-bold">warehouse</span>
                  <span>{lang === "en" ? "What is the Warehouse Management System?" : "Apa itu Warehouse Management System?"}</span>
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-800 font-medium">
                  {lang === "en" ? (
                    <>
                      The <strong>Warehouse Management System (WMS)</strong> is an enterprise web application built for <strong>PT Reska Multi Usaha (KAI Services) Regional Office 04 Semarang</strong>. It replaces slow, error-prone manual paper logs with an instant, digital system for tracking incoming supplies, shelf locations, and outbound shipments for passenger trains and station food outlets.
                    </>
                  ) : (
                    <>
                      <strong>Warehouse Management System (WMS)</strong> adalah aplikasi web enterprise yang dirancang khusus untuk <strong>PT Reska Multi Usaha (KAI Services) Regional Office 04 Semarang</strong>. Sistem ini menggantikan pencatatan manual di kertas yang rawan salah dengan sistem digital instan untuk memantau pasokan barang masuk, penempatan rak, dan pengiriman barang kebutuhan kereta penumpang serta kafe stasiun.
                    </>
                  )}
                </p>
              </div>

              {/* How It Helps Operations (Non-Technical Explanation) */}
              <div>
                <h4 className="font-display font-black text-sm sm:text-base uppercase mb-3 text-ink flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-600 font-bold">lightbulb</span>
                  <span>{lang === "en" ? "How This System Powers Daily Warehouse Operations" : "Bagaimana Sistem Ini Membantu Operasional Gudang?"}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-600 font-bold text-lg">qr_code_scanner</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "1. Smart Barcode Scanning" : "1. Pemindaian Barcode Pintar"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Staff can scan item barcodes directly using phone cameras or warehouse handheld scanners. When goods arrive or leave, scanning immediately validates the product and quantity without manual counting errors."
                        : "Petugas gudang dapat memindai barcode barang langsung melalui kamera HP atau barcode scanner fisik. Saat barang masuk atau keluar, sistem langsung mencocokkan jenis barang dan jumlahnya tanpa salah hitung manual."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-brutal-blue font-bold text-lg">grid_view</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "2. Interactive 2D Rack Map" : "2. Peta Rak Visual 2D"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Provides a visual map of physical shelves showing which rack, floor tier, and bin holds each item, color-coded by capacity so staff can locate inventory in seconds."
                        : "Menyediakan denah visual susunan rak gudang fisik, menunjukkan lokasi rak, lantai, dan baris penyimpanan setiap barang dengan kode warna kapasitas agar barang dapat ditemukan dalam hitungan detik."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-purple-600 font-bold text-lg">verified</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "3. Expiration Control (FEFO)" : "3. Pengawasan Kedaluwarsa (FEFO)"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Automatically guides staff to dispatch batches with the closest expiry date first (First Expired, First Out), preventing waste and ensuring expired goods never reach trains or cafes."
                        : "Secara otomatis memandu petugas untuk mengeluarkan barang yang memiliki tanggal kedaluwarsa terdekat lebih dulu (First Expired, First Out), mencegah pemborosan dan menjamin tidak ada barang basi yang terkirim."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-rose-600 font-bold text-lg">print</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "4. Digital Delivery Orders" : "4. Surat Jalan & Cetak Stiker"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Generates official shipment documents (Surat Jalan) with official KAI Services branding and prints thermal barcode stickers on demand for seamless handovers."
                        : "Menerbitkan dokumen Surat Jalan resmi dengan kop KAI Services dan mencetak stiker barcode thermal secara instan untuk kelancaran proses serah terima barang antar divisi."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-amber-600 font-bold text-lg">checklist</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "5. Fast Stock Auditing & Approvals" : "5. Persetujuan Cepat & Audit Stok"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "Supervisors can review and approve stock adjustments in bulk with one click, while field workers perform shift audits to verify physical counts against system records."
                        : "Supervisor dapat meninjau dan menyetujui penyesuaian stok opname secara massal dengan satu klik, sementara petugas shift rutin mencocokkan jumlah stok fisik dengan catatan sistem."}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-teal-600 font-bold text-lg">forum</span>
                      <span className="font-display font-black text-xs sm:text-sm uppercase text-ink">
                        {lang === "en" ? "6. In-App Team Coordination" : "6. Koordinasi Tim di Dalam Aplikasi"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {lang === "en"
                        ? "An integrated messaging platform allows warehouse operators and supervisors to communicate, discuss item movements, and approve stock transfers directly within the system."
                        : "Ruang obrolan tim terintegrasi memudahkan petugas gudang dan supervisor untuk berkomunikasi, membahas mutasi barang, serta menyetujui permintaan stok secara langsung di aplikasi."}
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
