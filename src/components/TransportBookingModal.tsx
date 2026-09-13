import React, { useState } from 'react';
import { 
  X, 
  Truck, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Clock, 
  Phone, 
  ArrowRight,
  ShieldCheck,
  Package
} from 'lucide-react';
import { MandiArbitrageItem, Language } from '../types';

interface TransportBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  mandi: MandiArbitrageItem | null;
  language: Language;
}

export const TransportBookingModal: React.FC<TransportBookingModalProps> = ({
  isOpen,
  onClose,
  mandi,
  language
}) => {
  const [quantityQuintals, setQuantityQuintals] = useState<number>(40);
  const [pickupSlot, setPickupSlot] = useState('Tomorrow 05:00 AM (Early Market Window)');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen || !mandi) return null;

  const totalSpotGross = mandi.quotedPricePerQuintal * quantityQuintals;
  const totalFreight = mandi.freightCostPerQuintal * quantityQuintals;
  const totalNetPayout = totalSpotGross - totalFreight;

  const handleConfirmBooking = () => {
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl p-6 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <Truck className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-100">
              Lock Transport Slot • {mandi.mandiName}
            </h3>
            <p className="text-xs text-zinc-400">
              ONDC Agri-Logistics Shared Freight Pool
            </p>
          </div>
        </div>

        {isBooked ? (
          <div className="py-10 text-center space-y-3 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-base font-bold text-zinc-100">
              Transport Slot Successfully Locked!
            </h4>
            <p className="text-xs text-zinc-400 max-w-xs mx-auto">
              Driver <strong>Sanjay Patil (Tata 407 • MH 12 QX 4921)</strong> will arrive at Plot 4B at {pickupSlot.split(' ')[1]}.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs">
            {/* Quantity Slider */}
            <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-white/5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-zinc-300">Harvest Quantity to Transport:</span>
                <span className="font-bold text-sm text-emerald-400 font-mono">{quantityQuintals} Quintals</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={quantityQuintals}
                onChange={(e) => setQuantityQuintals(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-zinc-500">
                <span>10 q</span>
                <span>50 q</span>
                <span>100 q</span>
              </div>
            </div>

            {/* Pickup Window */}
            <div className="space-y-1.5">
              <label className="font-medium text-zinc-400 block">Select Farmgate Pickup Window:</label>
              <select
                value={pickupSlot}
                onChange={(e) => setPickupSlot(e.target.value)}
                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
              >
                <option>Tomorrow 05:00 AM (Early Market Auction Window)</option>
                <option>Tomorrow 08:30 AM (Second Session)</option>
                <option>Today 06:00 PM (Overnight Dispatch)</option>
              </select>
            </div>

            {/* Economics Breakdown Card */}
            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-emerald-500/20 space-y-2">
              <div className="flex justify-between text-zinc-400">
                <span>Estimated Gross Realization:</span>
                <span className="font-mono text-zinc-200">₹{totalSpotGross.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Shared Freight (₹{mandi.freightCostPerQuintal}/q):</span>
                <span className="font-mono text-amber-400">- ₹{totalFreight.toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                <span className="font-semibold text-zinc-100">Estimated Net Payout to Bank:</span>
                <span className="text-base font-bold text-emerald-400 font-mono">
                  ₹{totalNetPayout.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Safety badge */}
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950/40 border border-white/5 text-[11px] text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Includes verified weighing scale assurance at farmgate and in-transit GPS tracking.</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmBooking}
                className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold shadow-lg shadow-emerald-500/20 transition-all"
              >
                Confirm Transport Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
