import React, { useState } from 'react';
import { 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Search, 
  Compass, 
  EyeOff, 
  Volume2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { ConstraintAnalysisItem, Language } from '../types';
import { FARMING_CONSTRAINTS_MATRIX, UI_TRANSLATIONS } from '../data/mockData';
import { playVernacularSpeech } from '../utils/audio';

interface ConstraintsMatrixViewProps {
  language: Language;
  onOpenModal?: () => void;
}

export const ConstraintsMatrixView: React.FC<ConstraintsMatrixViewProps> = ({
  language,
  onOpenModal
}) => {
  const t = UI_TRANSLATIONS[language];
  const [activeTab, setActiveTab] = useState<'all' | 'covered' | 'emerging' | 'honest_limit'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3 shrink-0" />
            <span>Covered in Twin</span>
          </span>
        );
      case 'emerging':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
            <Compass className="w-3 h-3 shrink-0" />
            <span>Emerging</span>
          </span>
        );
      case 'honest_limit':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">
            <EyeOff className="w-3 h-3 shrink-0" />
            <span>Honest Limit</span>
          </span>
        );
    }
  };

  const handleReadConstraint = (e: React.MouseEvent, item: ConstraintAnalysisItem) => {
    e.stopPropagation();
    const text = `${item.constraintName}. Solution: ${item.currentSolution}. Honest limitation: ${item.limitationsAndHonestReality}`;
    setPlayingId(item.id);
    playVernacularSpeech(text, language, () => setPlayingId(item.id), () => setPlayingId(null));
  };

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {/* 1. Header Banner */}
      <div className="rounded-2xl p-4 bg-gradient-to-r from-emerald-950/40 via-zinc-900/80 to-zinc-900/60 backdrop-blur-xl border border-emerald-500/30 shadow-lg space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-zinc-100 leading-tight">
                Agricultural Constraints Matrix
              </h2>
              <p className="text-[11px] text-zinc-400">
                13 Universal Agronomic Vectors & Engineering Realities
              </p>
            </div>
          </div>

          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 shrink-0">
            13 Vectors
          </span>
        </div>

        {/* Breakdown Stats */}
        <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-white/5 text-center text-[10px]">
          <div className="bg-zinc-950/60 p-1.5 rounded-lg border border-emerald-500/20">
            <span className="text-emerald-400 font-bold block">6 Covered</span>
            <span className="text-zinc-500 text-[9px]">Software & Sensors</span>
          </div>
          <div className="bg-zinc-950/60 p-1.5 rounded-lg border border-blue-500/20">
            <span className="text-blue-400 font-bold block">3 Emerging</span>
            <span className="text-zinc-500 text-[9px]">Drones & ONDC</span>
          </div>
          <div className="bg-zinc-950/60 p-1.5 rounded-lg border border-red-500/20">
            <span className="text-red-400 font-bold block">4 Honest Limits</span>
            <span className="text-zinc-500 text-[9px]">Physical Boundaries</span>
          </div>
        </div>
      </div>

      {/* 2. Search & Category Filter Chips */}
      <div className="space-y-2">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search vectors (e.g. Rain, Mandi, Borewell, Power, Labor)..."
            className="w-full bg-zinc-900/90 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-zinc-100 text-zinc-950 font-bold shadow-sm'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5'
            }`}
          >
            All ({FARMING_CONSTRAINTS_MATRIX.length})
          </button>
          <button
            onClick={() => setActiveTab('covered')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition-all ${
              activeTab === 'covered'
                ? 'bg-emerald-500 text-zinc-950 font-bold shadow-sm'
                : 'bg-zinc-900/80 text-emerald-400/80 hover:text-emerald-300 border border-emerald-500/20'
            }`}
          >
            Covered (6)
          </button>
          <button
            onClick={() => setActiveTab('emerging')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition-all ${
              activeTab === 'emerging'
                ? 'bg-blue-500 text-zinc-950 font-bold shadow-sm'
                : 'bg-zinc-900/80 text-blue-400/80 hover:text-blue-300 border border-blue-500/20'
            }`}
          >
            Emerging (3)
          </button>
          <button
            onClick={() => setActiveTab('honest_limit')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition-all ${
              activeTab === 'honest_limit'
                ? 'bg-red-500 text-zinc-950 font-bold shadow-sm'
                : 'bg-zinc-900/80 text-red-400/80 hover:text-red-300 border border-red-500/20'
            }`}
          >
            Honest Limits (4)
          </button>
        </div>
      </div>

      {/* 3. Cards List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-8 text-zinc-500 text-xs bg-zinc-900/40 rounded-2xl border border-white/5">
            No constraints matching "{searchQuery}".
          </div>
        ) : (
          filteredItems.map((item) => {
            const isExpanded = expandedId === item.id || searchQuery.length > 0;

            return (
              <div
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                className="group cursor-pointer rounded-2xl p-4 bg-zinc-900/80 backdrop-blur-xl border border-white/[0.08] hover:border-emerald-500/40 transition-all space-y-2.5 shadow-sm"
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider bg-zinc-950 px-2 py-0.5 rounded border border-white/5 truncate max-w-[180px]">
                    {item.domain}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {getCategoryBadge(item.category)}
                    <button
                      onClick={(e) => handleReadConstraint(e, item)}
                      title="Read constraint aloud"
                      className={`p-1.5 rounded-lg border transition-all ${
                        playingId === item.id
                          ? 'bg-emerald-500 text-zinc-950 border-emerald-400 animate-pulse'
                          : 'bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border-white/5'
                      }`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Constraint Name */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xs sm:text-sm font-bold text-zinc-100 leading-snug">
                    {item.constraintName}
                  </h3>
                  <ChevronRight className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform ${isExpanded ? 'rotate-90 text-emerald-400' : ''}`} />
                </div>

                {/* Always-Visible Short Preview */}
                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Expandable Details */}
                {isExpanded && (
                  <div className="pt-2 border-t border-white/5 space-y-2 text-xs animate-in fade-in duration-150">
                    {/* Solution */}
                    <div className="p-3 rounded-xl bg-zinc-950/90 border border-white/5 space-y-1">
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

                    {/* Honest Reality */}
                    <div className={`p-3 rounded-xl border space-y-1 ${
                      item.category === 'honest_limit'
                        ? 'bg-red-950/20 border-red-500/20 text-red-200'
                        : 'bg-zinc-950/90 border-white/5 text-zinc-300'
                    }`}>
                      <span className="text-[10px] uppercase font-mono text-amber-400 flex items-center gap-1 font-semibold">
                        <AlertTriangle className="w-3 h-3 shrink-0" />
                        <span>Honest Physical Reality</span>
                      </span>
                      <p className="text-xs leading-relaxed">
                        {item.limitationsAndHonestReality}
                      </p>
                    </div>

                    {/* Farmer First Action */}
                    <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="leading-relaxed">
                        <strong className="text-emerald-200">Recommended Action: </strong>
                        <span>{item.farmerFirstAction}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
