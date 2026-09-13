import React from 'react';
import { 
  TrendingUp, 
  Truck, 
  CheckCircle2, 
  ArrowUpRight, 
  Scale, 
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';
import { MandiArbitrageItem, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';

interface MandiArbitrageCardProps {
  mandiList: MandiArbitrageItem[];
  language: Language;
  onLockTransport: (mandi: MandiArbitrageItem) => void;
}

export const MandiArbitrageCard: React.FC<MandiArbitrageCardProps> = ({
  mandiList,
  language,
  onLockTransport
}) => {
  const t = UI_TRANSLATIONS[language];
  const recommendedMandi = mandiList.find((m) => m.isRecommended) || mandiList[0];

  return (
    <section className="rounded-3xl p-5 sm:p-6 bg-zinc-900/70 backdrop-blur-2xl border border-white/[0.08] shadow-xl flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-zinc-100 tracking-tight">
              {t.mandiArbitrageTitle}
            </h2>
            <p className="text-xs text-zinc-400">
              {t.mandiArbitrageSub}
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 hidden sm:inline">
          Live Agmarknet + Freight Sync
        </span>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {mandiList.filter(m => m.id !== 'MANDI-LOCAL').map((item) => (
          <div
            key={item.id}
            className={`relative rounded-2xl p-4 transition-all flex flex-col justify-between ${
              item.isRecommended
                ? 'bg-gradient-to-b from-emerald-950/40 to-zinc-950/80 border-2 border-emerald-500/40 shadow-lg shadow-emerald-950/50'
                : 'bg-zinc-950/60 border border-white/[0.06] hover:border-white/10'
            }`}
          >
            {/* Recommended Pill Badge */}
            {item.isRecommended && (
              <div className="absolute -top-3 right-4">
                <span className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3" />
                  {t.recommended}
                </span>
              </div>
            )}

            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {item.mandiName}
                  </h3>
                  <span className="text-xs text-zinc-400">
                    {item.distanceKm} km away • ~{item.transitHours}h transit
                  </span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 my-3 text-xs">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Spot Quoted Price:</span>
                  <span className="font-mono text-zinc-200">₹{item.quotedPricePerQuintal} / q</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3 h-3 text-zinc-500" />
                    Freight & Loading Cost:
                  </span>
                  <span className="font-mono text-amber-400/90">- ₹{item.freightCostPerQuintal} / q</span>
                </div>

                {/* Net Realization Highlight */}
                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="font-medium text-zinc-200">Net Realization:</span>
                  <span className={`text-base font-bold font-mono ${
                    item.isRecommended ? 'text-emerald-400' : 'text-zinc-300'
                  }`}>
                    ₹{item.netRealizationPerQuintal} <span className="text-xs font-normal">/ quintal</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Lock Transport Button */}
            <div className="pt-2">
              <button
                onClick={() => onLockTransport(item)}
                className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  item.isRecommended
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md shadow-emerald-500/20'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-white/10'
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>{t.lockTransport}</span>
                <ChevronRight className="w-3.5 h-3.5 ml-auto" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Local Benchmark Note */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/40 border border-white/[0.04] text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-zinc-500 shrink-0" />
          <span>Local Farmgate Trader benchmark: <strong>₹2,010 / quintal</strong> (Zero transport hassle, but lower profit).</span>
        </div>
        <span className="font-mono text-emerald-400 font-medium hidden sm:inline">
          Save +₹10,000 on 40 quintals
        </span>
      </div>
    </section>
  );
};
