import React from 'react';
import { 
  X, 
  HelpCircle, 
  Sparkles, 
  CheckCircle2, 
  Droplets, 
  ShieldAlert, 
  Layers, 
  Zap, 
  ArrowRight,
  Volume2
} from 'lucide-react';
import { ContextualInsight, Language } from '../types';
import { playVernacularSpeech } from '../utils/audio';

interface ExplainLogicModalProps {
  isOpen: boolean;
  onClose: () => void;
  insight: ContextualInsight;
  language: Language;
}

export const ExplainLogicModal: React.FC<ExplainLogicModalProps> = ({
  isOpen,
  onClose,
  insight,
  language
}) => {
  if (!isOpen) return null;

  const handlePlayAudio = () => {
    playVernacularSpeech(insight.audioPrompt[language], language);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl p-6 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-zinc-100">
              Second Brain Contextual Logic Breakdown
            </h3>
            <p className="text-xs text-zinc-400">
              Deterministic Agronomic Model + Multi-Stream Telemetry Fusion
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4 text-xs">
          {/* Summary Box */}
          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-amber-500/20 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-amber-400 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" /> Synthesized Problem
              </span>
              <button
                onClick={handlePlayAudio}
                className="flex items-center gap-1 text-[11px] text-zinc-300 hover:text-white bg-zinc-800 px-2 py-1 rounded-lg"
              >
                <Volume2 className="w-3 h-3 text-amber-400" /> Listen
              </button>
            </div>
            <p className="text-zinc-200 text-sm leading-relaxed">
              {insight.summary}
            </p>
          </div>

          {/* Factor Logic Cards */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
              Contributing Telemetry Vectors:
            </span>

            {insight.detailedLogic.map((item, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/[0.06] space-y-1.5 hover:border-white/10 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-200">
                    {index + 1}. {item.factor}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    {item.source}
                  </span>
                </div>

                <div className="text-zinc-300">
                  <strong className="text-zinc-400">Sensor Observation: </strong>
                  {item.observation}
                </div>

                <div className="text-amber-400/90 pt-1 border-t border-white/[0.04]">
                  <strong className="text-zinc-400">Agronomic Impact: </strong>
                  {item.impact}
                </div>
              </div>
            ))}
          </div>

          {/* Prescriptive Recommendation */}
          <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-1.5">
            <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Final Prescriptive Action
            </span>
            <p className="text-zinc-200 leading-relaxed">
              {insight.recommendation}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 mt-2 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold transition-all"
          >
            Understood & Close
          </button>
        </div>
      </div>
    </div>
  );
};
