import React from 'react';
import { ShoppingBag, TrendingUp, BookOpen, Layers, Utensils, Terminal, ExternalLink } from 'lucide-react';

interface ProjectMockupProps {
  id: string;
  title: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ id, title }) => {
  switch (id) {
    case 'tokokreatif':
      return (
        <div className="w-full h-48 sm:h-52 bg-slate-900/90 rounded-t-xl p-4 flex flex-col justify-between overflow-hidden relative border-b border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-medium text-slate-300">TokoKreatif Storefront</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">Live Demo</span>
          </div>
          {/* Mock Product Grid */}
          <div className="grid grid-cols-3 gap-2.5 my-2">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between">
              <div className="w-full h-12 bg-blue-950/40 rounded border border-blue-900/30 flex items-center justify-center text-blue-400 text-[10px]">
                Product A
              </div>
              <div className="mt-2 text-[11px] font-bold text-white">Rp 249.000</div>
              <div className="text-[9px] text-slate-500">Stok: 14 pcs</div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between">
              <div className="w-full h-12 bg-indigo-950/40 rounded border border-indigo-900/30 flex items-center justify-center text-indigo-400 text-[10px]">
                Product B
              </div>
              <div className="mt-2 text-[11px] font-bold text-white">Rp 189.000</div>
              <div className="text-[9px] text-slate-500">Stok: 28 pcs</div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between">
              <div className="w-full h-12 bg-sky-950/40 rounded border border-sky-900/30 flex items-center justify-center text-sky-400 text-[10px]">
                Product C
              </div>
              <div className="mt-2 text-[11px] font-bold text-white">Rp 320.000</div>
              <div className="text-[9px] text-slate-500">Stok: 7 pcs</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Keranjang: 2 Item</span>
            <span className="font-semibold text-blue-400">Total: Rp 438.000</span>
          </div>
        </div>
      );

    case 'kaskita':
      return (
        <div className="w-full h-48 sm:h-52 bg-slate-900/90 rounded-t-xl p-4 flex flex-col justify-between overflow-hidden relative border-b border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium text-slate-300">KasKita Dashboard</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400">+18.4% Bulan Ini</span>
          </div>
          {/* Simulated chart bars */}
          <div className="flex items-end justify-between h-20 px-4 py-2 bg-slate-950 rounded-lg border border-slate-800 my-1">
            <div className="flex flex-col items-center gap-1 w-6">
              <div className="w-full bg-emerald-500/70 rounded-t h-10" />
              <span className="text-[9px] text-slate-500">Jan</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-6">
              <div className="w-full bg-emerald-500/80 rounded-t h-12" />
              <span className="text-[9px] text-slate-500">Feb</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-6">
              <div className="w-full bg-emerald-500/60 rounded-t h-8" />
              <span className="text-[9px] text-slate-500">Mar</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-6">
              <div className="w-full bg-emerald-400 rounded-t h-16 shadow-lg shadow-emerald-500/20" />
              <span className="text-[9px] font-bold text-emerald-400">Apr</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Saldo: Rp 14.850.000</span>
            <span className="text-emerald-400 font-medium">Target 74% Tercapai</span>
          </div>
        </div>
      );

    case 'ruangbelajar':
      return (
        <div className="w-full h-48 sm:h-52 bg-slate-900/90 rounded-t-xl p-4 flex flex-col justify-between overflow-hidden relative border-b border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium text-slate-300">Modul Belajar React 19</span>
            </div>
            <span className="text-[11px] font-mono text-amber-400">8/10 Selesai</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 my-2 space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-white font-medium">Bab 4: Hooks & Memoization</span>
              <span className="text-amber-400 font-mono">100%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full w-[80%]" />
            </div>
            <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
              <span>Next: Server Actions</span>
              <span>12 Menit video</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Sertifikat Siap Diklaim</span>
            <span className="text-amber-400 font-medium">Unduh PDF</span>
          </div>
        </div>
      );

    case 'studiovisual':
      return (
        <div className="w-full h-48 sm:h-52 bg-slate-900/90 rounded-t-xl p-4 flex flex-col justify-between overflow-hidden relative border-b border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span className="font-medium text-slate-300">StudioVisual Showcase</span>
            </div>
            <span className="text-[11px] text-purple-400 font-mono">Editorial Grid</span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="col-span-2 h-20 bg-gradient-to-tr from-purple-950/60 to-slate-950 rounded-lg border border-purple-900/40 p-2 flex flex-col justify-end">
              <div className="text-[11px] font-bold text-white">Lookbook Spring/Summer</div>
              <div className="text-[9px] text-purple-300">Brand Identity & Editorial</div>
            </div>
            <div className="h-20 bg-gradient-to-br from-indigo-950/60 to-slate-950 rounded-lg border border-indigo-900/40 p-2 flex flex-col justify-end">
              <div className="text-[10px] font-bold text-white">Typo Art</div>
              <div className="text-[9px] text-indigo-300">Visuals</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Lighthouse: 99</span>
            <span className="text-purple-400 font-medium">60 FPS Motion</span>
          </div>
        </div>
      );

    case 'restoorder':
      return (
        <div className="w-full h-48 sm:h-52 bg-slate-900/90 rounded-t-xl p-4 flex flex-col justify-between overflow-hidden relative border-b border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Utensils className="w-3.5 h-3.5 text-rose-400" />
              <span className="font-medium text-slate-300">Meja #12 · RestoOrder</span>
            </div>
            <span className="text-[11px] text-rose-400 font-mono">Order Aktif</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 my-2 space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-white">1x Kopi Susu Aren Gula Aren (Less Sugar)</span>
              <span className="font-bold text-rose-400">Rp 22.000</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-white">1x Roti Bakar Coklat Keju</span>
              <span className="font-bold text-rose-400">Rp 25.000</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
            <span className="text-emerald-400 flex items-center gap-1">Status: Sedang Disiapkan</span>
            <span className="font-bold text-white">Rp 47.000</span>
          </div>
        </div>
      );

    default: // devsnippet
      return (
        <div className="w-full h-48 sm:h-52 bg-slate-900/90 rounded-t-xl p-4 flex flex-col justify-between overflow-hidden relative border-b border-slate-800 font-mono">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-sans font-medium text-slate-300">useDebounce.ts</span>
            </div>
            <span className="text-[11px] text-cyan-400">TypeScript</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 my-1 text-[11px] leading-relaxed text-slate-300 overflow-hidden">
            <div className="text-cyan-400">export function useDebounce&lt;T&gt;(val: T, delay: number) &#123;</div>
            <div className="pl-3 text-slate-400">const [debounced, setDebounced] = useState(val);</div>
            <div className="pl-3 text-slate-400">useEffect(() =&gt; &#123; /* timer */ &#125;, [val]);</div>
            <div className="text-cyan-400">&#125;</div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80 font-sans">
            <span>Query: &lt; 50ms</span>
            <span className="text-cyan-400 font-medium">Salin 1-Klik</span>
          </div>
        </div>
      );
  }
};
