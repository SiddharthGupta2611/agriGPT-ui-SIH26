import React, { useState } from 'react';
import { 
  PLOT_DETAILS, 
  CONTEXTUAL_DECISION, 
  OPERATIONAL_TELEMETRY, 
  EPISODIC_MEMORY, 
  MANDI_ARBITRAGE, 
  SAFETY_NET_MODULES,
  UI_TRANSLATIONS 
} from './data/mockData';
import { 
  Language, 
  FarmMemoryEntry, 
  MandiArbitrageItem, 
  ContextualInsight,
  TelemetryMetric
} from './types';

// Components
import { Header } from './components/Header';
import { MobileHeroAlert } from './components/MobileHeroAlert';
import { VisualIconBento } from './components/VisualIconBento';
import { QuickActionPills } from './components/QuickActionPills';
import { BottomTabBar, ActiveTab } from './components/BottomTabBar';
import { TelemetryGrid } from './components/TelemetryGrid';
import { EpisodicMemoryCard } from './components/EpisodicMemoryCard';
import { MandiArbitrageCard } from './components/MandiArbitrageCard';
import { SafetyNetModules } from './components/SafetyNetModules';
import { ConstraintsMatrixView } from './components/ConstraintsMatrixView';

// Modals
import { VoiceLogModal } from './components/VoiceLogModal';
import { ExplainLogicModal } from './components/ExplainLogicModal';
import { ConstraintsMatrixModal } from './components/ConstraintsMatrixModal';
import { TransportBookingModal } from './components/TransportBookingModal';
import { LeafPestScannerModal } from './components/LeafPestScannerModal';
import { PmfbyModal } from './components/PmfbyModal';
import { WdraCreditModal } from './components/WdraCreditModal';
import { SoilHealthCardModal } from './components/SoilHealthCardModal';
import { AuditTrailModal } from './components/AuditTrailModal';
import { FilterModal } from './components/FilterModal';
import { TelemetryDetailModal } from './components/TelemetryDetailModal';

import { playVernacularSpeech, stopSpeech } from './utils/audio';
import { Smartphone, Monitor, Wifi, Battery, Signal, Sparkles, Sprout, ArrowRight } from 'lucide-react';

