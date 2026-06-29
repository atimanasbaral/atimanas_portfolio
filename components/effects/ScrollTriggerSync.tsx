"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

/**
 * Keeps GSAP ScrollTrigger in sync with Lenis's smooth-scroll position.
 * Without this, scroll-driven (scrub) animations lag behind the actual
 * scroll position and feel janky.
 */
export default function ScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return null;
}
