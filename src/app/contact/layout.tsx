import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your book and where it is right now. We read every enquiry personally and reply with a clear recommendation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    description: "Tell us about your book and where it is right now. We read every enquiry personally and reply with a clear recommendation.",
    url: absoluteUrl("/contact"),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
