import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

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
