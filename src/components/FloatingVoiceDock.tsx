import React from 'react';
import { 
  Mic, 
  SlidersHorizontal, 
  History, 
  Sparkles,
  Volume2,
  Check
} from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';

interface FloatingVoiceDockProps {
  language: Language;
  onOpenVoiceModal: () => void;
  onOpenFilters: () => void;
  onOpenHistory: () => void;
  isRecording?: boolean;
}

export const FloatingVoiceDock: React.FC<FloatingVoiceDockProps> = ({
  language,
  onOpenVoiceModal,
  onOpenFilters,
  onOpenHistory,
  isRecording = false
}) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <div className="fixed bottom-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-2.5 rounded-full bg-zinc-900/90 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/80 max-w-lg w-full transition-all">
        {/* Left Action: Telemetry Filter / Settings */}
        <button
          onClick={onOpenFilters}
          title={t.filterTelemetry}
          className="p-2.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-white/5 transition-all hover:scale-105 active:scale-95"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>

        {/* Centerpiece: Glowing Siri-Style Radiant Voice Orb & Prompt */}
        <button
          onClick={onOpenVoiceModal}
          className="group flex-1 flex items-center justify-center gap-3 px-3 py-1.5 rounded-full bg-zinc-950/40 hover:bg-zinc-950/60 border border-white/10 transition-all cursor-pointer"
        >
          {/* Pulsing Glowing Microphone Orb */}
          <div className="relative flex items-center justify-center">
            {/* Animated Aura Glow Ring */}
            <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-sm group-hover:bg-emerald-500/50 animate-pulse transition-all" />
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300 text-zinc-950 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 active:scale-95 transition-all">
              <Mic className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>

          {/* Dynamic Audio Waveform & Text */}
          <div className="flex flex-col items-start text-left overflow-hidden">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                {t.voicePromptPlaceholder}
              </span>
            </div>
            
            {/* Audio Wave Bars */}
            <div className="flex items-center gap-0.5 mt-0.5 h-3">
              <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full animate-wave-bar-1" />
              <span className="w-0.5 h-2.5 bg-emerald-400 rounded-full animate-wave-bar-2" />
              <span className="w-0.5 h-3 bg-emerald-400 rounded-full animate-wave-bar-3" />
              <span className="w-0.5 h-2 bg-emerald-400 rounded-full animate-wave-bar-4" />
              <span className="w-0.5 h-1 bg-emerald-400 rounded-full animate-wave-bar-5" />
              <span className="text-[10px] text-zinc-400 font-mono ml-1.5 truncate">
                Bhashini Vernacular AI
              </span>
            </div>
          </div>
        </button>

        {/* Right Action: Voice Logs History Drawer */}
        <button
          onClick={onOpenHistory}
          title={t.recentHistory}
          className="p-2.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-white/5 transition-all hover:scale-105 active:scale-95"
        >
          <History className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
