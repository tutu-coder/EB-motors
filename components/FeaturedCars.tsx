"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cars = [
  {
    name: "Mercedes-Benz G63 AMG",
    price: "R3 299 995",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "BMW M4 Competition",
    price: "R1 849 995",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Range Rover Sport",
    price: "R2 199 995",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function FeaturedCars() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >

          <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-4">
            Featured Inventory
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] max-w-3xl leading-tight">
            Performance Meets
            <span className="block text-white/60">
              Luxury
            </span>
          </h2>

        </motion.div>

        {/* Car Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {cars.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              className="group relative overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/10"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">

                <div className="flex items-end justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {car.name}
                    </h3>

                    <p className="text-neutral-400 mt-2">
                      {car.price}
                    </p>
                  </div>

                  <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition">

                    <ArrowUpRight size={22} />

                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}