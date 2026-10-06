import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

// Regenerated daily so scheduled articles appear on their publication date
// without a redeploy. Set on the layout because the page is a client component.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Essays, author spotlights and deep dives into the world of publishing — from the Bookstagram Club editorial team.",
  alternates: { canonical: "/journal" },
  openGraph: {
    title: `The Journal | ${SITE_NAME}`,
    description: "Essays, author spotlights and deep dives into the world of publishing.",
    url: absoluteUrl("/journal"),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
