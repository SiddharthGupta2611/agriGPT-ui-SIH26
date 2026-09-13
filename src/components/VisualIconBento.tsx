import React from 'react';
import { 
  CloudRain, 
  Layers, 
  Zap, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight,
  Volume2,
  Activity
} from 'lucide-react';
import { TelemetryMetric, MandiArbitrageItem, Language } from '../types';
import { playVernacularSpeech } from '../utils/audio';

interface VisualIconBentoProps {
  telemetry: TelemetryMetric[];
  mandiList: MandiArbitrageItem[];
  language: Language;
  onOpenWeather: () => void;
  onOpenSoil: () => void;
  onOpenPower: () => void;
  onOpenLabor: () => void;
  onOpenMandi: () => void;
  onOpenSafety: () => void;
}

export const VisualIconBento: React.FC<VisualIconBentoProps> = ({
  telemetry,
  mandiList,
  language,
  onOpenWeather,
  onOpenSoil,
  onOpenPower,
  onOpenLabor,
  onOpenMandi,
  onOpenSafety
}) => {
  const weather = telemetry.find(t => t.id === 'TEL-WEATHER');
  const soil = telemetry.find(t => t.id === 'TEL-SOIL');
  const power = telemetry.find(t => t.id === 'TEL-POWER');
  const labor = telemetry.find(t => t.id === 'TEL-LABOR');

  const handleCardAudio = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    playVernacularSpeech(text, language);
  };

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span>Live Farm Telemetry (Tap for Deep Insights)</span>
        </h2>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          6 Nodes Active
        </span>
      </div>

      {/* 2-Column Visual Bento Grid (Apple HIG Touch Targets) */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* 1. Weather / Rain Bento */}
        <div
          onClick={onOpenWeather}
          className="group relative cursor-pointer rounded-2xl p-3.5 bg-gradient-to-br from-blue-950/40 via-zinc-900/80 to-zinc-900/60 backdrop-blur-xl border border-blue-500/25 hover:border-blue-400/50 transition-all active:scale-95 shadow-md flex flex-col justify-between min-h-[124px]"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
              <CloudRain className="w-5 h-5 text-blue-400" />
            </div>
            <button
              onClick={(e) => weather && handleCardAudio(e, weather.audioReadout[language])}
              className="p-1.5 rounded-lg bg-zinc-800/80 text-zinc-400 hover:text-white"
              title="Listen"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-2 space-y-0.5">
            <span className="text-[10px] font-semibold text-blue-300 uppercase tracking-wide block truncate">
              Rain Forecast
            </span>
            <span className="text-sm font-bold text-zinc-100 block leading-tight truncate">
              2.4mm at 3 AM
            </span>
            <span className="text-[10px] text-zinc-400 block truncate">
              28°C • 84% Hum
            </span>
          </div>
        </div>

        {/* 2. Soil Moisture Bento */}
        <div
          onClick={onOpenSoil}
          className="group relative cursor-pointer rounded-2xl p-3.5 bg-gradient-to-br from-emerald-950/40 via-zinc-900/80 to-zinc-900/60 backdrop-blur-xl border border-emerald-500/25 hover:border-emerald-400/50 transition-all active:scale-95 shadow-md flex flex-col justify-between min-h-[124px]"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
              <Layers className="w-5 h-5 text-emerald-400" />
            </div>
            <button
              onClick={(e) => soil && handleCardAudio(e, soil.audioReadout[language])}
              className="p-1.5 rounded-lg bg-zinc-800/80 text-zinc-400 hover:text-white"
              title="Listen"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-2 space-y-0.5">
            <span className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wide block truncate">
              Root Moisture
            </span>
            <span className="text-sm font-bold text-emerald-400 block leading-tight truncate">
              41% Optimal
            </span>
            <span className="text-[10px] text-zinc-400 block truncate">
              LoRa Node #04 (15cm)
            </span>
          </div>
        </div>

        {/* 3. 3-Phase Power Schedule Bento */}
        <div
          onClick={onOpenPower}
          className="group relative cursor-pointer rounded-2xl p-3.5 bg-gradient-to-br from-amber-950/40 via-zinc-900/80 to-zinc-900/60 backdrop-blur-xl border border-amber-500/25 hover:border-amber-400/50 transition-all active:scale-95 shadow-md flex flex-col justify-between min-h-[124px]"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <button
              onClick={(e) => power && handleCardAudio(e, power.audioReadout[language])}
              className="p-1.5 rounded-lg bg-zinc-800/80 text-zinc-400 hover:text-white"
              title="Listen"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-2 space-y-0.5">
            <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wide block truncate">
              3-Phase Power
            </span>
            <span className="text-sm font-bold text-zinc-100 block leading-tight truncate">
              Active (6h Left)
            </span>
            <span className="text-[10px] text-zinc-400 block truncate">
              Cutoff at 01:30 PM
            </span>
          </div>
        </div>

        {/* 4. Labor Pool Index Bento */}
        <div
          onClick={onOpenLabor}
          className="group relative cursor-pointer rounded-2xl p-3.5 bg-gradient-to-br from-purple-950/40 via-zinc-900/80 to-zinc-900/60 backdrop-blur-xl border border-purple-500/25 hover:border-purple-400/50 transition-all active:scale-95 shadow-md flex flex-col justify-between min-h-[124px]"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <button
              onClick={(e) => labor && handleCardAudio(e, labor.audioReadout[language])}
              className="p-1.5 rounded-lg bg-zinc-800/80 text-zinc-400 hover:text-white"
              title="Listen"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-2 space-y-0.5">
            <span className="text-[10px] font-semibold text-purple-300 uppercase tracking-wide block truncate">
              Labor Pool
            </span>
            <span className="text-sm font-bold text-zinc-100 block leading-tight truncate">
              25% (Constrained)
            </span>
            <span className="text-[10px] text-zinc-400 block truncate">
              MGNREGA active
            </span>
          </div>
        </div>

        {/* 5. Mandi Best Net Realization Bento */}
        <div
          onClick={onOpenMandi}
          className="group relative cursor-pointer rounded-2xl p-3.5 bg-gradient-to-br from-emerald-950/50 via-zinc-900/80 to-zinc-900/60 backdrop-blur-xl border-2 border-emerald-500/40 hover:border-emerald-400 transition-all active:scale-95 shadow-lg flex flex-col justify-between min-h-[124px]"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500 text-zinc-950">
              +₹250/q
            </span>
          </div>

          <div className="mt-2 space-y-0.5">
            <span className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wide block truncate">
              Mandi Arbitrage
            </span>
            <span className="text-sm font-bold text-emerald-400 block leading-tight truncate">
              ₹2,260/q Net
            </span>
            <span className="text-[10px] text-zinc-300 block truncate">
              APMC Shirur (48km)
            </span>
          </div>
        </div>

        {/* 6. Crop Safety & Schemes Bento */}
        <div
          onClick={onOpenSafety}
          className="group relative cursor-pointer rounded-2xl p-3.5 bg-gradient-to-br from-blue-950/40 via-zinc-900/80 to-zinc-900/60 backdrop-blur-xl border border-blue-500/25 hover:border-blue-400/50 transition-all active:scale-95 shadow-md flex flex-col justify-between min-h-[124px]"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </div>

          <div className="mt-2 space-y-0.5">
            <span className="text-[10px] font-semibold text-blue-300 uppercase tracking-wide block truncate">
              Safety Net
            </span>
            <span className="text-sm font-bold text-zinc-100 block leading-tight truncate">
              PMFBY & WDRA
            </span>
            <span className="text-[10px] text-zinc-400 block truncate">
              4 Protection Tools
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

