export type PilotCoverageRegion = 'ENGLAND' | 'SCOTLAND' | 'WALES' | 'NORTHERN_IRELAND';

export const PILOT_COVERAGE_REGIONS: readonly PilotCoverageRegion[] = [
  'ENGLAND',
  'SCOTLAND',
  'WALES',
  'NORTHERN_IRELAND',
] as const;

export const PILOT_COVERAGE_LABELS: Record<PilotCoverageRegion, string> = {
  ENGLAND: 'England',
  SCOTLAND: 'Scotland',
  WALES: 'Wales',
  NORTHERN_IRELAND: 'Northern Ireland',
};

export type PilotAvailabilityStatus = 'AVAILABLE' | 'LIMITED' | 'UNAVAILABLE';

export const PILOT_AVAILABILITY_OPTIONS: readonly { value: PilotAvailabilityStatus; label: string }[] = [
  { value: 'AVAILABLE', label: 'Available for New Projects' },
  { value: 'LIMITED', label: 'Limited Availability' },
  { value: 'UNAVAILABLE', label: 'Currently Unavailable' },
] as const;

export type PilotSkillLevel = 'Intermediate' | 'Advanced' | 'Expert';

export const PILOT_SKILL_LEVELS: readonly PilotSkillLevel[] = ['Intermediate', 'Advanced', 'Expert'] as const;

export type PilotServiceLevel = PilotSkillLevel;

export const PILOT_SERVICE_LEVELS: readonly PilotServiceLevel[] = PILOT_SKILL_LEVELS;

export const PILOT_SKILL_CATEGORIES = [
  { key: 'surveying', label: 'Topographical Surveying' },
  { key: 'lidar', label: 'LiDAR Mapping & Point Clouds' },
  { key: 'inspection', label: 'Building & Roof Inspection' },
  { key: 'thermal', label: 'Thermal Imaging' },
  { key: 'construction', label: 'Construction Monitoring' },
  { key: 'processing', label: 'Photogrammetry & 3D Modelling' },
] as const;

export type PilotSkillKey = (typeof PILOT_SKILL_CATEGORIES)[number]['key'];

export const PILOT_FAQ_QUESTIONS = [
  {
    key: 'coverage',
    question: 'What areas do you cover?',
  },
  {
    key: 'qualifications',
    question: 'What qualifications and insurance do you have?',
  },
  {
    key: 'turnaround',
    question: 'How quickly can you deliver survey data?',
  },
  {
    key: 'formats',
    question: 'What file formats do you deliver?',
  },
  {
    key: 'permissions',
    question: 'Do you need permission to fly on my site?',
  },
] as const;

export type PilotFaqKey = (typeof PILOT_FAQ_QUESTIONS)[number]['key'];

export const PILOT_SERVICE_OPTIONS = [
  { slug: 'drone-surveys', title: 'Drone Surveys' },
  { slug: 'drone-topographical-survey', title: 'Drone Topographical Survey' },
  { slug: 'drone-lidar-mapping', title: 'Drone LiDAR Mapping' },
  { slug: 'drone-photogrammetry-survey', title: 'Drone Photogrammetry Survey' },
  { slug: 'drone-point-cloud-mapping', title: 'Drone Point Cloud Mapping' },
  { slug: 'drone-site-survey', title: 'Drone Site Survey' },
  { slug: 'drone-land-survey', title: 'Drone Land Survey' },
  { slug: 'drone-boundary-survey', title: 'Drone Boundary Survey' },
  { slug: 'drone-corridor-mapping', title: 'Drone Corridor Mapping' },
  { slug: 'drone-elevation-survey', title: 'Drone Elevation Survey' },
  { slug: 'drone-as-built-survey', title: 'Drone As-Built Survey' },
  { slug: 'drone-setting-out-survey', title: 'Drone Setting Out Survey' },
  { slug: 'drone-bathymetric-survey', title: 'Drone Bathymetric Survey' },
  { slug: 'drone-roof-inspection', title: 'Drone Roof Inspection' },
  { slug: 'drone-facade-survey', title: 'Drone Facade Survey' },
  { slug: 'drone-bridge-inspection', title: 'Drone Bridge Inspection' },
  { slug: 'drone-measured-building-survey', title: 'Drone Measured Building Survey' },
  { slug: 'drone-thermal-imaging', title: 'Drone Thermal Imaging' },
  { slug: 'drone-confined-space-inspection', title: 'Drone Confined Space Inspection' },
  { slug: 'drone-construction-monitoring', title: 'Drone Construction Monitoring' },
  { slug: 'drone-road-survey', title: 'Drone Road Survey' },
  { slug: 'drone-railway-survey', title: 'Drone Railway Survey' },
  { slug: 'drone-utility-survey', title: 'Drone Utility Survey' },
  { slug: 'drone-industrial-survey', title: 'Drone Industrial Survey' },
  { slug: 'drone-volumetric-survey', title: 'Drone Volumetric Survey' },
  { slug: 'drone-mining-survey', title: 'Drone Mining Survey' },
  { slug: 'drone-quarry-survey', title: 'Drone Quarry Survey' },
  { slug: 'drone-landfill-survey', title: 'Drone Landfill Survey' },
  { slug: 'drone-solar-survey', title: 'Drone Solar Survey' },
  { slug: 'drone-wind-farm-survey', title: 'Drone Wind Farm Survey' },
  { slug: 'drone-agricultural-survey', title: 'Drone Agricultural Survey' },
  { slug: 'drone-environmental-survey', title: 'Drone Environmental Survey' },
  { slug: 'drone-forestry-survey', title: 'Drone Forestry Survey' },
  { slug: 'drone-coastal-survey', title: 'Drone Coastal Survey' },
  { slug: 'drone-flood-risk-survey', title: 'Drone Flood Risk Survey' },
  { slug: 'drone-archaeological-survey', title: 'Drone Archaeological Survey' },
  { slug: 'drone-estate-survey', title: 'Drone Estate Survey' },
  { slug: 'drone-gas-detection', title: 'Drone Gas Detection' },
  { slug: 'drone-crop-spraying', title: 'Drone Crop Spraying' },
  { slug: 'drone-ground-penetrating-radar', title: 'Drone Ground Penetrating Radar' },
  { slug: 'drone-sonar-survey', title: 'Drone Sonar Survey' },
  { slug: 'drone-water-quality-assessment', title: 'Drone Water Quality Assessment' },
  { slug: 'drone-photography', title: 'Drone Photography' },
  { slug: 'drone-real-estate-photography', title: 'Drone Real Estate Photography' },
  { slug: 'drone-wedding-photography', title: 'Drone Wedding Photography' },
  { slug: 'drone-videographer', title: 'Drone Videographer' },
] as const;

