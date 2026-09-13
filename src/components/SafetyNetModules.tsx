import React from 'react';
import { 
  Camera, 
  ShieldCheck, 
  Landmark, 
  Sparkles, 
  ArrowRight,
  FlaskConical
} from 'lucide-react';
import { SafetyNetModule, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';

interface SafetyNetModulesProps {
  modules: SafetyNetModule[];
  language: Language;
  onOpenModule: (moduleId: string) => void;
}

export const SafetyNetModules: React.FC<SafetyNetModulesProps> = ({
  modules,
  language,
  onOpenModule
}) => {
  const t = UI_TRANSLATIONS[language];

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-5 h-5 text-emerald-400" />;
      case 'FileShield':
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-amber-400" />;
      case 'FlaskConical':
      case 'Sparkles':
        return <FlaskConical className="w-5 h-5 text-purple-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-zinc-400" />;
    }
  };

  const getBadgeStyle = (badgeType: SafetyNetModule['badgeType']) => {
    switch (badgeType) {
      case 'beta':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'live':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'comingSoon':
      default:
        return 'bg-purple-500/15 text-purple-400 border-purple-500/30';
    }
  };

  return (
    <section className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <div>
          <h2 className="text-xs sm:text-sm font-bold tracking-tight text-zinc-200 uppercase">
            {t.futureSafetyTitle}
          </h2>
          <p className="text-[11px] text-zinc-400">
            Next-Gen Risk Buffering & Autonomous Agro-Fintech Tools
          </p>
        </div>
      </div>

      {/* Modular 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {modules.map((mod) => (
          <div
            key={mod.id}
            onClick={() => onOpenModule(mod.id)}
            className="group cursor-pointer rounded-2xl p-4 bg-zinc-900/80 backdrop-blur-xl border border-white/[0.08] hover:border-emerald-500/40 transition-all hover:bg-zinc-900 hover:shadow-lg hover:shadow-black/50 flex flex-col justify-between"
          >
            <div>
              {/* Icon & Badge */}
              <div className="flex items-center justify-between mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-zinc-800/90 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getModuleIcon(mod.icon)}
                </div>
                <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${getBadgeStyle(mod.badgeType)}`}>
                  {mod.statusBadge}
                </span>
              </div>

              <h3 className="text-sm font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors leading-snug">
                {mod.title}
              </h3>
              <p className="text-[10px] text-zinc-400 font-mono mt-0.5 truncate">
                {mod.subtitle}
              </p>

              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                {mod.description}
              </p>
            </div>

            {/* Tap Action */}
            <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-emerald-400 font-semibold">
              <span>{mod.actionLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

