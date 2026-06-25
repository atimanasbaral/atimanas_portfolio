"use client";

import { useEffect, useState } from "react";
import IntroSequence from "@/components/IntroSequence";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");
    setShowIntro(!hasSeenIntro);
    setChecked(true);
  }, []);

  if (!checked) {
    return <div className="min-h-screen bg-bg-primary" />;
  }

  if (showIntro) {
    return <IntroSequence onComplete={() => setShowIntro(false)} />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6">
      <h1
        className="font-display text-6xl text-glow-violet"
        style={{ color: "var(--color-accent-violet)" }}
      >
        ATIMANAS BARAL
      </h1>
      <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
        Phase 4 — Intro sequence live ✓ (Hero section coming in Phase 5)
      </p>
      <button
        onClick={() => {
          localStorage.removeItem("hasSeenIntro");
          window.location.reload();
        }}
        className="rounded-full border border-border px-4 py-2 text-sm text-text-muted hover:border-accent-violet hover:text-text-primary"
      >
        ↻ Replay intro (dev only)
      </button>
    </main>
  );
}