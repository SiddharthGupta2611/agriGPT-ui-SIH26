import React from 'react';
import { Camera, FileText, Landmark, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface QuickActionPillsProps {
  language: Language;
  onOpenScanner: () => void;
  onOpenPmfby: () => void;
  onOpenWdra: () => void;
  onOpenShc: () => void;
}

export const QuickActionPills: React.FC<QuickActionPillsProps> = ({
  language,
  onOpenScanner,
  onOpenPmfby,
  onOpenWdra,
  onOpenShc
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
          Quick Tools
        </h3>
        <span className="text-[10px] text-zinc-500">1-Tap Action</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {/* 1. Camera Pest Scan */}
        <button
          onClick={onOpenScanner}
          className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 active:scale-95 transition-all text-center group"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Camera className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-[10px] font-semibold text-zinc-200 leading-tight">
            Pest Scan
          </span>
        </button>

        {/* 2. PMFBY Insurance Claim */}
        <button
          onClick={onOpenPmfby}
          className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 active:scale-95 transition-all text-center group"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
            <FileText className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-[10px] font-semibold text-zinc-200 leading-tight">
            Insurance
          </span>
        </button>

        {/* 3. WDRA Warehouse Loan */}
        <button
          onClick={onOpenWdra}
          className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 hover:border-amber-500/40 active:scale-95 transition-all text-center group"
        >
          <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Landmark className="w-4 h-4 text-amber-400" />
          </div>
          <span className="text-[10px] font-semibold text-zinc-200 leading-tight">
            e-NWR Loan
          </span>
        </button>

        {/* 4. Soil Health Card */}
        <button
          onClick={onOpenShc}
          className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 hover:border-purple-500/40 active:scale-95 transition-all text-center group"
        >
          <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
          <span className="text-[10px] font-semibold text-zinc-200 leading-tight">
            Soil Card
          </span>
        </button>
      </div>
    </div>
  );
};
