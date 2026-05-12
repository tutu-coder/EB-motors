"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Mercedes-AMG", abbr: "AMG" },
  { name: "BMW M", abbr: "M" },
  { name: "Land Rover", abbr: "LR" },
  { name: "Porsche", abbr: "P" },
  { name: "Audi RS", abbr: "RS" },
  { name: "Ford Raptor", abbr: "RAPTOR" },
  { name: "Lamborghini", abbr: "L" },
];

export default function BrandShowcase() {
  return (
    <section className="relative py-20 bg-black border-y border-white/5 overflow-hidden">

      {/* Soft luxury glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

      {/* Title */}
      <div className="relative z-10 text-center mb-14">
        <p className="text-xs tracking-[0.35em] text-white/40 uppercase">
          The Icons We Carry
        </p>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden">

        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >

          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex items-center mx-14 group"
            >

              {/* Brand Name */}
              <span className="text-white/30 group-hover:text-white transition duration-500 text-2xl md:text-4xl font-light tracking-[0.25em]">
                {brand.name}
              </span>

              {/* Dot separator */}
              <span className="mx-8 text-white/10 text-2xl">•</span>

              {/* Abbreviation (subtle luxury tag) */}
              <span className="text-white/10 group-hover:text-white/40 transition text-sm tracking-[0.4em]">
                {brand.abbr}
              </span>

            </div>
          ))}

        </motion.div>
      </div>

      {/* Bottom fade for smooth blending */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}