import React, { useState } from 'react';
import { 
  X, 
  SlidersHorizontal, 
  Layers, 
  MapPin, 
  Sparkles, 
  Check, 
  Eye, 
  Radio
} from 'lucide-react';
import { Language } from '../types';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, language }) => {
  const [selectedLayers, setSelectedLayers] = useState({
    sentinelNDVI: true,
    soilMoistureLoRa: true,
    powerFeederSCADA: true,
    weatherGrid: true,
    mandiArbitrage: true,
  });

  if (!isOpen) return null;

  const toggleLayer = (key: keyof typeof selectedLayers) => {
    setSelectedLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-md rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl p-6 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-zinc-800 border border-white/10 flex items-center justify-center">
            <SlidersHorizontal className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-100">
              Telemetry Layer Filters
            </h3>
            <p className="text-xs text-zinc-400">
              Configure Live Digital Twin Sensor Overlays
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs">
          <div
            onClick={() => toggleLayer('sentinelNDVI')}
            className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-white/5 cursor-pointer hover:border-white/15 transition-all"
          >
            <div>
              <span className="font-semibold text-zinc-200 block">Sentinel-2 MSI Vegetation Canopy</span>
              <span className="text-[10px] text-zinc-500">10m multispectral NDVI resolution</span>
            </div>
            <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
              selectedLayers.sentinelNDVI ? 'bg-emerald-500 text-zinc-950' : 'bg-zinc-800 text-transparent'
            }`}>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>

          <div
            onClick={() => toggleLayer('soilMoistureLoRa')}
            className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-white/5 cursor-pointer hover:border-white/15 transition-all"
          >
            <div>
              <span className="font-semibold text-zinc-200 block">Subsurface LoRa Dielectric Probes</span>
              <span className="text-[10px] text-zinc-500">Continuous 15cm & 30cm root moisture</span>
            </div>
            <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
              selectedLayers.soilMoistureLoRa ? 'bg-emerald-500 text-zinc-950' : 'bg-zinc-800 text-transparent'
            }`}>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>

          <div
            onClick={() => toggleLayer('powerFeederSCADA')}
            className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-white/5 cursor-pointer hover:border-white/15 transition-all"
          >
            <div>
              <span className="font-semibold text-zinc-200 block">3-Phase Substation Grid Feeder</span>
              <span className="text-[10px] text-zinc-500">MSEDCL 11kV voltage telemetry</span>
            </div>
            <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
              selectedLayers.powerFeederSCADA ? 'bg-emerald-500 text-zinc-950' : 'bg-zinc-800 text-transparent'
            }`}>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>

          <div
            onClick={() => toggleLayer('weatherGrid')}
            className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-white/5 cursor-pointer hover:border-white/15 transition-all"
          >
            <div>
              <span className="font-semibold text-zinc-200 block">1x1 km Downscaled Rain & Wind</span>
              <span className="text-[10px] text-zinc-500">ECMWF HRES + IMD Doppler radar</span>
            </div>
            <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
              selectedLayers.weatherGrid ? 'bg-emerald-500 text-zinc-950' : 'bg-zinc-800 text-transparent'
            }`}>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>

          <div className="pt-3">
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold transition-all"
            >
              Apply Active Layers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
