import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'books.google.com',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      // www and the apex both served the full page with a 200, so every URL
      // existed twice. Search Console reported the homepage as "Duplicate
      // without user-selected canonical" and indexed neither. A canonical tag
      // is only a hint; this makes the apex authoritative.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bookstagramclub.shop" }],
        destination: "https://bookstagramclub.shop/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
