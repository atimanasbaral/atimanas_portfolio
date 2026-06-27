"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function CursorGlow() {
  const reducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [reducedMotion]);

  if (reducedMotion || !visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-30 hidden lg:block"
      style={{
        left: position.x,
        top: position.y,
        width: 280,
        height: 280,
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(109,74,255,0.14) 0%, rgba(0,212,255,0.06) 35%, transparent 70%)",
      }}
      aria-hidden
    />
  );
}
