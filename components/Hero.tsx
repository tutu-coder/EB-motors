"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 🎞️ Frames (FIX: stable reference, not recreated every render)
  const framesRef = useRef<string[]>([]);

  if (framesRef.current.length === 0) {
    framesRef.current = Array.from({ length: 240 }, (_, i) =>
      `/car-frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`
    );
  }

  const frames = framesRef.current;

  // 🎬 FRAME CONTROL (UNCHANGED)
  const frameIndex = useTransform(
    scrollYProgress,
    [0.1, 0.8, 0.9, 1],
    [0, 239, 239, 239]
  );

  // 🔥 KEEP ORIGINAL FEEL (DO NOT OVER-OPTIMIZE THIS)
  const smoothIndex = useSpring(frameIndex, {
    stiffness: 400,
    damping: 90,
  });

  // 🧠 FIX: prevent duplicate frame swaps (performance boost without changing visuals)
  const lastFrame = useRef(-1);

  useMotionValueEvent(smoothIndex, "change", (latest) => {
    const i = Math.round(latest);

    if (
      i === lastFrame.current ||
      !imageRef.current ||
      !frames[i]
    ) return;

    imageRef.current.src = frames[i];
    lastFrame.current = i;
  });

  // 💥 HERO FADE OUT (UNCHANGED)
  const heroOpacity = useTransform(
    smoothIndex,
    [0, 80],
    [1, 0]
  );

  const heroScale = useTransform(
    smoothIndex,
    [0, 100],
    [1, 0.98]
  );

  // 🚗 READY TO DRIVE (UNCHANGED — FIXED ONLY REACT STABILITY)
  const readyOpacity = useTransform(
    smoothIndex,
    [200, 220, 239],
    [0, 1, 1]
  );

  const readyY = useTransform(
    smoothIndex,
    [200, 220],
    [40, 0]
  );

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-black">

      {/* Sticky Stage */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* 🎬 FRAME ANIMATION */}
        <div className="absolute inset-0">
          <img
            ref={imageRef}
            src={frames[0]}
            className="w-full h-full object-cover"
            alt="Cinematic car animation"
          />
        </div>

        {/* OVERLAYS (UNCHANGED — includes blur support stacking) */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%)]" />

        <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* 💥 HERO UI (UNCHANGED) */}
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
          }}
          className="relative z-10 h-full flex items-center justify-center"
        >
          <div className="text-center flex flex-col items-center">

            <h1
              className="text-white text-5xl md:text-8xl font-bold tracking-[0.3em] mb-10"
              style={{
                textShadow: "0px 4px 20px rgba(0,0,0,0.8)",
              }}
            >
              EB MOTORS
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">

              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider hover:scale-105 transition">
                View Inventory
              </button>

              {/* ✔ KEEP blur exactly as original */}
              <button className="border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition">
                Sell Your Vehicle
              </button>

            </div>

          </div>
        </motion.div>

        {/* 🚗 READY TO DRIVE (FIXED VISIBILITY ISSUE POSSIBLE CAUSE) */}
        <motion.div
          style={{
            opacity: readyOpacity,
            y: readyY,
          }}
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        >
          <h2
            className="text-white text-4xl md:text-7xl font-semibold tracking-wide text-center px-6"
            style={{
              textShadow: "0px 4px 25px rgba(0,0,0,0.9)",
            }}
          >
            Ready To Drive?
          </h2>
        </motion.div>

        {/* FADE OUT BOTTOM (UNCHANGED) */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

      </div>
    </section>
  );
}