export type Language = 'en' | 'hi' | 'mr';

export interface PlotData {
  id: string;
  surveyNumber: string;
  location: string;
  district: string;
  areaHa: number;
  cropName: string;
  cropVariety: string;
  dayNumber: number;
  growthStage: string;
  sowingDate: string;
  satelliteSyncTime: string;
  healthIndexNDVI: number;
}

export interface ContextualInsight {
  id: string;
  severity: 'warning' | 'critical' | 'optimal' | 'info';
  title: string;
  summary: string;
  detailedLogic: {
    factor: string;
    source: string;
    observation: string;
    impact: string;
  }[];
  recommendation: string;
  audioPrompt: {
    en: string;
    hi: string;
    mr: string;
  };
  acknowledged: boolean;
}

export interface TelemetryMetric {
  id: string;
  icon: string;
  category: string;
  primaryValue: string;
  secondaryValue: string;
  statusBadge: string;
  statusType: 'success' | 'warning' | 'neutral' | 'accent' | 'danger';
  trend?: string;
  nodeInfo?: string;
  signalStrength?: string;
  batteryLevel?: string;
  depthOrLocation?: string;
  idealRange?: string;
  agronomicImpact?: string;
  audioReadout: {
    en: string;
    hi: string;
    mr: string;
  };
}

export interface FarmMemoryEntry {
  id: string;
  timestamp: string;
  relativeTime: string;
  channel: 'WhatsApp Voice' | 'Field Mic' | 'Satellite Telemetry' | 'Manual';
  originalSpeechVernacular: string;
  language: string;
  audioDuration: string;
  status: 'Verified' | 'Pending Audit' | 'Automated';
  parsedEntity: {
    date: string;
    crop: string;
    action: string;
    inputMaterial: string;
    quantity: string;
    locationZone: string;
    soilMoistureAtAction?: string;
  };
}

export interface MandiArbitrageItem {
  id: string;
  mandiName: string;
  distanceKm: number;
  quotedPricePerQuintal: number;
  freightCostPerQuintal: number;
  apmcCessPerQuintal: number;
  netRealizationPerQuintal: number;
  gainVsLocalPerQuintal: number;
  isRecommended: boolean;
  transitHours: number;
  availableTrucks: number;
}

export interface SafetyNetModule {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  statusBadge: string;
  badgeType: 'beta' | 'live' | 'comingSoon';
  description: string;
  actionLabel: string;
}

export interface ConstraintAnalysisItem {
  id: string;
  domain: string;
  constraintName: string;
  category: 'covered' | 'emerging' | 'honest_limit';
  description: string;
  currentSolution: string;
  dataSourceOrTechnology: string;
  limitationsAndHonestReality: string;
  farmerFirstAction: string;
}
