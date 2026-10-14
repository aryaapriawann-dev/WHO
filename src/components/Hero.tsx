import React from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, MessageSquare, Terminal } from 'lucide-react';
import { PROFILE } from '../data/profileData';

interface HeroProps {
  lang: 'id' | 'en';
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenResume, onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-900">
      {/* Subtle ambient background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Metadata Kicker (Anti-slop: NO PILL BADGE) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-4">
              <span>{lang === 'id' ? "Web Developer Profesional" : "Professional Web Developer"}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{PROFILE.location}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400">{lang === 'id' ? "Terbuka untuk Proyek" : "Available for Projects"}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 max-w-2xl">
              {lang === 'id' ? (
                <>
                  Membangun aplikasi web <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-300">cepat</span>, elegan, & terukur.
                </>
              ) : (
                <>
                  Crafting web products that are <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-300">fast</span>, elegant, & scalable.
                </>
              )}
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              {lang === 'id' ? PROFILE.tagline : PROFILE.taglineEn}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#proyek"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-600/25 transition-all hover:translate-y-[-1px] whitespace-nowrap"
              >
                <span>{lang === 'id' ? "Lihat Portofolio" : "Explore Portfolio"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all hover:border-slate-700 whitespace-nowrap cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>{lang === 'id' ? "Lihat Resume / CV" : "View Resume / CV"}</span>
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{lang === 'id' ? "Kirim Pesan" : "Direct Message"}</span>
              </button>
            </div>

            {/* Quick social links */}
            <div className="flex items-center gap-6 pt-6 border-t border-slate-900 text-xs text-slate-400">
              <span className="font-medium text-slate-400">{lang === 'id' ? "Terhubung langsung:" : "Connect:"}</span>
              <div className="flex items-center gap-4">
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-4 h-4" />
                  <span className="underline-offset-4 hover:underline">GitHub</span>
                </a>
                <span className="text-slate-700">/</span>
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="underline-offset-4 hover:underline">LinkedIn</span>
                </a>
                <span className="text-slate-700">/</span>
                <a
                  href={PROFILE.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="underline-offset-4 hover:underline">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Container (High Aesthetic Stylized Developer Showcase) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>arya-profile.tsx</span>
                </div>
              </div>

              {/* Profile Card Center Content */}
              <div className="flex flex-col items-center text-center py-4">
                {/* Stylized Avatar Frame */}
                <div className="relative mb-5">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-indigo-600 via-sky-600 to-indigo-800 p-0.5 shadow-xl shadow-indigo-600/20">
                    <div className="w-full h-full rounded-[14px] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Geometric Developer Monogram */}
                      <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-indigo-400 tracking-wider">
                        AA
                      </div>
                      <span className="text-[10px] tracking-widest text-indigo-400 font-mono mt-1">
                        DEV / CREATOR
                      </span>

                      {/* Subtle Grid Pattern Overlay */}
                      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:8px_8px]" />
                    </div>
                  </div>
                </div>

                {/* Identity */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {PROFILE.name}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-400 font-medium mb-4">
                  {PROFILE.role}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-xs">
                  {lang === 'id' 
                    ? "Berfokus pada ekosistem React, TypeScript, arsitektur frontend modular, dan pengalaman antarmuka yang presisi."
                    : "Focused on React ecosystem, TypeScript, scalable component architecture, and precise visual craftsmanship."}
                </p>

                {/* Tech Chips (Unboxed subtle styling) */}
                <div className="w-full pt-4 border-t border-slate-800/80 flex flex-wrap justify-center gap-2 text-[11px] text-slate-300">
                  <span className="px-2.5 py-1 bg-slate-800/70 rounded-md border border-slate-700/60 font-mono">React 19</span>
                  <span className="px-2.5 py-1 bg-slate-800/70 rounded-md border border-slate-700/60 font-mono">TypeScript</span>
                  <span className="px-2.5 py-1 bg-slate-800/70 rounded-md border border-slate-700/60 font-mono">Tailwind CSS</span>
                  <span className="px-2.5 py-1 bg-slate-800/70 rounded-md border border-slate-700/60 font-mono">Node.js</span>
                  <span className="px-2.5 py-1 bg-slate-800/70 rounded-md border border-slate-700/60 font-mono">PostgreSQL</span>
                </div>
              </div>

              {/* Status footer inside visual container */}
              <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-slate-300">{lang === 'id' ? "Aktif & Siap Kolaborasi" : "Ready for Projects"}</span>
                </span>
                <span className="font-mono text-slate-500">v2.4</span>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column Strip strictly placed BELOW hero split */}
        <div className="mt-16 pt-8 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {PROFILE.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {lang === 'id' ? stat.label : stat.labelEn}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
