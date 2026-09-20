import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Books, authors, discoveries and stories worth reading — the Bookstagram Club Dispatch, delivered every Saturday morning.",
  alternates: { canonical: "/newsletter" },
  openGraph: {
    title: `Newsletter | ${SITE_NAME}`,
    description: "Books, authors, discoveries and stories worth reading — the Bookstagram Club Dispatch, delivered every Saturday morning.",
    url: absoluteUrl("/newsletter"),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
