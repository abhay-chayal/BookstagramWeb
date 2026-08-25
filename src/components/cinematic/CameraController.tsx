"use client";

import { motion, useTransform } from "framer-motion";
import { useCinematic } from "./CinematicContext";
import { ReactNode } from "react";

interface CameraControllerProps {
  children: ReactNode;
}

export default function CameraController({ children }: CameraControllerProps) {
  const { progress, isReducedMotion, viewportMode } = useCinematic();

  // The CameraController conceptually moves the WORLD around the camera.
  // Instead of the camera moving Right, the world translates Left (-x).
  // Instead of zooming In, the world Scales Up.
  
  // As the bird takes off (0.18 to 0.25), it moves right and up.
  // The camera should subtly follow it by moving the world left and down.
  const x = useTransform(
    progress, 
    [0, 0.18, 0.25], 
    ["0px", "0px", viewportMode === "mobile" ? "-20px" : "-100px"]
  ); 
  
  const y = useTransform(
    progress, 
    [0, 0.18, 0.25], 
    ["0px", "0px", viewportMode === "mobile" ? "10px" : "30px"]
  ); 

  const scale = useTransform(progress, [0, 1], [1, 1]);   // Will control zoom
  const rotate = useTransform(progress, [0, 1], [0, 0]);  // Slight rotations for cinematic feel

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        // Only apply transforms if reduced motion is disabled
        x: isReducedMotion ? "0%" : x,
        y: isReducedMotion ? "0%" : y,
        scale: isReducedMotion ? 1 : scale,
        rotate: isReducedMotion ? 0 : rotate,
        transformOrigin: "center center",
        willChange: "transform" // Hint to the browser for GPU acceleration
      }}
    >
      {children}
    </motion.div>
  );
}
