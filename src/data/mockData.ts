import { 
  PlotData, 
  ContextualInsight, 
  TelemetryMetric, 
  FarmMemoryEntry, 
  MandiArbitrageItem, 
  SafetyNetModule, 
  ConstraintAnalysisItem 
} from '../types';

export const PLOT_DETAILS: PlotData = {
  id: 'PL-4B-VADGAON',
  surveyNumber: 'Plot 4B (Gat No. 182/2)',
  location: 'Vadgaon Shinde',
  district: 'Pune, Maharashtra',
  areaHa: 1.2, // ~3.0 Acres
  cropName: 'Soybean',
  cropVariety: 'KDS-726 (Phule Sangam)',
  dayNumber: 44,
  growthStage: 'Pod Formation (R3 Stage)',
  sowingDate: '20 Jul 2026',
  satelliteSyncTime: 'Sentinel-2 Synced 2h ago',
  healthIndexNDVI: 0.74,
};

export const UI_TRANSLATIONS = {
  en: {
    appTitle: 'AgriSense Twin',
    tagline: 'Stateful Digital Twin & Farm Second Brain',
    satelliteSynced: 'Sentinel-2 Synced 2h ago',
    activeCadastral: 'Cadastral Survey #182/2',
    secondBrainReasoning: 'Second Brain Contextual Engine',
    decisionAlert: 'Proactive Advisory',
    explainLogic: 'Explain Logic',
    acknowledge: 'Acknowledge',
    acknowledgedStatus: 'Decision Acknowledged',
    operationalConstraints: 'Real-Time Operational Constraints',
    telemetrySub: 'Continuous LoRa Mesh & Hyperlocal Sensor Streams',
    farmMemoryTitle: 'Episodic Farm Memory',
    farmMemorySub: 'Vernacular Audio Logs Parsed to Structured Telemetry',
    viewFullAudit: 'View full season audit trail (14 entries)',
    mandiArbitrageTitle: 'Market Realization & Mandi Arbitrage',
    mandiArbitrageSub: 'Real-time Net Returns Deducting Freight & Cess',
    recommended: 'Recommended (+₹250/q gain)',
    lockTransport: 'Lock Transport Slot',
    futureSafetyTitle: 'Future Scope & Safety-Net Capabilities',
    voicePromptPlaceholder: 'Hold to log farm action in your dialect...',
    listening: 'Listening to your dialect...',
    processingBhashini: 'Processing via Bhashini STT...',
    logSuccess: 'Farm Action Logged Successfully!',
    filterTelemetry: 'Telemetry Filters',
    recentHistory: 'Voice Memory History',
    constraintsMatrixBtn: 'Farming Constraints & Solutions Hub',
    audioListenBtn: 'Read Aloud (Vernacular Audio)',
    tapToDiagnose: 'Tap to Diagnose',
    learnMore: 'Learn More',
    triggerIntimation: 'Auto-Trigger Claim',
    lockCredit: 'Pledge e-NWR Receipt',
    viewNPKCard: 'View Cadastral NPK Balance',
  },
  hi: {
    appTitle: 'एग्रीसेंस ट्विन',
    tagline: 'खेत का दूसरा दिमाग (डिजिटल ट्विन)',
    satelliteSynced: 'सेंटिनल-2 से 2 घंटे पहले सिंक',
    activeCadastral: 'सर्वेक्षण गट क्र. १८२/२',
    secondBrainReasoning: 'स्मार्ट संदर्भ निर्णय इंजन',
    decisionAlert: 'सक्रिय कृषि परामर्श',
    explainLogic: 'तर्क समझें',
    acknowledge: 'स्वीकार करें',
    acknowledgedStatus: 'सलाह स्वीकार की गई',
    operationalConstraints: 'वास्तविक समय परिचालन बाधाएं',
    telemetrySub: 'लोरा मेश और स्थानीय मौसम सेंसर',
    farmMemoryTitle: 'खेत की डिजिटल याददाश्त',
    farmMemorySub: 'बोली में कही आवाज से बना डिजिटल रिकॉर्ड',
    viewFullAudit: 'पूरा सीजन इतिहास देखें (१४ प्रविष्टियां)',
    mandiArbitrageTitle: 'मंडी भाव और शुद्ध मुनाफा विश्लेषण',
    mandiArbitrageSub: 'परिवहन भाड़ा और सेस काटकर असली मुनाफा',
    recommended: 'उत्तम विकल्प (+₹२५०/क्विंटल अधिक)',
    lockTransport: 'वाहन बुक करें',
    futureSafetyTitle: 'सुरक्षा कवच और आधुनिक सुविधाएं',
    voicePromptPlaceholder: 'अपनी भाषा में बोलने के लिए दबाकर रखें...',
    listening: 'आपकी भाषा सुनी जा रही है...',
    processingBhashini: 'भाषिणी AI से विश्लेषण जारी है...',
    logSuccess: 'खेत की प्रविष्टि सफलतापूर्वक दर्ज!',
    filterTelemetry: 'फ़िल्टर विकल्प',
    recentHistory: 'आवाज का इतिहास',
    constraintsMatrixBtn: 'कृषि समस्या और समाधान मैट्रिक्स',
    audioListenBtn: 'बोलकर सुनाएं',
    tapToDiagnose: 'रोग जांच करें',
    learnMore: 'विस्तार से जानें',
    triggerIntimation: 'बीमा सूचना भेजें',
    lockCredit: 'वेयरहाउस रसीद पर ऋण लें',
    viewNPKCard: 'मृदा स्वास्थ्य कार्ड देखें',
  },
  mr: {
    appTitle: 'अ‍ॅग्रीसेन्स ट्विन',
    tagline: 'शेताचा दुसरा मेंदू (डिजिटल ट्विन)',
    satelliteSynced: 'सेंटिनेल-२ उपग्रहाशी २ तासांपूर्वी सिंक',
    activeCadastral: 'गट क्र. १८२/२ • वडगाव शिंदे',
    secondBrainReasoning: 'सखोल कृषी विश्लेषण व सल्ला',
    decisionAlert: 'तात्काळ शेती सल्ला',
    explainLogic: 'कारण जाणून घ्या',
    acknowledge: 'समजले / मान्य करा',
    acknowledgedStatus: 'सल्ला नोंदवला गेला',
    operationalConstraints: 'थेट शेती मर्यादा व परिस्थिती',
    telemetrySub: 'लोरा मेश आणि स्थानिक हवामान सेन्सर',
    farmMemoryTitle: 'शेताची डिजिटल डायरी (स्मरणपट)',
    farmMemorySub: 'व्हॉइस मेसेजमधून तयार झालेला अधिकृत डेटा',
    viewFullAudit: 'हंगामाचा संपूर्ण इतिहास पहा (१४ नोंदी)',
    mandiArbitrageTitle: 'बाजारभाव व निव्वळ नफा तुलना',
    mandiArbitrageSub: 'वाहतूक खर्च व मार्केट फी वजा करून खरा नफा',
    recommended: 'शिफारस (+₹२५०/क्विंटल अधिक नफा)',
    lockTransport: 'गाडी बुक करा',
    futureSafetyTitle: 'शेतकरी सुरक्षा व प्रगत साधने',
    voicePromptPlaceholder: 'तुमच्या भाषेत शेताची नोंद करण्यासाठी दाबा...',
    listening: 'तुमचा आवाज ऐकत आहे...',
    processingBhashini: 'भाषिणी AI द्वारे प्रक्रिया सुरू आहे...',
    logSuccess: 'शेतातील कामाची नोंद यशस्वी!',
    filterTelemetry: 'माहिती पर्याय',
    recentHistory: 'व्हॉइस नोंदींचा इतिहास',
    constraintsMatrixBtn: 'शेतीमधील अडचणी व संपूर्ण उपाय चार्ट',
    audioListenBtn: 'ऐका (व्हॉइसमध्ये)',
    tapToDiagnose: 'रोग निदान करा',
    learnMore: 'माहिती पहा',
    triggerIntimation: 'विमा क्लेम नोंदवा',
    lockCredit: 'पावतीवर कर्ज घ्या',
    viewNPKCard: 'माती परीक्षण पत्रिका पहा',
  }
};

