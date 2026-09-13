import React from 'react';
import { 
  BrainCircuit, 
  Mic, 
  Radio, 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  Play, 
  Square,
  Sparkles,
  Droplets,
  PackageCheck,
  Tag
} from 'lucide-react';
import { FarmMemoryEntry, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';
import { playVernacularSpeech, stopSpeech } from '../utils/audio';

interface EpisodicMemoryCardProps {
  memoryList: FarmMemoryEntry[];
  language: Language;
  onOpenAuditTrail: () => void;
}

export const EpisodicMemoryCard: React.FC<EpisodicMemoryCardProps> = ({
  memoryList,
  language,
  onOpenAuditTrail
}) => {
  const t = UI_TRANSLATIONS[language];
  const [playingId, setPlayingId] = React.useState<string | null>(null);

  const handlePlayVoiceLog = (entry: FarmMemoryEntry) => {
    if (playingId === entry.id) {
      stopSpeech();
      setPlayingId(null);
      return;
    }

    setPlayingId(entry.id);
    const langCode = entry.language.includes('Marathi') ? 'mr' : entry.language.includes('Hindi') ? 'hi' : 'en';
    playVernacularSpeech(
      entry.originalSpeechVernacular,
      langCode,
      () => setPlayingId(entry.id),
      () => setPlayingId(null)
    );
  };

  return (
    <section className="rounded-3xl p-5 sm:p-6 bg-zinc-900/70 backdrop-blur-2xl border border-white/[0.08] shadow-xl flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <BrainCircuit className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-zinc-100 tracking-tight">
              {t.farmMemoryTitle}
            </h2>
            <p className="text-xs text-zinc-400">
              {t.farmMemorySub}
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800/80 px-2.5 py-1 rounded-full border border-white/10 hidden sm:inline">
          Bhashini AI Pipeline
        </span>
      </div>

      {/* Timeline Entries */}
      <div className="relative pl-6 sm:pl-8 space-y-4 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-gradient-to-b before:from-emerald-500/60 before:via-zinc-700 before:to-zinc-800">
        {memoryList.slice(0, 3).map((entry, index) => (
          <div key={entry.id} className="relative group">
            {/* Timeline Bullet Node */}
            <div className={`absolute -left-6 sm:-left-8 top-1.5 w-3 h-3 rounded-full border-2 border-zinc-950 transition-all ${
              index === 0 ? 'bg-emerald-400 shadow-md shadow-emerald-400/50 ring-2 ring-emerald-400/20' : 'bg-zinc-600'
            }`} />

            <div className="rounded-2xl p-4 bg-zinc-950/60 border border-white/[0.06] hover:border-white/15 transition-all">
              {/* Channel and Timestamp Meta */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-200">
                    {entry.relativeTime}
                  </span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-[11px] text-zinc-400 font-medium">
                    via {entry.channel}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {entry.status}
                  </span>
                </div>
              </div>

              {/* Original Vernacular Speech Box with Audio Play */}
              <div className="rounded-xl p-2.5 bg-zinc-900/80 border border-white/[0.04] flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <p className="text-xs text-zinc-300 italic">
                    "{entry.originalSpeechVernacular}"
                  </p>
                  <span className="text-[10px] text-zinc-500 font-mono mt-0.5 block">
                    Source: {entry.language}
                  </span>
                </div>

                {/* Audio Voice Note Simulator */}
                <button
                  onClick={() => handlePlayVoiceLog(entry)}
                  className={`px-2.5 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 shrink-0 transition-all ${
                    playingId === entry.id
                      ? 'bg-emerald-500 text-zinc-950 border-emerald-400 font-semibold'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-white/10'
                  }`}
                  title="Listen to original voice recording"
                >
                  {playingId === entry.id ? (
                    <>
                      <Square className="w-3 h-3 fill-current" />
                      <span className="text-[10px]">Playing...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-current" />
                      <span className="text-[10px] font-mono">{entry.audioDuration}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Structured Extracted Data Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className="bg-zinc-900/60 p-2 rounded-lg border border-white/[0.04]">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Action</span>
                  <span className="font-medium text-zinc-200 truncate block">{entry.parsedEntity.action}</span>
                </div>

                <div className="bg-zinc-900/60 p-2 rounded-lg border border-white/[0.04]">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Input / Dose</span>
                  <span className="font-medium text-emerald-400 truncate block">{entry.parsedEntity.quantity}</span>
                </div>

                <div className="bg-zinc-900/60 p-2 rounded-lg border border-white/[0.04] col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Material</span>
                  <span className="font-medium text-zinc-300 truncate block">{entry.parsedEntity.inputMaterial}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Audit Trail Link */}
      <button
        onClick={onOpenAuditTrail}
        className="w-full py-2.5 rounded-xl bg-zinc-950/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.06] text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
      >
        <span>{t.viewFullAudit}</span>
        <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
      </button>
    </section>
  );
};
