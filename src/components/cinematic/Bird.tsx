"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useCinematic } from "./CinematicContext";

interface BirdProps {
  className?: string;
  wingProgress?: MotionValue<number>;
  scrollProgress?: MotionValue<number>;
}

export default function Bird({ className, wingProgress }: BirdProps) {
  const { isReducedMotion } = useCinematic();

  // Subtle idle breathing animation
  const breathingVariants = {
    idle: {
      scaleY: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    static: {
      scaleY: 1
    }
  };

  // Very subtle head tilt (using rotation)
  const headVariants = {
    idle: {
      rotate: [0, -2, 0, 1, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1]
      }
    },
    static: {
      rotate: 0
    }
  };

  return (
    <motion.div 
      className={className}
      // This wrapper is ready for future flight path injection
      style={{ position: "absolute", zIndex: 20 }}
    >
      <motion.svg
        width="60"
        height="60"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={breathingVariants}
        animate={isReducedMotion ? "static" : "idle"}
        style={{ transformOrigin: "bottom center" }}
      >
        {/* Simplified elegant bird silhouette - Origami / Geometric inspired for premium feel */}
        
        {/* Tail */}
        <path d="M20 75 L10 90 L35 70 Z" fill="#EADCC9" opacity="0.9" />
        
        {/* Body */}
        <path d="M30 75 C45 85, 75 75, 80 50 C70 65, 45 70, 30 75 Z" fill="#F8F3ED" />
        
        {/* Wing (Subtle layered opacity) */}
        <motion.g 
          style={{ 
            transformOrigin: "45px 65px",
            // Mapping wingProgress to rotation: 0 (closed) -> 1 (up) -> -1 (down) -> 0
            rotate: wingProgress ? useTransform(wingProgress, [-1, 0, 1], [45, 0, -60]) : 0
          }}
        >
          <path d="M40 65 C55 70, 75 55, 60 40 C50 50, 45 60, 40 65 Z" fill="#D4BBA5" opacity="0.8" />
        </motion.g>
        
        {/* Head */}
        <motion.g
          variants={headVariants}
          animate={isReducedMotion ? "static" : "idle"}
          style={{ transformOrigin: "70px 45px" }}
        >
          <path d="M75 55 C85 55, 90 45, 85 35 C75 40, 70 50, 75 55 Z" fill="#F8F3ED" />
          {/* Beak */}
          <path d="M88 42 L100 45 L88 48 Z" fill="#B38A66" />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
}