export const CONTEXTUAL_DECISION: ContextualInsight = {
  id: 'DEC-2026-09-02',
  severity: 'warning',
  title: 'Micro-rain predicted tonight (03:00 AM) + Fungicide logged 24h ago.',
  summary: 'Delay scheduled morning irrigation to prevent root leaching and preserve Mancozeb active barrier on lower canopy leaves.',
  detailedLogic: [
    {
      factor: 'Hyperlocal Precipitation (1x1 km)',
      source: 'ECMWF High-Res Downscaled Model',
      observation: '2.4mm light-to-moderate rain predicted between 02:45 AM and 04:30 AM.',
      impact: 'Will hydrate top 3cm soil layer naturally.'
    },
    {
      factor: 'Recent Chemical Application',
      source: 'WhatsApp Voice Log (Yesterday 04:15 PM)',
      observation: 'Sprayed 250ml Mancozeb 75% WP for leaf spot prevention.',
      impact: 'Fungicide requires 36h rain-fast adhesion. Morning sprinkler irrigation will wash active residue into root zone.'
    },
    {
      factor: 'Root-Zone Volumetric Water Content (VWC)',
      source: 'Panchayat LoRa Node #04 (15cm depth)',
      observation: 'Root moisture currently at 41% (Field capacity optimal zone: 38-44%).',
      impact: 'Zero water stress detected. Additional irrigation will cause anaerobic soil saturation.'
    },
    {
      factor: '3-Phase Power Window Constraint',
      source: 'MSEDCL Feeder SCADA Telemetry',
      observation: 'Grid power active until 01:30 PM today, next cycle tomorrow 08:00 PM.',
      impact: 'Irrigation can be safely deferred to tomorrow evening cycle after rain event passes.'
    }
  ],
  recommendation: 'Keep drip/sprinkler valves closed tomorrow morning. Re-evaluate moisture at 07:00 AM post-rain.',
  audioPrompt: {
    en: 'Advisory for Plot 4B: Micro-rain expected at 3 AM. Because you sprayed Mancozeb yesterday and root moisture is already at forty-one percent, delay your morning watering to protect your crop medicine.',
    hi: 'प्लॉट ४बी के लिए सलाह: आज रात ३:०० बजे हल्की बारिश की संभावना है। चूंकि आपने कल मैंकोजेब का छिड़काव किया था और मिट्टी में ४१% नमी है, इसलिए सुबह पानी देने से बचें ताकि दवा धुल न जाए।',
    mr: 'प्लॉट ४बी साठी महत्त्वाची सूचना: आज रात्री ३ वाजता हलक्या पावसाची शक्यता आहे. तुम्ही काल मॅनकोझेब फवारले आहे आणि मुळांजवळ ४१% ओलावा आहे, त्यामुळे उद्या सकाळचे पाणी देणे टाळा जेणेकरून औषध वाहून जाणार नाही.'
  },
  acknowledged: false
};

