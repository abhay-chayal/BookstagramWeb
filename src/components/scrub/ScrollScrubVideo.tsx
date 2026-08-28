"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollScrubVideoProps {
  /** Path to the scrubbable video (e.g. Google Flow export placed in /public). */
  src: string;
  /** Optional poster shown until the first frame is decoded. */
  poster?: string;
  /**
   * Scroll progress 0..1 for the pinned section. The video's currentTime is
   * driven from this value — the clip never plays on its own.
   */
  progress: number;
  /**
   * How quickly the video catches up to the scroll position (0..1 per frame).
   * Lower = smoother/heavier, higher = snappier. The easing is what separates
   * a premium scrub from a janky one.
   */
  smoothing?: number;
  className?: string;
  onReady?: () => void;
}

export default function ScrollScrubVideo({
  src,
  poster,
  progress,
  smoothing = 0.12,
  className,
  onReady,
}: ScrollScrubVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [duration, setDuration] = useState(0);

  // Keep the latest scroll target in a ref so the rAF loop stays stable.
  targetRef.current = Math.min(Math.max(progress, 0), 1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => {
      setDuration(video.duration || 0);
      onReady?.();
    };

    video.addEventListener("loadedmetadata", handleReady);
    if (video.readyState >= 1) handleReady();

    return () => video.removeEventListener("loadedmetadata", handleReady);
  }, [onReady]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion: jump straight to the frame, no interpolation loop.
    if (prefersReduced) {
      video.currentTime = targetRef.current * duration;
      return;
    }

    const tick = () => {
      // Lerp toward the scroll target so fast flicks glide instead of snapping.
      currentRef.current += (targetRef.current - currentRef.current) * smoothing;
      const time = currentRef.current * duration;

      // Skip sub-frame updates; seeking costs more than it renders.
      if (Math.abs(video.currentTime - time) > 1 / 60) {
        video.currentTime = time;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [duration, smoothing]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      muted
      playsInline
      preload="auto"
      // Never autoplay — scroll is the only transport control.
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
