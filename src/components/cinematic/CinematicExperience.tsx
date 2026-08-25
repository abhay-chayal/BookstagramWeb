"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useReducedMotion, useTransform, MotionValue } from "framer-motion";

// Helper: Fades hero content out as the cinematic journey begins
function HeroOverlay({ progress, children }: { progress: MotionValue<number>; children: React.ReactNode }) {
  const opacity = useTransform(progress, [0, 0.08, 0.18], [1, 1, 0]);
  // Use a discrete visibility toggle to ensure child components (FadeIn etc.)
  // can't override the parent's opacity via their own motion styles.
  const display = useTransform(progress, (v) => v > 0.20 ? "none" : "block");
  return (
    <motion.div style={{ position: "absolute", inset: 0, zIndex: 50, pointerEvents: "none", opacity, display }}>
      {children}
    </motion.div>
  );
}
import { CinematicContext, ViewportMode } from "./CinematicContext";
import { CINEMATIC_SCENES, CINEMATIC_TOTAL_HEIGHT } from "./config";
import CameraController from "./CameraController";
import DebugOverlay from "./DebugOverlay";
import Scene01Quiet from "./Scene01Quiet";
import Scene03Journey from "./Scene03Journey";
import Scene04Window from "./Scene04Window";
import Scene05Studio from "./Scene05Studio";
import Scene06Community from "./Scene06Community";
import Scene07Return from "./Scene07Return";
import Scene08CTA from "./Scene08CTA";
import BirdController from "./BirdController";

interface CinematicExperienceProps {
  debug?: boolean;
  children?: React.ReactNode;
}

export default function CinematicExperience({ debug = false, children }: CinematicExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 2. Scroll Progress System
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 7. Reduced Motion hook
  const prefersReducedMotion = useReducedMotion() ?? false;

  // State management for context
  const [currentSceneId, setCurrentSceneId] = useState(CINEMATIC_SCENES[0].id);
  const [viewportMode, setViewportMode] = useState<ViewportMode>("desktop");

  // Determine active scene efficiently
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const activeScene = CINEMATIC_SCENES.find(
        (scene) => latest >= scene.start && latest <= scene.end
      );
      if (activeScene && activeScene.id !== currentSceneId) {
        setCurrentSceneId(activeScene.id);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, currentSceneId]);

  // Responsive architecture listener
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setViewportMode("mobile");
      else if (width < 1024) setViewportMode("tablet");
      else setViewportMode("desktop");
    };
    
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CinematicContext.Provider value={{
      progress: scrollYProgress,
      currentSceneId,
      viewportMode,
      isReducedMotion: prefersReducedMotion,
      debugMode: debug,
      scenes: CINEMATIC_SCENES
    }}>
      {/* 1. Cinematic Experience Container */}
      <section 
        ref={containerRef} 
        style={{ 
          position: "relative", 
          height: prefersReducedMotion ? "100vh" : CINEMATIC_TOTAL_HEIGHT, 
          width: "100%",
          backgroundColor: "var(--color-bg-base)" // Off-white theme background
        }}
      >
        <div 
          style={{ 
            position: "sticky", 
            top: 0, 
            height: "100vh", 
            width: "100%", 
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* 4. Camera System (The World) */}
          <CameraController>
            <Scene01Quiet />
            <Scene03Journey />
            <Scene04Window />
            <Scene05Studio />
            <Scene06Community />
            <Scene07Return />
            <Scene08CTA />
            <BirdController />
          </CameraController>

          {/* Overlay Content (e.g., Hero Typography) — Fades out as journey begins */}
          <HeroOverlay progress={scrollYProgress}>
            {children}
          </HeroOverlay>
          
          {/* 9. Debug Mode */}
          <DebugOverlay />
        </div>
      </section>
    </CinematicContext.Provider>
  );
}
