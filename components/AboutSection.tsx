"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AboutSection() {
  return (
    <section className="relative bg-[#050505] py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-white/[0.03] blur-3xl rounded-full" />

      {/* Additional Ambient Glow */}
      <div className="absolute left-[-200px] bottom-[-200px] w-[500px] h-[500px] bg-white/[0.02] blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >

          <motion.p
            variants={item}
            className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-5"
          >
            About EB Motors
          </motion.p>

          <motion.h2
            variants={item}
            className="text-4xl md:text-6xl font-black tracking-[-0.04em] leading-tight"
          >
            Redefining The
            <span className="block text-white/60">
              Luxury Automotive Experience
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-8 text-lg text-neutral-400 leading-relaxed max-w-xl"
          >
            EB Motors delivers a curated collection of premium
            performance and luxury vehicles for South Africa’s most
            discerning drivers. From AMG powerhouses to executive SUVs,
            every vehicle is selected with excellence in mind.
          </motion.p>

          {/* STATS */}
          <motion.div
            variants={container}
            className="grid grid-cols-2 gap-8 mt-14"
          >

            {[
              {
                title: "20+",
                subtitle: "Years Experience",
              },
              {
                title: "1000+",
                subtitle: "Luxury Vehicles Sold",
              },
              {
                title: "Nationwide",
                subtitle: "Delivery Available",
              },
              {
                title: "Premium",
                subtitle: "Finance Solutions",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >

                <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/[0.04]">

                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <h3 className="text-3xl md:text-4xl font-black relative z-10">
                    {stat.title}
                  </h3>

                  <p className="text-neutral-500 mt-3 uppercase tracking-wider text-xs relative z-10">
                    {stat.subtitle}
                  </p>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 80,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -10,
          }}
          className="relative"
        >

          {/* Border Glow */}
          <div className="absolute -inset-[1px] rounded-[40px] bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40" />

          {/* Image Overlay */}
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-black/30 via-transparent to-white/10 z-10 pointer-events-none" />

          <div className="overflow-hidden rounded-[40px]">

            <motion.img
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Showroom"
              className="rounded-[40px] h-[700px] w-full object-cover"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}