export function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [insight, setInsight] = useState<ContextualInsight>(CONTEXTUAL_DECISION);
  const [memoryList, setMemoryList] = useState<FarmMemoryEntry[]>(EPISODIC_MEMORY);
  const [isSpeakingFullPage, setIsSpeakingFullPage] = useState(false);

  // Tab State: 'home' | 'sensors' | 'mandi' | 'diary' | 'constraints'
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  // Device Frame View: 'mobile' (Apple iPhone frame) vs 'fullscreen'
  const [viewMode, setViewMode] = useState<'mobile' | 'fullscreen'>('mobile');

  // Modal States
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isExplainModalOpen, setIsExplainModalOpen] = useState(false);
  const [isConstraintsModalOpen, setIsConstraintsModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  
  // Specific Module Modals
  const [selectedMandiForBooking, setSelectedMandiForBooking] = useState<MandiArbitrageItem | null>(null);
  const [selectedTelemetryDetail, setSelectedTelemetryDetail] = useState<TelemetryMetric | null>(null);
  const [isPestScannerOpen, setIsPestScannerOpen] = useState(false);
  const [isPmfbyOpen, setIsPmfbyOpen] = useState(false);
  const [isWdraOpen, setIsWdraOpen] = useState(false);
  const [isShcOpen, setIsShcOpen] = useState(false);

  // Full Page Speech
  const handleToggleFullSpeech = () => {
    if (isSpeakingFullPage) {
      stopSpeech();
      setIsSpeakingFullPage(false);
      return;
    }

    setIsSpeakingFullPage(true);
    const text = insight.audioPrompt[language];
    playVernacularSpeech(
      text,
      language,
      () => setIsSpeakingFullPage(true),
      () => setIsSpeakingFullPage(false)
    );
  };

  const handleAcknowledgeInsight = () => {
    setInsight(prev => ({ ...prev, acknowledged: !prev.acknowledged }));
  };

  const handleSaveNewMemory = (newEntry: FarmMemoryEntry) => {
    setMemoryList(prev => [newEntry, ...prev]);
  };

  // Bento Tile Handlers
  const handleOpenWeather = () => {
    const w = OPERATIONAL_TELEMETRY.find(t => t.id === 'TEL-WEATHER');
    if (w) setSelectedTelemetryDetail(w);
  };

  const handleOpenSoil = () => {
    const s = OPERATIONAL_TELEMETRY.find(t => t.id === 'TEL-SOIL');
    if (s) setSelectedTelemetryDetail(s);
  };

  const handleOpenPower = () => {
    const p = OPERATIONAL_TELEMETRY.find(t => t.id === 'TEL-POWER');
    if (p) setSelectedTelemetryDetail(p);
  };

  const handleOpenLabor = () => {
    const l = OPERATIONAL_TELEMETRY.find(t => t.id === 'TEL-LABOR');
    if (l) setSelectedTelemetryDetail(l);
  };

  // Core Mobile App Content
  const AppContent = (
    <div className="min-h-full bg-zinc-950/80 backdrop-blur-md text-zinc-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200 relative pb-28">
      {/* Top Mobile Header */}
      <Header
        plot={PLOT_DETAILS}
        language={language}
        onLanguageChange={setLanguage}
        isSpeaking={isSpeakingFullPage}
        onToggleSpeech={handleToggleFullSpeech}
        onOpenConstraintsHub={() => setIsConstraintsModalOpen(true)}
      />

      {/* Main Tab Screen Switcher */}
      <main className="flex-1 w-full max-w-xl mx-auto px-3.5 sm:px-5 py-3 space-y-4">
        {activeTab === 'home' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* 1. Big Visual Hero Decision Alert */}
            <MobileHeroAlert
              insight={insight}
              language={language}
              onExplainLogic={() => setIsExplainModalOpen(true)}
              onAcknowledge={handleAcknowledgeInsight}
            />

            {/* 2. Visual Bento Grid of Tap-to-Open Icons */}
            <VisualIconBento
              telemetry={OPERATIONAL_TELEMETRY}
              mandiList={MANDI_ARBITRAGE}
              language={language}
              onOpenWeather={handleOpenWeather}
              onOpenSoil={handleOpenSoil}
              onOpenPower={handleOpenPower}
              onOpenLabor={handleOpenLabor}
              onOpenMandi={() => setActiveTab('mandi')}
              onOpenSafety={() => setIsPmfbyOpen(true)}
            />

            {/* 3. 4 Large Quick Action Tool Buttons */}
            <QuickActionPills
              language={language}
              onOpenScanner={() => setIsPestScannerOpen(true)}
              onOpenPmfby={() => setIsPmfbyOpen(true)}
              onOpenWdra={() => setIsWdraOpen(true)}
              onOpenShc={() => setIsShcOpen(true)}
            />

            {/* 4. Recent Farm Diary Card Preview */}
            <div className="rounded-2xl p-3.5 bg-zinc-900/70 backdrop-blur-xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-200">Recent Voice Diary</span>
                <button
                  onClick={() => setActiveTab('diary')}
                  className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1 hover:underline"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {memoryList.slice(0, 1).map((item) => (
                <div key={item.id} className="p-2.5 rounded-xl bg-zinc-950/60 border border-white/5 text-xs flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="font-semibold text-zinc-200 block truncate">{item.parsedEntity.action}</span>
                    <span className="text-[10px] text-zinc-400 block truncate">{item.parsedEntity.quantity} • {item.relativeTime}</span>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sensors' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <TelemetryGrid
              telemetry={OPERATIONAL_TELEMETRY}
              language={language}
              onSelectMetric={(metric) => setSelectedTelemetryDetail(metric)}
            />
          </div>
        )}

        {activeTab === 'mandi' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <MandiArbitrageCard
              mandiList={MANDI_ARBITRAGE}
              language={language}
              onLockTransport={(mandi) => setSelectedMandiForBooking(mandi)}
            />
          </div>
        )}

        {activeTab === 'diary' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <EpisodicMemoryCard
              memoryList={memoryList}
              language={language}
              onOpenAuditTrail={() => setIsAuditModalOpen(true)}
            />
          </div>
        )}

        {activeTab === 'constraints' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Inline 13-Vector Constraints Explorer */}
            <ConstraintsMatrixView
              language={language}
              onOpenModal={() => setIsConstraintsModalOpen(true)}
            />

            {/* Next-Gen Safety Net Capabilities */}
            <SafetyNetModules
              modules={SAFETY_NET_MODULES}
              language={language}
              onOpenModule={(id) => {
                if (id === 'MOD-PEST-SCAN') setIsPestScannerOpen(true);
                if (id === 'MOD-PMFBY') setIsPmfbyOpen(true);
                if (id === 'MOD-WDRA') setIsWdraOpen(true);
                if (id === 'MOD-SHC') setIsShcOpen(true);
              }}
            />
          </div>
        )}
      </main>

      {/* Mobile Bottom Tab Bar & Glowing Siri Mic Orb */}
      <BottomTabBar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenVoice={() => setIsVoiceModalOpen(true)}
        language={language}
      />

      {/* Modals */}
      <VoiceLogModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        language={language}
        onSaveNewEntry={handleSaveNewMemory}
      />

      <ExplainLogicModal
        isOpen={isExplainModalOpen}
        onClose={() => setIsExplainModalOpen(false)}
        insight={insight}
        language={language}
      />

      <ConstraintsMatrixModal
        isOpen={isConstraintsModalOpen}
        onClose={() => setIsConstraintsModalOpen(false)}
        language={language}
      />

      <TransportBookingModal
        isOpen={!!selectedMandiForBooking}
        onClose={() => setSelectedMandiForBooking(null)}
        mandi={selectedMandiForBooking}
        language={language}
      />

      <LeafPestScannerModal
        isOpen={isPestScannerOpen}
        onClose={() => setIsPestScannerOpen(false)}
        language={language}
      />

      <PmfbyModal
        isOpen={isPmfbyOpen}
        onClose={() => setIsPmfbyOpen(false)}
        language={language}
      />

      <WdraCreditModal
        isOpen={isWdraOpen}
        onClose={() => setIsWdraOpen(false)}
        language={language}
      />

      <SoilHealthCardModal
        isOpen={isShcOpen}
        onClose={() => setIsShcOpen(false)}
        language={language}
      />

      <AuditTrailModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        memoryList={memoryList}
        language={language}
      />

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        language={language}
      />

      <TelemetryDetailModal
        isOpen={!!selectedTelemetryDetail}
        onClose={() => setSelectedTelemetryDetail(null)}
        metric={selectedTelemetryDetail}
        language={language}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-start text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Device Simulator Controller Bar */}
      <nav className="w-full bg-zinc-900/90 backdrop-blur-md border-b border-white/10 px-4 py-2 flex items-center justify-between z-50 text-xs shadow-md">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-zinc-100 flex items-center gap-1.5">
            <Sprout className="w-3.5 h-3.5 text-emerald-400" />
            AgriSense Twin
          </span>
          <span className="hidden sm:inline text-zinc-500">•</span>
          <span className="hidden sm:inline text-zinc-400 font-mono text-[11px]">
            Farmer-First Mobile Dashboard
          </span>
        </div>

        {/* Viewport Mode Switcher */}
        <div className="flex items-center p-0.5 rounded-full bg-zinc-950 border border-white/10">
          <button
            onClick={() => setViewMode('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
              viewMode === 'mobile'
                ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Phone</span>
          </button>
          <button
            onClick={() => setViewMode('fullscreen')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
              viewMode === 'fullscreen'
                ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Fullscreen</span>
          </button>
        </div>
      </nav>

      {/* Main Rendering View */}
      {viewMode === 'mobile' ? (
        <div className="flex-1 w-full flex items-center justify-center p-2 sm:p-5 md:p-6 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
          {/* Apple iPhone 16 Pro Device Frame */}
          <div className="relative w-full max-w-[400px] h-[820px] rounded-[48px] bg-zinc-900 p-2.5 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_0_10px_#27272a,0_0_0_12px_#3f3f46] border border-white/20 flex flex-col overflow-hidden">
            {/* iPhone Top Notch / Dynamic Island Bar */}
            <div className="relative w-full h-7 bg-zinc-950 rounded-t-[38px] px-5 pt-1 flex items-center justify-between text-[11px] font-semibold text-zinc-300 z-50 shrink-0 select-none">
              <span>9:41</span>
              {/* Dynamic Island Capsule */}
              <div className="w-20 h-4 bg-black rounded-full mx-auto flex items-center justify-center gap-1.5 border border-zinc-800/80 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-800" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="flex items-center gap-1 text-zinc-400">
                <Signal className="w-2.5 h-2.5 text-zinc-300" />
                <Wifi className="w-2.5 h-2.5 text-zinc-300" />
                <Battery className="w-3 h-3 text-zinc-300" />
              </div>
            </div>

            {/* Inner Mobile Screen Viewport */}
            <div className="flex-1 w-full bg-zinc-950 overflow-y-auto overflow-x-hidden relative scroll-smooth rounded-b-[38px]">
              {AppContent}

              {/* iPhone Home Indicator Swipe Bar */}
              <div className="sticky bottom-0.5 inset-x-0 flex justify-center py-1 pointer-events-none z-50">
                <div className="w-28 h-1 bg-white/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex-1 max-w-3xl mx-auto">
          {AppContent}
        </div>
      )}
    </div>
  );
}

export default App;