export const OPERATIONAL_TELEMETRY: TelemetryMetric[] = [
  {
    id: 'TEL-WEATHER',
    icon: 'CloudRain',
    category: 'Downscaled Micro-Climate',
    primaryValue: '2.4 mm Rain at 03:00 AM',
    secondaryValue: 'Temp: 28°C • Humidity: 84% • Barometer: 1008 hPa',
    statusBadge: '1x1 km ECMWF Grid',
    statusType: 'accent',
    trend: 'Barometric pressure dropping (-2 hPa/3h)',
    nodeInfo: 'Calibrated with Vadgaon AWS Station (Gat 182)',
    signalStrength: '-78 dBm (LoRa Gateway Strong)',
    batteryLevel: '100% Solar-Buffered',
    depthOrLocation: 'North-East Ridge Canopy Sensor',
    idealRange: '0 - 5 mm (Manageable light precipitation)',
    agronomicImpact: 'Light precipitation will wet top 3cm. No runoff or waterlogging expected.',
    audioReadout: {
      en: 'Micro-climate forecast: 2.4 millimeters rain expected around 3 AM. Temperature is 28 degrees, humidity 84 percent.',
      hi: 'मौसम का हाल: रात ३ बजे २.४ मिलीमीटर बारिश का अनुमान। तापमान २८ डिग्री और नमी ८४ प्रतिशत है।',
      mr: 'हवामान अंदाज: रात्री ३ वाजता २.४ मिमी पावसाचा अंदाज आहे. तापमान २८ अंश आणि हवेतील आर्द्रता ८४ टक्के आहे.'
    }
  },
  {
    id: 'TEL-SOIL',
    icon: 'Layers',
    category: 'Sub-Surface Soil & Root Mesh',
    primaryValue: 'Root Moisture: 41%',
    secondaryValue: 'Soil Temp: 24.2°C • EC: 1.1 dS/m • pH: 7.2',
    statusBadge: 'Optimal Range (38-44%)',
    statusType: 'success',
    trend: 'Stable hydration in root zone (+0.4%/24h)',
    nodeInfo: 'Panchayat LoRa Node #04 (15cm depth)',
    signalStrength: '-84 dBm (Stable Mesh Hop)',
    batteryLevel: '94% (LiFePO4 3.2V)',
    depthOrLocation: '15cm Active Root Depth (Zone A)',
    idealRange: '38% – 44% VWC (Field Capacity)',
    agronomicImpact: 'Optimal cellular turgor for pod elongation; zero water stress or saturation.',
    audioReadout: {
      en: 'Root soil moisture is forty-one percent, perfectly in the optimal range. Soil temperature is 24 degrees.',
      hi: 'जड़ों की मिट्टी में नमी ४१ प्रतिशत है, जो बिल्कुल सही है। मिट्टी का तापमान २४ डिग्री है।',
      mr: 'मुळांजवळील मातीचा ओलावा ४१ टक्के असून उत्तम स्थितीत आहे. मातीचे तापमान २४ अंश आहे.'
    }
  },
  {
    id: 'TEL-POWER',
    icon: 'Zap',
    category: 'Power Feeder Schedule',
    primaryValue: '3-Phase Grid: Active',
    secondaryValue: 'Cuts off at 01:30 PM (6h window remaining)',
    statusBadge: 'MSEDCL Feeder 11kV',
    statusType: 'warning',
    trend: 'Voltage steady at 415V across 3 phases',
    nodeInfo: 'Vadgaon Substation SCADA Automated Feed',
    signalStrength: 'Direct Cellular SCADA Gateway',
    batteryLevel: 'Grid Main Line Synchronized',
    depthOrLocation: 'Farm Pump House Circuit #1',
    idealRange: '6h – 8h uninterrupted daytime supply',
    agronomicImpact: 'Pumps can run safely without phase imbalance or low-voltage motor burn risk.',
    audioReadout: {
      en: 'Three phase electricity is currently active and will turn off at 1:30 PM. Six hours window left.',
      hi: 'थ्री-फेज बिजली अभी चालू है और दोपहर १:३० बजे बंद होगी। अभी ६ घंटे बाकी हैं।',
      mr: 'थ्री-फेज वीज सध्या चालू आहे आणि दुपारी १:३० वाजता बंद होईल. ६ तासांचा वेळ शिल्लक आहे.'
    }
  },
  {
    id: 'TEL-LABOR',
    icon: 'Users',
    category: 'Labor Availability Index',
    primaryValue: 'Labor Pool: 25% (Constrained)',
    secondaryValue: 'Local MGNREGA canal work active until Thursday',
    statusBadge: 'Wage: ₹450 / day',
    statusType: 'neutral',
    trend: 'Labor availability will surge to 85% this Friday',
    nodeInfo: 'Gram Panchayat Employment Muster Sync',
    signalStrength: 'Panchayat Registry API Sync',
    batteryLevel: 'Cloud API Updated 1h ago',
    depthOrLocation: 'Vadgaon Shinde Cluster (3km radius)',
    idealRange: 'Min 4 workers for manual weeding or spraying',
    agronomicImpact: 'Defer non-critical manual weeding to Friday when local crew rate normalizes.',
    audioReadout: {
      en: 'Farm labor is currently scarce at twenty-five percent because of ongoing government MGNREGA work till Thursday.',
      hi: 'मजदूरों की उपलब्धता २५ प्रतिशत है क्योंकि गुरुवार तक नरेगा का काम चल रहा है।',
      mr: 'मजूर उपलब्धता सध्या २५ टक्के कमी आहे कारण गुरुवारीपर्यंत गावात मनरेगाची कामे सुरू आहेत.'
    }
  },
  {
    id: 'TEL-BOREWELL',
    icon: 'Droplets',
    category: 'Groundwater & Borewell Telemetry',
    primaryValue: 'Water Column: 210 ft (Safe)',
    secondaryValue: 'Discharge: 1,850 LPH • Aquifer Recovery: 42 min',
    statusBadge: 'Hydro-Static Pressure Gauge',
    statusType: 'success',
    trend: 'Recharge rate increased after last week’s showers',
    nodeInfo: 'Submersible Well Sensor Node #02',
    signalStrength: '-89 dBm (LoRa Long Range)',
    batteryLevel: '88% Solar-Buffered',
    depthOrLocation: 'Borewell #1 (Total Depth: 320 ft)',
    idealRange: 'Above 180 ft head for steady drip irrigation',
    agronomicImpact: 'Abundant water head to support 4 hours of drip cycle when required.',
    audioReadout: {
      en: 'Borewell water level is at two hundred and ten feet. Aquifer recovery is healthy with eighteen hundred liters per hour discharge.',
      hi: 'बोरवेल का जलस्तर २१० फीट पर सुरक्षित है और प्रति घंटे १८५० लीटर पानी मिल रहा है।',
      mr: 'बोअरवेलची पाण्याची पातळी २१० फुटांवर सुरक्षित असून दर तासाला १८५० लिटर पाणी उपसा सुरू आहे.'
    }
  },
  {
    id: 'TEL-CANOPY',
    icon: 'Thermometer',
    category: 'Crop Canopy Micro-Climate',
    primaryValue: 'VPD: 1.4 kPa (Active Transpiration)',
    secondaryValue: 'Canopy Temp: 26.8°C • Leaf Wetness: 0%',
    statusBadge: 'Infrared Radiometer Mesh',
    statusType: 'accent',
    trend: 'Stomata open, healthy photosynthetically active radiation',
    nodeInfo: 'Canopy IR Temperature Sensor #01',
    signalStrength: '-76 dBm (High RSSI)',
    batteryLevel: '98% Solar Harvested',
    depthOrLocation: 'Soybean Upper Foliage Layer',
    idealRange: '0.8 – 1.6 kPa for C3 crop transpiration',
    agronomicImpact: 'Crop is metabolizing nutrients normally with zero heat or drought stress.',
    audioReadout: {
      en: 'Crop canopy vapor pressure deficit is one point four kilopascals. Leaves are dry and transpirating healthily.',
      hi: 'फसल की पत्तियों का तापमान २६.८ डिग्री है और पौधे बिना किसी तनाव के सामान्य रूप से बढ़ रहे हैं।',
      mr: 'पिकाच्या पानांचे तापमान २६.८ अंश असून पाने कोरडी व निरोगी स्थितीत आहेत.'
    }
  }
];

