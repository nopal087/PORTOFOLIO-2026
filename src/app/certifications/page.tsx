import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface CertificateItem {
  name: string;
  cleanName: string;
  issuer: string;
  category: string;
  url: string;
}

// Helper to determine issuer and category based on filename
function categorizeCertificate(filename: string, fullUrl: string): CertificateItem {
  const cleanBase = filename.replace(/\.pdf$/i, '').trim();
  
  // Clean prefix if present
  let cleanName = cleanBase
    .replace(/^Sertifikat_MUHAMMAD NAUFAL FARUQ_/i, '')
    .replace(/^SERTIFIKAT\s+/i, '')
    .trim();

  let issuer = "KOMDIGI";
  let category = "AI & Machine Learning";

  if (cleanBase.toUpperCase().includes("DQLAB")) {
    issuer = "DQLab";
    cleanName = cleanName.replace(/^DQLAB\s+/i, '');
    category = "Python & Data Science";
  } else if (cleanBase.toUpperCase().includes("DICODING")) {
    issuer = "Dicoding";
    category = "Python & AI";
  } else if (cleanBase.toUpperCase().includes("REVOU")) {
    issuer = "RevoU";
    category = "Data Analytics";
  } else if (cleanBase.toUpperCase().includes("IDCAMP")) {
    issuer = "IDCamp x Dicoding";
    category = "AI Ecosystem";
  } else if (
    cleanBase.toUpperCase().includes("CLOUD") || 
    cleanBase.toUpperCase().includes("LINUX") || 
    cleanBase.toUpperCase().includes("HACKER") || 
    cleanBase.toUpperCase().includes("INTERNET OF THINGS")
  ) {
    category = "IT & Cloud Infrastructure";
  } else if (
    cleanBase.toUpperCase().includes("DEEP LEARNING") || 
    cleanBase.toUpperCase().includes("KECERDASAN ARTIFISIAL") || 
    cleanBase.toUpperCase().includes("GENERATIVE AI") || 
    cleanBase.toUpperCase().includes("PRODUK AI")
  ) {
    category = "AI & Machine Learning";
  } else {
    category = "Programming & Tools";
  }

  return {
    name: cleanBase,
    cleanName,
    issuer,
    category,
    url: fullUrl,
  };
}

// Function to recursively read all PDF files
function getCertificates(dir: string, baseRoute: string = ''): CertificateItem[] {
  const certs: CertificateItem[] = [];
  
  if (!fs.existsSync(dir)) {
    return certs;
  }

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      certs.push(...getCertificates(fullPath, `${baseRoute}/${file}`));
    } else if (file.toLowerCase().endsWith('.pdf')) {
      certs.push(categorizeCertificate(file, `${baseRoute}/${file}`));
    }
  }

  return certs;
}

export default function CertificationsPage() {
  const certDir = path.join(process.cwd(), 'public', 'sertifikat');
  const certificates = getCertificates(certDir, '/sertifikat');

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-canvas py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-10">
        
        {/* Header Banner */}
        <div className="bg-white border-[3px] md:border-[4px] border-black p-6 sm:p-10 shadow-[8px_8px_0_0_#ffe600] flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex flex-col gap-2 relative z-10">
            <div className="flex items-center gap-2">
              <span className="bg-brutal-yellow font-display font-black text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0_0_#000]">
                Verified Credentials
              </span>
              <span className="bg-black text-brutal-lime-electric font-mono text-xs px-2.5 py-0.5 font-bold uppercase">
                {certificates.length} Certifications
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-ink">
              Certifications Gallery
            </h1>
            <p className="font-body text-sm sm:text-base text-zinc-800 max-w-2xl font-bold">
              Official certifications spanning Generative AI, Deep Learning, Python Data Science, Cloud Infrastructure, and Ethical Hacking issued by Komdigi, Dicoding, and DQLab.
            </p>
          </div>

          <Link
            href="/"
            className="self-start md:self-auto bg-black text-white font-display font-black text-xs sm:text-sm uppercase px-6 py-3.5 border-2 border-black shadow-[4px_4px_0_0_#ffe600] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#ffe600] active:translate-y-0.5 transition-all inline-flex items-center gap-2 relative z-10 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base text-brutal-yellow">arrow_back</span>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <span>View &amp; Verify PDF</span>
                    <span className="material-symbols-outlined text-sm text-brutal-yellow">open_in_new</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t-[3px] md:border-t-[4px] border-black py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-lg uppercase bg-brutal-yellow px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0_0_#000]">
              NPL DEV
            </span>
            <span className="font-mono text-xs text-zinc-700 font-bold">
              © 2026 Muhammad Naufal Faruq • All rights reserved
            </span>
          </div>

          <Link
            href="/"
            className="font-display font-black text-xs uppercase bg-black text-white px-4 py-2 border-2 border-black shadow-[2px_2px_0_0_#ffe600] hover:bg-zinc-800 active:translate-y-0.5 transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </footer>
    </>
  );
}
