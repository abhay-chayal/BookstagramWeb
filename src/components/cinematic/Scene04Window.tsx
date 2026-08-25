"use client";

import { motion, useTransform } from "framer-motion";
import { useCinematic } from "./CinematicContext";

export default function Scene04Window() {
  const { progress, isReducedMotion, viewportMode } = useCinematic();

  const isMobile = viewportMode === "mobile";

  // Scene master opacity (0.42 – 0.58)
  const sceneOpacity = useTransform(progress, [0.38, 0.44, 0.56, 0.60], [0, 1, 1, 0]);

  // Building slides in from the right
  const buildingX = useTransform(progress, [0.38, 0.48], [isMobile ? "30vw" : "50vw", "0vw"]);

  // Window glow intensifies as bird approaches
  const glowOpacity = useTransform(progress, [0.44, 0.52], [0.3, 1]);

  // Camera zoom INTO the window (0.52 – 0.58)
  const windowScale = useTransform(progress, [0.50, 0.58], [1, isMobile ? 6 : 8]);
  const windowOpacity = useTransform(progress, [0.56, 0.58], [1, 0]);

  // Interior peek opacity
  const interiorPeek = useTransform(progress, [0.46, 0.52], [0, 1]);

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        opacity: sceneOpacity,
        pointerEvents: "none",
        zIndex: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Building + Window composition */}
      <motion.div
        style={{
          x: isReducedMotion ? "0vw" : buildingX,
          scale: isReducedMotion ? 1 : windowScale,
          opacity: isReducedMotion ? 1 : windowOpacity,
          transformOrigin: isMobile ? "60% 45%" : "65% 42%",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <svg
          width="100%" height="100%"
          viewBox="0 0 1000 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Building silhouette */}
          <rect x="550" y="80" width="350" height="500" rx="4" fill="var(--color-primary-navy)" opacity="0.06" />
          <rect x="560" y="90" width="330" height="480" rx="2" fill="var(--color-primary-navy)" opacity="0.03" />

          {/* Regular windows (dark, unlit) */}
          {[0, 1, 2, 3].map(row =>
            [0, 1, 2].map(col => {
              const wx = 590 + col * 100;
              const wy = 120 + row * 110;
              const isSpecial = row === 1 && col === 1;
              if (isSpecial) return null;
              return (
                <rect
                  key={`w-${row}-${col}`}
                  x={wx} y={wy}
                  width="60" height="45"
                  rx="2"
                  fill="var(--color-primary-navy)"
                  opacity="0.04"
                />
              );
            })
          )}

          {/* THE SPECIAL WINDOW — warm, glowing, inviting */}
          <g>
            {/* Warm glow behind window */}
            <motion.rect
              x="675" y="215" width="90" height="70" rx="4"
              fill="var(--color-accent-rose)"
              style={{ opacity: glowOpacity }}
              filter="url(#windowBlur)"
            />

            {/* Window frame */}
            <rect x="680" y="220" width="80" height="60" rx="3"
              fill="var(--color-bg-alt)"
              stroke="var(--color-primary-navy)" strokeWidth="2" strokeOpacity="0.15"
            />

            {/* Window cross frame */}
            <line x1="720" y1="220" x2="720" y2="280" stroke="var(--color-primary-navy)" strokeWidth="1.5" strokeOpacity="0.1" />
            <line x1="680" y1="250" x2="760" y2="250" stroke="var(--color-primary-navy)" strokeWidth="1.5" strokeOpacity="0.1" />

            {/* Interior peek — bookshelves */}
            <motion.g style={{ opacity: interiorPeek }}>
              {/* Tiny bookshelf lines */}
              <rect x="685" y="225" width="4" height="20" fill="var(--color-accent-rose)" opacity="0.6" />
              <rect x="691" y="228" width="3" height="17" fill="var(--color-primary-navy)" opacity="0.3" />
              <rect x="696" y="226" width="4" height="19" fill="var(--color-accent-rose)" opacity="0.4" />
              <rect x="702" y="230" width="3" height="15" fill="var(--color-primary-navy)" opacity="0.2" />

              {/* Desk silhouette */}
              <rect x="740" y="260" width="25" height="3" fill="var(--color-primary-navy)" opacity="0.2" />
              {/* Lamp */}
              <circle cx="748" cy="255" r="3" fill="var(--color-accent-rose)" opacity="0.5" />
            </motion.g>
          </g>

          {/* Window sill detail */}
          <rect x="675" y="280" width="90" height="4" rx="1" fill="var(--color-primary-navy)" opacity="0.06" />

          {/* Building architectural details */}
          <line x1="550" y1="580" x2="900" y2="580" stroke="var(--color-primary-navy)" strokeWidth="3" strokeOpacity="0.05" />
          <line x1="550" y1="80" x2="900" y2="80" stroke="var(--color-primary-navy)" strokeWidth="2" strokeOpacity="0.04" />

          {/* Blur filter for glow */}
          <defs>
            <filter id="windowBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="15" />
            </filter>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}
