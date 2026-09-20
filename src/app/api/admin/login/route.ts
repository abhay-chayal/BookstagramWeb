import { NextResponse } from "next/server";
import { ADMIN_COOKIE, adminToken, safeEqual } from "@/lib/adminAuth";
import { retryAfterMs, recordFailure, clearFailures, MAX_ATTEMPTS } from "@/lib/rateLimit";

// Counters live in module memory, so keep this off the edge runtime where
// instances are recycled more aggressively.
export const runtime = "nodejs";

function clientKey(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  return (fwd ? fwd.split(",")[0] : null)?.trim() || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedPass = process.env.ADMIN_PASSWORD;

  if (!expectedUser || !expectedPass) {
    return NextResponse.json(
      { success: false, message: "Admin access is not configured." },
      { status: 503 }
    );
  }

  const key = clientKey(request);
  const wait = retryAfterMs(key);
  if (wait > 0) {
    const seconds = Math.ceil(wait / 1000);
    return NextResponse.json(
      {
        success: false,
        message: `Too many attempts. Try again in ${Math.ceil(seconds / 60)} minute(s).`,
      },
      { status: 429, headers: { "retry-after": String(seconds) } }
    );
  }

  const body = await request.json().catch(() => ({}));
  const username = typeof body?.username === "string" ? body.username : "";
  const password = typeof body?.password === "string" ? body.password : "";

  // Always check both, so a wrong username costs the same time as a wrong password.
  const [userOk, passOk] = await Promise.all([
    safeEqual(username, expectedUser),
    safeEqual(password, expectedPass),
  ]);

  if (!userOk || !passOk) {
    recordFailure(key);
    // Deliberately does not say which field was wrong.
    return NextResponse.json(
      {
        success: false,
        message: `Incorrect username or password. ${MAX_ATTEMPTS} failed attempts will lock sign-in for 15 minutes.`,
      },
      { status: 401 }
    );
  }

  clearFailures(key);

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE, await adminToken(expectedUser, expectedPass), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}
