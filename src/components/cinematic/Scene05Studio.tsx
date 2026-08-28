"use client";

import { motion, useTransform } from "framer-motion";
import { useCinematic } from "./CinematicContext";

export default function Scene05Studio() {
  const { progress, isReducedMotion, viewportMode } = useCinematic();

  const isMobile = viewportMode === "mobile";

  // Scene master opacity (0.58 – 0.72)
  const sceneOpacity = useTransform(progress, [0.56, 0.60, 0.70, 0.74], [0, 1, 1, 0]);

  // Individual zone reveals (staggered)
  const zone1 = useTransform(progress, [0.59, 0.63], [0, 1]);
  const zone2 = useTransform(progress, [0.61, 0.65], [0, 1]);
  const zone3 = useTransform(progress, [0.63, 0.67], [0, 1]);
  const zone4 = useTransform(progress, [0.65, 0.69], [0, 1]);
  const zone5 = useTransform(progress, [0.67, 0.71], [0, 1]);

  // Brand reveal
  const brandOpacity = useTransform(progress, [0.60, 0.64], [0, 1]);

  const labelStyle = (align: "left" | "right" | "center" = "left") => ({
    fontFamily: "var(--font-heading)",
    fontSize: isMobile ? "0.7rem" : "0.85rem",
    color: "var(--color-accent-rose)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.15em",
    textAlign: align,
    fontWeight: 600,
  });

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        opacity: sceneOpacity,
        pointerEvents: "none",
        zIndex: 20,
      }}
    >
      {/* Studio Brand Header */}
      <motion.div
        style={{
          position: "absolute",
          top: isMobile ? "8vh" : "10vh",
          left: "50%",
          x: "-50%",
          opacity: brandOpacity,
          textAlign: "center",
        }}
      >
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: isMobile ? "1.8rem" : "3rem",
          color: "var(--color-primary-navy)",
          fontWeight: 400,
          letterSpacing: "0.08em",
          marginBottom: "0.5rem",
        }}>
          Bookstagram Club
        </h2>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: isMobile ? "0.8rem" : "1rem",
          color: "var(--color-text-muted)",
          letterSpacing: "0.05em",
        }}>
          Where Books Get Discovered
        </p>
      </motion.div>

      {/* Service Zones Grid */}
      <div style={{
        position: "absolute",
        top: isMobile ? "25vh" : "30vh",
        left: "50%",
        transform: "translateX(-50%)",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5, 1fr)",
        gap: isMobile ? "1rem" : "2rem",
        width: isMobile ? "90vw" : "80vw",
        maxWidth: "1100px",
      }}>
        {/* Zone 1: Book Photography */}
        <motion.div style={{ opacity: zone1, textAlign: "center" }}>
          <svg width="100%" viewBox="0 0 120 100" fill="none" style={{ maxWidth: "140px", margin: "0 auto" }}>
            {/* Camera body */}
            <rect x="30" y="30" width="60" height="40" rx="6" fill="var(--color-primary-navy)" opacity="0.08" stroke="var(--color-primary-navy)" strokeWidth="1.5" strokeOpacity="0.15" />
            {/* Lens */}
            <circle cx="60" cy="50" r="14" fill="none" stroke="var(--color-accent-rose)" strokeWidth="2" opacity="0.6" />
            <circle cx="60" cy="50" r="8" fill="var(--color-accent-rose)" opacity="0.15" />
            {/* Flash */}
            <rect x="42" y="24" width="12" height="8" rx="2" fill="var(--color-primary-navy)" opacity="0.06" />
            {/* Book below */}
            <rect x="35" y="78" width="50" height="8" rx="2" fill="var(--color-primary-navy)" opacity="0.1" />
            <rect x="37" y="76" width="46" height="4" rx="1" fill="var(--color-accent-rose)" opacity="0.3" />
          </svg>
          <p style={labelStyle("center")}>Cinematic Content</p>
        </motion.div>

        {/* Zone 2: Creative Graphics */}
        <motion.div style={{ opacity: zone2, textAlign: "center" }}>
          <svg width="100%" viewBox="0 0 120 100" fill="none" style={{ maxWidth: "140px", margin: "0 auto" }}>
            {/* Design board */}
            <rect x="20" y="15" width="80" height="60" rx="4" fill="var(--color-bg-alt)" stroke="var(--color-primary-navy)" strokeWidth="1.5" strokeOpacity="0.1" />
            {/* Color swatches */}
            <rect x="30" y="25" width="15" height="15" rx="2" fill="var(--color-accent-rose)" opacity="0.5" />
            <rect x="50" y="25" width="15" height="15" rx="2" fill="var(--color-primary-navy)" opacity="0.15" />
            <rect x="70" y="25" width="15" height="15" rx="2" fill="var(--color-accent-rose)" opacity="0.3" />
            {/* Book cover mockup */}
            <rect x="35" y="48" width="25" height="20" rx="2" fill="var(--color-primary-navy)" opacity="0.08" />
            <rect x="38" y="51" width="19" height="3" rx="1" fill="var(--color-accent-rose)" opacity="0.4" />
            {/* Pen */}
            <line x1="75" y1="45" x2="82" y2="68" stroke="var(--color-primary-navy)" strokeWidth="2" strokeOpacity="0.15" strokeLinecap="round" />
          </svg>
          <p style={labelStyle("center")}>Promotional Graphics</p>
        </motion.div>

        {/* Zone 3: Social Promotion */}
        <motion.div style={{ opacity: zone3, textAlign: "center" }}>
          <svg width="100%" viewBox="0 0 120 100" fill="none" style={{ maxWidth: "140px", margin: "0 auto" }}>
            {/* Phone */}
            <rect x="35" y="10" width="50" height="80" rx="8" fill="var(--color-primary-navy)" opacity="0.06" stroke="var(--color-primary-navy)" strokeWidth="1.5" strokeOpacity="0.12" />
            {/* Screen */}
            <rect x="40" y="20" width="40" height="55" rx="3" fill="var(--color-bg-alt)" />
            {/* Post image */}
            <rect x="44" y="24" width="32" height="22" rx="2" fill="var(--color-accent-rose)" opacity="0.2" />
            {/* Engagement icons */}
            <circle cx="50" cy="54" r="3" fill="var(--color-accent-rose)" opacity="0.5" />
            <circle cx="60" cy="54" r="3" fill="var(--color-primary-navy)" opacity="0.1" />
            <circle cx="70" cy="54" r="3" fill="var(--color-primary-navy)" opacity="0.1" />
            {/* Text lines */}
            <rect x="44" y="62" width="28" height="3" rx="1" fill="var(--color-primary-navy)" opacity="0.08" />
            <rect x="44" y="68" width="20" height="3" rx="1" fill="var(--color-primary-navy)" opacity="0.06" />
          </svg>
          <p style={labelStyle("center")}>Instagram Promotion</p>
        </motion.div>

        {/* Zone 4: Author Branding */}
        <motion.div style={{ opacity: zone4, textAlign: "center" }}>
          <svg width="100%" viewBox="0 0 120 100" fill="none" style={{ maxWidth: "140px", margin: "0 auto" }}>
            {/* Profile card */}
            <rect x="20" y="15" width="80" height="70" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-accent-rose)" strokeWidth="1" strokeOpacity="0.3" />
            {/* Avatar */}
            <circle cx="60" cy="38" r="14" fill="var(--color-primary-navy)" opacity="0.06" />
            <circle cx="60" cy="34" r="6" fill="var(--color-primary-navy)" opacity="0.1" />
            <path d="M48 48 Q60 42 72 48" fill="var(--color-primary-navy)" opacity="0.08" />
            {/* Name */}
            <rect x="38" y="58" width="44" height="4" rx="2" fill="var(--color-primary-navy)" opacity="0.12" />
            {/* Tagline */}
            <rect x="42" y="66" width="36" height="3" rx="1" fill="var(--color-accent-rose)" opacity="0.3" />
            {/* Verified badge */}
            <circle cx="84" cy="22" r="5" fill="var(--color-accent-rose)" opacity="0.5" />
          </svg>
          <p style={labelStyle("center")}>Author Features</p>
        </motion.div>

        {/* Zone 5: Launch Strategy */}
        <motion.div style={{ opacity: zone5, textAlign: "center", gridColumn: isMobile ? "1 / -1" : "auto" }}>
          <svg width="100%" viewBox="0 0 120 100" fill="none" style={{ maxWidth: "140px", margin: "0 auto" }}>
            {/* Rocket / Launch */}
            <path d="M60 15 L68 45 H52 Z" fill="var(--color-accent-rose)" opacity="0.3" />
            <rect x="54" y="45" width="12" height="20" rx="2" fill="var(--color-primary-navy)" opacity="0.08" />
            {/* Exhaust */}
            <path d="M55 65 L60 80 L65 65" fill="var(--color-accent-rose)" opacity="0.15" />
            {/* Timeline dots */}
            <circle cx="30" cy="85" r="3" fill="var(--color-primary-navy)" opacity="0.1" />
            <circle cx="50" cy="85" r="3" fill="var(--color-primary-navy)" opacity="0.15" />
            <circle cx="70" cy="85" r="3" fill="var(--color-accent-rose)" opacity="0.4" />
            <circle cx="90" cy="85" r="3" fill="var(--color-accent-rose)" opacity="0.6" />
            <line x1="30" y1="85" x2="90" y2="85" stroke="var(--color-primary-navy)" strokeWidth="1" strokeOpacity="0.08" />
          </svg>
          <p style={labelStyle("center")}>Launch Campaigns</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
