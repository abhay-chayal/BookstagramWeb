"use client";

import { motion, useTransform } from "framer-motion";
import { useCinematic } from "./CinematicContext";

export default function Scene03Journey() {
  const { progress, isReducedMotion, viewportMode } = useCinematic();

  // ---------------------------------------------------------------------------
  // SCENE MASTER OPACITY (Active roughly 0.20 to 0.44)
  // ---------------------------------------------------------------------------
  const sceneOpacity = useTransform(
    progress,
    [0.20, 0.26, 0.38, 0.44],
    [0, 1, 1, 0]
  );

  // ---------------------------------------------------------------------------
  // PARALLAX TIMELINES & SCROLL MAPPINGS
  // ---------------------------------------------------------------------------

  // 1. Author Desk (Active ~0.24 to ~0.35)
  const deskX = useTransform(progress, [0.22, 0.36], ["80vw", "-40vw"]);
  const deskOpacity = useTransform(progress, [0.22, 0.26, 0.32, 0.36], [0, 1, 1, 0]);
  const textOpacity = useTransform(progress, [0.24, 0.27, 0.31, 0.35], [0, 1, 1, 0]);

  // 2. Manuscript to Book (Active ~0.30 to ~0.40)
  const bookX = useTransform(progress, [0.28, 0.42], ["80vw", "-40vw"]);
  const bookOpacity = useTransform(progress, [0.28, 0.32, 0.37, 0.42], [0, 1, 1, 0]);
  
  // Manuscript pages flying (micro-interaction)
  const page1Y = useTransform(progress, [0.31, 0.37], [0, -50]);
  const page1Rotate = useTransform(progress, [0.31, 0.37], [0, -15]);
  const page2Y = useTransform(progress, [0.31, 0.39], [0, -80]);
  const page2Rotate = useTransform(progress, [0.31, 0.39], [0, 25]);

  // 3. Reader/Discovery World (Active ~0.35 to ~0.44)
  const discoveryX = useTransform(progress, [0.33, 0.45], ["80vw", "-40vw"]);
  const discoveryOpacity = useTransform(progress, [0.33, 0.37, 0.41, 0.45], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        opacity: sceneOpacity,
        pointerEvents: "none",
        zIndex: 10, // Above background, below Bird
      }}
    >
      {/* ---------------------------------------------------------------- */}
      {/* AUTHOR DESK SCENE (0.35 - 0.50) */}
      {/* ---------------------------------------------------------------- */}
      <motion.div
        style={{
          position: "absolute",
          top: "30vh",
          left: 0,
          x: isReducedMotion ? "20vw" : deskX,
          opacity: isReducedMotion ? (progress.get() > 0.35 && progress.get() < 0.55 ? 1 : 0) : deskOpacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem"
        }}
      >
        <motion.div style={{ opacity: textOpacity }}>
          <h3 style={{ 
            fontFamily: "var(--font-heading)", 
            fontSize: viewportMode === "mobile" ? "1.5rem" : "2.5rem",
            color: "var(--color-primary-navy)",
            fontWeight: 400,
            letterSpacing: "0.05em"
          }}>
            Every story starts somewhere.
          </h3>
        </motion.div>

        {/* Minimalist Desk SVG */}
        <svg width="100%" height="auto" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: viewportMode === "mobile" ? "300px" : "600px" }}>
          {/* Desk Surface */}
          <path d="M50 180 L350 180" stroke="var(--color-primary-navy)" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
          
          {/* Laptop */}
          <rect x="220" y="140" width="80" height="40" rx="4" fill="var(--color-primary-navy)" opacity="0.1" stroke="var(--color-primary-navy)" strokeWidth="2" />
          <path d="M200 180 L320 180" stroke="var(--color-primary-navy)" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
          
          {/* Notebook / Manuscript */}
          <rect x="120" y="160" width="60" height="20" fill="var(--color-bg-base)" stroke="var(--color-accent-rose)" strokeWidth="2" />
          <path d="M125 165 L175 165 M125 170 L165 170 M125 175 L170 175" stroke="var(--color-accent-rose)" strokeWidth="1" opacity="0.6" />
          
          {/* Coffee Mug */}
          <path d="M100 160 v20 h15 v-20 Z" fill="var(--color-bg-base)" stroke="var(--color-primary-navy)" strokeWidth="2" />
          <path d="M115 165 c5 0, 5 10, 0 10" stroke="var(--color-primary-navy)" strokeWidth="2" fill="none" />
          
          {/* Lamp */}
          <path d="M60 180 v-60 c0 -20, 20 -20, 20 -20 h20" stroke="var(--color-primary-navy)" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M90 90 L110 110 L80 110 Z" fill="var(--color-accent-rose)" opacity="0.4" />
          {/* Lamp Glow */}
          <path d="M95 110 L130 180 L60 180 Z" fill="url(#lampGlow)" opacity="0.15" />
          
          <defs>
            <linearGradient id="lampGlow" x1="95" y1="110" x2="95" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--color-accent-rose)" />
              <stop offset="1" stopColor="var(--color-accent-rose)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* MANUSCRIPT TO BOOK SCENE (0.50 - 0.70) */}
      {/* ---------------------------------------------------------------- */}
      <motion.div
        style={{
          position: "absolute",
          top: "40vh",
          left: "20vw",
          x: isReducedMotion ? "40vw" : bookX,
          opacity: isReducedMotion ? (progress.get() > 0.50 && progress.get() < 0.70 ? 1 : 0) : bookOpacity,
        }}
      >
        <svg width="100%" height="auto" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: viewportMode === "mobile" ? "250px" : "500px" }}>
          {/* The Physical Book */}
          <rect x="100" y="150" width="100" height="130" rx="4" fill="var(--color-primary-navy)" />
          <rect x="110" y="155" width="80" height="120" fill="var(--color-bg-base)" opacity="0.1" />
          {/* Spine detail */}
          <path d="M105 150 v130" stroke="var(--color-bg-base)" strokeWidth="2" opacity="0.2" />
          {/* Title accent */}
          <rect x="120" y="170" width="60" height="4" fill="var(--color-accent-rose)" />
          <rect x="120" y="180" width="40" height="2" fill="var(--color-accent-rose)" opacity="0.6" />
          
          {/* Flying Pages (Metaphor for creation/ideas turning into the book) */}
          <motion.g style={{ y: page1Y, rotate: page1Rotate, transformOrigin: "150px 150px" }}>
            <rect x="130" y="80" width="60" height="80" fill="var(--color-bg-base)" stroke="var(--color-primary-navy)" strokeWidth="1" opacity="0.8" />
            <path d="M140 90 h40 M140 100 h30 M140 110 h40" stroke="var(--color-primary-navy)" strokeWidth="1" opacity="0.3" />
          </motion.g>

          <motion.g style={{ y: page2Y, rotate: page2Rotate, transformOrigin: "100px 100px" }}>
            <rect x="90" y="50" width="50" height="70" fill="var(--color-bg-base)" stroke="var(--color-accent-rose)" strokeWidth="1" opacity="0.6" />
            <path d="M100 60 h30 M100 70 h20" stroke="var(--color-accent-rose)" strokeWidth="1" opacity="0.4" />
          </motion.g>
        </svg>
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* READER / DISCOVERY WORLD (0.65 - 0.85) */}
      {/* ---------------------------------------------------------------- */}
      <motion.div
        style={{
          position: "absolute",
          top: "20vh",
          left: "40vw",
          x: isReducedMotion ? "60vw" : discoveryX,
          opacity: isReducedMotion ? (progress.get() > 0.65 && progress.get() < 0.85 ? 1 : 0) : discoveryOpacity,
        }}
      >
        <svg width="100%" height="auto" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: viewportMode === "mobile" ? "350px" : "700px" }}>
          {/* Stylized Floating Recommendation Cards / Readers */}
          
          {/* Card 1 */}
          <g opacity="0.8">
            <rect x="50" y="200" width="140" height="80" rx="8" fill="var(--color-bg-base)" stroke="var(--color-primary-navy)" strokeWidth="1" strokeOpacity="0.2" />
            {/* Stars */}
            <path d="M65 220 l5 15 h-15 z M80 220 l5 15 h-15 z M95 220 l5 15 h-15 z M110 220 l5 15 h-15 z M125 220 l5 15 h-15 z" fill="var(--color-accent-rose)" />
            <rect x="65" y="245" width="100" height="4" rx="2" fill="var(--color-primary-navy)" opacity="0.1" />
            <rect x="65" y="255" width="70" height="4" rx="2" fill="var(--color-primary-navy)" opacity="0.1" />
          </g>

          {/* Card 2 */}
          <g opacity="0.6" transform="translate(180, 150) scale(0.9)">
            <rect x="0" y="0" width="160" height="90" rx="8" fill="var(--color-bg-base)" stroke="var(--color-accent-rose)" strokeWidth="1" strokeOpacity="0.4" />
            {/* Profile Avatar circle */}
            <circle cx="30" cy="30" r="15" fill="var(--color-primary-navy)" opacity="0.1" />
            <rect x="55" y="25" width="60" height="6" rx="3" fill="var(--color-primary-navy)" opacity="0.2" />
            <rect x="20" y="60" width="120" height="4" rx="2" fill="var(--color-primary-navy)" opacity="0.1" />
            <rect x="20" y="70" width="90" height="4" rx="2" fill="var(--color-primary-navy)" opacity="0.1" />
          </g>

          {/* Abstract Reader Shape */}
          <g opacity="0.4" transform="translate(300, 250)">
            {/* Book open */}
            <path d="M0 20 Q 30 0, 60 20 Q 90 0, 120 20 L120 50 Q 90 30, 60 50 Q 30 30, 0 50 Z" fill="var(--color-primary-navy)" opacity="0.1" stroke="var(--color-primary-navy)" strokeWidth="1" />
            <path d="M60 20 L60 50" stroke="var(--color-primary-navy)" strokeWidth="1" opacity="0.2" />
            {/* Sparkles / Discovery Magic */}
            <circle cx="20" cy="-10" r="2" fill="var(--color-accent-rose)" />
            <circle cx="100" cy="-20" r="3" fill="var(--color-accent-rose)" />
            <circle cx="60" cy="-30" r="2" fill="var(--color-accent-rose)" />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}
