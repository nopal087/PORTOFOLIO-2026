export interface Translations {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    certifications: string;
    contact: string;
    hireMe: string;
    openToWork: string;
  };
  hero: {
    role1: string;
    role2: string;
    titleLine1: string;
    titleLine2: string;
    summary: string;
    viewProjects: string;
    exploreCerts: string;
    basedIn: string;
    architecture: string;
    backendSpeed: string;
    workflow: string;
  };
  stats: {
    experienceTitle: string;
    experienceValue: string;
    experienceDesc: string;
    productionTitle: string;
    productionValue: string;
    productionDesc: string;
    credentialsTitle: string;
    credentialsValue: string;
    credentialsDesc: string;
    supportTitle: string;
    supportValue: string;
    supportDesc: string;
  };
  marquee: {
    fullstack: string;
    agenticAi: string;
    infra: string;
    golangNext: string;
  };
  about: {
    sectionNum: string;
    sectionTitle: string;
    badge: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    specName: string;
    specRole: string;
    specFocus: string;
    specEducation: string;
    specLocation: string;
    specAvailability: string;
    stackTitle: string;
    stackCat1Title: string;
    stackCat1Sub: string;
    stackCat2Title: string;
    stackCat2Sub: string;
    stackCat3Title: string;
    stackCat3Sub: string;
    stackCat4Title: string;
    stackCat4Sub: string;
  };
  experience: {
    sectionNum: string;
    sectionTitle: string;
    job1Badge: string;
    job1Role: string;
    job1Company: string;
    job1Period: string;
    job1Points: { title: string; desc: string }[];
    job2Badge: string;
    job2Role: string;
    job2Company: string;
    job2Period: string;
    job2Points: { title: string; desc: string }[];
    job3Badge: string;
    job3Role: string;
    job3Company: string;
    job3Period: string;
    job3Points: string[];
  };
  education: {
    formalEdu: string;
    degreeTitle: string;
    university: string;
    period: string;
    details: string;
    degreeFooter: string;
    graduated: string;
    accreditations: string;
    certCount: string;
    certTitle: string;
    certIssuers: string;
    certSummary: string;
    exploreCredentials: string;
    openGallery: string;
  };
  projects: {
    sectionNum: string;
    sectionTitle: string;
    internalTag: string;
    liveSystemTag: string;
    portfolioTag: string;
    overviewBtn: string;
    portfolioTitle: string;
    portfolioDesc: string;
    portfolioBadge: string;
    sibumdesBadge: string;
    sibumdesTitle: string;
    sibumdesDesc: string;
    sibumdesCategory: string;
    sikostBadge: string;
    sikostTitle: string;
    sikostDesc: string;
    sikostCategory: string;
  };
  principles: {
    sectionNum: string;
    sectionTitle: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
  };
  contact: {
    sectionNum: string;
    sectionTitle: string;
    statusBadge: string;
    headline: string;
    subheadline: string;
    emailPrompt: string;
    copied: string;
    copyEmail: string;
    waDirect: string;
    connectOn: string;
    cvPrompt: string;
    downloadCv: string;
  };
  footer: {
    designedBy: string;
    rights: string;
    builtWith: string;
    backToTop: string;
  };
  certificationsPage: {
    backHome: string;
    galleryBadge: string;
    title: string;
    description: string;
    searchPlaceholder: string;
    categoryAll: string;
    categoryAi: string;
    categoryData: string;
    categoryCloud: string;
    issuedBy: string;
    credentialId: string;
    verifyCredential: string;
    noResults: string;
  };
}

