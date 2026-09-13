import React from 'react';
import { 
  X, 
  History, 
  Calendar, 
  CheckCircle2, 
  Sprout, 
  Activity, 
  Package, 
  MapPin,
  Download,
  Filter
} from 'lucide-react';
import { FarmMemoryEntry, Language } from '../types';

interface AuditTrailModalProps {
  isOpen: boolean;
  onClose: () => void;
  memoryList: FarmMemoryEntry[];
  language: Language;
}

export const AuditTrailModal: React.FC<AuditTrailModalProps> = ({
  isOpen,
  onClose,
  memoryList,
  language
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-3xl rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl p-5 sm:p-7 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <History className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-zinc-100">
              Season 2026 Audit Trail • Kharif Soybean (Plot 4B)
            </h3>
            <p className="text-xs text-zinc-400">
              Immutable Cadastral Ledger of Voice Logs & Agricultural Inputs
            </p>
          </div>
        </div>

        {/* List of all audit records */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-3">
          {memoryList.map((entry, index) => (
            <div
              key={entry.id}
              className="p-4 rounded-2xl bg-zinc-950/70 border border-white/[0.08] hover:border-white/15 transition-all space-y-2.5 text-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-zinc-200">{entry.parsedEntity.date}</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400 font-medium">via {entry.channel}</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> {entry.status}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 text-zinc-300 italic">
                "{entry.originalSpeechVernacular}"
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="bg-zinc-900/40 p-2 rounded-lg">
                  <span className="text-[10px] text-zinc-500 block">Crop</span>
                  <span className="font-medium text-emerald-400 truncate block">{entry.parsedEntity.crop}</span>
                </div>
                <div className="bg-zinc-900/40 p-2 rounded-lg">
                  <span className="text-[10px] text-zinc-500 block">Action</span>
                  <span className="font-medium text-zinc-200 truncate block">{entry.parsedEntity.action}</span>
                </div>
                <div className="bg-zinc-900/40 p-2 rounded-lg">
                  <span className="text-[10px] text-zinc-500 block">Input Applied</span>
                  <span className="font-medium text-zinc-200 truncate block">{entry.parsedEntity.inputMaterial}</span>
                </div>
                <div className="bg-zinc-900/40 p-2 rounded-lg">
                  <span className="text-[10px] text-zinc-500 block">Quantity / Soil</span>
                  <span className="font-medium text-amber-400 truncate block">{entry.parsedEntity.quantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer with CSV Export Simulation */}
        <div className="pt-4 mt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs text-zinc-400">
            Export certified digital ledger for bank KCC credit renewal or PMFBY audit.
          </span>
          <button
            onClick={() => alert('Exporting signed PDF/CSV ledger for Plot 4B...')}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Verified Dossier</span>
          </button>
        </div>
      </div>
    </div>
  );
};
