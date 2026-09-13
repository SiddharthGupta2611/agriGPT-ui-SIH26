import React from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  FlaskConical, 
  Layers, 
  Activity,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';

interface SoilHealthCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const SoilHealthCardModal: React.FC<SoilHealthCardModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl p-6 overflow-hidden max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <FlaskConical className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-100">
              Cadastral Soil Health Card (SHC) Telemetry
            </h3>
            <p className="text-xs text-zinc-400">
              Gat No. 182/2 • Ministry of Agriculture API Gateway
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 text-xs pr-1">
          {/* Soil Chemical Properties */}
          <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
            <span className="font-semibold text-zinc-200 block mb-1">
              Physico-Chemical Baseline (0-15cm Depth):
            </span>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-zinc-900/80 p-2 rounded-xl border border-white/5">
                <span className="text-[10px] text-zinc-500 block">Soil pH</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">7.4</span>
                <span className="text-[9px] text-zinc-400 block">Neutral-Slightly Alkaline</span>
              </div>
              <div className="bg-zinc-900/80 p-2 rounded-xl border border-white/5">
                <span className="text-[10px] text-zinc-500 block">EC (Salinity)</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">0.68</span>
                <span className="text-[9px] text-zinc-400 block">dS/m (Normal)</span>
              </div>
              <div className="bg-zinc-900/80 p-2 rounded-xl border border-white/5">
                <span className="text-[10px] text-zinc-500 block">Organic Carbon</span>
                <span className="text-sm font-bold text-amber-400 font-mono">0.48%</span>
                <span className="text-[9px] text-zinc-400 block">Medium Low</span>
              </div>
            </div>
          </div>

          {/* Macro & Micro Nutrient Status */}
          <div className="space-y-2">
            <span className="font-semibold text-zinc-300 block">
              Macro & Micro Nutrient Balance Matrix:
            </span>

            {/* Nitrogen */}
            <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-zinc-200">Nitrogen (N)</span>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">High (310 kg/ha)</span>
                </div>
                <span className="text-[11px] text-zinc-400 mt-0.5 block">Recommendation: Cut urea dose by 20% to prevent excessive vegetative lodging.</span>
              </div>
            </div>

            {/* Phosphorus */}
            <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-zinc-200">Phosphorus (P2O5)</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Optimal (19.4 kg/ha)</span>
                </div>
                <span className="text-[11px] text-zinc-400 mt-0.5 block">Single Super Phosphate (SSP) applied 3 days ago satisfies R3 pod filling.</span>
              </div>
            </div>

            {/* Zinc Deficiency Warning */}
            <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/30 flex items-start gap-2 text-red-200">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-red-300">Zinc (Zn) Critical Deficiency</span>
                  <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded">0.42 ppm (Low &lt; 0.6)</span>
                </div>
                <span className="text-[11px] text-zinc-300 mt-0.5 block">
                  Soil lockup detected. Foliar application of <strong>Chelated Zinc EDTA (12%) @ 1g/L</strong> recommended in next spray cycle.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-2 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-zinc-950 text-xs font-bold transition-all"
          >
            Acknowledge Nutrition Advice
          </button>
        </div>
      </div>
    </div>
  );
};
