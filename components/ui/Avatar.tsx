"use client";

import { useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type AvatarProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-16 w-16",
};

export default function Avatar({ src, alt, size = "lg" }: AvatarProps) {
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const dimension = sizes[size];

  return (
    <div
      className={`group relative ${dimension} shrink-0`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute inset-0 rounded-full ${reducedMotion ? "opacity-80" : "avatar-ring-spin opacity-100"}`}
        aria-hidden
      />
      <div
        className={`absolute inset-[3px] overflow-hidden rounded-full border border-border bg-bg-elevated transition-transform duration-base ${
          hovered && !reducedMotion ? "scale-105" : "scale-100"
        }`}
      >
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="64px" priority unoptimized />
      </div>
    </div>
  );
}
