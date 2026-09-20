"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

/**
 * Hides the public navbar and footer on the CMS routes. The admin pages have
 * their own sidebar chrome, and the site's fixed navbar was drawing on top of
 * it. Everything outside /admin renders normally.
 */
export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/") || pathname === "/admin-login";
  if (isAdmin) return null;
  return <>{children}</>;
}
