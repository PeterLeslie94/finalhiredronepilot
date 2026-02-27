export const LEGACY_SERVICE_PATH_MAP = {
  '/services/drone-survey': '/services/drone-surveys',
  '/services/thermal-imaging': '/services/drone-thermal-imaging',
  '/services/topographic-survey': '/services/drone-topographical-survey',
  '/services/building-inspection': '/services/drone-roof-inspection',
  '/services/volumetric-analysis': '/services/drone-volumetric-survey',
  '/services/construction-progress-monitoring': '/services/drone-construction-monitoring',
  '/services/aerial-photography': '/services/drone-photography',
} as const;

type LegacyServicePath = keyof typeof LEGACY_SERVICE_PATH_MAP;

export function normalizeLegacyServicePath(path: string): string {
  if (!path) return path;
  if (path.startsWith('#')) return path;

  const hashIndex = path.indexOf('#');
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const beforeHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path;

  const queryIndex = beforeHash.indexOf('?');
  const pathname = queryIndex >= 0 ? beforeHash.slice(0, queryIndex) : beforeHash;
  const query = queryIndex >= 0 ? beforeHash.slice(queryIndex) : '';

  const mapped = LEGACY_SERVICE_PATH_MAP[pathname as LegacyServicePath];
  if (!mapped) return path;
  return `${mapped}${query}${hash}`;
}
