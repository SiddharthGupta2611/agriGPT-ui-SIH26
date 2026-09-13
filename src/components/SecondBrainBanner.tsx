import React from 'react';
import { 
  AlertTriangle, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  Volume2, 
  ArrowRight,
  ShieldAlert,
  Clock,
  Droplets
} from 'lucide-react';
import { ContextualInsight, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';
import { playVernacularSpeech } from '../utils/audio';

interface SecondBrainBannerProps {
  insight: ContextualInsight;
  language: Language;
  onExplainLogic: () => void;
  onAcknowledge: () => void;
}

export const SecondBrainBanner: React.FC<SecondBrainBannerProps> = ({
  insight,
  language,
  onExplainLogic,
  onAcknowledge
}) => {
  const t = UI_TRANSLATIONS[language];
  const [isPlayingAudio, setIsPlayingAudio] = React.useState(false);

  const handlePlayAudio = () => {
    const textToSpeak = insight.audioPrompt[language];
    setIsPlayingAudio(true);
    playVernacularSpeech(textToSpeak, language, () => setIsPlayingAudio(true), () => setIsPlayingAudio(false));
  };

  return (
    <section className="relative overflow-hidden rounded-3xl p-5 sm:p-6 bg-gradient-to-b from-zinc-900/90 to-zinc-900/60 backdrop-blur-2xl border border-amber-500/20 shadow-xl shadow-black/40">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-4">
        {/* Top Meta Bar: Second Brain badge, Severity & Audio Trigger */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              {t.secondBrainReasoning}
            </span>
            <span className="text-[11px] text-zinc-400 font-mono hidden sm:inline">
              Multi-Factor Fusion
            </span>
          </div>

          {/* Quick Voice Narration Button for semi-literate/illiterate farmers */}
          <button
            onClick={handlePlayAudio}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all ${
              isPlayingAudio
                ? 'bg-amber-400 text-zinc-950 font-semibold shadow-md shadow-amber-400/20 animate-pulse'
                : 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 border border-white/10'
            }`}
            title="Listen to advisory in your dialect"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span className="text-[11px] font-medium">{t.audioListenBtn}</span>
          </button>
        </div>

        {/* Main Advisory Content */}
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
          </div>

          <div className="flex-1">
            <h3 className="text-sm sm:text-base font-semibold text-zinc-100 leading-snug tracking-tight">
              {insight.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {insight.summary}
            </p>
          </div>
        </div>

        {/* Multi-Factor Trigger Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/[0.06]">
          <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-950/40 px-3 py-1.5 rounded-xl border border-white/[0.04]">
            <Droplets className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="truncate">Weather: 2.4mm rain at 03:00 AM</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-950/40 px-3 py-1.5 rounded-xl border border-white/[0.04]">
            <ShieldAlert className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">Chemical: Mancozeb 75% WP sprayed yesterday</span>
          </div>
        </div>

        {/* Action Buttons: Explain Logic vs Acknowledge */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            onClick={onExplainLogic}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 border border-white/10 text-xs font-medium transition-all"
          >
            <HelpCircle className="w-4 h-4 text-zinc-400" />
            <span>{t.explainLogic}</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
          </button>

          <button
            onClick={onAcknowledge}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              insight.acknowledged
                ? 'bg-zinc-800 text-emerald-400 border border-emerald-500/20'
                : 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold shadow-lg shadow-emerald-500/20'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{insight.acknowledged ? t.acknowledgedStatus : t.acknowledge}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
