"use client";

import { motion, useTransform } from "framer-motion";
import { useCinematic } from "./CinematicContext";

export default function Scene07Return() {
  const { progress, isReducedMotion, viewportMode } = useCinematic();

  const isMobile = viewportMode === "mobile";

  // Scene master opacity (0.86 – 0.95)
  const sceneOpacity = useTransform(progress, [0.84, 0.88, 0.94, 0.97], [0, 1, 1, 0]);

  // Camera pull-back (world shrinks slightly to reveal the big picture)
  const cameraScale = useTransform(progress, [0.86, 0.94], [1.05, 1]);

  // Enhanced tree elements (more leaves, more life than Scene 01)
  const leafOpacity = useTransform(progress, [0.88, 0.92], [0, 1]);
  const bird2Settle = useTransform(progress, [0.90, 0.93], [0, 1]);

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        opacity: sceneOpacity,
        pointerEvents: "none",
        zIndex: 24,
        scale: isReducedMotion ? 1 : cameraScale,
      }}
    >
      <svg
        width="100%" height="100%"
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* Flourishing Tree — richer than Scene 01 */}
        {/* Trunk */}
        <path d="M200 580 Q220 400, 250 250 Q260 200, 280 160"
          stroke="var(--color-primary-navy)" strokeWidth="12" fill="none" strokeLinecap="round" strokeOpacity="0.08" />
        <path d="M210 580 Q230 420, 260 280"
          stroke="var(--color-primary-navy)" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.05" />

        {/* Main Branches — more than Scene 01 */}
        <path d="M260 280 Q320 240, 420 250"
          stroke="var(--color-primary-navy)" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.07" />
        <path d="M270 240 Q350 200, 380 180"
          stroke="var(--color-primary-navy)" strokeWidth="4" fill="none" strokeLinecap="round" strokeOpacity="0.05" />
        <path d="M250 320 Q180 280, 130 260"
          stroke="var(--color-primary-navy)" strokeWidth="5" fill="none" strokeLinecap="round" strokeOpacity="0.06" />
        <path d="M265 260 Q300 220, 350 210"
          stroke="var(--color-primary-navy)" strokeWidth="3" fill="none" strokeLinecap="round" strokeOpacity="0.04" />

        {/* Original leaves */}
        <circle cx="420" cy="245" r="8" fill="var(--color-accent-rose)" opacity="0.15" />
        <circle cx="380" cy="175" r="6" fill="var(--color-accent-rose)" opacity="0.12" />
        <circle cx="130" cy="255" r="7" fill="var(--color-accent-rose)" opacity="0.1" />

        {/* NEW leaves — the flourishing part */}
        <motion.g style={{ opacity: leafOpacity }}>
          <circle cx="350" cy="205" r="10" fill="var(--color-accent-rose)" opacity="0.18" />
          <circle cx="300" cy="230" r="8" fill="var(--color-accent-rose)" opacity="0.14" />
          <circle cx="160" cy="270" r="9" fill="var(--color-accent-rose)" opacity="0.12" />
          <circle cx="400" cy="220" r="6" fill="var(--color-accent-rose)" opacity="0.2" />
          <circle cx="320" cy="195" r="7" fill="var(--color-accent-rose)" opacity="0.16" />
          <circle cx="250" cy="245" r="5" fill="var(--color-accent-rose)" opacity="0.1" />
          {!isMobile && (
            <>
              <circle cx="440" cy="260" r="7" fill="var(--color-accent-rose)" opacity="0.12" />
              <circle cx="110" cy="240" r="8" fill="var(--color-accent-rose)" opacity="0.1" />
              <circle cx="370" cy="190" r="5" fill="var(--color-accent-rose)" opacity="0.15" />
            </>
          )}
        </motion.g>

        {/* Birds settling on branches */}
        {/* Original bird (main guide) — landing on main branch */}
        <g transform="translate(390, 238) scale(0.5)">
          <path d="M0 10 C8 15, 20 10, 25 0 C18 5, 8 8, 0 10 Z" fill="var(--color-primary-navy)" opacity="0.2" />
          <circle cx="22" cy="3" r="2.5" fill="var(--color-primary-navy)" opacity="0.25" />
        </g>

        {/* Additional birds settling */}
        <motion.g style={{ opacity: bird2Settle }}>
          <g transform="translate(340, 195) scale(0.35)">
            <path d="M0 10 C8 15, 20 10, 25 0 C18 5, 8 8, 0 10 Z" fill="var(--color-primary-navy)" opacity="0.15" />
            <circle cx="22" cy="3" r="2.5" fill="var(--color-primary-navy)" opacity="0.18" />
          </g>
          <g transform="translate(150, 250) scale(-0.4, 0.4)">
            <path d="M0 10 C8 15, 20 10, 25 0 C18 5, 8 8, 0 10 Z" fill="var(--color-primary-navy)" opacity="0.12" />
            <circle cx="22" cy="3" r="2.5" fill="var(--color-primary-navy)" opacity="0.15" />
          </g>
        </motion.g>

        {/* Ground */}
        <path d="M0 520 Q200 500, 400 510 Q600 520, 800 505 Q900 500, 1000 508"
          stroke="var(--color-primary-navy)" strokeWidth="2" strokeOpacity="0.03" fill="none" />
      </svg>
    </motion.div>
  );
}
