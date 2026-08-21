"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.12 },
  }),
};

const routeDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.6, ease: "easeInOut", delay: 0.3 },
  },
};

export function StartSourcingCTA() {
  return (
    <section id="start-sourcing" className="section">
      <div className="section-inner">
        <div
          className="relative overflow-hidden rounded-[2rem] border px-6 py-16 text-center sm:px-12 sm:py-24"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
          }}
        >
          {/* Ambient accent glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--color-accent) 18%, transparent)",
            }}
          />

          {/* Signature: a shipping route from Japan to the destination */}
          <svg
            aria-hidden
            viewBox="0 0 800 120"
            className="pointer-events-none absolute inset-x-0 top-10 mx-auto hidden w-[70%] max-w-3xl opacity-60 sm:block"
            fill="none"
          >
            <motion.path
              d="M40 90 C 220 10, 380 150, 560 40 S 720 20, 760 60"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              strokeDasharray="2 10"
              strokeLinecap="round"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={routeDraw}
            />
          </svg>

          <div className="relative flex flex-col items-center">
            {/* Origin marker */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={textVariants}
              className="mb-6 flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em]"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-accent) 30%, transparent)",
                color: "var(--color-accent)",
              }}
            >
              <MapPin size={13} strokeWidth={2.5} />
              Sourced From Japan
            </motion.div>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={textVariants}
              className="max-w-3xl text-4xl leading-tight sm:text-5xl md:text-6xl"
            >
              Your Next Vehicle Starts in Japan
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={textVariants}
              className="mt-6 max-w-xl text-base leading-relaxed text-secondary sm:text-lg"
            >
              Whether you need one specific vehicle or regular stock for your
              dealership, Windsor Auto Group can help you find the right cars
              from the Japanese market.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={textVariants}
              className="mt-3 max-w-xl text-base leading-relaxed text-secondary sm:text-lg"
            >
              Tell us what you are looking for and start sourcing with a team
              focused on dealers and importers.
            </motion.p>

            <motion.a
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={textVariants}
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium transition-transform duration-300 hover:scale-[1.03]"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-main)",
              }}
            >
              Start Sourcing From Japan
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}