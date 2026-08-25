"use client";

import { motion, Variants } from "framer-motion";
import { ElementType } from "react";

interface StaggeredTextProps {
  text: string;
  className?: string;
  as?: ElementType;
  once?: boolean;
}

export default function StaggeredText({
  text,
  className = "",
  as: Wrapper = "h1",
  once = true,
}: StaggeredTextProps) {
  const textArray = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Wrapper className={className}>
      <motion.span
        style={{ display: "inline-block", overflow: "hidden" }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-10%" }}
      >
        {textArray.map((word, index) => (
          <motion.span
            key={index}
            style={{ display: "inline-block", marginRight: "0.25em" }}
            variants={child}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
