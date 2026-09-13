import React, { useState } from 'react';
import { 
  X, 
  Camera, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  ShieldCheck,
  Zap,
  Volume2
} from 'lucide-react';
import { Language } from '../types';
import { playVernacularSpeech } from '../utils/audio';

interface LeafPestScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const LeafPestScannerModal: React.FC<LeafPestScannerModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [scanningState, setScanningState] = useState<'idle' | 'scanning' | 'result'>('idle');

  if (!isOpen) return null;

  const handleStartScan = () => {
    setScanningState('scanning');
    setTimeout(() => {
      setScanningState('result');
      playVernacularSpeech(
        'Early leaf spot Cercospora detected with eighty-seven percent confidence. Low severity. Recommended spray: Mancozeb 75 WP.',
        language
      );
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl p-6 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <Camera className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-100">
              Visual Leaf Pest & Disease AI Scanner
            </h3>
            <p className="text-xs text-zinc-400">
              Mobile Edge Computer Vision (YOLOv11 Crop Pathology Model)
            </p>
          </div>
        </div>

        {/* Camera Viewport Simulation */}
        <div className="relative aspect-video rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden flex items-center justify-center mb-4">
          {/* Simulated Leaf Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/60 via-zinc-950 to-zinc-900 flex items-center justify-center">
            <div className="w-48 h-32 rounded-[40px] bg-emerald-800/40 border border-emerald-500/30 flex items-center justify-center transform -rotate-12 relative overflow-hidden">
              {/* Simulated Leaf Veins & Spot */}
              <div className="w-full h-0.5 bg-emerald-400/30 absolute" />
              <div className="w-4 h-4 rounded-full bg-amber-600/80 border border-amber-400 absolute top-8 left-14 shadow-lg shadow-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-700/80 border border-amber-400 absolute top-12 left-24" />
            </div>
          </div>

          {/* Scanning Reticle & Laser */}
          {scanningState === 'scanning' && (
            <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
              <div className="w-full h-0.5 bg-emerald-400 shadow-[0_0_15px_#10b981] animate-scan" />
              <div className="text-center font-mono text-[11px] text-emerald-400 bg-zinc-950/80 py-1 rounded-full border border-emerald-500/30 mx-auto px-4">
                Analyzing foliar pathology & chlorosis...
              </div>
            </div>
          )}

          {scanningState === 'idle' && (
            <div className="relative z-10 text-center space-y-2">
              <Camera className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
              <span className="text-xs font-medium text-zinc-300 block">
                Position camera over suspicious leaf lesions
              </span>
            </div>
          )}

          {scanningState === 'result' && (
            <div className="absolute top-3 left-3 bg-zinc-950/90 border border-amber-500/40 px-3 py-1 rounded-lg text-xs font-mono text-amber-400 flex items-center gap-1.5 shadow-lg">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Target: Cercospora Leaf Spot (87% Match)</span>
            </div>
          )}
        </div>

        {/* Diagnosis Results */}
        {scanningState === 'result' ? (
          <div className="space-y-3 animate-in fade-in text-xs">
            <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-400">Diagnosis: Early Cercospora Leaf Spot</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Severity: Low (5% Canopy)</span>
              </div>
              <p className="text-zinc-300 text-[11px] leading-relaxed">
                Circular brown necrotic spots observed. Since Mancozeb fungicide was applied yesterday (logged in memory), active spore progression is effectively suppressed.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 space-y-1 text-emerald-300">
              <span className="font-semibold text-emerald-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Agronomic Prescription:
              </span>
              <p className="text-[11px] text-zinc-300">
                No immediate re-spray required. Re-evaluate leaf underside after 4 days. Maintain optimal soil drainage.
              </p>
            </div>

            <button
              onClick={() => setScanningState('idle')}
              className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium transition-all"
            >
              Scan Another Leaf
            </button>
          </div>
        ) : (
          <button
            onClick={handleStartScan}
            disabled={scanningState === 'scanning'}
            className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold shadow-lg shadow-emerald-500/20 text-xs transition-all flex items-center justify-center gap-2"
          >
            {scanningState === 'scanning' ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Running Edge AI Diagnosis...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Capture & Diagnose Leaf</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