export const EPISODIC_MEMORY: FarmMemoryEntry[] = [
  {
    id: 'MEM-001',
    timestamp: '2026-09-01T16:15:00',
    relativeTime: 'Yesterday, 04:15 PM',
    channel: 'WhatsApp Voice',
    originalSpeechVernacular: 'काल दुपारी सोयाबीनच्या उत्तर पट्ट्यात २५० मिली मॅनकोझेब फवारले आहे (फवारणी पूर्ण झाली).',
    language: 'Marathi (मराठी)',
    audioDuration: '0:07',
    status: 'Verified',
    parsedEntity: {
      date: '1 Sep 2026',
      crop: 'Soybean (KDS-726)',
      action: 'Fungicide Foliar Spray',
      inputMaterial: 'Mancozeb 75% WP',
      quantity: '250 ml in 200L water',
      locationZone: 'North Quadrant (Plot 4B)',
      soilMoistureAtAction: '39% VWC'
    }
  },
  {
    id: 'MEM-002',
    timestamp: '2026-08-30T10:30:00',
    relativeTime: '3 Days Ago, 10:30 AM',
    channel: 'Field Mic',
    originalSpeechVernacular: 'आज ५० किलो डीएपी खत दिले, ओलावा चांगला होता.',
    language: 'Marathi (मराठी)',
    audioDuration: '0:05',
    status: 'Verified',
    parsedEntity: {
      date: '30 Aug 2026',
      crop: 'Soybean (KDS-726)',
      action: 'Basal Fertilizer Application',
      inputMaterial: 'DAP (Diammonium Phosphate 18-46-0)',
      quantity: '50 kg (1 bag)',
      locationZone: 'Full Plot (1.2 ha)',
      soilMoistureAtAction: '38% VWC'
    }
  },
  {
    id: 'MEM-003',
    timestamp: '2026-08-25T08:00:00',
    relativeTime: '8 Days Ago, 08:00 AM',
    channel: 'Satellite Telemetry',
    originalSpeechVernacular: 'उपग्रह डेटाद्वारे पिकामध्ये हिरवेपणा (NDVI 0.74) आणि चांगली वाढ नोंदवली गेली.',
    language: 'Automated Diagnostic',
    audioDuration: '0:00',
    status: 'Automated',
    parsedEntity: {
      date: '25 Aug 2026',
      crop: 'Soybean',
      action: 'Vegetative Canopy Health Check',
      inputMaterial: 'Sentinel-2 Multispectral MSI',
      quantity: 'NDVI Score 0.74',
      locationZone: 'All Cadastral Quadrants',
      soilMoistureAtAction: '42% VWC'
    }
  }
];

