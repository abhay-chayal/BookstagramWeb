"use client";

import { motion, useTransform } from "framer-motion";
import { useCinematic } from "./CinematicContext";
import Bird from "./Bird";

export default function BirdController() {
  const { progress, isReducedMotion, viewportMode } = useCinematic();

  // ---------------------------------------------------------------------------
  // SCROLL-DRIVEN TAKEOFF TIMELINE (Global Progress 0.12 -> 0.25)
  // ---------------------------------------------------------------------------
  
  // Base Starting Coordinates (Aligned exactly with the branch in Scene01)
  const baseDesktopX = 220;
  const baseDesktopY = -350; // Using negative Y to move UP from a bottom-aligned container. Adjusting based on standard absolute positioning. Wait, in Scene01, the bird was positioned relative to a flex container. We need absolute coordinates relative to the CameraController center.

  // Let's use viewport-relative starting positions since this sits in the CameraController.
  // The TreeBranch is bottom-left. Let's say Bird starts at X: 15vw, Y: 20vh (from center).
  // Actually, we can just use pixel values or percentages.
  const startX = viewportMode === "mobile" ? 50 : 200;
  const startY = viewportMode === "mobile" ? 200 : 250;

  // We will define the trajectory keyframes based on the prompt's 0-100% of the 0.12-0.25 range.
  // 0.120 (0%)   : Resting
  // 0.146 (20%)  : Anticipation (crouch)
  // 0.165 (35%)  : Prepares
  // 0.185 (50%)  : Wings open (Handled inside Bird.tsx)
  // 0.204 (65%)  : Pushes away
  // 0.224 (80%)  : Rises
  // 0.250 (100%) : Airborne

  // Flight Path X
  const isMobile = viewportMode === "mobile";
  const targetX = isMobile ? 150 : 600;
  const birdX = useTransform(
    progress,
    [
      0,      // 01 Quiet
      0.18, 0.204, 0.224, 0.25, // 02 Takeoff
      0.35, 0.42, // 03 Literary Journey
      0.48, 0.52, 0.56, // 04 Window approach, landing on sill, flight into studio
      0.62, 0.68, // 05 Studio services
      0.76, 0.84, // 06 Community
      0.88, 0.94, // 07 Return to tree
      1.00   // 08 CTA resting
    ],
    [
      startX,
      startX, startX + 50, startX + targetX/2, startX + targetX,
      isMobile ? 250 : 800, isMobile ? 320 : 950,
      isMobile ? 380 : 1100, isMobile ? 420 : 1150, isMobile ? 450 : 1250,
      isMobile ? 350 : 900, isMobile ? 400 : 1050,
      isMobile ? 300 : 750, isMobile ? 380 : 900,
      isMobile ? 200 : 550, isMobile ? 150 : startX + 190,
      isMobile ? 150 : startX + 190
    ]
  );

  // Flight Path Y
  const birdY = useTransform(
    progress,
    [
      0,
      0.146, 0.185, 0.204, 0.224, 0.25,
      0.35, 0.42,
      0.48, 0.52, 0.56,
      0.62, 0.68,
      0.76, 0.84,
      0.88, 0.94,
      1.00
    ],
    [
      startY,
      startY + 15, startY + 5, startY - 50, 120, 150,
      180, 140,
      190, 220, 160, // Window descent, perch on sill, lift-off
      140, 170, // Studio
      130, 160, // Community
      190, startY - 12, // Return to tree branch
      startY - 12 // Settled on branch
    ]
  );

  // Bird Scale
  const birdScaleY = useTransform(
    progress,
    [0, 0.12, 0.146, 0.185, 0.204, 0.25, 0.52, 0.56, 0.94, 1],
    [1, 1, 0.85, 1.1, 1, 1, 0.9, 1, 0.9, 1]
  );
  
  const birdScaleX = useTransform(
    progress,
    [0, 0.12, 0.146, 0.185, 0.204, 0.25, 0.52, 0.56, 0.94, 1],
    [1, 1, 1.1, 0.9, 1, 1, 1, 1, 1, 1]
  );

  // Bird Rotation (Trajectory angle)
  const birdRotate = useTransform(
    progress,
    [0, 0.146, 0.185, 0.204, 0.224, 0.25, 0.35, 0.42, 0.48, 0.52, 0.56, 0.65, 0.76, 0.88, 0.94, 1],
    [0, 5, -10, -25, -15, -5, -2, 5, 8, 0, -12, 3, -4, 10, 0, 0] 
  );

  // Wing Open Progress (Flapping cycle during flight)
  const wingProgress = useTransform(
    progress,
    [
      0, 0.165, 0.185, 0.204, 0.25, 
      0.30, 0.35, 0.40, 0.45, 
      0.50, 0.52, 0.54, // Window perch (wings fold)
      0.56, 0.60, 0.65, 0.70, 0.75, 0.80, 0.85, 0.90, 
      0.94, 1.00 // Tree return (wings settle)
    ],
    [
      0, 0, 1, -1, 1,
      -1, 1, -1, 1,
      0.5, 0, 0,
      1, -1, 1, -1, 1, -1, 1, -1,
      0, 0
    ]
  );

  return (
    <motion.div
      id="cinematic-bird"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        x: isReducedMotion ? startX : birdX,
        y: isReducedMotion ? startY : birdY,
        scaleX: isReducedMotion ? 1 : birdScaleX,
        scaleY: isReducedMotion ? 1 : birdScaleY,
        rotate: isReducedMotion ? 0 : birdRotate,
        zIndex: 100, // Always on top of environmental scenes
        pointerEvents: "none"
      }}
    >
      <Bird wingProgress={wingProgress} scrollProgress={progress} />
    </motion.div>
  );
}
