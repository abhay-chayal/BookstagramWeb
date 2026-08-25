"use client";

import { motion, useTransform } from "framer-motion";
import { useCinematic } from "./CinematicContext";
import TreeBranch from "./TreeBranch";

export default function Scene01Quiet() {
  const { progress, currentSceneId } = useCinematic();

  // Scene 01 only needs to manage its own opacity/exit as we scroll past it.
  // We fade this scene out entirely as we enter Scene 03 (travel).
  const sceneOpacity = useTransform(progress, [0.12, 0.25], [1, 0]);

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        opacity: sceneOpacity,
        pointerEvents: "none", // Prevent capturing clicks meant for the hero text
        zIndex: 1, // Behind hero text, but in front of background
        background: "var(--color-bg-base)", // Use the off-white theme color
      }}
    >
      {/* Background Atmosphere (extremely subtle slow particles/dust for light theme) */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.3 }}>
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            width: "100%", 
            height: "100%", 
            background: "radial-gradient(circle at 70% 30%, rgba(200, 155, 123, 0.05) 0%, transparent 60%)" 
          }} 
        />
      </div>

      {/* Composition wrapper - keeps tree on the left, leaving right side for Hero content */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex"
      }}>
        <TreeBranch />
      </div>

    </motion.div>
  );
}
