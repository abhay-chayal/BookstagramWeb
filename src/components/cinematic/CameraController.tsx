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
  
  const isMobile = viewportMode === "mobile";

  const x = useTransform(
    progress, 
    [0, 0.18, 0.25, 0.42, 0.52, 0.58, 0.72, 0.84, 0.94, 1.0], 
    [
      "0vw", "0vw", 
      isMobile ? "-4vw" : "-8vw", 
      isMobile ? "-8vw" : "-15vw", 
      isMobile ? "-12vw" : "-22vw", 
      isMobile ? "-2vw" : "-5vw", 
      isMobile ? "-5vw" : "-10vw", 
      "0vw", 
      "0vw", "0vw"
    ]
  ); 
  
  const y = useTransform(
    progress, 
    [0, 0.18, 0.25, 0.42, 0.52, 0.58, 0.72, 0.84, 0.94, 1.0], 
    [
      "0vh", "0vh", 
      "2vh", 
      "1vh", 
      "-2vh", 
      "0vh", 
      "1vh", 
      "0vh", 
      "0vh", "0vh"
    ]
  ); 

  const scale = useTransform(
    progress, 
    [0, 0.48, 0.52, 0.58, 0.72, 0.84, 0.94, 1.0], 
    [1, 1, 1.12, 1, 1.04, 0.98, 1, 1]
  );
  const rotate = useTransform(progress, [0, 1], [0, 0]);

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
