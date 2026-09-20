// Shared between the login route and the middleware.
// The cookie holds a hash of the credentials, never the credentials themselves.

export const ADMIN_COOKIE = "bsc_admin";

async function sha256(input: string): Promise<Uint8Array> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return new Uint8Array(digest);
}

function toHex(bytes: Uint8Array): string {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** Session token for a username/password pair. Changing either invalidates it. */
export async function adminToken(username: string, password: string): Promise<string> {
  // Length-prefix the username so ("ab","c") and ("a","bc") can't collide.
  return toHex(await sha256(`bookstagram-club:${username.length}:${username}:${password}`));
}

/**
 * Compares two strings without leaking their contents through timing.
 * Both sides are hashed first, so the byte loop always runs over a fixed
 * 32-byte length regardless of how long the inputs are.
 */
export async function safeEqual(a: string, b: string): Promise<boolean> {
  const [ha, hb] = await Promise.all([sha256(a), sha256(b)]);
  let diff = 0;
  for (let i = 0; i < ha.length; i++) diff |= ha[i] ^ hb[i];
  return diff === 0;
}
