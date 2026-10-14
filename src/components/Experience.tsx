import React from 'react';
import { Briefcase, Calendar, MapPin, Check } from 'lucide-react';
import { EXPERIENCES } from '../data/profileData';

interface ExperienceProps {
  lang: 'id' | 'en';
}

export const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  return (
    <section id="pengalaman" className="py-20 md:py-28 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            {lang === 'id' ? "Rekam Jejak" : "Career Path"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'id' ? "Pengalaman & Riwayat Kerja" : "Work Experience & Track Record"}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            {lang === 'id'
              ? "Perjalanan profesional dalam membangun antarmuka web, bekerja dengan tim lintas disiplin, dan memberikan solusi perangkat lunak bernilai tinggi."
              : "Professional milestones developing web interfaces, collaborating with cross-functional teams, and shipping production-grade software."}
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-800 ml-3 md:ml-4 pl-6 md:pl-8 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors" />

              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-colors">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-indigo-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  {lang === 'id' ? exp.role : exp.roleEn}
                </h3>
                <div className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-slate-500" />
                  <span>{exp.company}</span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                  {lang === 'id' ? exp.description : exp.descriptionEn}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    {lang === 'id' ? "Kontribusi Utama:" : "Key Contributions:"}
                  </div>
                  {(lang === 'id' ? exp.achievements : exp.achievementsEn).map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
