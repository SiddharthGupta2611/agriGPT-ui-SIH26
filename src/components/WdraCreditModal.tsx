import React, { useState } from 'react';
import { 
  X, 
  Landmark, 
  CheckCircle2, 
  Percent, 
  ShieldCheck, 
  Building2, 
  ArrowRight,
  TrendingDown
} from 'lucide-react';
import { Language } from '../types';

interface WdraCreditModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const WdraCreditModal: React.FC<WdraCreditModalProps> = ({ isOpen, onClose, language }) => {
  const [quintals, setQuintals] = useState<number>(40);
  const [pledgeMonths, setPledgeMonths] = useState<number>(3);
  const spotPrice = 2260; // APMC Shirur price
  const totalValue = quintals * spotPrice;
  const pledgeLoanAmount = totalValue * 0.70; // 70% LTV
  const monthlyStorageFee = quintals * 8; // ₹8/bag/month
  const interestRate = 0.07; // 7% subsidized interest subvention
  const totalInterest = (pledgeLoanAmount * interestRate * (pledgeMonths / 12));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl p-6 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
            <Landmark className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-100">
              WDRA Warehouse Pledge Loan (e-NWR)
            </h3>
            <p className="text-xs text-zinc-400">
              Avoid Distress Sale • Get 70% Immediate Bank Credit at 7% Interest
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs">
          {/* Slider for Produce to Deposit */}
          <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-white/5 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-zinc-300">Produce Deposited in WDRA Godown:</span>
              <span className="font-bold text-sm text-amber-400 font-mono">{quintals} Quintals</span>
            </div>
            <input
              type="range"
              min="10"
              max="150"
              step="5"
              value={quintals}
              onChange={(e) => setQuintals(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          {/* Loan Calculator Summary */}
          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-amber-500/20 space-y-2">
            <div className="flex justify-between text-zinc-400">
              <span>Underlying Crop Market Value:</span>
              <span className="font-mono text-zinc-200">₹{totalValue.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Instant Bank Loan (70% LTV):</span>
              <span className="font-mono text-emerald-400 font-bold text-sm">
                ₹{pledgeLoanAmount.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Subsidized Interest (7% p.a. for {pledgeMonths} mo):</span>
              <span className="font-mono text-zinc-300">₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Accredited Warehouse Storage Fee:</span>
              <span className="font-mono text-zinc-300">₹{(monthlyStorageFee * pledgeMonths).toLocaleString('en-IN')}</span>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs">
              <span className="font-semibold text-zinc-100">Projected Market Gain after 3 Months:</span>
              <span className="font-mono text-emerald-400 font-bold">
                +₹16,400 Gain
              </span>
            </div>
          </div>

          {/* Partner Warehouses */}
          <div className="p-3 rounded-xl bg-zinc-950/40 border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-zinc-300 font-semibold">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Nearest WDRA Accredited Godown:</span>
            </div>
            <p className="text-[11px] text-zinc-400">
              Maharashtra State Warehousing Corp (MSWC) • Shirur Hub (6.2 km) • Available Space: 450 MT
            </p>
          </div>

          <div className="flex gap-2 pt-1">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium transition-all"
            >
              Close
            </button>
            <button
              onClick={() => {
                alert('Pledge loan request initiated with State Bank of India Agri Branch.');
                onClose();
              }}
              className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5"
            >
              <Landmark className="w-3.5 h-3.5" />
              <span>Generate e-NWR Receipt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
