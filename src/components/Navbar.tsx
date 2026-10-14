import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { PROFILE } from '../data/profileData';

interface NavbarProps {
  lang: 'id' | 'en';
  setLang: (lang: 'id' | 'en') => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#tentang", label: lang === 'id' ? "Tentang" : "About" },
    { href: "#proyek", label: lang === 'id' ? "Portofolio" : "Portfolio" },
    { href: "#keahlian", label: lang === 'id' ? "Keahlian" : "Skills" },
    { href: "#pengalaman", label: lang === 'id' ? "Pengalaman" : "Experience" },
    { href: "#kontak", label: lang === 'id' ? "Kontak" : "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block"></span>
          <span>{PROFILE.name}</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + Language toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language selector toggle button */}
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors hover:border-slate-700 whitespace-nowrap"
            title={lang === 'id' ? "Ganti ke Bahasa Inggris" : "Switch to Indonesian"}
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-semibold uppercase">{lang}</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{lang === 'id' ? "Hubungi Saya" : "Get in Touch"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
              >
                <span>{lang === 'id' ? "Hubungi Saya Sekarang" : "Get in Touch Now"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
