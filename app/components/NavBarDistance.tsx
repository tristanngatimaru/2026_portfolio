"use client";

import { motion, useScroll } from "motion/react";

export default function NavBarDistance() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleY: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0, // or right: 0 for the right side
          bottom: 0,
          height: 10,
          originY: 0,
          backgroundColor: "var(--hue-1)",
        }}
      />
    </>
  );
}
