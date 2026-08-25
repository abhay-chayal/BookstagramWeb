import { createContext, useContext } from "react";
import { MotionValue } from "framer-motion";

export type ViewportMode = "mobile" | "tablet" | "desktop";

export interface SceneConfig {
  id: string;
  start: number;
  end: number;
  name: string;
}

export interface CinematicContextType {
  progress: MotionValue<number>;
  currentSceneId: string;
  viewportMode: ViewportMode;
  isReducedMotion: boolean;
  debugMode: boolean;
  scenes: SceneConfig[];
}

export const CinematicContext = createContext<CinematicContextType | null>(null);

export function useCinematic() {
  const context = useContext(CinematicContext);
  if (!context) {
    throw new Error("useCinematic must be used within a CinematicExperience provider");
  }
  return context;
}
