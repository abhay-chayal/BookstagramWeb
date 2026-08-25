"use client";

import { useCinematic } from "./CinematicContext";
import { useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function DebugOverlay() {
  const { progress, currentSceneId, viewportMode, isReducedMotion, debugMode, scenes } = useCinematic();
  const [currentProgress, setCurrentProgress] = useState(0);

  useMotionValueEvent(progress, "change", (latest) => {
    setCurrentProgress(latest);
  });

  if (!debugMode) return null;

  const activeScene = scenes.find(s => s.id === currentSceneId);

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      background: "rgba(0,0,0,0.85)",
      color: "#00ffcc",
      padding: "1rem",
      borderRadius: "8px",
      fontFamily: "monospace",
      fontSize: "12px",
      zIndex: 99999,
      pointerEvents: "none",
      minWidth: "250px",
      border: "1px solid rgba(0,255,204,0.3)"
    }}>
      <h3 style={{ margin: "0 0 10px 0", borderBottom: "1px solid rgba(0,255,204,0.3)", paddingBottom: "5px" }}>Cinematic Engine Debug</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <div><strong>Progress:</strong> {currentProgress.toFixed(4)}</div>
        <div><strong>Scene:</strong> {activeScene?.name || "Unknown"}</div>
        <div><strong>Takeoff:</strong> {currentProgress >= 0.12 && currentProgress <= 0.25 ? ((currentProgress - 0.12) / 0.13 * 100).toFixed(1) + "%" : currentProgress > 0.25 ? "Airborne" : "Resting"}</div>
        <div><strong>Viewport:</strong> {viewportMode}</div>
        <div><strong>Reduced Motion:</strong> {isReducedMotion ? "YES" : "NO"}</div>
      </div>
    </div>
  );
}
