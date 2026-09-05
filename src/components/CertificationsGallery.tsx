"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export interface CertificateItem {
  name: string;
  cleanName: string;
  issuer: string;
  category: string;
  url: string;
}

interface CertificationsGalleryProps {
  certificates: CertificateItem[];
}

export default function CertificationsGallery({ certificates }: CertificationsGalleryProps) {
  const { lang } = useLanguage();

  return (
    <>
      {/* Header Banner */}
      <div className="bg-white border-[3px] md:border-[4px] border-black p-6 sm:p-10 shadow-[8px_8px_0_0_#ffe600] flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex flex-col gap-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="bg-brutal-yellow font-display font-black text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0_0_#000]">
              {lang === "en" ? "Verified Credentials" : "Kredensial Terverifikasi"}
            </span>
            <span className="bg-black text-brutal-lime-electric font-mono text-xs px-2.5 py-0.5 font-bold uppercase">
              {certificates.length} {lang === "en" ? "Certifications" : "Sertifikat"}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-ink">
            {lang === "en" ? "Certifications Gallery" : "Galeri Sertifikasi"}
          </h1>
          <p className="font-body text-sm sm:text-base text-zinc-800 max-w-2xl font-bold">
            {lang === "en"
              ? "Official certifications spanning Generative AI, Deep Learning, Python Data Science, Cloud Infrastructure, and Virtual Lab Linux issued by Komdigi, Dicoding, and DQLab."
              : "Sertifikasi resmi di bidang Generative AI, Deep Learning, Data Science Python, Infrastruktur Cloud, dan Linux Virtual Lab yang diterbitkan oleh Komdigi, Dicoding, dan DQLab."}
          </p>
        </div>

        <Link
          href="/"
          className="self-start md:self-auto bg-black text-white font-display font-black text-xs sm:text-sm uppercase px-6 py-3.5 border-2 border-black shadow-[4px_4px_0_0_#ffe600] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#ffe600] active:translate-y-0.5 transition-all inline-flex items-center gap-2 relative z-10 cursor-pointer"
        >
          <span className="material-symbols-outlined text-base text-brutal-yellow">arrow_back</span>
          <span>{lang === "en" ? "Back to Home" : "Kembali ke Beranda"}</span>
        </Link>
      </div>

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certificates.map((cert, index) => {
          const badgeColors = [
            "bg-brutal-yellow",
            "bg-brutal-cyan",
            "bg-brutal-lime-electric",
            "bg-brutal-pink-light",
          ];
          const badgeColor = badgeColors[index % badgeColors.length];

          return (
            <div
              key={index}
              className="bg-white border-[3px] md:border-[4px] border-black p-5 sm:p-6 shadow-[5px_5px_0_0_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#ffe600] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Category & Issuer Header */}
                <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                  <span className={`${badgeColor} font-display font-black text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0_0_#000]`}>
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-xs font-bold text-zinc-600 uppercase tracking-wide">
                    PDF Document
                  </span>
                </div>

                {/* Certificate Icon / Badge visual */}
                <div className="w-12 h-12 bg-zinc-100 border-2 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0_0_#000] group-hover:bg-brutal-yellow group-hover:rotate-6 transition-all">
                  <span className="material-symbols-outlined text-2xl text-black">
                    verified
                  </span>
                </div>

                {/* Certificate Title */}
                <h2 className="font-display font-black text-lg sm:text-xl uppercase leading-tight text-ink mb-3 line-clamp-3">
                  {cert.cleanName}
                </h2>

                {/* Category Pill */}
                <div className="mt-2">
                  <span className="bg-zinc-100 border-2 border-black px-2.5 py-1 text-xs font-mono font-bold text-black shadow-[1.5px_1.5px_0_0_#000]">
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="mt-6 pt-4 border-t-2 border-black border-dashed flex items-center justify-between">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-black text-white font-display font-black text-xs sm:text-sm uppercase py-3 px-4 text-center border-2 border-black shadow-[3px_3px_0_0_#ffe600] hover:bg-zinc-900 active:translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{lang === "en" ? "View & Verify PDF" : "Lihat & Verifikasi PDF"}</span>
                  <span className="material-symbols-outlined text-sm text-brutal-yellow">open_in_new</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