export const MANDI_ARBITRAGE: MandiArbitrageItem[] = [
  {
    id: 'MANDI-SHIRUR',
    mandiName: 'APMC Shirur',
    distanceKm: 48,
    quotedPricePerQuintal: 2380,
    freightCostPerQuintal: 120, // Shared small pickup
    apmcCessPerQuintal: 0, // Direct trade window
    netRealizationPerQuintal: 2260,
    gainVsLocalPerQuintal: 250,
    isRecommended: true,
    transitHours: 1.5,
    availableTrucks: 4
  },
  {
    id: 'MANDI-PUNE',
    mandiName: 'APMC Market Yard Pune (Gultekdi)',
    distanceKm: 24,
    quotedPricePerQuintal: 2150,
    freightCostPerQuintal: 140, // City entry congestion surcharge
    apmcCessPerQuintal: 0,
    netRealizationPerQuintal: 2010,
    gainVsLocalPerQuintal: 0,
    isRecommended: false,
    transitHours: 1.0,
    availableTrucks: 8
  },
  {
    id: 'MANDI-LOCAL',
    mandiName: 'Local Village Aggregator (Farmgate)',
    distanceKm: 0,
    quotedPricePerQuintal: 2010,
    freightCostPerQuintal: 0,
    apmcCessPerQuintal: 0,
    netRealizationPerQuintal: 2010,
    gainVsLocalPerQuintal: 0,
    isRecommended: false,
    transitHours: 0,
    availableTrucks: 0
  }
];

export const SAFETY_NET_MODULES: SafetyNetModule[] = [
  {
    id: 'MOD-PEST-SCAN',
    title: 'Visual Leaf Pest Scan',
    subtitle: 'Edge Computer Vision Diagnostic',
    icon: 'Camera',
    statusBadge: 'Beta AI',
    badgeType: 'beta',
    description: 'Instant foliar disease identification (Yellow Mosaic, Rust, Spodoptera) via single tap photo.',
    actionLabel: 'Open Scanner'
  },
  {
    id: 'MOD-PMFBY',
    title: 'PMFBY Auto-Intimation',
    subtitle: 'Parametric Crop Insurance Trigger',
    icon: 'FileShield',
    statusBadge: 'Pre-filled Trigger',
    badgeType: 'live',
    description: 'Autonomous 72h claim trigger pre-filled if hyperlocal rainfall exceeds 65mm in 24h window.',
    actionLabel: 'View Trigger State'
  },
  {
    id: 'MOD-WDRA',
    title: 'WDRA Warehouse Credit',
    subtitle: 'e-NWR Electronic Pledge Loans',
    icon: 'Landmark',
    statusBadge: '7% Interest Subvention',
    badgeType: 'live',
    description: 'Deposit harvested stock in accredited warehouse to get instant 70% pledge loan instead of distress selling.',
    actionLabel: 'Calculate Loan'
  },
  {
    id: 'MOD-SHC',
    title: 'Soil Health Card (SHC) API',
    subtitle: 'Cadastral NPK Soil Balance',
    icon: 'Sparkles',
    statusBadge: 'N:High • P:Norm • Zn:Low',
    badgeType: 'comingSoon',
    description: 'Live sync with government soil grid. Recommends Zinc Sulphate 25kg to unlock phosphorus absorption.',
    actionLabel: 'Inspect Balance'
  }
];

