import React from 'react';
import { 
  Code, FileCode, Palette, Layers, Globe, Smartphone, 
  Server, Network, Database, ShieldCheck, HardDrive, Cloud, 
  GitBranch, Zap, Layout, Box, Rocket, Cpu 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/profileData';

interface SkillsProps {
  lang: 'id' | 'en';
}

const iconMap: Record<string, React.ElementType> = {
  Code, FileCode, Palette, Layers, Globe, Smartphone,
  Server, Network, Database, ShieldCheck, HardDrive, Cloud,
  GitBranch, Zap, Layout, Box, Rocket, Cpu
};

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  return (
    <section id="keahlian" className="py-20 md:py-28 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            {lang === 'id' ? "Kemampuan Teknis" : "Technical Capabilities"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'id' ? "Teknologi & Alat Pengembangan" : "Tech Stack & Tooling"}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            {lang === 'id' 
              ? "Kombinasi teknologi modern yang saya gunakan sehari-hari untuk merancang arsitektur web yang kokoh, cepat, dan teruji."
              : "Modern technologies and industry-standard workflows I leverage daily to engineer fast, resilient web applications."}
          </p>
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                  {lang === 'id' ? cat.title : cat.titleEn}
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {lang === 'id' ? cat.description : cat.descriptionEn}
                </p>

                {/* Skill Items List */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.iconName] || Code;
                    return (
                      <div
                        key={sIdx}
                        className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl flex items-center justify-between gap-3 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-indigo-950/40 text-indigo-400 border border-indigo-900/30">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">
                              {skill.name}
                            </div>
                            <div className="text-[11px] text-slate-500 font-mono">
                              {skill.experienceYears}
                            </div>
                          </div>
                        </div>

                        {/* Level indicator text without pill box */}
                        <span className="text-xs font-medium text-indigo-400/90 font-mono">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] text-slate-500 flex items-center justify-between">
                <span>{lang === 'id' ? "Standar Industri" : "Industry Standard"}</span>
                <span className="text-slate-400 font-mono">6 Item</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
