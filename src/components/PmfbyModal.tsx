import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  CloudRain, 
  MapPin, 
  Calendar, 
  Send,
  AlertCircle,
  FileCheck
} from 'lucide-react';
import { Language } from '../types';

interface PmfbyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PmfbyModal: React.FC<PmfbyModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmitClaim = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl p-6 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-100">
              PMFBY Parametric Auto-Intimation
            </h3>
            <p className="text-xs text-zinc-400">
              Pradhan Mantri Fasal Bima Yojana • 72h Statutory Loss Trigger
            </p>
          </div>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-base font-bold text-zinc-100">
              Claim Intimation Dispatched!
            </h4>
            <p className="text-xs text-zinc-400 max-w-xs mx-auto">
              Intimation ID: <strong>PMFBY-2026-MH-94821</strong> sent to AIC of India with geotagged satellite rainfall logs. Loss assessor appointed.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs">
            {/* Auto Trigger Parameter Alert */}
            <div className="p-3.5 rounded-2xl bg-blue-950/30 border border-blue-500/30 space-y-1.5">
              <div className="flex items-center justify-between text-blue-400 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CloudRain className="w-4 h-4" /> Trigger Condition: Heavy Inundation
                </span>
                <span className="text-[10px] font-mono bg-blue-500/20 px-2 py-0.5 rounded-full">Automated</span>
              </div>
              <p className="text-zinc-300 text-[11px] leading-relaxed">
                If cumulative rainfall exceeds <strong>65mm in a 24-hour window</strong> or localized hailstorm strikes, AgriSense Twin pre-fills the claim form with cadastral GIS boundaries.
              </p>
            </div>

            {/* Pre-filled Claim Dossier */}
            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
              <span className="text-xs font-semibold text-zinc-200 block mb-1">
                Pre-Filled Cadastral Claim Dossier:
              </span>
              <div className="grid grid-cols-2 gap-2 text-zinc-400">
                <div>
                  <span className="text-[10px] block text-zinc-500">Policy Number:</span>
                  <span className="text-zinc-200 font-mono">0401-MH-2026-8812</span>
                </div>
                <div>
                  <span className="text-[10px] block text-zinc-500">Cadastral Plot:</span>
                  <span className="text-zinc-200">Gat No. 182/2 (1.2 ha)</span>
                </div>
                <div>
                  <span className="text-[10px] block text-zinc-500">Insured Crop:</span>
                  <span className="text-zinc-200">Soybean (Phule Sangam)</span>
                </div>
                <div>
                  <span className="text-[10px] block text-zinc-500">Sum Insured:</span>
                  <span className="text-emerald-400 font-mono font-bold">₹64,800 / ha</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-950/50 border border-white/5 flex items-center gap-2 text-[11px] text-zinc-400">
              <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Includes satellite Sentinel-2 NDVI vegetative baseline evidence prior to storm event.</span>
            </div>

            <div className="flex gap-2 pt-1">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium transition-all"
              >
                Close
              </button>
              <button
                onClick={handleSubmitClaim}
                className="flex-1 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-zinc-950 font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Parametric Intimation</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
