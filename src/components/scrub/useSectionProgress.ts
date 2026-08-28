"use client";

import { RefObject, useEffect } from "react";
import { MotionValue, useMotionValue } from "framer-motion";

/**
 * Scroll progress (0..1) across a tall section, measured from the moment its
 * top hits the viewport top until its bottom does.
 *
 * We compute this by hand rather than using framer-motion's `useScroll({ target })`,
 * which does not track reliably on framer-motion 13 in this app — see
 * OurVisionScroll, whose horizontal track never moves for the same reason.
 */
export function useSectionProgress(ref: RefObject<HTMLElement | null>): MotionValue<number> {
  const progress = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      // Distance the section travels while pinned.
      const travel = rect.height - window.innerHeight;
      if (travel <= 0) {
        progress.set(0);
        return;
      }
      // rect.top counts down from 0 to -travel as we scroll through.
      const raw = -rect.top / travel;
      progress.set(Math.min(Math.max(raw, 0), 1));
    };

    const onScroll = () => {
      // Coalesce to one measurement per frame.
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, progress]);

  return progress;
}
