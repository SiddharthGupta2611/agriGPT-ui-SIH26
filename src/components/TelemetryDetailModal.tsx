import React, { useState } from 'react';
import { 
  X, 
  CloudRain, 
  Layers, 
  Zap, 
  Users, 
  Volume2, 
  CheckCircle2, 
  AlertTriangle,
  Clock,
  Thermometer,
  Droplets,
  Wind,
  Radio,
  BatteryCharging,
  Gauge,
  MapPin,
  Sparkles,
  Info
} from 'lucide-react';
import { TelemetryMetric, Language } from '../types';
import { playVernacularSpeech } from '../utils/audio';

interface TelemetryDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  metric: TelemetryMetric | null;
  language: Language;
}

export const TelemetryDetailModal: React.FC<TelemetryDetailModalProps> = ({
  isOpen,
  onClose,
  metric,
  language
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen || !metric) return null;

  const handlePlayAudio = () => {
    setIsPlayingAudio(true);
    playVernacularSpeech(
      metric.audioReadout[language],
      language,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CloudRain':
        return <CloudRain className="w-6 h-6 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-purple-400" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-cyan-400" />;
      case 'Thermometer':
        return <Thermometer className="w-6 h-6 text-orange-400" />;
      default:
        return <Gauge className="w-6 h-6 text-emerald-400" />;
    }
  };

  const getStatusBadgeStyle = (statusType: TelemetryMetric['statusType']) => {
    switch (statusType) {
      case 'success':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'warning':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      case 'accent':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'danger':
        return 'bg-red-500/15 text-red-400 border-red-500/30';
      case 'neutral':
      default:
        return 'bg-zinc-800 text-zinc-300 border-white/10';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-white/15 shadow-2xl p-5 sm:p-6 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-3.5 mb-4 pr-8">
          <div className="w-12 h-12 rounded-2xl bg-zinc-800/90 border border-white/10 flex items-center justify-center shrink-0 shadow-md">
            {getIcon(metric.icon)}
          </div>
          <div className="min-w-0">
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 block truncate">
              {metric.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-zinc-100 leading-snug">
              {metric.primaryValue}
            </h3>
          </div>
        </div>

        {/* Scrollable Body with Clean Stacked Layout */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-3.5 text-xs">
          {/* Audio Listen Bar */}
          <button
            onClick={handlePlayAudio}
            className={`w-full py-2.5 px-4 rounded-xl border font-semibold flex items-center justify-center gap-2 transition-all shadow-sm ${
              isPlayingAudio
                ? 'bg-emerald-500 text-zinc-950 border-emerald-400 animate-pulse'
                : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/25'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>{isPlayingAudio ? 'Speaking in Vernacular...' : 'Listen in Vernacular Voice'}</span>
          </button>

          {/* 1. Live Telemetry Readings Box */}
          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                Live Sensor Telemetry
              </span>
              <p className="text-sm font-semibold text-zinc-100 leading-normal">
                {metric.secondaryValue}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
              <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${getStatusBadgeStyle(metric.statusType)}`}>
                {metric.statusBadge}
              </span>
              {metric.idealRange && (
                <span className="text-[11px] text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-full border border-white/5">
                  Target: {metric.idealRange}
                </span>
              )}
            </div>
          </div>

          {/* 2. Agronomic Impact & Meaning */}
          {metric.agronomicImpact && (
            <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 space-y-1 text-emerald-300">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Agronomic Translation:</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {metric.agronomicImpact}
              </p>
            </div>
          )}

          {/* 3. Observed Trend */}
          {metric.trend && (
            <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">
                Observed Trend & Cycle
              </span>
              <p className="text-xs text-zinc-200">
                {metric.trend}
              </p>
            </div>
          )}

          {/* 4. Hardware Node & LoRa Diagnostics */}
          <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2.5">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hardware & Network Telemetry</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-white/5">
                <span className="text-zinc-500 block text-[10px] mb-0.5">Source Node / Feed</span>
                <span className="font-mono text-zinc-200 block font-medium">
                  {metric.nodeInfo || 'Panchayat LoRa Node'}
                </span>
              </div>

              {metric.depthOrLocation && (
                <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-white/5">
                  <span className="text-zinc-500 block text-[10px] mb-0.5">Physical Sensor Placement</span>
                  <span className="text-zinc-200 block font-medium">
                    {metric.depthOrLocation}
                  </span>
                </div>
              )}

              {metric.signalStrength && (
                <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-white/5">
                  <span className="text-zinc-500 block text-[10px] mb-0.5">LoRa Link Signal</span>
                  <span className="font-mono text-emerald-400 block font-medium">
                    {metric.signalStrength}
                  </span>
                </div>
              )}

              {metric.batteryLevel && (
                <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-white/5">
                  <span className="text-zinc-500 block text-[10px] mb-0.5">Battery / Power State</span>
                  <span className="font-mono text-emerald-400 block font-medium">
                    {metric.batteryLevel}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-end">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-all"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

