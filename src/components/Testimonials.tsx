import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/profileData';

interface TestimonialsProps {
  lang: 'id' | 'en';
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  return (
    <section className="py-20 md:py-28 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            {lang === 'id' ? "Umpan Balik Klien" : "Client Feedback"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'id' ? "Apa Kata Mereka Tentang Kolaborasi Ini" : "Endorsements & Recommendations"}
          </h2>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700/80 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-indigo-500/40 mb-4" />
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic mb-6">
                  "{lang === 'id' ? t.quote : t.quoteEn}"
                </p>
              </div>

              {/* Author Identity */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-950 border border-indigo-800 text-indigo-300 font-bold flex items-center justify-center text-xs shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {t.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {t.role} · <span className="text-slate-500">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
