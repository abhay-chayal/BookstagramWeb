import { ImageResponse } from "next/og";

// Replaces the hotlinked Unsplash photo that previously appeared whenever the
// site was shared. Generated from the brand palette in globals.css so there is
// no binary asset to keep in sync.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Bookstagram Club — Professional Book Promotion & Author Marketing";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1C2530 0%, #2A3F5C 100%)",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C89B7B",
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          Bookstagram Club
        </div>

        <div
          style={{
            fontSize: 76,
            lineHeight: 1.1,
            color: "#FFFFFF",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            maxWidth: 940,
          }}
        >
          Great Books Deserve To Be Discovered.
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 28,
            color: "#CBD5E1",
            maxWidth: 820,
            lineHeight: 1.4,
          }}
        >
          Professional Book Promotion &amp; Author Marketing
        </div>

        <div
          style={{
            marginTop: 48,
            width: 120,
            height: 4,
            borderRadius: 999,
            background: "linear-gradient(90deg, #C89B7B 0%, #E0B496 100%)",
          }}
        />
      </div>
    ),
    size
  );
}
