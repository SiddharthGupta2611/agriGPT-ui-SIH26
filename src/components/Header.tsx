import React from 'react';
import { 
  MapPin, 
  Sprout, 
  Radio, 
  Volume2, 
  VolumeX, 
  Globe2, 
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { PlotData, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';

interface HeaderProps {
  plot: PlotData;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isSpeaking: boolean;
  onToggleSpeech: () => void;
  onOpenConstraintsHub: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  plot,
  language,
  onLanguageChange,
  isSpeaking,
  onToggleSpeech,
  onOpenConstraintsHub
}) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-zinc-950/85 border-b border-white/[0.08] px-3.5 py-2.5 transition-all">
      <div className="max-w-xl mx-auto flex flex-col gap-2">
        {/* Top Row: Brand, Sync Dot & Language Switcher + TTS */}
        <div className="flex items-center justify-between gap-2">
          {/* Brand & Live Sync */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-emerald-600 to-emerald-400 p-0.5 flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
              <div className="w-full h-full bg-zinc-950 rounded-[6px] flex items-center justify-center">
                <Sprout className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs sm:text-sm tracking-tight text-zinc-100 truncate">
                  AgriSense
                </span>
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Controls: Read Aloud + Compact Language Selector */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Audio Listen Button for Illiterate Farmers */}
            <button
              onClick={onToggleSpeech}
              title={t.audioListenBtn}
              className={`p-1.5 rounded-full border transition-all flex items-center justify-center ${
                isSpeaking 
                  ? 'bg-emerald-500 text-zinc-950 border-emerald-400 shadow-md shadow-emerald-500/30 animate-pulse' 
                  : 'bg-zinc-900/90 text-zinc-300 border-white/10 hover:bg-zinc-800'
              }`}
            >
              {isSpeaking ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              )}
            </button>

            {/* Language Switcher Pill */}
            <div className="flex items-center p-0.5 rounded-full bg-zinc-900/90 border border-white/10 text-[11px] font-medium">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-zinc-800 text-emerald-400 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('hi')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === 'hi'
                    ? 'bg-zinc-800 text-emerald-400 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                हिं
              </button>
              <button
                onClick={() => onLanguageChange('mr')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === 'mr'
                    ? 'bg-zinc-800 text-emerald-400 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                म
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row: Plot & Crop Badges (Clean, no overflow) */}
        <div className="flex items-center justify-between gap-1.5 text-[11px] pt-1 border-t border-white/[0.04]">
          <div className="flex items-center gap-1.5 truncate text-zinc-300">
            <span className="flex items-center gap-1 font-medium bg-zinc-900/70 px-2 py-0.5 rounded-md border border-white/5 truncate">
              <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate">{plot.surveyNumber.split('(')[0]}</span>
            </span>
            <span className="flex items-center gap-1 font-medium bg-zinc-900/70 px-2 py-0.5 rounded-md border border-white/5 truncate text-emerald-300">
              <Sprout className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>{plot.cropName} (Day {plot.dayNumber})</span>
            </span>
          </div>

          <button
            onClick={onOpenConstraintsHub}
            className="shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold"
          >
            <Layers className="w-3 h-3" />
            <span>Matrix Hub</span>
          </button>
        </div>
      </div>
    </header>
  );
};
