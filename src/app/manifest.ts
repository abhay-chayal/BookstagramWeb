import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bookstagram Club",
    short_name: "Bookstagram",
    description:
      "Professional book promotion and author marketing — Instagram campaigns, editorial reviews, and author websites.",
    start_url: "/",
    display: "standalone",
    background_color: "#1C2530",
    theme_color: "#1C2530",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      // Android crops maskable icons to a circle, so this one is padded.
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
