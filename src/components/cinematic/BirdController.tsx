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
  const targetX = viewportMode === "mobile" ? 150 : 600;
  const birdX = useTransform(
    progress,
    [0, 0.18, 0.204, 0.224, 0.25],
    [startX, startX, startX + 50, startX + (targetX/2), startX + targetX]
  );

  // Flight Path Y (Remember: in DOM, smaller Y is "higher")
  const targetY = viewportMode === "mobile" ? 50 : -50;
  const birdY = useTransform(
    progress,
    [0, 0.146, 0.185, 0.204, 0.224, 0.25],
    [startY, startY + 15, startY + 5, startY - 50, startY - 120, targetY]
  );

  // Bird Scale (Anticipation crouch)
  const birdScaleY = useTransform(
    progress,
    [0, 0.12, 0.146, 0.185, 0.204, 0.25],
    [1, 1, 0.85, 1.1, 1, 1]
  );
  
  const birdScaleX = useTransform(
    progress,
    [0, 0.12, 0.146, 0.185, 0.204, 0.25],
    [1, 1, 1.1, 0.9, 1, 1]
  );

  // Bird Rotation (Trajectory angle)
  const birdRotate = useTransform(
    progress,
    [0, 0.146, 0.185, 0.204, 0.224, 0.25],
    [0, 5, -10, -25, -15, -5] // Tilts down slightly in anticipation, then pitches UP for takeoff, then levels out
  );

  // Wing Open Progress (Passed down to Bird)
  const wingProgress = useTransform(
    progress,
    [0.165, 0.185, 0.204, 0.25],
    [0, 1, -1, 0] // 0: closed, 1: fully up, -1: fully down, then begins flapping cycle...
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
