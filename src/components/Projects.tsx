import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { PROJECTS, Project } from '../data/profileData';
import { ProjectMockup } from './ProjectMockup';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  lang: 'id' | 'en';
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'Semua', label: lang === 'id' ? 'Semua Proyek' : 'All Projects' },
    { id: 'Web App', label: 'Web App' },
    { id: 'E-Commerce', label: 'E-Commerce' },
    { id: 'UI/UX', label: 'UI/UX & Design' },
    { id: 'Mobile', label: 'Mobile Web' },
  ];

  const filteredProjects = selectedCategory === 'Semua'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="proyek" className="py-20 md:py-28 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
              {lang === 'id' ? "Karya & Portofolio" : "Featured Projects"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {lang === 'id' ? "Proyek Terpilih & Studi Kasus" : "Selected Works & Case Studies"}
            </h2>
          </div>

          {/* Interactive Filter Controls (Segmented bar complying with frontend-design constitution) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/20 cursor-pointer"
            >
              <div>
                {/* Mockup Preview Area */}
                <ProjectMockup id={project.id} title={project.title} />

                {/* Card Content Body */}
                <div className="p-6">
                  {/* Clean unboxed metadata separator (Zero-pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
                    <span className="font-semibold text-indigo-400">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>2024</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400/90 font-mono text-[11px]">{lang === 'id' ? project.metrics : project.metricsEn}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors mb-2 tracking-tight">
                    {project.title}
                  </h3>

                  {/* Concise summary */}
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {lang === 'id' ? project.summary : project.summaryEn}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-400 font-mono">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-slate-500 self-center text-[10px]">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 py-3.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                <span>{lang === 'id' ? "Lihat Studi Kasus" : "View Details"}</span>
                <ArrowUpRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        lang={lang}
      />
    </section>
  );
};
