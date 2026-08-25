import { SceneConfig } from "./CinematicContext";

// Master Timeline Configuration
// All scroll values are normalized between 0.0 and 1.0
export const CINEMATIC_SCENES: SceneConfig[] = [
  { id: "scene-01-tree", start: 0.00, end: 0.12, name: "Quiet tree / bird resting" },
  { id: "scene-02-flight", start: 0.12, end: 0.25, name: "Bird takes flight" },
  { id: "scene-03-travel", start: 0.25, end: 0.42, name: "Travel through literary world" },
  { id: "scene-04-discovery", start: 0.42, end: 0.58, name: "Author/book discovery" },
  { id: "scene-05-building", start: 0.58, end: 0.72, name: "Building and window" },
  { id: "scene-06-studio", start: 0.72, end: 0.86, name: "Inside Bookstagram studio" },
  { id: "scene-07-community", start: 0.86, end: 0.95, name: "Community / growth" },
  { id: "scene-08-cta", start: 0.95, end: 1.00, name: "Return / CTA" },
];

export const CINEMATIC_TOTAL_HEIGHT = "800vh"; // Dictates how long the scroll lasts
