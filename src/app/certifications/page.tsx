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

import CertificationsGallery from '@/components/CertificationsGallery';

export default function CertificationsPage() {
  const certDir = path.join(process.cwd(), 'public', 'sertifikat');
  const certificates = getCertificates(certDir, '/sertifikat');

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-canvas py-10 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] 2xl:max-w-[1920px] mx-auto flex flex-col gap-10">
        <CertificationsGallery certificates={certificates} />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-[3px] md:border-t-[4px] border-black py-8 mt-16">
        <div className="w-full max-w-[1720px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
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