export type PilotServiceSlug = (typeof PILOT_SERVICE_OPTIONS)[number]['slug'];

export const PILOT_SERVICE_GROUPS: readonly {
  key: string;
  label: string;
  serviceSlugs: readonly PilotServiceSlug[];
}[] = [
  {
    key: 'mapping',
    label: 'Mapping',
    serviceSlugs: [
      'drone-surveys',
      'drone-topographical-survey',
      'drone-lidar-mapping',
      'drone-photogrammetry-survey',
      'drone-point-cloud-mapping',
      'drone-site-survey',
      'drone-land-survey',
      'drone-boundary-survey',
      'drone-corridor-mapping',
      'drone-elevation-survey',
      'drone-as-built-survey',
      'drone-setting-out-survey',
      'drone-bathymetric-survey',
    ],
  },
  {
    key: 'inspections',
    label: 'Inspections',
    serviceSlugs: [
      'drone-roof-inspection',
      'drone-facade-survey',
      'drone-bridge-inspection',
      'drone-measured-building-survey',
      'drone-thermal-imaging',
      'drone-confined-space-inspection',
    ],
  },
  {
    key: 'infrastructure',
    label: 'Infrastructure',
    serviceSlugs: [
      'drone-construction-monitoring',
      'drone-road-survey',
      'drone-railway-survey',
      'drone-utility-survey',
      'drone-industrial-survey',
    ],
  },
  {
    key: 'energy',
    label: 'Energy',
    serviceSlugs: [
      'drone-volumetric-survey',
      'drone-mining-survey',
      'drone-quarry-survey',
      'drone-landfill-survey',
      'drone-solar-survey',
      'drone-wind-farm-survey',
    ],
  },
  {
    key: 'specialist',
    label: 'Specialist',
    serviceSlugs: [
      'drone-agricultural-survey',
      'drone-environmental-survey',
      'drone-forestry-survey',
      'drone-coastal-survey',
      'drone-flood-risk-survey',
      'drone-archaeological-survey',
      'drone-estate-survey',
      'drone-gas-detection',
      'drone-crop-spraying',
      'drone-ground-penetrating-radar',
      'drone-sonar-survey',
      'drone-water-quality-assessment',
    ],
  },
  {
    key: 'photography',
    label: 'Photography',
    serviceSlugs: [
      'drone-photography',
      'drone-real-estate-photography',
      'drone-wedding-photography',
      'drone-videographer',
    ],
  },
] as const;

export const PILOT_SERVICE_OPTION_MAP: ReadonlyMap<string, (typeof PILOT_SERVICE_OPTIONS)[number]> = new Map(
  PILOT_SERVICE_OPTIONS.map((item) => [item.slug, item] as const),
);

export const PILOT_SERVICE_SLUGS = PILOT_SERVICE_OPTIONS.map((item) => item.slug);

export function titleFromServiceSlug(slug: string): string {
  const found = PILOT_SERVICE_OPTION_MAP.get(slug);
  if (found) return found.title;
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function hrefFromServiceSlug(slug: string): string {
  return `/services/${slug}`;
}
