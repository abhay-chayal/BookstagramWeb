"use client";

import { motion, useTransform } from "framer-motion";
import { useCinematic } from "./CinematicContext";

export default function Scene06Community() {
  const { progress, isReducedMotion, viewportMode } = useCinematic();

  const isMobile = viewportMode === "mobile";

  // Scene master opacity (0.72 – 0.86)
  const sceneOpacity = useTransform(progress, [0.70, 0.74, 0.84, 0.88], [0, 1, 1, 0]);

  // Expansion feel — slight scale down to reveal more space
  const worldScale = useTransform(progress, [0.72, 0.82], [1.1, 1]);

  // Community elements stagger
  const bird2Opacity = useTransform(progress, [0.74, 0.77], [0, 1]);
  const bird3Opacity = useTransform(progress, [0.77, 0.80], [0, 1]);
  const readerOpacity = useTransform(progress, [0.75, 0.79], [0, 1]);
  const bookTravelX = useTransform(progress, [0.74, 0.84], [-100, 200]);
  const messageOpacity = useTransform(progress, [0.78, 0.82], [0, 1]);

  // Mini bird SVG
  const MiniBird = ({ x, y, scale = 0.5, flip = false }: { x: number; y: number; scale?: number; flip?: boolean }) => (
    <g transform={`translate(${x}, ${y}) scale(${flip ? -scale : scale}, ${scale})`}>
      <path d="M0 10 C8 15, 20 10, 25 0 C18 5, 8 8, 0 10 Z" fill="var(--color-primary-navy)" opacity="0.15" />
      <path d="M5 8 C12 12, 22 6, 15 0 C10 3, 6 6, 5 8 Z" fill="var(--color-accent-rose)" opacity="0.3" />
    </g>
  );

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        opacity: sceneOpacity,
        pointerEvents: "none",
        zIndex: 22,
        scale: isReducedMotion ? 1 : worldScale,
      }}
    >
      {/* Community headline */}
      <motion.div
        style={{
          position: "absolute",
          top: isMobile ? "8vh" : "12vh",
          left: "50%",
          x: "-50%",
          opacity: messageOpacity,
          textAlign: "center",
          width: isMobile ? "90vw" : "auto",
        }}
      >
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: isMobile ? "1.5rem" : "2.5rem",
          color: "var(--color-primary-navy)",
          fontWeight: 400,
          letterSpacing: "0.03em",
          lineHeight: 1.3,
        }}>
          Stories travel further<br />when people share them.
        </h2>
      </motion.div>

      {/* Community World SVG */}
      <svg
        width="100%" height="100%"
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* Ground / landscape line */}
        <path d="M0 480 Q250 460, 500 470 Q750 480, 1000 465" stroke="var(--color-primary-navy)" strokeWidth="2" strokeOpacity="0.04" fill="none" />

        {/* Reader clusters */}
        <motion.g style={{ opacity: readerOpacity }}>
          {/* Reader 1 */}
          <circle cx="200" cy="420" r="20" fill="var(--color-primary-navy)" opacity="0.04" />
          <circle cx="200" cy="412" r="8" fill="var(--color-primary-navy)" opacity="0.06" />
          {/* Open book in hands */}
          <path d="M188 430 Q200 425, 212 430 L212 440 Q200 435, 188 440 Z" fill="var(--color-accent-rose)" opacity="0.2" />

          {/* Reader 2 */}
          <circle cx="750" cy="400" r="18" fill="var(--color-primary-navy)" opacity="0.04" />
          <circle cx="750" cy="393" r="7" fill="var(--color-primary-navy)" opacity="0.06" />
          <rect x="740" y="410" width="20" height="14" rx="2" fill="var(--color-accent-rose)" opacity="0.15" />

          {/* Reader 3 (mobile hidden) */}
          {!isMobile && (
            <>
              <circle cx="500" cy="440" r="16" fill="var(--color-primary-navy)" opacity="0.03" />
              <circle cx="500" cy="434" r="6" fill="var(--color-primary-navy)" opacity="0.05" />
            </>
          )}
        </motion.g>

        {/* Traveling book */}
        <motion.g style={{ x: bookTravelX }}>
          <rect x="400" y="380" width="30" height="22" rx="3" fill="var(--color-primary-navy)" opacity="0.08" />
          <rect x="403" y="383" width="24" height="3" rx="1" fill="var(--color-accent-rose)" opacity="0.3" />
          {/* Motion trail */}
          <line x1="395" y1="391" x2="380" y2="391" stroke="var(--color-accent-rose)" strokeWidth="1" strokeOpacity="0.15" />
          <line x1="393" y1="395" x2="375" y2="395" stroke="var(--color-accent-rose)" strokeWidth="1" strokeOpacity="0.1" />
        </motion.g>

        {/* Additional birds appearing */}
        <motion.g style={{ opacity: bird2Opacity }}>
          <MiniBird x={350} y={200} scale={0.7} />
        </motion.g>
        <motion.g style={{ opacity: bird3Opacity }}>
          <MiniBird x={620} y={180} scale={0.5} flip />
        </motion.g>

        {/* Recommendation sparkles */}
        <motion.g style={{ opacity: readerOpacity }}>
          <circle cx="300" cy="350" r="2" fill="var(--color-accent-rose)" opacity="0.4" />
          <circle cx="650" cy="330" r="3" fill="var(--color-accent-rose)" opacity="0.3" />
          <circle cx="480" cy="300" r="2" fill="var(--color-accent-rose)" opacity="0.5" />
          {!isMobile && (
            <>
              <circle cx="150" cy="320" r="2" fill="var(--color-accent-rose)" opacity="0.3" />
              <circle cx="820" cy="340" r="2" fill="var(--color-accent-rose)" opacity="0.4" />
            </>
          )}
        </motion.g>
      </svg>
    </motion.div>
  );
}
