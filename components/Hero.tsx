"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import CanvasSequence from "@/components/CanvasSequence"; 


import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Frame progression
  const frameIndex = useTransform(
    scrollYProgress,
    [0.1, 0.8, 0.9, 1],
    [0, 239, 239, 239]
  );

  // Smooth sequence animation
  const smoothIndex = useSpring(frameIndex, {
    stiffness: 400,
    damping: 90,
  });

  // Slight hero scale movement
  const heroScale = useTransform(
    smoothIndex,
    [0, 100],
    [1, 0.98]
  );

  // =========================
  // LOGO + BUTTONS FADE OUT
  // =========================





  const logoOpacity = useTransform(
    smoothIndex,
    [0, 80, 120],
    [1, 1, 0]
  );

  const logoY = useTransform(
    smoothIndex,
    [0, 120],
    [0, -40]
  );

  const logoBlur = useTransform(
    smoothIndex,
    [80, 120],
    [0, 10]
  );

  const blurFilter = useMotionTemplate`blur(${logoBlur}px)`;

  // =========================
  // "SINCE 1930" REVEAL
  // =========================

  const sinceOpacity = useTransform(
    smoothIndex,
    [200, 220, 239],
    [0, 0, 1]
  );

  const sinceY = useTransform(
    smoothIndex,
    [200, 239],
    [40, 0]
  );

  // 💥 HERO FADE OUT (UNCHANGED)
  const heroOpacity = useTransform(
    smoothIndex,
    [0, 80],
    [1, 0]
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
    <main className="relative w-full bg-background selection:bg-white/20 selection:text-white">
      <Navbar />

      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="relative h-[600vh] w-full"
      >
        {/* Sticky Canvas */}
        <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">

          <CanvasSequence progress={scrollYProgress} />

          {/* HERO CONTENT */}
          <motion.div
            style={{
              scale: heroScale,
            }}
            className="relative z-10 flex h-full items-center justify-center"
          >

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


          </motion.div>
        </div>
      </div>

    </main>
  );
}