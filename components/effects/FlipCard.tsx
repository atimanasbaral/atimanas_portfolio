"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type FlipCardProps = {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  /** Flip on hover (desktop) — always also works via click/tap for touch + a11y. */
  flipOnHover?: boolean;
  /** Delay before the flip-back on mouse leave (ms). */
  resetDelay?: number;
};

/**
 * 3D flip card. Wraps a front face and a back face in a perspective container.
 * - Desktop: flips on hover (default) by toggling state.
 * - Touch / keyboard: flips on click / Enter / Space (acts as a toggle).
 * - Respects prefers-reduced-motion by cross-fading instead of rotating.
 */
export function FlipCard({ front, back, className = "", flipOnHover = true, resetDelay = 0 }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const reducedMotion = useReducedMotion();

  const toggle = () => setFlipped((f) => !f);

  const hoverHandlers = flipOnHover
    ? {
        onMouseEnter: () => setFlipped(true),
        onMouseLeave: () => {
          if (resetDelay > 0) {
            window.setTimeout(() => setFlipped(false), resetDelay);
          } else {
            setFlipped(false);
          }
        },
      }
    : {};

  if (reducedMotion) {
    // Fallback: simple cross-fade toggle, no 3D rotation.
    return (
      <div
        className={`relative ${className}`}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        {...hoverHandlers}
      >
        <motion.div animate={{ opacity: flipped ? 0 : 1 }} transition={{ duration: 0.2 }}>
          {front}
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: flipped ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ pointerEvents: flipped ? "auto" : "none" }}
        >
          {back}
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`flip-card-perspective relative ${className}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      {...hoverHandlers}
    >
      <motion.div
        className="flip-card-inner relative h-full w-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flip-card-face flip-card-front absolute inset-0 h-full w-full" style={{ backfaceVisibility: "hidden" }}>
          {front}
        </div>
        <div
          className="flip-card-face flip-card-back absolute inset-0 h-full w-full"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}
