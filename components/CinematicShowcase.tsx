"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CinematicShowcase() {

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Image scaling
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  // Text opacity
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Text movement
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={container}
      className="relative h-[300vh] bg-black"
    >

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">

        {/* Background Image */}
        <motion.img
          style={{ scale }}
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop"
          alt="Luxury Car"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]" />

        {/* Content */}
        <motion.div
          style={{ opacity, y }}
          className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        >

          <p className="uppercase tracking-[0.35em] text-xs text-neutral-400 mb-6">
            Performance Engineering
          </p>

          <h2 className="text-5xl md:text-8xl font-black tracking-[-0.05em] leading-[0.9] max-w-5xl">

            Crafted For
            <span className="block text-white/60">
              Drivers Who Demand More
            </span>

          </h2>

          <p className="mt-10 max-w-2xl text-lg md:text-xl text-neutral-300 leading-relaxed">
            Every vehicle at EB Motors is selected to deliver an
            uncompromising blend of luxury, presence, and performance.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-14">

            <div>
              <h3 className="text-4xl font-black">4.5s</h3>
              <p className="text-neutral-500 uppercase tracking-widest text-sm mt-2">
                0-100 km/h
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black">600+</h3>
              <p className="text-neutral-500 uppercase tracking-widest text-sm mt-2">
                Horsepower
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black">Luxury</h3>
              <p className="text-neutral-500 uppercase tracking-widest text-sm mt-2">
                Interior Design
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}