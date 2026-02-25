type RateLimitBucket = {
  count: number;
  resetAtMs: number;
};

type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSec: number;
};

declare global {
  var __hdpRateLimitBuckets: Map<string, RateLimitBucket> | undefined;
}

function getStore(): Map<string, RateLimitBucket> {
  if (!global.__hdpRateLimitBuckets) {
    global.__hdpRateLimitBuckets = new Map<string, RateLimitBucket>();
  }
  return global.__hdpRateLimitBuckets;
}

function cleanupExpired(store: Map<string, RateLimitBucket>, nowMs: number) {
  if (store.size < 5_000) return;
  for (const [key, bucket] of store.entries()) {
    if (bucket.resetAtMs <= nowMs) {
      store.delete(key);
    }
  }
}

export function consumeRateLimit(opts: {
  scope: string;
  identifier: string;
  windowMs: number;
  max: number;
}): RateLimitResult {
  const scope = opts.scope.trim();
  const identifier = opts.identifier.trim();
  const windowMs = Math.max(1_000, opts.windowMs);
  const max = Math.max(1, opts.max);

  const nowMs = Date.now();
  const key = `${scope}:${identifier}`;
  const store = getStore();
  cleanupExpired(store, nowMs);

  const existing = store.get(key);
  if (!existing || existing.resetAtMs <= nowMs) {
    const resetAtMs = nowMs + windowMs;
    store.set(key, { count: 1, resetAtMs });
    return { allowed: true, remaining: max - 1, retryAfterSec: Math.ceil(windowMs / 1000) };
  }

  if (existing.count >= max) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAtMs - nowMs) / 1000)),
    };
  }

  existing.count += 1;
  store.set(key, existing);
  return {
    allowed: true,
    remaining: Math.max(0, max - existing.count),
    retryAfterSec: Math.max(1, Math.ceil((existing.resetAtMs - nowMs) / 1000)),
  };
}
