import React from 'react';
import { 
  AlertTriangle, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  Volume2, 
  ArrowRight,
  ShieldAlert,
  Droplets
} from 'lucide-react';
import { ContextualInsight, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';
import { playVernacularSpeech } from '../utils/audio';

interface MobileHeroAlertProps {
  insight: ContextualInsight;
  language: Language;
  onExplainLogic: () => void;
  onAcknowledge: () => void;
}

export const MobileHeroAlert: React.FC<MobileHeroAlertProps> = ({
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
    <div className="relative overflow-hidden rounded-2xl p-4 bg-gradient-to-b from-zinc-900/90 to-zinc-900/70 backdrop-blur-xl border border-amber-500/30 shadow-lg shadow-black/60">
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-2.5">
        {/* Top Header Pill & Speaker Action */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25 text-[11px] font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>AI Farm Advisory</span>
          </div>

          <button
            onClick={handlePlayAudio}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
              isPlayingAudio
                ? 'bg-amber-400 text-zinc-950 font-bold shadow-md shadow-amber-400/30 animate-pulse'
                : 'bg-zinc-800 text-zinc-300 border border-white/10 hover:bg-zinc-700'
            }`}
          >
            <Volume2 className="w-3 h-3 text-amber-400" />
            <span>{t.audioListenBtn}</span>
          </button>
        </div>

        {/* Big Clean Advisory Text */}
        <div className="flex items-start gap-2.5 pt-1">
          <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-xs sm:text-sm font-bold text-zinc-100 leading-snug">
              {insight.title}
            </h3>
            <p className="mt-1 text-[11px] sm:text-xs text-zinc-300 leading-relaxed">
              {insight.summary}
            </p>
          </div>
        </div>

        {/* Action Buttons: 2 large tap targets */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06]">
          <button
            onClick={onExplainLogic}
            className="w-full py-2 px-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 border border-white/10 text-xs font-medium flex items-center justify-center gap-1.5 transition-all active:scale-95"
          >
            <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
            <span>{t.explainLogic}</span>
          </button>

          <button
            onClick={onAcknowledge}
            className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
              insight.acknowledged
                ? 'bg-zinc-800 text-emerald-400 border border-emerald-500/20'
                : 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md shadow-emerald-500/20'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{insight.acknowledged ? t.acknowledgedStatus : t.acknowledge}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
