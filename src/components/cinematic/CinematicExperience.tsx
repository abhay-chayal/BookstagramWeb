"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { CinematicContext, ViewportMode } from "./CinematicContext";
import { CINEMATIC_SCENES, CINEMATIC_TOTAL_HEIGHT } from "./config";
import CameraController from "./CameraController";
import DebugOverlay from "./DebugOverlay";
import Scene01Quiet from "./Scene01Quiet";
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
          backgroundColor: "#0B1121" // Dark staging ground
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
            <BirdController />
            {/* Future scenes will be injected here */}
          </CameraController>

          {/* Overlay Content (e.g., Hero Typography) */}
          <div style={{ position: "absolute", inset: 0, zIndex: 50, pointerEvents: "none" }}>
            {children}
          </div>
          
          {/* 9. Debug Mode */}
          <DebugOverlay />
        </div>
      </section>
    </CinematicContext.Provider>
  );
}
