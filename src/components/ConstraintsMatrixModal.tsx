import React, { useState } from 'react';
import { 
  X, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  Sparkles, 
  Search, 
  CloudRain, 
  TrendingUp, 
  Droplets, 
  Zap, 
  Users, 
  ShieldCheck, 
  Compass, 
  EyeOff,
  Filter,
  Volume2,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ConstraintAnalysisItem, Language } from '../types';
import { FARMING_CONSTRAINTS_MATRIX } from '../data/mockData';
import { playVernacularSpeech } from '../utils/audio';

interface ConstraintsMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ConstraintsMatrixModal: React.FC<ConstraintsMatrixModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'covered' | 'emerging' | 'honest_limit'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [playingId, setPlayingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredItems = FARMING_CONSTRAINTS_MATRIX.filter((item) => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = 
      item.constraintName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.currentSolution.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getCategoryBadge = (category: ConstraintAnalysisItem['category']) => {
    switch (category) {
      case 'covered':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3 shrink-0" />
            <span>Covered in Twin</span>
          </span>
        );
      case 'emerging':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
            <Compass className="w-3 h-3 shrink-0" />
            <span>Emerging / Pipeline</span>
          </span>
        );
      case 'honest_limit':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">
            <EyeOff className="w-3 h-3 shrink-0" />
            <span>Honest Physical Limit</span>
          </span>
        );
    }
  };

  const handleReadConstraint = (item: ConstraintAnalysisItem) => {
    const text = `${item.constraintName}. Solution: ${item.currentSolution}. Honest limitation: ${item.limitationsAndHonestReality}`;
    setPlayingId(item.id);
    playVernacularSpeech(text, language, () => setPlayingId(item.id), () => setPlayingId(null));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-3xl rounded-3xl bg-zinc-900 border border-white/15 shadow-2xl p-4 sm:p-6 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Safe Header with distinct close action */}
        <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-base font-bold text-zinc-100 tracking-tight leading-snug">
                Agricultural Constraints & Solutions Matrix
              </h2>
              <p className="text-[11px] text-zinc-400 truncate">
                13 Universal Farm Vectors • Covered vs Physical Limits
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all shrink-0"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search & Category Filter Chips */}
        <div className="py-3 space-y-2.5 shrink-0">
          {/* Search Input */}
          <div className="relative w-full">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search vectors (e.g., Rain, Mandi, Borewell, Power, Labor, Hail)..."
              className="w-full bg-zinc-950 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Filter Chips (Scrollable row) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-zinc-100 text-zinc-950 font-bold shadow-sm'
                  : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 border border-white/5'
              }`}
            >
              All ({FARMING_CONSTRAINTS_MATRIX.length})
            </button>
            <button
              onClick={() => setActiveTab('covered')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition-all ${
                activeTab === 'covered'
                  ? 'bg-emerald-500 text-zinc-950 font-bold shadow-sm'
                  : 'bg-zinc-950 text-emerald-400/80 hover:text-emerald-300 border border-emerald-500/20'
              }`}
            >
              Covered (6)
            </button>
            <button
              onClick={() => setActiveTab('emerging')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition-all ${
                activeTab === 'emerging'
                  ? 'bg-blue-500 text-zinc-950 font-bold shadow-sm'
                  : 'bg-zinc-950 text-blue-400/80 hover:text-blue-300 border border-blue-500/20'
              }`}
            >
              Emerging (3)
            </button>
            <button
              onClick={() => setActiveTab('honest_limit')}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition-all ${
                activeTab === 'honest_limit'
                  ? 'bg-red-500 text-zinc-950 font-bold shadow-sm'
                  : 'bg-zinc-950 text-red-400/80 hover:text-red-300 border border-red-500/20'
              }`}
            >
              Honest Limits (4)
            </button>
          </div>
        </div>

        {/* Scrollable Matrix Content Cards */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-3">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 text-xs">
              No agricultural constraints found matching "{searchQuery}".
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl p-4 bg-zinc-950/80 border border-white/[0.08] hover:border-white/20 transition-all space-y-3"
              >
                {/* 1. Header: Domain & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest bg-zinc-900 px-2 py-0.5 rounded border border-white/5">
                    {item.domain}
                  </span>
                  
                  <div className="flex items-center gap-1.5">
                    {getCategoryBadge(item.category)}
                    <button
                      onClick={() => handleReadConstraint(item)}
                      title="Read constraint aloud"
                      className={`p-1.5 rounded-lg border transition-all ${
                        playingId === item.id
                          ? 'bg-emerald-500 text-zinc-950 border-emerald-400 animate-pulse'
                          : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border-white/5'
                      }`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 2. Constraint Title */}
                <h3 className="text-sm font-bold text-zinc-100 leading-snug">
                  {item.constraintName}
                </h3>

                {/* 3. Problem Statement */}
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 text-xs text-zinc-300 space-y-1">
                  <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">
                    Ground Reality / Problem:
                  </span>
                  <p className="leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* 4. Proposed Solution & Limitations Stacked Cards */}
                <div className="flex flex-col sm:flex-row gap-2 text-xs">
                  {/* Solution Box */}
                  <div className="flex-1 p-3 rounded-xl bg-zinc-900/80 border border-white/5 space-y-1.5">
                    <span className="text-[10px] uppercase font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span>AgriSense Twin Solution</span>
                    </span>
                    <p className="text-zinc-200 text-xs leading-relaxed">
                      {item.currentSolution}
                    </p>
                    <span className="text-[10px] text-zinc-500 font-mono block pt-1 border-t border-white/5">
                      Tech: {item.dataSourceOrTechnology}
                    </span>
                  </div>

                  {/* Honest Reality Box */}
                  <div className={`flex-1 p-3 rounded-xl border space-y-1.5 ${
                    item.category === 'honest_limit'
                      ? 'bg-red-950/20 border-red-500/20 text-red-200'
                      : 'bg-zinc-900/80 border-white/5 text-zinc-300'
                  }`}>
                    <span className="text-[10px] uppercase font-mono text-amber-400 flex items-center gap-1 font-semibold">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      <span>Honest Physical Reality</span>
                    </span>
                    <p className="text-xs leading-relaxed">
                      {item.limitationsAndHonestReality}
                    </p>
                  </div>
                </div>

                {/* 5. Farmer First Immediate Action */}
                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong className="text-emerald-200">Recommended Action in Twin: </strong>
                    <span>{item.farmerFirstAction}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between gap-2 shrink-0">
          <span className="text-[11px] text-zinc-400 font-mono truncate hidden sm:inline">
            13 Universal Farm Vectors
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-all"
          >
            Close Matrix
          </button>
        </div>
      </div>
    </div>
  );
};

