const fs = require("fs");

const content = `"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SCENE_DURATIONS = [1200, 1400, 1400, 1400, 1000];

export default function IntroSequence({ onComplete }: { onComplete: () => void }) {
  const [scene, setScene] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleFinish = useCallback(() => {
    localStorage.setItem("hasSeenIntro", "true");
    setVisible(false);
    setTimeout(onComplete, 500);
  }, [onComplete]);

  useEffect(() => {
    if (scene >= SCENE_DURATIONS.length) {
      queueMicrotask(handleFinish);
      return;
    }
    const timer = setTimeout(() => setScene((s) => s + 1), SCENE_DURATIONS[scene]);
    return () => clearTimeout(timer);
  }, [handleFinish, scene]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">

      {/* Waterfall background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-light-jungle.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.80) 100%)" }} />
        {/* Subtle halftone grain */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "6px 6px" }} />
        {/* Vignette */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)" }} />
      </div>

      {/* Skip button */}
      <button
        onClick={handleFinish}
        className="absolute top-6 right-6 z-20 rounded-full border-2 px-4 py-2 text-sm font-bold uppercase tracking-widest transition-all"
        style={{ borderColor: "rgba(255,255,255,0.4)", color: "rgba(255,255,255,0.7)", background: "rgba(0,0,0,0.3)" }}
      >
        Skip →
      </button>

      {/* Scene progress dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {SCENE_DURATIONS.map((_, i) => (
          <div key={i} className="h-1 rounded-full transition-all duration-300"
            style={{ width: i === scene ? "24px" : "6px", background: i <= scene ? "#6d4aff" : "rgba(255,255,255,0.25)" }} />
        ))}
      </div>

      {/* Scenes */}
      <div className="relative z-10 w-full flex items-center justify-center px-6">
        <AnimatePresence mode="wait">

          {scene === 0 && (
            <motion.div key="scene0"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center">
              <p className="mb-3 text-xs tracking-[0.4em] uppercase" style={{ color: "rgba(109,74,255,0.9)" }}>Loading Portfolio</p>
              <h1 className="font-display text-5xl sm:text-8xl" style={{ color: "#ffffff", textShadow: "0 0 60px rgba(109,74,255,0.6), 4px 4px 0 rgba(0,0,0,0.8)" }}>
                ATIMANAS
              </h1>
              <h1 className="font-display text-5xl sm:text-8xl" style={{ color: "#6d4aff", textShadow: "4px 4px 0 rgba(0,0,0,0.8)" }}>
                BARAL
              </h1>
            </motion.div>
          )}

          {scene === 1 && (
            <motion.div key="scene1"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4">
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span key={i}
                    initial={{ height: 4, opacity: 0.3 }}
                    animate={{ height: [4, 48, 4], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                    className="w-2 rounded-full"
                    style={{ background: i % 2 ? "#00d4ff" : "#6d4aff" }} />
                ))}
              </div>
              <p className="font-mono text-sm tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>
                COMPILING IDENTITY...
              </p>
            </motion.div>
          )}

          {scene === 2 && (
            <motion.div key="scene2"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="text-center max-w-lg">
              <div className="mx-auto mb-6 h-28 w-28 rounded-full border-4 overflow-hidden"
                style={{ borderColor: "#6d4aff", boxShadow: "0 0 30px rgba(109,74,255,0.6), 4px 4px 0 rgba(0,0,0,0.8)" }}>
                <img src="/avatar.png" alt="Atimanas" className="h-full w-full object-cover object-top" />
              </div>
              <p className="font-display text-2xl sm:text-3xl" style={{ color: "#ffffff", textShadow: "2px 2px 0 rgba(0,0,0,0.8)" }}>
                Every builder starts somewhere.
              </p>
              <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                This is where the journey began.
              </p>
            </motion.div>
          )}

          {scene === 3 && (
            <motion.div key="scene3"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["STUDENT", "ENGINEER", "ANALYST", "BUILDER"].map((label, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-lg px-5 py-7 text-center font-display text-sm"
                  style={{
                    background: "rgba(0,0,0,0.55)",
                    border: "2px solid rgba(255,255,255,0.15)",
                    color: i % 2 ? "#00d4ff" : "#ffffff",
                    backdropFilter: "blur(8px)",
                    boxShadow: "3px 3px 0 rgba(0,0,0,0.6)",
                  }}>
                  {label}
                </motion.div>
              ))}
            </motion.div>
          )}

          {scene === 4 && (
            <motion.div key="scene4"
              initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.6 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-4">
              <div className="h-36 w-36 rounded-full"
                style={{ background: "conic-gradient(from 0deg, #6d4aff, #00d4ff, #246bff, #6d4aff)", boxShadow: "0 0 60px rgba(109,74,255,0.8)" }} />
              <motion.p className="font-display text-2xl" style={{ color: "#ffffff" }}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                ENTER THE WORLD
              </motion.p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
`;

fs.writeFileSync("D:/atimanas_portfolio/components/IntroSequence.tsx", content);
console.log("IntroSequence updated with waterfall background");
