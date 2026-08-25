"use client";

import { motion, useTransform } from "framer-motion";
import { useCinematic } from "./CinematicContext";

interface TreeBranchProps {
  className?: string;
}

export default function TreeBranch({ className }: TreeBranchProps) {
  const { isReducedMotion, progress } = useCinematic();

  // Branch Reaction (Dips slightly when bird pushes off, then springs back)
  // Push off occurs around 0.204
  const branchReactionRotate = useTransform(
    progress,
    [0.18, 0.204, 0.23, 0.25],
    [0, 2, -1, 0] // Dips down, springs slightly up, settles
  );

  // Gentle organic branch sway
  const swayVariants = {
    sway: {
      rotate: [0, 0.5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    static: {
      rotate: 0
    }
  };

  // Subtle leaf flutter
  const leafVariants = {
    flutter: {
      rotate: [0, -3, 2, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    static: {
      rotate: 0
    }
  };

  return (
    <motion.div 
      className={className}
      variants={swayVariants}
      animate={isReducedMotion ? "static" : "sway"}
      style={{ transformOrigin: "bottom left", position: "absolute", zIndex: 10 }}
    >
      <svg
        width="400"
        height="500"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Abstract / Elegant Tree Trunk (Dark lines for light background) */}
        <path d="M-50 550 Q 50 300, 100 100" stroke="rgba(28, 37, 48, 0.05)" strokeWidth="80" fill="none" strokeLinecap="round" />
        <path d="M-20 550 Q 70 300, 110 120" stroke="rgba(28, 37, 48, 0.03)" strokeWidth="40" fill="none" strokeLinecap="round" />
        
        {/* Main Branch where bird sits (Reacts to takeoff) */}
        <motion.g 
          style={{ 
            transformOrigin: "70px 250px", 
            rotate: isReducedMotion ? 0 : branchReactionRotate 
          }}
        >
          <path d="M70 250 Q 150 200, 300 220" stroke="rgba(28, 37, 48, 0.08)" strokeWidth="15" fill="none" strokeLinecap="round" />
          <path d="M100 230 Q 180 180, 250 160" stroke="rgba(28, 37, 48, 0.05)" strokeWidth="8" fill="none" strokeLinecap="round" />
          
          {/* Leaves / Flourishes */}
          <motion.g variants={leafVariants} animate={isReducedMotion ? "static" : "flutter"} style={{ transformOrigin: "280px 220px" }}>
            <circle cx="280" cy="220" r="4" fill="var(--color-accent-rose)" opacity="0.6" />
            <path d="M280 220 Q 295 210, 290 200 Q 275 210, 280 220" fill="var(--color-accent-rose)" opacity="0.4" />
          </motion.g>

          <motion.g variants={leafVariants} animate={isReducedMotion ? "static" : "flutter"} style={{ transformOrigin: "230px 165px" }}>
            <circle cx="230" cy="165" r="3" fill="var(--color-accent-rose)" opacity="0.4" />
            <path d="M230 165 Q 240 155, 235 145 Q 225 155, 230 165" fill="var(--color-accent-rose)" opacity="0.3" />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
}
