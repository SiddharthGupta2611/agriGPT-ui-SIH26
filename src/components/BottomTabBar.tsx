import React from 'react';
import { 
  Home, 
  Activity, 
  TrendingUp, 
  BookOpen, 
  Layers, 
  Mic
} from 'lucide-react';
import { Language } from '../types';

export type ActiveTab = 'home' | 'sensors' | 'mandi' | 'diary' | 'constraints';

interface BottomTabBarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenVoice: () => void;
  language: Language;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeTab,
  onSelectTab,
  onOpenVoice,
  language
}) => {
  return (
    <div className="sticky bottom-0 inset-x-0 z-40 px-2 py-2 pointer-events-none">
      <div className="pointer-events-auto max-w-md mx-auto rounded-3xl bg-zinc-950/90 backdrop-blur-2xl border border-white/15 shadow-2xl px-2.5 py-1.5 flex items-center justify-between">
        {/* 1. Home */}
        <button
          onClick={() => onSelectTab('home')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
            activeTab === 'home' ? 'text-emerald-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Home</span>
        </button>

        {/* 2. Sensors */}
        <button
          onClick={() => onSelectTab('sensors')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
            activeTab === 'sensors' ? 'text-emerald-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Activity className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Sensors</span>
        </button>

        {/* 3. Center Glowing Siri Voice Button (Large Orb) */}
        <div className="relative -top-4 flex items-center justify-center px-1">
          <button
            onClick={onOpenVoice}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300 text-zinc-950 shadow-xl shadow-emerald-500/40 border-2 border-zinc-950 hover:scale-105 active:scale-95 transition-all"
            title="Hold to speak in dialect"
          >
            <span className="absolute -inset-1 rounded-full bg-emerald-400/30 blur-sm group-hover:bg-emerald-400/50 animate-pulse" />
            <Mic className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* 4. Mandi */}
        <button
          onClick={() => onSelectTab('mandi')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
            activeTab === 'mandi' ? 'text-emerald-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <TrendingUp className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Mandi</span>
        </button>

        {/* 5. Constraints Hub */}
        <button
          onClick={() => onSelectTab('constraints')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
            activeTab === 'constraints' ? 'text-emerald-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Layers className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Matrix</span>
        </button>
      </div>
    </div>
  );
};