export const translations: Record<"en" | "id", Translations> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
      hireMe: "Hire Me",
      openToWork: "#OpenToWork",
    },
    hero: {
      role1: "IT Support & Full Stack Dev",
      role2: "Agentic AI Specialist",
      titleLine1: "ENGINEERING SYSTEMS.",
      titleLine2: "SOLVING AT SCALE.",
      summary: "I build robust enterprise applications (Next.js, Golang, PostgreSQL) and accelerate software delivery using Agentic AI workflows. Proven track record in IT infrastructure, operational reliability, and scalable software solutions.",
      viewProjects: "Explore Enterprise Work",
      exploreCerts: "Credentials (20+)",
      basedIn: "Semarang & Pekalongan, ID",
      architecture: "Full Stack Web & PWA",
      backendSpeed: "High Concurrency Golang",
      workflow: "Autonomous Agentic AI",
    },
    stats: {
      experienceTitle: "EXPERIENCE",
      experienceValue: "3+ YRS",
      experienceDesc: "IT Infrastructure & Web Dev",
      productionTitle: "PRODUCTION",
      productionValue: "5+ APPS",
      productionDesc: "Enterprise Systems Built",
      credentialsTitle: "CREDENTIALS",
      credentialsValue: "20+ CERTS",
      credentialsDesc: "AI, Python & Cloud Certified",
      supportTitle: "SUPPORT SLA",
      supportValue: "98% SLA",
      supportDesc: "120+ Monthly Tickets Solved",
    },
    marquee: {
      fullstack: "FULL STACK ENGINEERING",
      agenticAi: "AGENTIC AI WORKFLOWS",
      infra: "IT INFRASTRUCTURE & NETWORKING",
      golangNext: "GOLANG & NEXT.JS APPS",
    },
    about: {
      sectionNum: "01",
      sectionTitle: "About Me",
      badge: "Software Engineer & IT Specialist",
      title: "Bridging Enterprise Systems, IT Support & Modern AI Tooling",
      p1: "I am an IT Support Specialist and Full Stack Developer with a Bachelor's Degree in Informatics (IPK 3.77, Cum Laude). Currently operating at PT Reska Multi Usaha (KAI Services) Regional Office 04 Semarang, I engineer mission-critical applications that digitize core railway logistics, station parking revenues, and cafe operations.",
      p2: "My approach combines reliable backend architectures (Golang, PostgreSQL) and responsive client interfaces (Next.js App Router, PWA) with the force-multiplier of Agentic AI workflows (Antigravity CLI, Claude Code, Cursor). This allows me to prototype, validate, and ship production-ready enterprise software at 2-3x typical velocity.",
      p3: "Beyond writing software, I possess hands-on expertise in enterprise IT infrastructure: diagnosing network bottlenecks, maintaining hardware availability across operational workstations, and delivering a 98% resolution SLA across 120+ monthly support tickets.",
      specName: "Muhammad Naufal Faruq",
      specRole: "IT Support & Full Stack Developer",
      specFocus: "Enterprise Systems & Agentic AI",
      specEducation: "S.Kom (Informatics, UMS)",
      specLocation: "Semarang / Pekalongan, Indonesia",
      specAvailability: "Full-Time & High-Impact Contracts",
      stackTitle: "Core Competencies & Tooling",
      stackCat1Title: "Modern Frontend",
      stackCat1Sub: "// Clean Architecture & PWA",
      stackCat2Title: "Backend & Systems",
      stackCat2Sub: "// High Concurrency & Throughput",
      stackCat3Title: "AI & Agents",
      stackCat3Sub: "// 2-3x Accelerated SDLC",
      stackCat4Title: "Cloud & Infra",
      stackCat4Sub: "// 98% Support SLA Availability",
    },
    experience: {
      sectionNum: "03",
      sectionTitle: "Experience",
      job1Badge: "Current Role",
      job1Role: "IT Support & Developer",
      job1Company: "PT Reska Multi Usaha (KAI Services) • Semarang, Indonesia",
      job1Period: "Nov 2025 – Present",
      job1Points: [
        {
          title: "End-to-End Enterprise Web Apps:",
          desc: "Architected and engineered high-impact operational systems, including the Warehouse Management System (WMS), Resparking Pendapatan, and Loko Cafe Management using Next.js and Golang.",
        },
        {
          title: "WMS Real-time Logistics:",
          desc: "Designed live item tracking, barcode scanning, and multi-tier shelf location management to eliminate manual discrepancies across regional supply warehouses.",
        },
        {
          title: "AI-Assisted Acceleration:",
          desc: "Integrated autonomous Agentic AI workflows to expedite development cycles by 2-3x while maintaining comprehensive test coverage.",
        },
        {
          title: "Infrastructure Support:",
          desc: "Overseeing preventive maintenance, LAN/Wi-Fi troubleshooting, and hardware configurations to guarantee operational continuity.",
        },
      ],
      job2Badge: "Banking IT",
      job2Role: "IT Support & Archive Systems",
      job2Company: "PT Bank Rakyat Indonesia (Persero) Tbk • KC Yogyakarta Katamso",
      job2Period: "Aug 2023 – Oct 2025",
      job2Points: [
        {
          title: "Critical Banking Hardware SLA:",
          desc: "Resolved 120+ monthly branch and unit operational hardware/network tickets with a 98% on-time resolution SLA.",
        },
        {
          title: "Digital Archiving:",
          desc: "Maintained secure digital archive filing systems, ensuring zero loss and fast retrieval for sensitive financial records.",
        },
        {
          title: "Network Continuity:",
          desc: "Configured IP routing, printer servers, and secure workstation environments adhering to strict banking compliance protocols.",
        },
      ],
      job3Badge: "IoT & Robotics",
      job3Role: "Software Engineer Intern",
      job3Company: "PT Stechoq Robotika Indonesia • Yogyakarta, Indonesia",
      job3Period: "Feb 2022 – Jun 2022",
      job3Points: [
        "Engineered an automated Self-Checkout solution utilizing RFID technology, writing backend microservices with Express.js.",
        "Translated wireframes into high-fidelity interactive UI designs using Figma and conducted rigorous integration tests with RFID reader hardware.",
      ],
    },
    education: {
      formalEdu: "Formal Education",
      degreeTitle: "Bachelor of Computer Science (S1)",
      university: "Universitas Muhammadiyah Surakarta",
      period: "2019 – 2023",
      details: "GPA 3.77 / 4.00 (Cum Laude). Final Project: Developed SI-BUMDES, a digital village Wi-Fi billing and subscriber management web platform.",
      degreeFooter: "Degree: Sarjana Komputer (S.Kom)",
      graduated: "Graduated 2023",
      accreditations: "Accreditations",
      certCount: "20+ Certificates",
      certTitle: "AI & Data Science Certifications",
      certIssuers: "Komdigi • Dicoding • DQLab • RevoU",
      certSummary: "Completed 20+ specialized certifications in Generative AI, Deep Learning, Python Data Science, Cloud Computing, and Virtual Lab Linux.",
      exploreCredentials: "Explore verifiable credentials",
      openGallery: "Open Gallery",
    },
    projects: {
      sectionNum: "04",
      sectionTitle: "Selected Works",
      internalTag: "Internal Enterprise System",
      liveSystemTag: "Live System",
      portfolioTag: "Portfolio",
      overviewBtn: "System Overview",
      portfolioTitle: "Modern Portfolio Experience",
      portfolioDesc: "Personal engineering portfolio designed with vibrant, accessible Neo-Brutalism. Engineered with Next.js App Router, Tailwind CSS v4, and automated Agentic AI tools.",
      portfolioBadge: "Live Website",
      sibumdesBadge: "Gov Tech / IoT",
      sibumdesTitle: "SI-BUMDES Wi-Fi Management",
      sibumdesDesc: "Village-owned digital enterprise (BUMDes) web platform managing community Wi-Fi subscriptions, voucher generation, automated billing, and user access controls.",
      sibumdesCategory: "Digital Village",
      sikostBadge: "Property Tech",
      sikostTitle: "SIKOST Property Management",
      sikostDesc: "Comprehensive boarding house (Kost) property rental platform featuring room availability matrices, digital invoices, and tenant payment tracking.",
      sikostCategory: "Web App",
    },
    principles: {
      sectionNum: "05",
      sectionTitle: "Core Principles",
      p1Title: "1. Reliability Over Hype",
      p1Desc: "Enterprise software exists to eliminate operational bottlenecks. I prioritize predictable architectures, bulletproof error handling, and offline resiliency.",
      p2Title: "2. Agentic Speed with Human Rigor",
      p2Desc: "AI agent workflows multiply development velocity by 2-3x, but code correctness, defensive typing, and security compliance remain strictly human-verified.",
      p3Title: "3. Full-Spectrum Ownership",
      p3Desc: "From cabling a warehouse access point to architecting PostgreSQL indexing and refining client UI, I own the complete delivery chain.",
      p4Title: "4. Pragmatic UX for Field Workers",
      p4Desc: "Whether an operator in a noisy train station or a cashier during morning rush hour, user interfaces must be lightning-fast, high-contrast, and impossible to misunderstand.",
    },
    contact: {
      sectionNum: "06",
      sectionTitle: "Get In Touch",
      statusBadge: "Available for Hire",
      headline: "Let's Build Something High-Impact Together.",
      subheadline: "Whether you need an enterprise web application, high-reliability IT operations, or an accelerated development workflow powered by Agentic AI, I'm ready to contribute.",
      emailPrompt: "Prefer direct email? Click to copy:",
      copied: "Copied to Clipboard!",
      copyEmail: "Copy Email Address",
      waDirect: "WhatsApp Chat (Direct)",
      connectOn: "Connect on LinkedIn",
      cvPrompt: "Looking for complete career history and credentials?",
      downloadCv: "Download Full Resume (PDF)",
    },
    footer: {
      designedBy: "Designed & Built by Muhammad Naufal Faruq.",
      rights: "All rights reserved. Neo-Brutalism Web Portfolio.",
      builtWith: "Next.js • Tailwind CSS • TypeScript • Agentic AI",
      backToTop: "Back to Top",
    },
    certificationsPage: {
      backHome: "Back to Portfolio",
      galleryBadge: "Verifiable Credentials",
      title: "Certificates & Accreditations",
      description: "A comprehensive collection of 20+ professional certifications in Artificial Intelligence, Deep Learning, Python Data Science, and Cloud Systems from accredited institutions.",
      searchPlaceholder: "Search certification by name or issuer...",
      categoryAll: "All (20+)",
      categoryAi: "AI & Deep Learning",
      categoryData: "Data Science & Python",
      categoryCloud: "Cloud & Systems",
      issuedBy: "Issued by",
      credentialId: "Credential ID",
      verifyCredential: "View Certificate",
      noResults: "No certifications found matching your query.",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      experience: "Pengalaman",
      projects: "Proyek",
      certifications: "Sertifikasi",
      contact: "Kontak",
      hireMe: "Rekrut Saya",
      openToWork: "#SiapBekerja",
    },
    hero: {
      role1: "IT Support & Pengembang Full Stack",
      role2: "Spesialis Agentic AI",
      titleLine1: "MEMBANGUN SISTEM.",
      titleLine2: "SOLUSI BERSKALA BESAR.",
      summary: "Saya membangun aplikasi enterprise tangguh (Next.js, Golang, PostgreSQL) dan mempercepat pengiriman software menggunakan alur kerja Agentic AI. Berpengalaman nyata dalam infrastruktur IT, keandalan operasional, dan arsitektur software berskala besar.",
      viewProjects: "Jelajahi Proyek Enterprise",
      exploreCerts: "Sertifikasi (20+)",
      basedIn: "Semarang & Pekalongan, Indonesia",
      architecture: "Web Full Stack & PWA",
      backendSpeed: "Konkurensi Tinggi Golang",
      workflow: "Alur Kerja Otonom Agentic AI",
    },
    stats: {
      experienceTitle: "PENGALAMAN",
      experienceValue: "3+ THN",
      experienceDesc: "Infrastruktur IT & Web Dev",
      productionTitle: "PRODUKSI",
      productionValue: "5+ APLIKASI",
      productionDesc: "Sistem Enterprise Berjalan",
      credentialsTitle: "KREDENSIAL",
      credentialsValue: "20+ SERTIFIKAT",
      credentialsDesc: "Tersertifikasi AI, Python & Cloud",
      supportTitle: "SLA DUKUNGAN",
      supportValue: "98% SLA",
      supportDesc: "120+ Tiket Bulanan Terselesaikan",
    },
    marquee: {
      fullstack: "REKAYASA FULL STACK",
      agenticAi: "ALUR KERJA AGENTIC AI",
      infra: "INFRASTRUKTUR IT & JARINGAN",
      golangNext: "APLIKASI GOLANG & NEXT.JS",
    },
    about: {
      sectionNum: "01",
      sectionTitle: "Tentang Saya",
      badge: "Software Engineer & Spesialis IT",
      title: "Menghubungkan Sistem Enterprise, Dukungan IT & Alat AI Modern",
      p1: "Saya adalah IT Support Specialist dan Full Stack Developer dengan latar belakang Sarjana Informatika (IPK 3.77, Cum Laude). Saat ini bertugas di PT Reska Multi Usaha (KAI Services) Regional Office 04 Semarang, saya merancang aplikasi krusial yang mendigitalisasi logistik perkeretaapian, pendapatan parkir stasiun, dan operasional kafe.",
      p2: "Pendekatan saya menggabungkan arsitektur backend yang tangguh (Golang, PostgreSQL) dan antarmuka klien yang responsif (Next.js App Router, PWA) dengan percepatan alur kerja Agentic AI (Antigravity CLI, Claude Code, Cursor). Hal ini memungkinkan saya merancang, menguji, dan meluncurkan software enterprise siap produksi 2-3x lebih cepat.",
      p3: "Selain pemrograman, saya memiliki pengalaman langsung dalam infrastruktur IT korporat: mendiagnosis kendala jaringan, menjaga ketersediaan hardware di stasiun kerja operasional, dan mempertahankan SLA resolusi 98% untuk 120+ tiket dukungan teknis setiap bulannya.",
      specName: "Muhammad Naufal Faruq",
      specRole: "IT Support & Full Stack Developer",
      specFocus: "Sistem Enterprise & Agentic AI",
      specEducation: "S.Kom (Teknik Informatika, UMS)",
      specLocation: "Semarang / Pekalongan, Indonesia",
      specAvailability: "Full-Time & Kontrak Strategis",
      stackTitle: "Keahlian Inti & Ekosistem Alat",
      stackCat1Title: "Frontend Modern",
      stackCat1Sub: "// Arsitektur Bersih & PWA",
      stackCat2Title: "Backend & Sistem",
      stackCat2Sub: "// Konkurensi & Throughput Tinggi",
      stackCat3Title: "AI & Agen Otonom",
      stackCat3Sub: "// Siklus SDLC 2-3x Lebih Cepat",
      stackCat4Title: "Cloud & Infrastruktur",
      stackCat4Sub: "// Ketersediaan SLA Dukungan 98%",
    },
    experience: {
      sectionNum: "03",
      sectionTitle: "Pengalaman Kerja",
      job1Badge: "Posisi Saat Ini",
      job1Role: "IT Support & Developer",
      job1Company: "PT Reska Multi Usaha (KAI Services) • Semarang, Indonesia",
      job1Period: "Nov 2025 – Sekarang",
      job1Points: [
        {
          title: "Aplikasi Web Enterprise End-to-End:",
          desc: "Merancang dan membangun sistem operasional berdampak tinggi, termasuk Warehouse Management System (WMS), Resparking Pendapatan, dan Loko Cafe Management System menggunakan Next.js dan Golang.",
        },
        {
          title: "Logistik Real-time WMS:",
          desc: "Mendesain pelacakan stok langsung, pemindaian barcode, dan pemetaan lokasi rak bertingkat untuk menghilangkan selisih fisik di gudang logistik regional.",
        },
        {
          title: "Akselerasi Berbantuan AI:",
          desc: "Mengintegrasikan alur kerja Agentic AI otonom guna mempercepat siklus rilis fitur hingga 2-3x lipat dengan cakupan pengujian yang ketat.",
        },
        {
          title: "Dukungan Infrastruktur IT:",
          desc: "Melakukan pemeliharaan preventif, perbaikan jaringan LAN/Wi-Fi, dan konfigurasi hardware untuk menjamin kelancaran operasional harian.",
        },
      ],
      job2Badge: "IT Perbankan",
      job2Role: "IT Support & Sistem Arsip",
      job2Company: "PT Bank Rakyat Indonesia (Persero) Tbk • KC Yogyakarta Katamso",
      job2Period: "Agt 2023 – Okt 2025",
      job2Points: [
        {
          title: "SLA Hardware Perbankan Kritis:",
          desc: "Menangani 120+ tiket operasional bulanan kantor cabang dan unit perbankan dengan SLA penyelesaian tepat waktu mencapai 98%.",
        },
        {
          title: "Digitalisasi Arsip:",
          desc: "Mengelola sistem pengarsipan digital yang aman guna memastikan tidak ada dokumen hilang dan pencarian data keuangan sensitif berjalan cepat.",
        },
        {
          title: "Kontinuitas Jaringan:",
          desc: "Mengonfigurasi perutean IP, printer server, dan stasiun kerja yang aman sesuai standar kepatuhan regulasi perbankan ketat.",
        },
      ],
      job3Badge: "IoT & Robotika",
      job3Role: "Software Engineer Intern",
      job3Company: "PT Stechoq Robotika Indonesia • Yogyakarta, Indonesia",
      job3Period: "Feb 2022 – Jun 2022",
      job3Points: [
        "Membangun solusi otomatisasi Self-Checkout menggunakan teknologi RFID, dengan pengembangan microservice backend berbasis Express.js.",
        "Menerjemahkan wireframe menjadi desain antarmuka pengguna interaktif berkualitas tinggi menggunakan Figma serta melakukan pengujian integrasi perangkat keras RFID.",
      ],
    },
    education: {
      formalEdu: "Pendidikan Formal",
      degreeTitle: "S1 Teknik Informatika",
      university: "Universitas Muhammadiyah Surakarta",
      period: "2019 – 2023",
      details: "IPK 3.77 / 4.00 (Cum Laude). Tugas Akhir: Mengembangkan SI-BUMDES, aplikasi web manajemen pelanggan dan penagihan Wi-Fi desa digital.",
      degreeFooter: "Gelar: Sarjana Komputer (S.Kom)",
      graduated: "Lulus Tahun 2023",
      accreditations: "Akreditasi & Kredensial",
      certCount: "20+ Sertifikat",
      certTitle: "Sertifikasi AI & Data Science",
      certIssuers: "Komdigi • Dicoding • DQLab • RevoU",
      certSummary: "Menyelesaikan 20+ sertifikasi profesional di bidang Generative AI, Deep Learning, Data Science Python, Cloud Computing, dan Linux Virtual Lab.",
      exploreCredentials: "Jelajahi kredensial resmi terverifikasi",
      openGallery: "Buka Galeri",
    },
    projects: {
      sectionNum: "04",
      sectionTitle: "Proyek Pilihan",
      internalTag: "Sistem Internal Perusahaan",
      liveSystemTag: "Sistem Aktif",
      portfolioTag: "Portofolio",
      overviewBtn: "Gambaran Umum",
      portfolioTitle: "Pengalaman Portofolio Modern",
      portfolioDesc: "Portofolio rekayasa web personal dengan estetika Neo-Brutalism yang dinamis dan berani. Dibangun dengan Next.js App Router, Tailwind CSS v4, dan percepatan Agentic AI.",
      portfolioBadge: "Situs Aktif",
      sibumdesBadge: "Teknologi Desa / IoT",
      sibumdesTitle: "SI-BUMDES Manajemen Wi-Fi",
      sibumdesDesc: "Platform web BUMDes untuk mengelola langganan internet desa, pencetakan voucer, penagihan otomatis, dan kontrol akun pelanggan.",
      sibumdesCategory: "Desa Digital",
      sikostBadge: "Manajemen Properti",
      sikostTitle: "SIKOST Pengelolaan Kos",
      sikostDesc: "Sistem persewaan kamar kos terpadu yang dilengkapi visualisasi ketersediaan kamar, faktur digital, dan pencatatan pembayaran sewa penghuni.",
      sikostCategory: "Aplikasi Web",
    },
    principles: {
      sectionNum: "05",
      sectionTitle: "Prinsip Utama Rekayasa",
      p1Title: "1. Keandalan di Atas Segalanya",
      p1Desc: "Software enterprise diciptakan untuk menyelesaikan hambatan operasional nyata. Saya mengutamakan arsitektur yang terprediksi, penanganan error tangguh, dan kesiapan offline.",
      p2Title: "2. Kecepatan AI dengan Verifikasi Manusia",
      p2Desc: "Alur kerja agen AI melipatgandakan kecepatan pengembangan 2-3x, namun kebenaran logika, type safety, dan kepatuhan keamanan selalu diverifikasi secara mandiri.",
      p3Title: "3. Kepemilikan Sistem Menyeluruh",
      p3Desc: "Mulai dari pemasangan kabel access point di lapangan hingga pengindeksan database PostgreSQL dan penyempurnaan UI, saya bertanggung jawab atas seluruh rantai rilis.",
      p4Title: "4. Desain Praktis untuk Pekerja Lapangan",
      p4Desc: "Bagi petugas di stasiun yang bising maupun kasir di jam sibuk, antarmuka aplikasi harus sangat cepat diakses, kontras tinggi, dan tidak membingungkan pengguna.",
    },
    contact: {
      sectionNum: "06",
      sectionTitle: "Hubungi Saya",
      statusBadge: "Tersedia untuk Rekrutmen",
      headline: "Mari Bangun Sistem Berdampak Besar Bersama.",
      subheadline: "Baik Anda membutuhkan aplikasi web enterprise, operasional IT yang andal, atau percepatan rekayasa software dengan Agentic AI, saya siap berkontribusi.",
      emailPrompt: "Ingin menghubungi langsung via email? Klik untuk menyalin:",
      copied: "Berhasil Disalin ke Clipboard!",
      copyEmail: "Salin Alamat Email",
      waDirect: "Chat WhatsApp (Langsung)",
      connectOn: "Terhubung di LinkedIn",
      cvPrompt: "Ingin melihat riwayat karir dan kredensial lengkap?",
      downloadCv: "Unduh Resume Lengkap (PDF)",
    },
    footer: {
      designedBy: "Dirancang & Dibangun oleh Muhammad Naufal Faruq.",
      rights: "Hak Cipta Dilindungi. Portofolio Web Neo-Brutalism.",
      builtWith: "Next.js • Tailwind CSS • TypeScript • Agentic AI",
      backToTop: "Kembali ke Atas",
    },
    certificationsPage: {
      backHome: "Kembali ke Portofolio",
      galleryBadge: "Kredensial Terverifikasi",
      title: "Sertifikasi & Akreditasi",
      description: "Koleksi lengkap 20+ sertifikasi profesional di bidang Artificial Intelligence, Deep Learning, Data Science Python, dan Sistem Cloud dari lembaga terakreditasi.",
      searchPlaceholder: "Cari sertifikat berdasarkan nama atau penerbit...",
      categoryAll: "Semua (20+)",
      categoryAi: "AI & Deep Learning",
      categoryData: "Data Science & Python",
      categoryCloud: "Cloud & Sistem",
      issuedBy: "Diterbitkan oleh",
      credentialId: "ID Kredensial",
      verifyCredential: "Lihat Sertifikat",
      noResults: "Tidak ada sertifikasi yang cocok dengan pencarian Anda.",
    },
  },
};
