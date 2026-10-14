import React from 'react';
import { ArrowUp, Github, Linkedin, MessageSquare, Mail } from 'lucide-react';
import { PROFILE } from '../data/profileData';

interface FooterProps {
  lang: 'id' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-base font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span>{PROFILE.name}</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {lang === 'id' ? "Dibuat dengan React, TypeScript & Tailwind CSS" : "Built with React, TypeScript & Tailwind CSS"}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-6 text-xs font-medium">
          <a href="#tentang" className="hover:text-white transition-colors">{lang === 'id' ? "Tentang" : "About"}</a>
          <a href="#proyek" className="hover:text-white transition-colors">{lang === 'id' ? "Portofolio" : "Portfolio"}</a>
          <a href="#keahlian" className="hover:text-white transition-colors">{lang === 'id' ? "Keahlian" : "Skills"}</a>
          <a href="#kontak" className="hover:text-white transition-colors">{lang === 'id' ? "Kontak" : "Contact"}</a>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 pr-4 border-r border-slate-800">
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
            title={lang === 'id' ? "Kembali ke Atas" : "Back to Top"}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-slate-900/80 text-center text-[11px] text-slate-600">
        © {new Date().getFullYear()} {PROFILE.name}. {lang === 'id' ? "Hak cipta dilindungi." : "All rights reserved."}
      </div>
    </footer>
  );
};
