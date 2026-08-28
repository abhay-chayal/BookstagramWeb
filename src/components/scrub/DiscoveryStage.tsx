"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./DiscoveryStage.module.css";

/**
 * Per-book choreography across the five scroll beats.
 * Index 0 is the "hero" book — the author we're promoting. The rest are the
 * crowded market it has to be discovered within.
 *
 * Each array maps to BEATS below: [alone, crowd, grid, lifted, cta]
 */
interface BookTrack {
  src: string;
  alt: string;
  x: number[]; // vw
  y: number[]; // vh
  z: number[]; // px (translateZ)
  rotate: number[]; // deg (rotateY)
  opacity: number[];
}

const BEATS = [0, 0.22, 0.46, 0.7, 0.93];

const TRACKS: BookTrack[] = [
  {
    src: "/images/books/queen-of-nordern.webp",
    alt: "Queen of Nordern",
    x: [0, 0, -18, 0, 0],
    y: [0, 0, -6, 0, 0],
    z: [0, -120, -60, 260, 320],
    rotate: [0, 0, -8, 0, 0],
    opacity: [1, 1, 1, 1, 1],
  },
  {
    src: "/images/books/flare-chronicles.webp",
    alt: "Flare Chronicles",
    x: [0, -32, 18, -46, -52],
    y: [0, -14, -6, -18, -20],
    z: [0, -420, -60, -700, -800],
    rotate: [0, 14, 8, 20, 22],
    opacity: [0, 1, 1, 0.18, 0.1],
  },
  {
    src: "/images/books/infectious-injustice.webp",
    alt: "Infectious Injustice",
    x: [0, 30, -18, 44, 50],
    y: [0, 12, 12, 16, 18],
    z: [0, -380, -60, -640, -760],
    rotate: [0, -12, -8, -18, -20],
    opacity: [0, 1, 1, 0.18, 0.1],
  },
  {
    src: "/images/books/space-travellers-lover.webp",
    alt: "Space Traveller's Lover",
    x: [0, -18, 18, -30, -34],
    y: [0, 16, 12, 22, 26],
    z: [0, -640, -60, -900, -1000],
    rotate: [0, 8, 8, 14, 16],
    opacity: [0, 0.9, 1, 0.12, 0.06],
  },
  {
    src: "/images/books/faucet.webp",
    alt: "Faucet",
    x: [0, 20, 0, 32, 36],
    y: [0, -18, 18, -24, -28],
    z: [0, -700, -60, -960, -1060],
    rotate: [0, -10, 0, -16, -18],
    opacity: [0, 0.9, 1, 0.12, 0.06],
  },
];

function BookPlate({ track, progress }: { track: BookTrack; progress: MotionValue<number> }) {
  const x = useTransform(progress, BEATS, track.x.map((v) => `${v}vw`));
  const y = useTransform(progress, BEATS, track.y.map((v) => `${v}vh`));
  const z = useTransform(progress, BEATS, track.z);
  const rotateY = useTransform(progress, BEATS, track.rotate);
  const opacity = useTransform(progress, BEATS, track.opacity);

  return (
    <motion.div className={styles.plate} style={{ x, y, z, rotateY, opacity }}>
      <div className={styles.cover}>
        <Image
          src={track.src}
          alt={track.alt}
          fill
          sizes="(max-width: 768px) 40vw, 20vw"
          className={styles.coverImage}
          priority
        />
      </div>
    </motion.div>
  );
}

export default function DiscoveryStage({ progress }: { progress: MotionValue<number> }) {
  // The whole world drifts slightly against the books — a parallax "camera".
  const worldY = useTransform(progress, [0, 1], ["0vh", "-4vh"]);

  return (
    <motion.div className={styles.stage} style={{ y: worldY }} aria-hidden="true">
      <div className={styles.perspective}>
        {TRACKS.map((track) => (
          <BookPlate key={track.src} track={track} progress={progress} />
        ))}
      </div>
    </motion.div>
  );
}
