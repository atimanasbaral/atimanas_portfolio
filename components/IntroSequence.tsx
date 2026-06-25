"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SCENE_DURATIONS = [1200, 1400, 1400, 1400, 1000]; // ms per scene

export default function IntroSequence({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [scene, setScene] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (scene >= SCENE_DURATIONS.length) {
      handleFinish();
      return;
    }
    const timer = setTimeout(() => {
      setScene((s) => s + 1);
    }, SCENE_DURATIONS[scene]);
    return () => clearTimeout(timer);
  }, [scene]);

  function handleFinish() {
    localStorage.setItem("hasSeenIntro", "true");
    setVisible(false);
    setTimeout(onComplete, 500);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary">
      <button
        onClick={handleFinish}
        className="absolute top-6 right-6 z-10 rounded-full border border-border px-4 py-2 text-sm text-text-muted transition-colors hover:border-accent-violet hover:text-text-primary"
      >
        Skip →
      </button>

      <AnimatePresence mode="wait">
        {scene === 0 && (
          <motion.div
            key="scene0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-display text-5xl text-text-primary sm:text-7xl"
          >
            ATIMANAS BARAL
          </motion.div>
        )}

        {scene === 1 && (
          <motion.div
            key="scene1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 4, opacity: 0.3 }}
                  animate={{ height: [4, 40, 4], opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  className="w-1.5 rounded-full bg-accent-violet"
                />
              ))}
            </div>
            <p className="font-mono text-xs tracking-widest text-text-muted">
              COMPILING IDENTITY...
            </p>
          </motion.div>
        )}

        {scene === 2 && (
          <motion.div
            key="scene2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-accent-violet to-bg-elevated" />
            <p className="font-display text-xl text-text-primary sm:text-2xl">
              Every builder starts somewhere.
            </p>
          </motion.div>
        )}

        {scene === 3 && (
          <motion.div
            key="scene3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {["STUDENT", "ENGINEER", "ANALYST", "BUILDER"].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="rounded-lg border border-border bg-bg-surface px-4 py-6 text-center font-display text-sm text-text-primary"
              >
                {label}
              </motion.div>
            ))}
          </motion.div>
        )}

        {scene === 4 && (
          <motion.div
            key="scene4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-40 w-40 rounded-full bg-accent-violet glow-violet"
          />
        )}
      </AnimatePresence>
    </div>
  );
}