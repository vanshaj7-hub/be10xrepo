"use client";

import Box from "@mui/material/Box";
import { motion, type TargetAndTransition, type Transition } from "framer-motion";

export const MotionBox = motion.create(Box);

export type MotionPresetProps = {
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  whileInView?: TargetAndTransition;
  viewport?: { once?: boolean; margin?: string };
  transition?: Transition;
};

export function fadeUp(delay = 0, reducedMotion = false): MotionPresetProps {
  if (reducedMotion) return {};
  return {
    initial: { y: 28 },
    animate: { y: 0 },
    transition: { duration: 0.65, delay, ease: "easeOut" },
  };
}

export function fadeInScale(delay = 0, reducedMotion = false): MotionPresetProps {
  if (reducedMotion) return {};
  return {
    initial: { scale: 0.95 },
    animate: { scale: 1 },
    transition: { duration: 0.8, delay, ease: "easeOut" },
  };
}

export function slideInView(
  direction: "left" | "right",
  delay = 0,
  reducedMotion = false,
): MotionPresetProps {
  if (reducedMotion) return {};
  const x = direction === "left" ? -24 : 24;
  return {
    initial: { x },
    whileInView: { x: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay, ease: "easeOut" },
  };
}
