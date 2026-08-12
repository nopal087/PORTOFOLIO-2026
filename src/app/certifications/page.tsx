import fs from 'fs';
import path from 'path';
import Link from 'next/link';

// Function to recursively read all PDF files
function getCertificates(dir: string, baseRoute: string = ''): { name: string; url: string }[] {
  const certs: { name: string; url: string }[] = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      certs.push(...getCertificates(fullPath, `${baseRoute}/${file}`));
    } else if (file.toLowerCase().endsWith('.pdf')) {
      certs.push({
        name: file.replace(/\.pdf$/i, ''),
        url: `${baseRoute}/${file}`,
      });
    }
  }

  return certs;
}

export default function CertificationsPage() {
  const certDir = path.join(process.cwd(), 'public', 'sertifikat');
  const certificates = getCertificates(certDir, '/sertifikat');

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-16 gap-6">
          <div className="relative inline-block max-w-full">
            <div className="absolute inset-0 bg-black border-[3px] md:border-[5px] border-black translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 -z-10 rotate-[2deg]"></div>
            <h1 className="font-display text-[32px] sm:text-[40px] md:text-[80px] font-black border-[4px] md:border-[6px] border-black bg-cyan-brutal p-4 md:p-6 shadow-[8px_8px_0px_0px_#ccff00] md:shadow-[12px_12px_0px_0px_#ccff00] rotate-[-2deg] uppercase tracking-tighter w-full overflow-hidden text-ellipsis">
              CERTIFICATIONS
            </h1>
          </div>
          
          <Link href="/" className="bg-primary-fixed border-[3px] md:border-[4px] border-black px-6 py-3 md:px-8 md:py-4 font-display font-black text-lg md:text-2xl uppercase hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-[2deg] hover:rotate-0 inline-flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl md:text-3xl">arrow_back</span>
            BACK TO HOME
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => {
            // Rotating effects for brutalism
            const rotation = index % 2 === 0 ? 'rotate-[1deg]' : 'rotate-[-1deg]';
            const hoverRotation = index % 2 === 0 ? 'hover:rotate-[-2deg]' : 'hover:rotate-[2deg]';
            const bgColor = index % 3 === 0 ? 'bg-white' : index % 3 === 1 ? 'bg-secondary-fixed-dim' : 'bg-primary-fixed';

            return (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${bgColor} border-[4px] md:border-[6px] border-black p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4 ${rotation} ${hoverRotation} hover:-translate-y-4 transition-all group`}
              >
                {/* PDF Preview Frame */}
                <div className="w-full aspect-[4/3] border-[4px] border-black bg-gray-200 overflow-hidden relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 z-10 pointer-events-none group-hover:bg-transparent transition-all">
                    <span className="bg-lime-brutal text-black border-[3px] border-black px-4 py-2 font-display font-black text-xl uppercase rotate-[-5deg] group-hover:scale-110 transition-transform">
                      VIEW PDF
                    </span>
                  </div>
                  {/* Using iframe to load PDF natively in browser as a preview */}
                  <iframe 
                    src={`${cert.url}#toolbar=0&navpanes=0&scrollbar=0`} 
                    className="w-full h-[150%] scale-[0.7] origin-top-left pointer-events-none" 
                    title={cert.name}
                  />
                </div>
                
                {/* Certificate Name */}
                <div className="mt-2 flex-grow flex items-center">
                  <h3 className="font-display font-black text-xl uppercase leading-tight line-clamp-3">
                    {cert.name}
                  </h3>
                </div>

                <div className="mt-4 pt-4 border-t-[4px] border-black border-dashed flex justify-between items-center">
                   <span className="font-body-lg font-bold text-sm bg-black text-white px-3 py-1 uppercase">
                     Certificate
                   </span>
                   <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">
                     arrow_forward
                   </span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
}