export const FARMING_CONSTRAINTS_MATRIX: ConstraintAnalysisItem[] = [
  // --- 1. COVERED CONSTRAINTS ---
  {
    id: 'C-01',
    domain: 'Meteorology & Microclimate',
    constraintName: 'Unpredictable Hyperlocal Rainfall & Storm Windows',
    category: 'covered',
    description: 'Broad regional forecasts (e.g. Pune district) fail to capture 2-3km convective shower cells, leading to wasted fertilizer and chemical wash-off.',
    currentSolution: '1x1 km Downscaled ECMWF + IMD Radar mesh fused with local Gram Panchayat Automatic Weather Station (AWS) telemetry.',
    dataSourceOrTechnology: 'IMD Doppler Radar, ECMWF HRES model, Open-Meteo downscaling, LoRa edge rain gauges.',
    limitationsAndHonestReality: 'Sudden cloudbursts (<15 min convective burst) have a ~15% statistical forecast error window in tropical monsoons.',
    farmerFirstAction: 'Automatic delay prompts for chemical sprays and scheduled pump runs.'
  },
  {
    id: 'C-02',
    domain: 'Market Realization & Economics',
    constraintName: 'Mandi Price Asymmetry & Distress Farmgate Selling',
    category: 'covered',
    description: 'Middlemen offer low farmgate prices; farmers lack visibility into net profit after paying varying truck freight, loading hamali, and market cess.',
    currentSolution: 'Dynamic Net-Realization Arbitrage Engine calculating net profit per quintal across APMCs (Pune vs Shirur vs Manchar) with real-time shared logistics pooling.',
    dataSourceOrTechnology: 'Agmarknet API, eNAM spot feeds, hyper-local pickup fleet rates via ONDC Logistics.',
    limitationsAndHonestReality: 'High price volatility within a single day if sudden arrivals glut the APMC yard before arrival.',
    farmerFirstAction: 'Lock transport pickup slot directly from dashboard to secure higher net realization.'
  },
  {
    id: 'C-03',
    domain: 'Soil Moisture & Subsurface Agronomy',
    constraintName: 'Over-irrigation / Root Suffocation & Fertilizer Leaching',
    category: 'covered',
    description: 'Flood and sprinkler irrigation based on visual soil surface dryness causes root rot, salinity buildup, and wasted power.',
    currentSolution: 'Subsurface Volumetric Water Content (VWC) LoRa probes at 15cm & 30cm depth synced with evapotranspiration (ET0) curves.',
    dataSourceOrTechnology: 'Capacitive dielectric soil sensors, LoRaWAN mesh, ISRO Bhuvan satellite NDVI canopy moisture.',
    limitationsAndHonestReality: 'Probes represent point-data; stony or variable soil patches require interpolation across cadastral sub-plots.',
    farmerFirstAction: 'Exact hour-by-hour irrigation requirement given in liters/acre rather than guess-work.'
  },
  {
    id: 'C-04',
    domain: 'Grid Infrastructure',
    constraintName: 'Erratic 3-Phase Agricultural Power Windows',
    category: 'covered',
    description: 'DISCOMs supply 3-phase agricultural power in rotating night/day slots (6-8 hrs). Farmers wake up at 2 AM or miss the window.',
    currentSolution: 'Feeder-level SCADA monitoring + automated relay valve triggers during active power windows.',
    dataSourceOrTechnology: 'MSEDCL 11kV substation telemetry, GSM/LoRa smart motor starters.',
    limitationsAndHonestReality: 'Voltage fluctuations (low voltage under 340V) can trip motor thermal overloads even when power is technically active.',
    farmerFirstAction: 'Real-time countdown timer showing remaining power hours and scheduled auto-irrigation alerts.'
  },
  {
    id: 'C-05',
    domain: 'Labor Management',
    constraintName: 'Severe Harvest / Weeding Labor Shortages & Wage Shocks',
    category: 'covered',
    description: 'Laborers shift to government MGNREGA projects or construction, leaving critical weeding/harvest windows unmet.',
    currentSolution: 'Gram Panchayat MGNREGA roster tracking + inter-village worker pool demand aggregation.',
    dataSourceOrTechnology: 'Panchayat public muster rolls, local SHG (Self Help Group) labor coordinator networks.',
    limitationsAndHonestReality: 'Cannot manufacture laborers; can only alert 4 days in advance to re-schedule operations or book custom hiring machinery (CHCs).',
    farmerFirstAction: 'Early warning to hire mechanised weeders/harvesters before labor pool dries up.'
  },
  {
    id: 'C-06',
    domain: 'Risk & Insurance',
    constraintName: '72-Hour PMFBY Crop Loss Intimation Friction',
    category: 'covered',
    description: 'Under PMFBY, farmers must report localized disaster within 72 hours with geotagged photos or lose insurance claims.',
    currentSolution: 'Automated parametric claim trigger that pre-fills the claim form whenever rainfall exceeds 65mm in 24h or hailstorm is recorded.',
    dataSourceOrTechnology: 'PMFBY National Crop Insurance Portal API, IMD rainfall threshold triggers, Cadastral GIS.',
    limitationsAndHonestReality: 'Physical survey by loss assessor / insurance company agent is still legally required for settlement approval.',
    farmerFirstAction: 'One-tap pre-filled submission generated before the 72-hour statutory deadline expires.'
  },

  // --- 2. UNCOVERED & EMERGING CONSTRAINTS ---
  {
    id: 'C-07',
    domain: 'Groundwater Hydrology',
    constraintName: 'Rapid Aquifer Depletion & Borewell Discharge Drop',
    category: 'emerging',
    description: 'Borewells run dry mid-season because neighboring farms pump from the same fractured basalt aquifer simultaneously.',
    currentSolution: 'NASA GRACE gravity satellite groundwater anomalies + Central Ground Water Board (CGWB) telemetry + community aquifer stress index.',
    dataSourceOrTechnology: 'GRACE-FO, CGWB open data, Hydrogeology basalt layer mapping, pressure transducer depth gauges.',
    limitationsAndHonestReality: 'Basalt hard-rock aquifers are highly fragmented; deep fracture connectivity cannot be mapped without expensive seismic or resistivity surveys.',
    farmerFirstAction: 'Community water budgeting: advise shift to low-water pulse crops when regional aquifer recharge index is critical.'
  },
  {
    id: 'C-08',
    domain: 'Input Quality & Agri-Chemical Authenticity',
    constraintName: 'Counterfeit / Substandard Pesticides and Fertilizers',
    category: 'emerging',
    description: 'An estimated 20-25% of agri-chemicals in rural markets are spurious or diluted, failing to protect crops.',
    currentSolution: 'Batch-level cryptographic QR verification against manufacturer ERP under the PM-PRANAM portal.',
    dataSourceOrTechnology: 'Department of Fertilizers integrated Fertilizer Management System (iFMS), GS1 DataMatrix barcodes.',
    limitationsAndHonestReality: 'Requires smartphone camera scanning at the retailer counter before breaking the seal; fake packaging can mimic genuine codes.',
    farmerFirstAction: 'In-app barcode scanner verifies batch expiry, license validity, and active ingredient percentage.'
  },
  {
    id: 'C-09',
    domain: 'Post-Harvest Quality Loss',
    constraintName: 'In-Transit Perishability & Moisture Spoilage',
    category: 'emerging',
    description: 'Grains stored in damp gunny bags develop aflatoxins; vegetables rot in unventilated trucks during transit delays.',
    currentSolution: 'Low-cost BLE humidity/temperature tags inserted into grain bags / crates linked to WDRA warehouse e-NWR pledge financing.',
    dataSourceOrTechnology: 'BLE beacon sensors, WDRA e-NWR portal, cold-chain GPS tracker data.',
    limitationsAndHonestReality: 'Requires sensor hardware investment (~₹200/tag) which marginal farmers cannot afford without cooperative subsidy.',
    farmerFirstAction: 'Immediate alert if bag moisture exceeds 14% to prevent mold and price discounting at the mandi.'
  },

  // --- 3. HONEST PHYSICAL LIMITATIONS (WHAT SOFTWARE CANNOT SOLVE ALONE) ---
  {
    id: 'C-10',
    domain: 'Physical Boundary & Climate Physics',
    constraintName: 'Complete Aquifer Exhaustion (Zero Water in Region)',
    category: 'honest_limit',
    description: 'When regional rainfall fails across consecutive seasons and underground aquifers are 100% dry, software cannot generate water.',
    currentSolution: 'Software cannot solve this. Physical infrastructure is mandatory: artificial recharge shafts, continuous contour trenches, farm ponds (Shet-tale), and micro-drip adoption.',
    dataSourceOrTechnology: 'Physical Civil & Watershed Engineering (Not software).',
    limitationsAndHonestReality: 'Honest Truth: No algorithm or AI model can irrigate crops without physical water storage or canal supply.',
    farmerFirstAction: 'Crop choice pivot: Abandon water-heavy sugarcane/paddy; sow drought-tolerant millets (Bajra/Jowar) or pigeon pea.'
  },
  {
    id: 'C-11',
    domain: 'Physical Boundary & Extreme Weather',
    constraintName: 'Severe Hailstorms (Gara) & Wind Lodging',
    category: 'honest_limit',
    description: '30mm hailstones destroy standing pomegranate, grapes, and soybean pods within 5 minutes.',
    currentSolution: 'Software can provide a 2 to 4 hour Doppler radar alert. However, physical mitigation requires anti-hail net structures or polyhouse tunnels.',
    dataSourceOrTechnology: 'Physical protective netting and insurance hedge.',
    limitationsAndHonestReality: 'Honest Truth: Standing open-field crops cannot be shielded from kinetic hail damage through digital telemetry alone.',
    farmerFirstAction: 'Pre-storm emergency harvest of mature pods/fruits + instant PMFBY claim preparation.'
  },
  {
    id: 'C-12',
    domain: 'Geopolitical & Macroeconomic Shocks',
    constraintName: 'Sudden Export Bans / Zero-Duty Import Policy Shifts',
    category: 'honest_limit',
    description: 'Sudden government bans on onion exports or duty-free yellow pea imports crash domestic prices overnight.',
    currentSolution: 'Software cannot alter government trade policy. Solution is financial buffering via WDRA warehouse storage credit (e-NWR) to hold stock until markets recover.',
    dataSourceOrTechnology: 'WDRA Warehousing, NCDEX forward contracts.',
    limitationsAndHonestReality: 'Honest Truth: Perishable commodities (tomatoes, green chilies) cannot be stored in ordinary warehouses; price crashes result in unavoidable loss without processing plants.',
    farmerFirstAction: 'Pledge non-perishable harvest in WDRA accredited godown to obtain 70% immediate liquidity at 7% subsidized interest.'
  },
  {
    id: 'C-13',
    domain: 'Agronomy & Soil Physics',
    constraintName: 'Subsoil Hardpan & Deep Compaction',
    category: 'honest_limit',
    description: 'Repeated shallow tractor rotavator tilling creates an impenetrable hardpan at 20cm depth, suffocating taproots.',
    currentSolution: 'Software can identify poor drainage and stunted root NDVI, but physical subsoiler chisel ploughing is required to physically shatter the hardpan.',
    dataSourceOrTechnology: 'Deep chisel subsoiling machinery, organic carbon replenishment.',
    limitationsAndHonestReality: 'Honest Truth: Deep compaction cannot be cured with chemical inputs or software warnings alone; heavy diesel mechanical intervention is required.',
    farmerFirstAction: 'Book custom hiring tractor with subsoiler shank before next kharif sowing.'
  }
];

