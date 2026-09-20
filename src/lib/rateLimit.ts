/**
 * Small in-process rate limiter for the admin login.
 *
 * Caveat worth knowing: this lives in module memory, so on a serverless host
 * each instance keeps its own counters and a restart clears them. It stops
 * casual brute-forcing from a single client, which is what this route needs;
 * it is not a distributed limiter. If the CMS ever holds real data, move this
 * to Upstash/Redis or put the route behind the platform's own WAF.
 */

const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // failures older than this are forgotten
const LOCKOUT_MS = 15 * 60 * 1000;

type Entry = { failures: number; first: number; lockedUntil: number };

const attempts = new Map<string, Entry>();

function sweep(now: number) {
  // Keep the map from growing without bound on a long-lived instance.
  if (attempts.size < 1000) return;
  for (const [key, e] of attempts) {
    if (now > e.lockedUntil && now - e.first > WINDOW_MS) attempts.delete(key);
  }
}

/** Milliseconds remaining on a lockout, or 0 if the caller may try. */
export function retryAfterMs(key: string): number {
  const e = attempts.get(key);
  if (!e) return 0;
  const now = Date.now();
  if (now < e.lockedUntil) return e.lockedUntil - now;
  if (now - e.first > WINDOW_MS) {
    attempts.delete(key);
    return 0;
  }
  return 0;
}

export function recordFailure(key: string): void {
  const now = Date.now();
  sweep(now);
  const e = attempts.get(key);
  if (!e || now - e.first > WINDOW_MS) {
    attempts.set(key, { failures: 1, first: now, lockedUntil: 0 });
    return;
  }
  e.failures += 1;
  if (e.failures >= MAX_ATTEMPTS) {
    e.lockedUntil = now + LOCKOUT_MS;
    e.failures = 0;
    e.first = now;
  }
}

export function clearFailures(key: string): void {
  attempts.delete(key);
}

export { MAX_ATTEMPTS };
