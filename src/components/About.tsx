import React from 'react';
import { Code2, Zap, Users, CheckCircle2, Award } from 'lucide-react';
import { PROFILE } from '../data/profileData';

interface AboutProps {
  lang: 'id' | 'en';
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const principles = [
    {
      icon: Code2,
      title: lang === 'id' ? "Arsitektur Kode Bersih" : "Clean Code Architecture",
      desc: lang === 'id' 
        ? "Menulis kode yang terstruktur rapi, terdokumentasi, dan mudah dipelihara dalam jangka panjang dengan TypeScript."
        : "Authoring modular, type-safe, and maintainable codebases designed for longevity and frictionless scalability."
    },
    {
      icon: Zap,
      title: lang === 'id' ? "Performa & Aksesibilitas" : "Performance & Accessibility",
      desc: lang === 'id'
        ? "Optimasi kecepatan rendering, ukuran bundle minimalis, dan standar aksesibilitas WCAG agar dapat diakses semua kalangan."
        : "Optimizing render cycles, lightweight bundle footprints, and adhering to WCAG accessibility compliance."
    },
    {
      icon: Users,
      title: lang === 'id' ? "Komunikasi Terbuka" : "Transparent Collaboration",
      desc: lang === 'id'
        ? "Pemberian update berkala secara transparan, diskusi solutif, dan komitmen penuh terhadap tenggat waktu proyek."
        : "Proactive communication, solution-oriented reviews, and steadfast commitment to project milestones."
    }
  ];

  return (
    <section id="tentang" className="py-20 md:py-28 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            {lang === 'id' ? "Tentang Pengembang" : "About the Developer"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'id' ? "Dedikasi Menghadirkan Kualitas Terbaik" : "Dedicated to Digital Craftsmanship"}
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left: Bio narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              {lang === 'id' ? PROFILE.bio : PROFILE.bioEn}
            </p>
            <p className="text-slate-400 text-base">
              {lang === 'id' 
                ? "Perjalanan saya dimulai dari ketertarikan mendalam memecahkan masalah nyata melalui kode. Saat ini, saya fokus membangun ekosistem digital mulai dari toko online modern, aplikasi produktivitas tim, hingga landing page interaktif dengan performa optimal."
                : "My journey began with a passion for solving real-world challenges through elegant logic. Today, I build web solutions spanning high-converting e-commerce storefronts, SaaS productivity utilities, and high-impact design experiences."}
            </p>
            <p className="text-slate-400 text-base">
              {lang === 'id'
                ? "Saya percaya bahwa website yang hebat tidak hanya terlihat indah secara visual, namun juga harus memuat instan di jaringan lambat, responsif di segala ukuran layar, dan memberikan nilai konversi nyata bagi pemiliknya."
                : "I believe exceptional websites must not only look aesthetically compelling, but also load instantly on cellular connections, adapt seamlessly to any device screen, and drive measurable business value."}
            </p>

            {/* Key Fact Points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{lang === 'id' ? "Pendidikan: Teknik Informatika" : "Education: Computer Science"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{lang === 'id' ? "Bahasa: Indonesia & English" : "Languages: Indonesian & English"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{lang === 'id' ? "Zona Waktu: WIB (GMT+7)" : "Timezone: UTC+7 (Jakarta)"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{lang === 'id' ? "Komitmen: Tepat Waktu" : "Commitment: On-Time Delivery"}</span>
              </div>
            </div>
          </div>

          {/* Right: Personal highlight box */}
          <div className="lg:col-span-5 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              <span>{lang === 'id' ? "Nilai & Fokus Kerja" : "Core Values & Focus"}</span>
            </h3>

            <div className="space-y-4">
              {principles.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-indigo-950/50 text-indigo-400 border border-indigo-800/40">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">{p.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-1">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