export const VERNACULAR_VOICE_DEMOS = [
  {
    id: 'DEMO-1',
    lang: 'mr',
    langLabel: 'मराठी (Marathi)',
    transcript: 'आज सकाळी उसाच्या पिकाला दोन पोते युरिया खत दिले आणि ड्रिप चालू केले.',
    extractedEntity: {
      date: 'Today (Today 09:30 AM)',
      crop: 'Sugarcane (Co-86032)',
      action: 'Fertilizer Application & Drip Irrigation',
      inputMaterial: 'Urea (46% Nitrogen)',
      quantity: '100 kg (2 bags)',
      locationZone: 'Sugarcane Plot (East Section)',
      soilMoistureAtAction: '37% VWC (Increased to 43% post-irrigation)'
    },
    audioResponse: 'नोंद यशस्वी झाली आहे. उसाच्या पिकासाठी दोन पोते युरिया नोंदवले गेले.'
  },
  {
    id: 'DEMO-2',
    lang: 'mr',
    langLabel: 'मराठी (Marathi)',
    transcript: 'सोयाबीनवर किडीचा प्रादुर्भाव दिसतोय, उद्या सकाळी कीटकनाशक फवारणी करायची आहे.',
    extractedEntity: {
      date: 'Tomorrow Scheduled',
      crop: 'Soybean (KDS-726)',
      action: 'Scheduled Insecticide Spray',
      inputMaterial: 'Chlorantraniliprole 18.5% SC',
      quantity: '60 ml / acre',
      locationZone: 'North Quadrant (Plot 4B)',
      soilMoistureAtAction: 'Pending weather check'
    },
    audioResponse: 'कीटकनाशक फवारणीचे नियोजन नोंदवले गेले. हवामान तपासून आठवण करून दिली जाईल.'
  },
  {
    id: 'DEMO-3',
    lang: 'hi',
    langLabel: 'हिंदी (Hindi)',
    transcript: 'आज शाम को कपास के खेत में पांच सौ लीटर जीवामृत डाला गया है।',
    extractedEntity: {
      date: 'Today Evening',
      crop: 'Cotton / Organic Plot',
      action: 'Bio-Nutrient Drenching',
      inputMaterial: 'Jeevamrut (Organic Microbes)',
      quantity: '500 Litres via Venturi',
      locationZone: 'Organic Demo Patch',
      soilMoistureAtAction: '40% VWC'
    },
    audioResponse: 'कपास के खेत में ५०० लीटर जीवामृत की प्रविष्टि दर्ज कर ली गई है।'
  },
  {
    id: 'DEMO-4',
    lang: 'en',
    langLabel: 'English',
    transcript: 'Harvested 40 quintals of soybean today, ready for transport to Shirur APMC.',
    extractedEntity: {
      date: 'Today',
      crop: 'Soybean (KDS-726)',
      action: 'Harvesting & Market Preparation',
      inputMaterial: 'Harvested Pods (Graded)',
      quantity: '40 Quintals',
      locationZone: 'Plot 4B Full Area',
      soilMoistureAtAction: 'Grain Moisture: 11.8%'
    },
    audioResponse: 'Soybean harvest of 40 quintals recorded. Ready for APMC Shirur transport booking.'
  }
];
