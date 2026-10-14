/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('kontak');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* About Section */}
        <About lang={lang} />

        {/* Featured Projects Portfolio */}
        <Projects lang={lang} />

        {/* Technical Skills & Capabilities */}
        <Skills lang={lang} />

        {/* Experience & Career Milestones */}
        <Experience lang={lang} />

        {/* Testimonials */}
        <Testimonials lang={lang} />

        {/* Contact Form & Direct Channels */}
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Interactive Resume / CV Lightbox Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
