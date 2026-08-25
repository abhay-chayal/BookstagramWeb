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
  title: "Bookstagram Club | Premium Author Branding & Book Marketing Agency",
  description: "We are a world-class agency built specifically for authors. Build your brand, market your books, and grow a long-term career with Bookstagram Club.",
  keywords: ["Author Branding", "Book Marketing", "Bookstagram", "Author Website", "Social Media for Authors"],
  openGraph: {
    title: "Bookstagram Club | Author Success Ecosystem",
    description: "Premium Author Branding, Digital Presence, and Strategic Book Marketing.",
    url: "https://bookstagram.club",
    siteName: "Bookstagram Club",
    images: [
      {
        url: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=1200",
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
    title: "Bookstagram Club | Premium Author Branding",
    description: "Build your brand, market your books, and grow a long-term career.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
