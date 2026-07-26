"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

const directionMap = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
} as const;

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 40,
}: FadeInProps) {
  const { ref, isInView } = useScrollAnimation();

  const offset = directionMap[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x * (distance / 40),
      y: offset.y * (distance / 40),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
