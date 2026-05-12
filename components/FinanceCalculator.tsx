"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
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

export function FinanceCalculator() {
  const [price, setPrice] = useState(2500000);
  const [depositPercent, setDepositPercent] = useState(10);
  const [term, setTerm] = useState(72);

  const rate = 11.5;

  const depositAmount = (price * depositPercent) / 100;
  const principal = price - depositAmount;

  const monthlyRate = rate / 100 / 12;

  const monthlyPayment =
    (principal * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -term));

  return (
    <section
      id="finance"
      className="relative py-32 px-6 md:px-16 bg-black overflow-hidden"
    >

      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/[0.03] blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >

          <motion.p
            variants={item}
            className="uppercase tracking-[0.3em] text-xs text-white/40 mb-5"
          >
            Premium Vehicle Finance
          </motion.p>

          <motion.h2
            variants={item}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none"
          >
            Intelligent
            <span className="block text-white/50">
              Financing
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-white/60 text-lg mt-8 mb-14 leading-relaxed max-w-xl"
          >
            Tailored finance solutions through trusted South African banks,
            structured around your lifestyle and budget.
          </motion.p>

          {/* PRICE */}
          <motion.div variants={item} className="mb-10">

            <div className="flex justify-between mb-3">
              <label className="text-xs uppercase tracking-widest text-white/50">
                Vehicle Price
              </label>

              <span className="text-white font-mono text-sm">
                R {price.toLocaleString()}
              </span>
            </div>

            <input
              type="range"
              min="500000"
              max="8000000"
              step="50000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-white h-1"
            />

          </motion.div>

          {/* DEPOSIT */}
          <motion.div variants={item} className="mb-10">

            <div className="flex justify-between mb-3">
              <label className="text-xs uppercase tracking-widest text-white/50">
                Deposit ({depositPercent}%)
              </label>

              <span className="text-white font-mono text-sm">
                R {depositAmount.toLocaleString()}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="50"
              step="5"
              value={depositPercent}
              onChange={(e) => setDepositPercent(Number(e.target.value))}
              className="w-full accent-white h-1"
            />

          </motion.div>

          {/* TERM */}
          <motion.div variants={item}>

            <label className="text-xs uppercase tracking-widest text-white/50 block mb-5">
              Term (Months)
            </label>

            <div className="grid grid-cols-5 gap-3">

              {[24, 36, 48, 60, 72].map((t) => (
                <motion.button
                  key={t}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() => setTerm(t)}
                  className={`py-4 text-sm border rounded-2xl transition-all duration-500 ${
                    term === t
                      ? "border-white text-white bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                      : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {t}
                </motion.button>
              ))}

            </div>

          </motion.div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          whileHover={{
            y: -8,
          }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 md:p-14 backdrop-blur-xl"
        >

          {/* Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/[0.08] blur-3xl rounded-full" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

          <div className="relative z-10">

            <p className="text-white/40 uppercase tracking-[0.3em] text-xs">
              Estimated Monthly
            </p>

            <motion.h3
              key={monthlyPayment}
              initial={{
                opacity: 0.6,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="text-5xl md:text-7xl font-black text-white mt-5 tracking-tight"
            >
              R {Math.round(monthlyPayment).toLocaleString()}
            </motion.h3>

            <div className="flex gap-12 mt-12 text-sm text-white/60">

              <div>
                <p className="uppercase tracking-widest text-xs">
                  Interest
                </p>

                <p className="text-white font-mono mt-2 text-lg">
                  {rate}%
                </p>
              </div>

              <div>
                <p className="uppercase tracking-widest text-xs">
                  Financed
                </p>

                <p className="text-white font-mono mt-2 text-lg">
                  R {Math.round(principal).toLocaleString()}
                </p>
              </div>

            </div>

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="mt-14 w-full bg-white text-black py-5 rounded-2xl font-semibold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-neutral-200"
            >
              Apply Now
            </motion.button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}