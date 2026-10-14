import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Check } from 'lucide-react';
import { PROFILE, EXPERIENCES, SKILL_CATEGORIES } from '../data/profileData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'id' | 'en';
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-10 my-8 flex flex-col max-h-[92vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Control Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-950/80 shrink-0 print:hidden">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="font-semibold text-indigo-400">Curriculum Vitae</span>
            <span aria-hidden="true">·</span>
            <span>{PROFILE.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-400" />
              <span>{lang === 'id' ? "Cetak / Simpan PDF" : "Print / Save PDF"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Tutup resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Content (Clean printable view) */}
        <div className="p-8 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-200">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {PROFILE.name}
              </h1>
              <p className="text-base text-indigo-400 font-semibold mt-1">
                {PROFILE.role}
              </p>
              <p className="text-xs text-slate-400 mt-2 max-w-xl leading-relaxed">
                {lang === 'id' ? PROFILE.bio : PROFILE.bioEn}
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-slate-400 shrink-0">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{PROFILE.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{PROFILE.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>github.com/aryaapriawan</span>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4 border-b border-slate-800 pb-2">
              {lang === 'id' ? "Pengalaman Kerja" : "Work Experience"}
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="text-base font-bold text-white">{lang === 'id' ? exp.role : exp.roleEn}</span>
                      <span className="text-slate-400 text-sm font-medium"> — {exp.company}</span>
                    </div>
                    <span className="text-xs text-indigo-400 font-mono">{exp.period}</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === 'id' ? exp.description : exp.descriptionEn}
                  </p>

                  <ul className="space-y-1 pl-4 list-disc text-xs text-slate-300">
                    {(lang === 'id' ? exp.achievements : exp.achievementsEn).map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4 border-b border-slate-800 pb-2">
              {lang === 'id' ? "Keahlian & Kemampuan Teknis" : "Technical Skills"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-bold text-white mb-2">{lang === 'id' ? cat.title : cat.titleEn}</h3>
                  <div className="space-y-1 text-xs text-slate-400">
                    {cat.skills.map((s, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between">
                        <span>{s.name}</span>
                        <span className="font-mono text-slate-500 text-[11px]">{s.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4 border-b border-slate-800 pb-2">
              {lang === 'id' ? "Pendidikan" : "Education"}
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
              <div>
                <span className="font-bold text-white">{lang === 'id' ? "Sarjana Teknik Informatika (S.Kom)" : "Bachelor of Computer Science"}</span>
                <span className="text-slate-400"> — Universitas Teknologi Indonesia</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">2019 - 2023 · IPK 3.82</span>
            </div>
          </div>

        </div>

        {/* Modal Bottom Controls */}
        <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-end gap-3 shrink-0 print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            {lang === 'id' ? "Tutup" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
};
