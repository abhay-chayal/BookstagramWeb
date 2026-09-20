import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_COOKIE, adminToken } from "@/lib/adminAuth";

// Gate on /admin. A single shared account, not multi-user authentication —
// enough to keep the editorial CMS private while it is read-only. Move to
// Supabase Auth before it stores real subscriber data.

export async function middleware(request: NextRequest) {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  // Nothing configured: fail closed rather than leaving the CMS open.
  if (!username || !password) {
    return new NextResponse(
      "The admin area is disabled because ADMIN_USERNAME / ADMIN_PASSWORD are not set.",
      { status: 503, headers: { "content-type": "text/plain" } }
    );
  }

  const presented = request.cookies.get(ADMIN_COOKIE)?.value;
  if (presented && presented === (await adminToken(username, password))) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/admin-login", request.url);
  loginUrl.searchParams.set("from", request.nextUrl.pathname);
  const res = NextResponse.redirect(loginUrl);
  // Clear a stale cookie so an old session does not keep bouncing.
  if (presented) res.cookies.delete(ADMIN_COOKIE);
  return res;
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
