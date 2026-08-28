"use client";

import { motion, useTransform } from "framer-motion";
import { useCinematic } from "./CinematicContext";
import Button from "../Button";

export default function Scene08CTA() {
  const { progress, viewportMode } = useCinematic();

  const isMobile = viewportMode === "mobile";

  // Scene master opacity (0.94 – 1.00)
  const sceneOpacity = useTransform(progress, [0.93, 0.96, 1.0], [0, 1, 1]);
  const pointerEvents = useTransform(progress, (v) => v > 0.94 ? "auto" : "none");

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        opacity: sceneOpacity,
        pointerEvents: pointerEvents as any,
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at 50% 50%, rgba(249, 245, 240, 0.85) 0%, rgba(255, 255, 255, 0.95) 100%)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "90%",
          textAlign: "center",
          padding: isMobile ? "2rem 1rem" : "3rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: isMobile ? "0.8rem" : "0.95rem",
            color: "var(--color-accent-rose)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontWeight: 600,
          }}
        >
          Your Journey Awaits
        </span>

        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: isMobile ? "2.2rem" : "3.8rem",
            color: "var(--color-primary-navy)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Your Story Deserves <br />
          <span className="text-gradient">To Be Discovered.</span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: isMobile ? "1rem" : "1.2rem",
            color: "var(--color-text-muted)",
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          Bookstagram Club helps authors get their books in front of the right readers through strategic Instagram promotion, creative content, and campaigns built around your book.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "1rem",
            marginTop: "1rem",
            width: isMobile ? "100%" : "auto",
            justifyContent: "center",
          }}
        >
          <Button href="/contact" variant="primary">
            Start Your Campaign
          </Button>
          <Button href="/solutions" variant="outline">
            Explore Our Services
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
