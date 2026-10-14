import React, { useState } from 'react';
import { X, ExternalLink, Github, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Project } from '../data/profileData';
import { ProjectMockup } from './ProjectMockup';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: 'id' | 'en';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [demoActionActive, setDemoActionActive] = useState(false);

  if (!project) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + '#' + project.id);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSimulateAction = () => {
    setDemoActionActive(true);
    setTimeout(() => setDemoActionActive(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-indigo-400">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.title}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Mockup Preview */}
          <div className="rounded-xl overflow-hidden border border-slate-800 shadow-inner">
            <ProjectMockup id={project.id} title={project.title} />
          </div>

          {/* Title & Metric */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {lang === 'id' ? project.summary : project.summaryEn}
              </p>
            </div>

            <div className="px-3 py-1.5 bg-indigo-950/60 border border-indigo-800/50 rounded-lg text-indigo-300 text-xs font-semibold whitespace-nowrap self-start sm:self-auto">
              {lang === 'id' ? project.metrics : project.metricsEn}
            </div>
          </div>

          {/* Deep Description */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
              {lang === 'id' ? "Ikhtisar Proyek" : "Project Overview"}
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {lang === 'id' ? project.description : project.descriptionEn}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
              {lang === 'id' ? "Fitur Utama & Arsitektur" : "Core Features & Architecture"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(lang === 'id' ? project.features : project.featuresEn).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack List */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
              {lang === 'id' ? "Teknologi yang Digunakan" : "Technologies Utilized"}
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-950 text-slate-300 border border-slate-800 rounded-md font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Live Simulation Action */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>{lang === 'id' ? "Simulasi Aksi Cepat" : "Quick Action Simulator"}</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === 'id' 
                  ? "Uji alur interaksi dan kecepatan respons modul ini." 
                  : "Test interaction flow and responsive behavior for this module."}
              </p>
            </div>

            <button
              onClick={handleSimulateAction}
              disabled={demoActionActive}
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:bg-emerald-600 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            >
              {demoActionActive ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? "Simulasi Berhasil!" : "Simulation Passed!"}</span>
                </>
              ) : (
                <>
                  <span>{lang === 'id' ? "Jalankan Simulasi" : "Run Simulation"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={handleCopyLink}
            className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>{copiedLink ? (lang === 'id' ? "Tautan Disalin!" : "Link Copied!") : (lang === 'id' ? "Salin ID Proyek" : "Copy Project ID")}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'id' ? "Tutup" : "Close"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
