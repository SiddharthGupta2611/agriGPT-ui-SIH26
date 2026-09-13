import React, { useState } from 'react';
import { 
  CloudRain, 
  Layers, 
  Zap, 
  Users, 
  Volume2, 
  Activity, 
  Check, 
  AlertCircle,
  Thermometer,
  Gauge,
  Droplets,
  Radio,
  BatteryCharging,
  ChevronRight,
  Filter,
  Sparkles
} from 'lucide-react';
import { TelemetryMetric, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';
import { playVernacularSpeech } from '../utils/audio';

interface TelemetryGridProps {
  telemetry: TelemetryMetric[];
  language: Language;
  onSelectMetric?: (metric: TelemetryMetric) => void;
}

export const TelemetryGrid: React.FC<TelemetryGridProps> = ({ 
  telemetry, 
  language,
  onSelectMetric 
}) => {
  const t = UI_TRANSLATIONS[language];
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'climate' | 'soil' | 'power' | 'water' | 'labor'>('all');

  const handlePlayCardAudio = (e: React.MouseEvent, metric: TelemetryMetric) => {
    e.stopPropagation();
    const text = metric.audioReadout[language];
    setPlayingId(metric.id);
    playVernacularSpeech(text, language, () => setPlayingId(metric.id), () => setPlayingId(null));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CloudRain':
        return <CloudRain className="w-5 h-5 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-purple-400" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-cyan-400" />;
      case 'Thermometer':
        return <Thermometer className="w-5 h-5 text-orange-400" />;
      default:
        return <Activity className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getStatusBadgeStyle = (statusType: TelemetryMetric['statusType']) => {
    switch (statusType) {
      case 'success':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'warning':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'accent':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'danger':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'neutral':
      default:
        return 'bg-zinc-800 text-zinc-300 border-white/10';
    }
  };

  const filteredTelemetry = telemetry.filter(item => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'climate' && (item.id === 'TEL-WEATHER' || item.id === 'TEL-CANOPY')) return true;
    if (selectedFilter === 'soil' && item.id === 'TEL-SOIL') return true;
    if (selectedFilter === 'power' && item.id === 'TEL-POWER') return true;
    if (selectedFilter === 'water' && item.id === 'TEL-BOREWELL') return true;
    if (selectedFilter === 'labor' && item.id === 'TEL-LABOR') return true;
    return true;
  });

  return (
    <section className="flex flex-col gap-4">
      {/* 1. LoRa Mesh Diagnostic Status Banner */}
      <div className="rounded-2xl p-4 bg-gradient-to-r from-emerald-950/40 via-zinc-900/80 to-zinc-900/60 backdrop-blur-xl border border-emerald-500/25 shadow-lg space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <Radio className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-bold tracking-tight text-zinc-100">
                {t.operationalConstraints}
              </h2>
              <p className="text-[11px] text-zinc-400">
                {t.telemetrySub}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-full border border-emerald-500/25 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>6/6 Nodes Online</span>
          </div>
        </div>

        {/* Diagnostic Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/5 text-[10px] text-zinc-400">
          <span className="flex items-center gap-1">
            <span className="text-zinc-500">LoRa Gateway:</span>
            <strong className="text-zinc-200">Vadgaon AWS 868MHz</strong>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="text-zinc-500">Packet Loss:</span>
            <strong className="text-emerald-400">0.02% (Optimal)</strong>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="text-zinc-500">Last Telemetry:</span>
            <strong className="text-zinc-200">20 sec ago</strong>
          </span>
        </div>
      </div>

      {/* 2. Sensor Category Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all ${
            selectedFilter === 'all'
              ? 'bg-emerald-500 text-zinc-950 font-bold shadow-sm'
              : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5'
          }`}
        >
          All Sensors ({telemetry.length})
        </button>
        <button
          onClick={() => setSelectedFilter('soil')}
          className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all ${
            selectedFilter === 'soil'
              ? 'bg-emerald-500 text-zinc-950 font-bold shadow-sm'
              : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5'
          }`}
        >
          Soil & Roots
        </button>
        <button
          onClick={() => setSelectedFilter('climate')}
          className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all ${
            selectedFilter === 'climate'
              ? 'bg-emerald-500 text-zinc-950 font-bold shadow-sm'
              : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5'
          }`}
        >
          Climate & Weather
        </button>
        <button
          onClick={() => setSelectedFilter('power')}
          className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all ${
            selectedFilter === 'power'
              ? 'bg-emerald-500 text-zinc-950 font-bold shadow-sm'
              : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5'
          }`}
        >
          Power Grid
        </button>
        <button
          onClick={() => setSelectedFilter('water')}
          className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all ${
            selectedFilter === 'water'
              ? 'bg-emerald-500 text-zinc-950 font-bold shadow-sm'
              : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5'
          }`}
        >
          Groundwater
        </button>
        <button
          onClick={() => setSelectedFilter('labor')}
          className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all ${
            selectedFilter === 'labor'
              ? 'bg-emerald-500 text-zinc-950 font-bold shadow-sm'
              : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5'
          }`}
        >
          Labor Pool
        </button>
      </div>

      {/* 3. Responsive Sensor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filteredTelemetry.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectMetric && onSelectMetric(item)}
            className="group relative cursor-pointer flex flex-col justify-between rounded-2xl p-4 bg-zinc-900/80 backdrop-blur-xl border border-white/[0.08] hover:border-emerald-500/40 hover:bg-zinc-900 transition-all hover:shadow-lg hover:shadow-black/50 active:scale-[0.99]"
          >
            {/* Top Bar: Icon, Category & Audio Readout Button */}
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-zinc-800/90 border border-white/10 flex items-center justify-center shrink-0">
                  {getIcon(item.icon)}
                </div>
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider truncate">
                  {item.category}
                </span>
              </div>

              {/* Audio Listen for illiterate farmers */}
              <button
                onClick={(e) => handlePlayCardAudio(e, item)}
                title="Hear metric readout"
                className={`p-1.5 rounded-lg border transition-all shrink-0 ${
                  playingId === item.id
                    ? 'bg-emerald-500 text-zinc-950 border-emerald-400 animate-pulse'
                    : 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border-white/5'
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Primary & Secondary Values */}
            <div className="my-1.5">
              <div className="text-sm sm:text-base font-bold text-zinc-100 tracking-tight leading-snug">
                {item.primaryValue}
              </div>
              <div className="text-xs text-zinc-300 mt-1 leading-normal">
                {item.secondaryValue}
              </div>
            </div>

            {/* Status Badge & Diagnostic Footer */}
            <div className="pt-3 mt-2.5 border-t border-white/[0.06] flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-1.5">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getStatusBadgeStyle(item.statusType)}`}>
                  {item.statusBadge}
                </span>

                <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Details</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>

              {/* Placement & Hardware Info */}
              {item.nodeInfo && (
                <div className="text-[10px] text-zinc-400 font-mono flex items-center gap-1.5 pt-1 border-t border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="truncate">{item.nodeInfo}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

