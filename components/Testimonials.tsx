"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The most seamless luxury vehicle buying experience I’ve ever had.",
    name: "David M.",
    role: "Mercedes-AMG Owner",
  },
  {
    quote:
      "Professional, transparent, and an incredible collection of vehicles.",
    name: "Sarah K.",
    role: "Range Rover Sport Owner",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#050505] py-36 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] bg-white/[0.03] blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >

          <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-5">
            Client Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] leading-tight">
            Trusted By Drivers
            <span className="block text-white/60">
              Who Expect More
            </span>
          </h2>

        </motion.div>

        {/* Testimonials */}
        <div className="space-y-24">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="border-l border-white/10 pl-8"
            >

              <p className="text-3xl md:text-5xl leading-tight font-light text-white/90 max-w-5xl">
                “{testimonial.quote}”
              </p>

              <div className="mt-8">
                <p className="font-semibold text-lg">
                  {testimonial.name}
                </p>

                <p className="text-neutral-500 mt-1">
                  {testimonial.role}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}