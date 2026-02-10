export interface DroneSpecs {
  flightTime: string;
  maxPayload: string;
  windResistance: string;
  accuracy: string;
  range: string;
  weight: string;
}

export interface Drone {
  id: string;
  name: string;
  type: 'multi-rotor' | 'fixed-wing' | 'vtol';
  typeLabel: string;
  image: string;
  tagline: string;
  specs: DroneSpecs;
  bestFor: string[];
  features: string[];
}

export interface Sensor {
  id: string;
  type: 'lidar' | 'thermal' | 'rgb';
  name: string;
  models: string[];
  icon: string;
  description: string;
  applications: string[];
}

export const drones: Drone[] = [
  {
    id: 'ageagle-ebee-x',
    name: 'AgEagle eBee X',
    type: 'fixed-wing',
    typeLabel: 'Fixed-Wing',
    image: '/images/photos/ebee x.webp',
    tagline: 'Professional fixed-wing for rapid terrain coverage',
    specs: {
      flightTime: '90 minutes',
      maxPayload: '1.2 kg',
      windResistance: '12 m/s',
      accuracy: '±3 cm horizontal (RTK)',
      range: '25 km',
      weight: '1.6 kg',
    },
    bestFor: ['High-altitude terrain mapping', 'Cadastral surveys', 'Large infrastructure projects'],
    features: [
      'Ultra-long flight endurance',
      'Multiple sensor compatibility',
      'RTK/PPK positioning options',
      'Compact and portable design',
    ],
  },
  {
    id: 'matrice-400',
    name: 'DJI Matrice 400',
    type: 'multi-rotor',
    typeLabel: 'Heavy-Lift Enterprise',
    image: '/images/photos/dji matrice 400.webp',
    tagline: 'Engineered for excellence, designed for versatility',
    specs: {
      flightTime: '59 minutes',
      maxPayload: '6.0 kg',
      windResistance: '15 m/s',
      accuracy: '±1 cm + 1 ppm (RTK)',
      range: '25 km (O4 Enterprise)',
      weight: '7.2 kg',
    },
    bestFor: ['Long-endurance emergency response', 'Complex industrial inspection', 'Heavy-payload LiDAR mapping'],
    features: [
      'LiDAR and mmWave radar obstacle sensing',
      'Airborne Relay Video Transmission',
      'IP55 rating',
      'Dual-battery hot-swap system',
    ],
  },
  {
    id: 'wingtraone-gen-ii',
    name: 'WingtraOne GEN II',
    type: 'vtol',
    typeLabel: 'VTOL Fixed-Wing',
    image: '/images/photos/wintra one.webp',
    tagline: 'Best-in-class surveying efficiency for large projects',
    specs: {
      flightTime: '59 minutes',
      maxPayload: '800 g',
      windResistance: '12 m/s',
      accuracy: '±1 cm horizontal (RTK)',
      range: '20 km',
      weight: '6.5 kg',
    },
    bestFor: ['Large commercial surveying projects', 'Agricultural mapping', 'Environmental monitoring'],
    features: [
      'VTOL capability for vertical takeoff/landing',
      'Covers 400 hectares per flight',
      'Swap-in multispectral and thermal sensors',
      'Professional-grade photogrammetry output',
    ],
  },
  {
    id: 'matrice-350-rtk',
    name: 'DJI Matrice 350 RTK',
    type: 'multi-rotor',
    typeLabel: 'Enterprise Multi-Rotor',
    image: '/images/photos/dji matrice 350.webp',
    tagline: 'Professional multi-payload platform for precision surveying',
    specs: {
      flightTime: '55 minutes',
      maxPayload: '2.7 kg',
      windResistance: '12 m/s',
      accuracy: '±1 cm + 1 ppm (RTK)',
      range: '20 km',
      weight: '6.47 kg',
    },
    bestFor: ['Large-scale topographic mapping', 'Industrial infrastructure inspection', 'Multi-sensor LiDAR and photogrammetry'],
    features: [
      'Dual gimbal support for simultaneous sensors',
      'Six-directional obstacle sensing',
      'IP55 weather resistance rating',
      'TimeSync 2.0 for centimeter accuracy',
    ],
  },
  {
    id: 'mavic-4e',
    name: 'DJI Mavic 4E',
    type: 'multi-rotor',
    typeLabel: 'Compact Professional',
    image: '/images/photos/dji mavic 4.webp',
    tagline: 'Portable surveying powerhouse with RTK precision',
    specs: {
      flightTime: '45 minutes',
      maxPayload: 'Integrated Camera',
      windResistance: '12 m/s',
      accuracy: '±5 cm horizontal (RTK)',
      range: '15 km',
      weight: '0.92 kg',
    },
    bestFor: ['Construction site monitoring', 'Mid-scale topographic surveys', 'Rapid deployment missions'],
    features: [
      '20MP mechanical shutter',
      '0.7-second interval shooting',
      'Smart oblique capture',
      'Terrain follow mode',
    ],
  },
  {
    id: 'matrice-300-rtk',
    name: 'DJI Matrice 300 RTK',
    type: 'multi-rotor',
    typeLabel: 'Enterprise Multi-Rotor',
    image: '/images/photos/dji matrice 350.webp',
    tagline: 'Industry-leading inspection and mapping platform',
    specs: {
      flightTime: '55 minutes',
      maxPayload: '2.7 kg',
      windResistance: '15 m/s',
      accuracy: '±1 cm + 1 ppm (RTK)',
      range: '15 km',
      weight: '6.3 kg',
    },
    bestFor: ['Mining and quarrying surveys', 'Long-range corridor mapping', 'Multi-payload missions'],
    features: [
      'Triple gimbal configuration capability',
      'IP45 ingress protection',
      'Advanced AI obstacle avoidance',
      'Hot-swappable batteries for extended operations',
    ],
  },
  {
    id: 'matrice-4e',
    name: 'DJI Matrice 4E',
    type: 'multi-rotor',
    typeLabel: 'Compact Survey Quadcopter',
    image: '/images/photos/dji matrice 4e.webp',
    tagline: 'Precision survey drone with oblique capture',
    specs: {
      flightTime: '49 minutes',
      maxPayload: 'Integrated 4-Module Sensor',
      windResistance: '12 m/s',
      accuracy: '±1 cm horizontal (RTK)',
      range: '25 km',
      weight: '1.1 kg',
    },
    bestFor: ['High-speed photogrammetry', 'Urban 3D modeling', 'Detailed asset inspection'],
    features: [
      '5-directional oblique capture capability',
      '0.5-second shooting interval',
      'Integrated laser rangefinder and zoom',
      'Advanced O4 Enterprise transmission',
    ],
  },
];

export const sensors: Sensor[] = [
  {
    id: 'vetted-pilots',
    type: 'lidar',
    name: 'Vetted Drone Pilots',
    models: [],
    icon: 'shield',
    description: 'Every quote comes from pilots screened for compliance, insurance, and commercial readiness.',
    applications: [
      'CAA-certified commercial drone pilots',
      'Compliance and insurance checks',
      'Experienced across inspections, surveys, and mapping',
    ],
  },
  {
    id: 'capability-quotes',
    type: 'thermal',
    name: 'No Platform Cut',
    models: [],
    icon: 'list-checks',
    description: 'Compare direct quotes from drone pilots with transparent pricing and no platform cut added.',
    applications: [
      'Direct pilot pricing with no platform cut',
      'Transparent quote comparisons',
      'More of your budget goes to delivery',
    ],
  },
  {
    id: 'faster-start',
    type: 'rgb',
    name: 'Save Time on Manual Outreach',
    models: [],
    icon: 'timer',
    description: 'Compare pricing, availability, and fit in one place instead of contacting pilots one by one.',
    applications: [
      'Post one project brief once',
      'Compare pricing, availability, and fit side by side',
      'Avoid manual outreach to individual pilots',
    ],
  },
];
