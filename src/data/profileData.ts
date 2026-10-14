export interface Project {
  id: string;
  title: string;
  category: 'Semua' | 'Web App' | 'E-Commerce' | 'UI/UX' | 'Mobile';
  summary: string;
  summaryEn: string;
  description: string;
  descriptionEn: string;
  tech: string[];
  metrics: string;
  metricsEn: string;
  features: string[];
  featuresEn: string[];
  demoUrl?: string;
  githubUrl?: string;
  accentGradient: string;
  accentColor: string;
}

export interface Experience {
  period: string;
  role: string;
  roleEn: string;
  company: string;
  location: string;
  description: string;
  descriptionEn: string;
  achievements: string[];
  achievementsEn: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  iconName: string;
  experienceYears: string;
}

export interface SkillCategory {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  skills: SkillItem[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  quoteEn: string;
  initials: string;
}

export const PROFILE = {
  name: "Arya Apriawan",
  role: "Full-Stack Web Developer & UI Enthusiast",
  roleEn: "Full-Stack Web Developer & UI Enthusiast",
  tagline: "Membangun produk web modern, berkinerja tinggi, dan ramah pengguna dengan perhatian penuh pada detail kode dan desain.",
  taglineEn: "Crafting modern, high-performance, and user-centric web products with obsessive attention to clean code and design details.",
  bio: "Saya adalah web developer asal Indonesia dengan pengalaman 3+ tahun dalam merancang dan mengembangkan aplikasi web dari konsep awal hingga siap produksi. Fokus saya adalah menghadirkan antarmuka pengguna yang intuitif, arsitektur frontend yang terukur, dan integrasi backend yang handal.",
  bioEn: "I am an Indonesia-based web developer with 3+ years of experience designing and building web applications from initial conception to production deployment. My focus is on intuitive interfaces, scalable frontend architecture, and dependable backend integrations.",
  email: "aryaapriawann@gmail.com",
  phone: "+62 812-3456-7890",
  location: "Indonesia",
  status: "Tersedia untuk Freelance & Full-time",
  statusEn: "Available for Freelance & Full-time Roles",
  socials: {
    github: "https://github.com/aryaapriawan",
    linkedin: "https://linkedin.com/in/aryaapriawan",
    whatsapp: "https://wa.me/6281234567890?text=Halo%20Arya,%20saya%20tertarik%20bekerja%20sama%20dengan%20Anda",
  },
  stats: [
    { value: "3+", label: "Tahun Pengalaman", labelEn: "Years Experience" },
    { value: "25+", label: "Proyek Selesai", labelEn: "Completed Projects" },
    { value: "100%", label: "Kepuasan Klien", labelEn: "Client Satisfaction" },
    { value: "< 1s", label: "Rata-rata Load Time", labelEn: "Avg Load Time" },
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    titleEn: "Frontend Development",
    description: "Pengembangan antarmuka responsif, modern, dan interaktif dengan standar web mutakhir.",
    descriptionEn: "Building responsive, modern, and interactive user interfaces using modern web standards.",
    skills: [
      { name: "React 19 & Next.js", level: "Mahir", iconName: "Code", experienceYears: "3 Tahun" },
      { name: "TypeScript", level: "Mahir", iconName: "FileCode", experienceYears: "2.5 Tahun" },
      { name: "Tailwind CSS", level: "Ahli", iconName: "Palette", experienceYears: "3 Tahun" },
      { name: "State Management", level: "Mahir", iconName: "Layers", experienceYears: "3 Tahun" },
      { name: "HTML5 & Semantic SEO", level: "Ahli", iconName: "Globe", experienceYears: "4 Tahun" },
      { name: "Responsive & Mobile-First", level: "Ahli", iconName: "Smartphone", experienceYears: "3 Tahun" },
    ]
  },
  {
    title: "Backend & Database",
    titleEn: "Backend & Database",
    description: "Arsitektur server terstruktur, endpoint REST API aman, dan pengelolaan basis data.",
    descriptionEn: "Structured server architecture, secure RESTful APIs, and database management.",
    skills: [
      { name: "Node.js & Express", level: "Mahir", iconName: "Server", experienceYears: "3 Tahun" },
      { name: "RESTful API Design", level: "Mahir", iconName: "Network", experienceYears: "3 Tahun" },
      { name: "PostgreSQL & Prisma", level: "Menengah", iconName: "Database", experienceYears: "2 Tahun" },
      { name: "Authentication (JWT & OAuth)", level: "Mahir", iconName: "ShieldCheck", experienceYears: "2.5 Tahun" },
      { name: "MongoDB & Mongoose", level: "Menengah", iconName: "HardDrive", experienceYears: "2 Tahun" },
      { name: "Serverless & Cloud Functions", level: "Menengah", iconName: "Cloud", experienceYears: "1.5 Tahun" },
    ]
  },
  {
    title: "Alat & Alur Kerja",
    titleEn: "Tools & Workflow",
    description: "Tooling produktif untuk kolaborasi, version control, dan build pipeline cepat.",
    descriptionEn: "Productive tooling for collaboration, version control, and rapid build pipelines.",
    skills: [
      { name: "Git & GitHub Workflow", level: "Ahli", iconName: "GitBranch", experienceYears: "3.5 Tahun" },
      { name: "Vite & Modern Bundlers", level: "Mahir", iconName: "Zap", experienceYears: "2.5 Tahun" },
      { name: "Figma to Code", level: "Mahir", iconName: "Layout", experienceYears: "3 Tahun" },
      { name: "Docker Basics", level: "Dasar", iconName: "Box", experienceYears: "1 Tahun" },
      { name: "Deployment (Vercel, Cloud Run)", level: "Mahir", iconName: "Rocket", experienceYears: "2.5 Tahun" },
      { name: "Performance Optimization", level: "Mahir", iconName: "Cpu", experienceYears: "2.5 Tahun" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "tokokreatif",
    title: "TokoKreatif E-Commerce Platform",
    category: "E-Commerce",
    summary: "Platform toko online terintegrasi dengan katalog produk dinamis, keranjang belanja instan, dan alur checkout ringkas.",
    summaryEn: "Integrated online shop platform featuring dynamic product catalogs, instant cart, and streamlined checkout flows.",
    description: "TokoKreatif dibangun untuk memfasilitasi UMKM lokal dalam menjual produk secara digital tanpa hambatan. Dilengkapi filter multi-kategori, sistem pencarian instan, integrasi payment gateway lokal, dan dasbor pesanan yang responsif pada semua ukuran layar.",
    descriptionEn: "TokoKreatif is engineered to empower local businesses to sell digital & physical goods without friction. Features multi-category filters, instant client search, local payment gateway integrations, and an order dashboard optimized for all viewports.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    metrics: "45% Peningkatan Kecepatan Checkout",
    metricsEn: "45% Faster Checkout Speed",
    features: [
      "Katalog produk dengan filter kategori real-time",
      "Keranjang belanja tanpa reload halaman (persistent state)",
      "Desain responsif mobile-first untuk pengalaman belanja cepat",
      "Dasbor manajemen inventaris & riwayat transaksi"
    ],
    featuresEn: [
      "Real-time category-filtered product catalog",
      "Persistent state client-side cart experience",
      "Mobile-first responsive UX for fast purchasing",
      "Inventory management & transaction history dashboard"
    ],
    accentGradient: "from-blue-600/30 to-indigo-600/30",
    accentColor: "#3b82f6"
  },
  {
    id: "kaskita",
    title: "KasKita - Financial Tracker",
    category: "Web App",
    summary: "Aplikasi pelacak pengeluaran dan arus kas pribadi dengan grafik visualisasi cerdas dan estimasi tabungan.",
    summaryEn: "Personal cashflow and budget tracker application with smart visual analytics and monthly savings projections.",
    description: "KasKita membantu pengguna mencatat pemasukan dan pengeluaran harian dengan cepat. Dilengkapi pengelompokan kategori otomatis, grafik komparasi bulanan, dan ekspor data dalam format spreadsheet untuk transparansi finansial.",
    descriptionEn: "KasKita enables users to effortlessly log daily income and expenses. Comes with automated category breakdown, monthly comparative charts, and spreadsheet exports for personal financial clarity.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "LocalStorage"],
    metrics: "500+ Pengguna Aktif Bulanan",
    metricsEn: "500+ Monthly Active Users",
    features: [
      "Pencatatan transaksi instan dalam 3 kali klik",
      "Visualisasi grafik interaktif rasio pengeluaran",
      "Mode privasi menyembunyikan nominal saldo saat di tempat umum",
      "Fitur target tabungan dengan indikator persentase"
    ],
    featuresEn: [
      "Quick transaction logging in 3 clicks",
      "Interactive data charts for spending ratio breakdowns",
      "Privacy toggle hiding balance amounts in public",
      "Savings goals module with visual progress metrics"
    ],
    accentGradient: "from-emerald-600/30 to-teal-600/30",
    accentColor: "#10b981"
  },
  {
    id: "ruangbelajar",
    title: "RuangBelajar Mini LMS",
    category: "Web App",
    summary: "Platform kelas daring ringan dengan modul pembelajaran terstruktur, kuis interaktif, dan tracking progres.",
    summaryEn: "Lightweight online learning portal with structured curriculum modules, interactive quizzes, and student progress tracking.",
    description: "Dirancang untuk memberikan pengalaman belajar mandiri tanpa gangguan distraksi. Menyediakan pemutar materi terintegrasi, catatan belajar pribadi, dan sertifikat digital yang dapat diunduh langsung setelah menyelesaikan kursus.",
    descriptionEn: "Engineered to deliver distraction-free self-paced learning. Features integrated lesson media player, personal learning scratchpad, and downloadable digital completion certificates.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST API", "Markdown Parser"],
    metrics: "1,200+ Kuis Diselesaikan",
    metricsEn: "1,200+ Quizzes Completed",
    features: [
      "Navigasi silabus dinamis dengan penanda progres belajar",
      "Kuis interaktif dengan umpan balik jawaban langsung",
      "Pencarian kata kunci dalam ringkasan materi pelajaran",
      "Sertifikat kelulusan digital berbasis canvas"
    ],
    featuresEn: [
      "Dynamic syllabus navigation with visual completion milestones",
      "Interactive quiz with immediate explanation feedback",
      "Fast keyword search across lesson transcripts",
      "Canvas-generated digital certificates"
    ],
    accentGradient: "from-amber-600/30 to-orange-600/30",
    accentColor: "#f59e0b"
  },
  {
    id: "studiovisual",
    title: "StudioVisual Agency Website",
    category: "UI/UX",
    summary: "Website portofolio agensi desain visual dan fotografi dengan galeri masonry, tipografi elegan, dan transisi halus.",
    summaryEn: "Design studio and photography showcase website featuring dynamic masonry grid, editorial typography, and fluid micro-transitions.",
    description: "Sebuah portofolio agensi dengan pendekatan arsitektur visual minimalis. Mengutamakan karya visual melalui framing bersih, zero visual noise, dan kecepatan akses luar biasa di semua perangkat.",
    descriptionEn: "A studio portfolio leveraging minimalist visual architecture. Emphasizes creative work via clean framing, zero visual noise, and stellar loading speed across all viewports.",
    tech: ["React", "Motion", "Tailwind CSS", "Vite"],
    metrics: "99/100 Google Lighthouse Score",
    metricsEn: "99/100 Google Lighthouse Score",
    features: [
      "Galeri grid bento interaktif dengan zoom modal",
      "Micro-animations halus yang ramah performa perangkat",
      "Filter kategori karya (Brand, Photography, Editorial)",
      "Formulir brief kerja cepat dengan estimasi tenggat"
    ],
    featuresEn: [
      "Interactive bento gallery with high-res modal previews",
      "Performant hardware-accelerated micro-transitions",
      "Curated work categories (Brand, Photography, Editorial)",
      "Quick project brief inquiry form with timeline estimation"
    ],
    accentGradient: "from-purple-600/30 to-pink-600/30",
    accentColor: "#a855f7"
  },
  {
    id: "restoorder",
    title: "RestoOrder QR Menu & Table System",
    category: "Mobile",
    summary: "Web aplikasi pemesanan restoran berbasis QR tanpa perlu instalasi aplikasi, memudahkan pelanggan dan kasir.",
    summaryEn: "QR-code dining order web app eliminating native app downloads, streamlining guest ordering and kitchen dispatch.",
    description: "Solusi digitalisasi restoran untuk memangkas waktu tunggu pelanggan saat memesan makanan di tempat. Pelanggan cukup memindai kode QR meja, memilih menu dengan catatan khusus, dan pesanan langsung masuk ke sistem dapur.",
    descriptionEn: "Restaurant digitization tool reducing guest waiting time during dine-in. Customers scan a table QR code, customize items with dietary notes, and tickets dispatch directly to the kitchen.",
    tech: ["React", "Tailwind CSS", "TypeScript", "WebSockets"],
    metrics: "60% Penurunan Waktu Tunggu Pesanan",
    metricsEn: "60% Reduction in Ordering Wait Time",
    features: [
      "Tampilan ramah satu tangan pada layar ponsel",
      "Pilihan variasi menu dan catatan alergi/khusus",
      "Pelacakan status pesanan real-time (Diterima, Dimasak, Diantar)",
      "Rangkuman tagihan terperinci sebelum checkout"
    ],
    featuresEn: [
      "Thumb-friendly one-handed mobile layout",
      "Menu customization and dietary notes support",
      "Real-time kitchen order progress status updates",
      "Itemized receipt calculation prior to order submission"
    ],
    accentGradient: "from-rose-600/30 to-red-600/30",
    accentColor: "#f43f5e"
  },
  {
    id: "devsnippet",
    title: "DevSnippet Code Vault",
    category: "Web App",
    summary: "Aplikasi pencatat dan pengelola snippet kode dengan pencarian kilat, copy instan, dan penandaan tag praktis.",
    summaryEn: "Code snippet manager application with lightning search, instant clipboard copy, and handy tag filtering.",
    description: "Alat produktivitas bagi pengembang perangkat lunak untuk menyimpan potongan kode boilerplate, script utilitas, dan panduan konfigurasi yang sering digunakan ulang.",
    descriptionEn: "Developer productivity tool built to store boilerplate snippets, utility scripts, and frequently referenced configuration guides.",
    tech: ["TypeScript", "React", "Tailwind CSS", "PrismJS"],
    metrics: "< 50ms Waktu Temu Pencarian",
    metricsEn: "< 50ms Search Query Latency",
    features: [
      "Pencarian instan berdasarkan bahasa pemrograman & kata kunci",
      "Tombol satu klik untuk menyalin kode ke clipboard",
      "Dukungan format Markdown untuk dokumentasi penggunaan",
      "Penyimpanan lokal cepat tanpa perlu registrasi rumit"
    ],
    featuresEn: [
      "Instant multi-language syntax and keyword search",
      "One-click copy to clipboard with toast notification",
      "Markdown notes support for snippet context",
      "Fast local-first persistence without cumbersome logins"
    ],
    accentGradient: "from-cyan-600/30 to-blue-600/30",
    accentColor: "#06b6d4"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: "2024 - Sekarang",
    role: "Full-Stack Web Developer (Freelance)",
    roleEn: "Full-Stack Web Developer (Freelance)",
    company: "Independen / Klien Digital",
    location: "Remote, Indonesia",
    description: "Membantu klien dari berbagai sektor (UMKM, agensi kreatif, startup) membangun aplikasi web modern, landing page berkonversi tinggi, dan sistem internal yang andal.",
    descriptionEn: "Partnering with clients across diverse sectors (SMEs, creative agencies, startups) to construct modern web applications, high-converting landing pages, and dependable internal tools.",
    achievements: [
      "Menyelesaikan 15+ proyek web dengan tingkat kepuasan klien 100%",
      "Mengoptimalkan kecepatan muat halaman web rata-rata meningkat 40%",
      "Mengimplementasikan arsitektur modular yang memudahkan pemeliharaan kode"
    ],
    achievementsEn: [
      "Delivered 15+ bespoke web projects with 100% client satisfaction",
      "Boosted average client page load velocity by 40%",
      "Engineered modular codebases simplifying long-term maintenance"
    ]
  },
  {
    period: "2023 - 2024",
    role: "Frontend Developer",
    roleEn: "Frontend Developer",
    company: "Digital Studio Kreasi",
    location: "Jakarta (Hybrid)",
    description: "Bertanggung jawab atas pengembangan antarmuka pengguna berbasis React dan TypeScript, berkolaborasi erat dengan UI/UX designer dan tim backend.",
    descriptionEn: "Responsible for developing user interfaces with React and TypeScript, collaborating closely with UI/UX designers and backend engineers.",
    achievements: [
      "Membangun reusable component library yang mempercepat waktu delivery tim 30%",
      "Mengintegrasikan lebih dari 25 RESTful endpoints secara aman dan terstruktur",
      "Menerapkan praktik Web Accessibility (WCAG 2.1 AA) pada produk klien"
    ],
    achievementsEn: [
      "Crafted a reusable component system cutting team delivery cycles by 30%",
      "Integrated 25+ RESTful API endpoints securely and reliably",
      "Enforced WCAG 2.1 AA accessibility standards across all deliverable apps"
    ]
  },
  {
    period: "2022 - 2023",
    role: "Junior Web Developer",
    roleEn: "Junior Web Developer",
    company: "Tech Kreasi Nusantara",
    location: "Bandung, Indonesia",
    description: "Mengembangkan landing page responsif, melakukan bug fixing, dan memastikan kompatibilitas antarmuka di berbagai browser dan resolusi layar.",
    descriptionEn: "Built responsive landing pages, resolved frontend bugs, and maintained cross-browser rendering consistency.",
    achievements: [
      "Mengonversi lebih dari 30 desain Figma menjadi kode web yang pixel-perfect",
      "Membantu migrasi codebase lama ke standar JavaScript modern ES6+ dan Tailwind CSS",
      "Aktif berkontribusi dalam code review mingguan bersama tim pengembang"
    ],
    achievementsEn: [
      "Converted 30+ Figma artboards into pixel-perfect semantic web pages",
      "Assisted legacy code migration to modern ES6+ and Tailwind CSS",
      "Participated actively in weekly team code reviews and retrospectives"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Budi Santoso",
    role: "Founder & CEO",
    company: "Media Solusi Digital",
    quote: "Arya sangat profesional dan cepat memahami kebutuhan bisnis kami. Website e-commerce yang ia bangun tidak hanya tampak elegan, tapi juga sangat kencang saat diakses dari HP.",
    quoteEn: "Arya is remarkably professional and grasped our business requirements immediately. The e-commerce site he crafted is both visually sleek and blazingly fast on smartphones.",
    initials: "BS"
  },
  {
    name: "Sarah Paramitha",
    role: "Product Lead",
    company: "Studio Kreasi Nusantara",
    quote: "Komunikasi dengan Arya selalu menyenangkan. Kualitas kode yang ia tulis bersih, terdokumentasi dengan baik, dan hasilnya selalu melebihi ekspektasi desain awal kami.",
    quoteEn: "Collaborating with Arya was an absolute pleasure. His code is cleanly structured, thoroughly readable, and the end product consistently outperformed our design expectations.",
    initials: "SP"
  },
  {
    name: "Reza Mahendra",
    role: "Head of Technology",
    company: "Inovasi Finansial Mandiri",
    quote: "Keahlian Arya dalam React dan TypeScript sangat terasa pada performa aplikasi kami. Sangat direkomendasikan untuk siapa saja yang membutuhkan developer berdedikasi tinggi.",
    quoteEn: "Arya's mastery in React and TypeScript is vividly demonstrated in our app's performance. Highly recommended for any team seeking a dedicated and thoughtful engineer.",
    initials: "RM"
  }
];
