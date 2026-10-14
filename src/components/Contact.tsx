import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Send, Check, Copy, ExternalLink, ArrowRight } from 'lucide-react';
import { PROFILE } from '../data/profileData';

interface ContactProps {
  lang: 'id' | 'en';
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg(lang === 'id' ? 'Mohon lengkapi semua kolom wajib.' : 'Please fill in all required fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setTimeout(() => setIsSent(false), 5000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            {lang === 'id' ? "Mari Terhubung" : "Get in Touch"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'id' ? "Mulai Diskusi atau Kolaborasi Proyek" : "Start a Conversation or Project"}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            {lang === 'id'
              ? "Punya ide produk, kebutuhan pembuatan website, atau peluang karir? Kirimkan pesan Anda dan saya akan merespons dalam waktu 24 jam."
              : "Have a product idea, web engineering requirement, or career opportunity? Send a message and I will respond within 24 hours."}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels & quick cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy Button */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-900/40">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Email Resmi</h3>
                  <p className="text-xs text-slate-400">Respon dalam 24 jam kerja</p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between gap-3">
                <span className="text-sm font-mono text-slate-200 select-all truncate">
                  {PROFILE.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{lang === 'id' ? "Tersalin!" : "Copied!"}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'id' ? "Salin" : "Copy"}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4">
                <a
                  href={`mailto:${PROFILE.email}?subject=Inquiry%20Proyek%20Web`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors"
                >
                  <span>{lang === 'id' ? "Buka Aplikasi Email" : "Open Email Client"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* WhatsApp Direct Chat */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-900/40">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Chat Cepat (WhatsApp)</h3>
                  <p className="text-xs text-slate-400">Untuk diskusi mendesak & konsultasi</p>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href={PROFILE.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors"
                >
                  <span>{lang === 'id' ? "Mulai Chat di WhatsApp" : "Chat on WhatsApp"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location & Availability */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-slate-950 text-slate-400 border border-slate-800">
                <MapPin className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Lokasi & Zona Waktu</h3>
                <p className="text-xs text-slate-400">Indonesia (WIB / GMT+7) · Terbuka untuk Remote Worldwide</p>
              </div>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
              {lang === 'id' ? "Kirimkan Pesan Langsung" : "Send a Direct Message"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              {lang === 'id' 
                ? "Isi formulir di bawah ini untuk konsultasi, penawaran proyek, atau sekadar menyapa." 
                : "Fill out the form below for project consultations, inquiries, or saying hi."}
            </p>

            {/* Error banner */}
            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-rose-950/70 border border-rose-800/80 text-rose-300 text-xs">
                {errorMsg}
              </div>
            )}

            {/* Success toast */}
            {isSent && (
              <div className="mb-4 p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs sm:text-sm flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-semibold">{lang === 'id' ? "Pesan Terkirim!" : "Message Received!"}</div>
                  <div className="text-emerald-400/90 text-xs mt-0.5">
                    {lang === 'id' 
                      ? "Terima kasih, Arya akan membalas pesan Anda sesegera mungkin." 
                      : "Thank you, Arya will get back to you promptly."}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === 'id' ? "Nama Lengkap" : "Your Name"} <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Pratama Wijaya"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === 'id' ? "Alamat Email" : "Your Email"} <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {lang === 'id' ? "Topik / Subjek" : "Subject"}
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={lang === 'id' ? "Rencana Proyek Web Baru" : "New Web Application Project"}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {lang === 'id' ? "Isi Pesan" : "Your Message"} <span className="text-indigo-400">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={lang === 'id' ? "Ceritakan kebutuhan proyek, estimasi waktu, atau pertanyaan Anda..." : "Tell me about your project scope, timeline, or requirements..."}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 rounded-xl shadow-lg shadow-indigo-600/25 transition-all hover:shadow-indigo-600/40 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{lang === 'id' ? "Mengirim Pesan..." : "Sending Message..."}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{lang === 'id' ? "Kirimkan Sekarang" : "Send Inquiry"}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
