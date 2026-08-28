import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bookstagram Club | Professional Book Promotion & Author Marketing",
  description: "We help authors get their books discovered by the right readers through strategic Instagram promotion, creative content, and book launch campaigns built around your book.",
  keywords: ["Book Promotion", "Author Marketing", "Bookstagram", "Instagram Book Promotion", "Book Launch Campaign", "Book Reviews"],
  openGraph: {
    title: "Bookstagram Club | Professional Book Promotion & Author Marketing",
    description: "Great books deserve to be discovered. Strategic Instagram promotion, creative content, and launch campaigns for authors.",
    url: "https://bookstagram.club",
    siteName: "Bookstagram Club",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Bookstagram Club Author Branding",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookstagram Club | Professional Book Promotion",
    description: "Great books deserve to be discovered. Strategic book promotion and author marketing.",
  }
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bookstagram Club",
  "url": "https://bookstagram.club",
  "logo": "https://bookstagram.club/images/logo.png",
  "description": "Professional Book Promotion, Author Marketing & Literary Community Ecosystem.",
  "sameAs": [
    "https://instagram.com/bookstagramclub"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@bookstagram.club",
    "contactType": "Customer Service"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
