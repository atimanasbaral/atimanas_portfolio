"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import CursorGlow from "@/components/effects/CursorGlow";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: reducedMotion ? 1 : 0.08,
        smoothWheel: !reducedMotion,
        syncTouch: false,
      }}
    >
      <CursorGlow />
      {children}
    </ReactLenis>
  );
}
