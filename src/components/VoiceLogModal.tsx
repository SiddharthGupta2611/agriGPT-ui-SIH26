import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Square, 
  Sparkles, 
  CheckCircle2, 
  X, 
  Volume2, 
  Languages,
  Calendar,
  Sprout,
  Activity,
  Package,
  MapPin,
  RefreshCw
} from 'lucide-react';
import { Language, FarmMemoryEntry } from '../types';
import { UI_TRANSLATIONS, VERNACULAR_VOICE_DEMOS } from '../data/mockData';
import { playVernacularSpeech } from '../utils/audio';

interface VoiceLogModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSaveNewEntry: (entry: FarmMemoryEntry) => void;
}

export const VoiceLogModal: React.FC<VoiceLogModalProps> = ({
  isOpen,
  onClose,
  language,
  onSaveNewEntry
}) => {
  const t = UI_TRANSLATIONS[language];
  const [selectedDemoIndex, setSelectedDemoIndex] = useState(0);
  const [state, setState] = useState<'idle' | 'recording' | 'processing' | 'success'>('idle');
  const [activeEntry, setActiveEntry] = useState<FarmMemoryEntry | null>(null);

  const currentDemo = VERNACULAR_VOICE_DEMOS[selectedDemoIndex];

  useEffect(() => {
    if (!isOpen) {
      setState('idle');
      setActiveEntry(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStartRecording = () => {
    setState('recording');
    
    // Simulate speech audio playback / recognition
    playVernacularSpeech(currentDemo.transcript, currentDemo.lang as any);

    // After 2.5s recording, transition to Bhashini processing
    setTimeout(() => {
      setState('processing');

      // After 1.8s processing, snap to structured data
      setTimeout(() => {
        const newLog: FarmMemoryEntry = {
          id: `MEM-${Date.now()}`,
          timestamp: new Date().toISOString(),
          relativeTime: 'Just now',
          channel: 'Field Mic',
          originalSpeechVernacular: currentDemo.transcript,
          language: currentDemo.langLabel,
          audioDuration: '0:06',
          status: 'Verified',
          parsedEntity: currentDemo.extractedEntity
        };
        setActiveEntry(newLog);
        setState('success');

        // Play audio confirmation
        playVernacularSpeech(currentDemo.audioResponse, currentDemo.lang as any);
      }, 1600);
    }, 2400);
  };

  const handleCommitEntry = () => {
    if (activeEntry) {
      onSaveNewEntry(activeEntry);
      onClose();
    }
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

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-9 h-9 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <Mic className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-zinc-100">
              Vernacular Voice Digital Logger
            </h3>
            <p className="text-xs text-zinc-400">
              Powered by Bhashini AI & Gemini Agricultural Parser
            </p>
          </div>
        </div>

        {/* Vernacular Demo Phrase Switcher Chips */}
        {state === 'idle' && (
          <div className="mb-6 space-y-2">
            <label className="text-xs font-medium text-zinc-400 block">
              Choose or Speak Sample Vernacular Log:
            </label>
            <div className="grid grid-cols-1 gap-2">
              {VERNACULAR_VOICE_DEMOS.map((demo, idx) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemoIndex(idx)}
                  className={`text-left p-3 rounded-xl text-xs transition-all border ${
                    selectedDemoIndex === idx
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-zinc-100 shadow-sm'
                      : 'bg-zinc-950/60 border-white/5 text-zinc-400 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-emerald-400">{demo.langLabel}</span>
                    <span className="text-[10px] font-mono text-zinc-500">Tap to test</span>
                  </div>
                  <p className="italic text-zinc-300 line-clamp-2">
                    "{demo.transcript}"
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Center Dynamic State Display */}
        <div className="flex flex-col items-center justify-center my-4 py-4 text-center">
          {state === 'idle' && (
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleStartRecording}
                className="relative group w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-zinc-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all"
              >
                <span className="absolute -inset-2 rounded-full bg-emerald-500/20 blur-md group-hover:bg-emerald-500/40 animate-pulse" />
                <Mic className="w-8 h-8 stroke-[2.5]" />
              </button>
              <div className="space-y-1">
                <span className="text-sm font-semibold text-zinc-200">
                  Tap to Record Voice Note
                </span>
                <p className="text-xs text-zinc-400 max-w-xs">
                  Speak naturally in Marathi, Hindi, or English.
                </p>
              </div>
            </div>
          )}

          {state === 'recording' && (
            <div className="flex flex-col items-center gap-4 py-2">
              <div className="w-20 h-20 rounded-full bg-red-500 text-white flex items-center justify-center shadow-xl shadow-red-500/30 animate-pulse">
                <Square className="w-8 h-8 fill-current" />
              </div>

              {/* Live Waveform visualizer */}
              <div className="flex items-center gap-1.5 h-8">
                <span className="w-1.5 bg-emerald-400 rounded-full wave-bar" style={{ animationDelay: '0.1s' }} />
                <span className="w-1.5 bg-emerald-400 rounded-full wave-bar" style={{ animationDelay: '0.3s' }} />
                <span className="w-1.5 bg-emerald-400 rounded-full wave-bar" style={{ animationDelay: '0.2s' }} />
                <span className="w-1.5 bg-emerald-400 rounded-full wave-bar" style={{ animationDelay: '0.4s' }} />
                <span className="w-1.5 bg-emerald-400 rounded-full wave-bar" style={{ animationDelay: '0.15s' }} />
                <span className="w-1.5 bg-emerald-400 rounded-full wave-bar" style={{ animationDelay: '0.35s' }} />
              </div>

              <div className="space-y-1">
                <span className="text-sm font-semibold text-emerald-400">
                  {t.listening}
                </span>
                <p className="text-xs text-zinc-300 italic max-w-sm px-4">
                  "{currentDemo.transcript}"
                </p>
              </div>
            </div>
          )}

          {state === 'processing' && (
            <div className="flex flex-col items-center gap-4 py-4">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-white/10 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-emerald-400 animate-spin" />
              </div>
              <div className="space-y-1">
                <span className="text-sm font-semibold text-zinc-200">
                  {t.processingBhashini}
                </span>
                <p className="text-xs text-zinc-400 font-mono">
                  Extracting Entities: [Date, Crop, Action, Quantity, Zone]
                </p>
              </div>
            </div>
          )}

          {state === 'success' && activeEntry && (
            <div className="w-full text-left space-y-4 animate-in fade-in zoom-in-95">
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{t.logSuccess}</span>
              </div>

              {/* Original Vernacular Transcribed */}
              <div className="p-3 rounded-xl bg-zinc-950/80 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-zinc-400 block mb-1">
                  Transcribed Audio ({activeEntry.language})
                </span>
                <p className="text-xs text-zinc-200 italic font-medium">
                  "{activeEntry.originalSpeechVernacular}"
                </p>
              </div>

              {/* Structured Extracted Entity Card */}
              <div className="rounded-2xl p-4 bg-zinc-950/60 border border-white/10 space-y-2.5">
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Structured Farm Digital Twin Entity
                </span>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-white/5">
                    <span className="text-[10px] text-zinc-500 flex items-center gap-1 mb-0.5">
                      <Calendar className="w-3 h-3" /> Date
                    </span>
                    <span className="font-semibold text-zinc-200">{activeEntry.parsedEntity.date}</span>
                  </div>

                  <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-white/5">
                    <span className="text-[10px] text-zinc-500 flex items-center gap-1 mb-0.5">
                      <Sprout className="w-3 h-3" /> Crop
                    </span>
                    <span className="font-semibold text-emerald-400">{activeEntry.parsedEntity.crop}</span>
                  </div>

                  <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-white/5">
                    <span className="text-[10px] text-zinc-500 flex items-center gap-1 mb-0.5">
                      <Activity className="w-3 h-3" /> Action
                    </span>
                    <span className="font-semibold text-zinc-200">{activeEntry.parsedEntity.action}</span>
                  </div>

                  <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-white/5">
                    <span className="text-[10px] text-zinc-500 flex items-center gap-1 mb-0.5">
                      <Package className="w-3 h-3" /> Quantity / Input
                    </span>
                    <span className="font-semibold text-zinc-200">{activeEntry.parsedEntity.quantity}</span>
                  </div>

                  <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-white/5 col-span-2">
                    <span className="text-[10px] text-zinc-500 flex items-center gap-1 mb-0.5">
                      <MapPin className="w-3 h-3" /> Location Zone
                    </span>
                    <span className="font-semibold text-zinc-200">{activeEntry.parsedEntity.locationZone}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setState('idle')}
                  className="flex-1 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition-all"
                >
                  Record Another
                </button>
                <button
                  onClick={handleCommitEntry}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold shadow-lg shadow-emerald-500/20 transition-all"
                >
                  Save to Farm Memory
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
