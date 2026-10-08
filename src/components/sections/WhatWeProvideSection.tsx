"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Wrench,
  FileQuestion,
  CarFront,
  Headset,
  Ship,
  Handshake,
  Sparkles,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content - SAME AS REFERENCE IMAGE
// ---------------------------------------------------------------------------

const heading = {
  top1: "what",
  top2: "we provide",
};

const items = [
  { label: "Yards", icon: Wrench },
  { label: "FAQs", icon: FileQuestion },
  { label: "Purchase", icon: CarFront },
  { label: "Support", icon: Headset },
  { label: "Shipping Service", icon: Ship },
  { label: "Trustes Agent", icon: Handshake },
];

// ---------------------------------------------------------------------------
// Motion - SAME TUMHARA FLOW
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Section - CENTER ON TOP + LINES NEECHY
// ---------------------------------------------------------------------------

export function WhatWeProvideSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="what-we-provide" className="section relative overflow-hidden py-16 sm:py-20">
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-accent blur-[120px] opacity-20" />
        <div className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-secondary blur-[120px] opacity-[0.08]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(var(--color-secondary)_1px,transparent_1px),linear-gradient(90deg,var(--color-secondary)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div> */}

      <div className="section-inner relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
            <Sparkles className="h-3.5 w-3.5" /> Our Ecosystem
          </span>
        </motion.div>

        {/* DESKTOP ORBITAL */}
        <div className="relative mx-auto mt-10 hidden h-[520px] max-w-[860px] lg:block">
          
          {/* 1. LINES - SAB SE NEECHY z-0 */}
          <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 860 520">
            <line x1="430" y1="260" x2="190" y2="95" stroke="var(--color-secondary)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 6" />
            <line x1="430" y1="260" x2="670" y2="95" stroke="var(--color-secondary)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 6" />
            <line x1="430" y1="260" x2="155" y2="260" stroke="var(--color-secondary)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 6" />
            <line x1="430" y1="260" x2="705" y2="260" stroke="var(--color-secondary)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 6" />
            <line x1="430" y1="260" x2="190" y2="425" stroke="var(--color-secondary)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 6" />
            <line x1="430" y1="260" x2="670" y2="425" stroke="var(--color-secondary)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 6" />
          </svg>

          {/* 2. BUTTONS - MIDDLE z-10 */}
          {items.map((item, i) => {
            const isActive = active === i;
            const positions = [
              "left-[8%] top-[14%]",
              "right-[8%] top-[14%]",
              "left-[3%] top-1/2 -translate-y-1/2",
              "right-[3%] top-1/2 -translate-y-1/2",
              "left-[8%] bottom-[14%]",
              "right-[8%] bottom-[14%]",
            ];
            return (
              <motion.button
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                onClick={() => setActive(i)}
                className={`absolute z-10 flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium backdrop-blur-xl transition-all duration-300 ${positions[i]} ${
                  isActive
                    ? "scale-105 border-accent bg-accent text-white shadow-lg shadow-accent/25"
                    : "border-secondary/10 bg-main/80 text-alt hover:border-accent/20"
                }`}
              >
                <span className={`flex h-7 w-7 items-center justify-center rounded-full ${isActive ? "bg-white/20 text-white" : "bg-accent/10 text-accent"}`}>
                  <item.icon className="h-4 w-4" />
                </span>
                {item.label}
              </motion.button>
            );
          })}

          {/* 3. CENTER CIRCLE - SAB SE TOP PE z-20 */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl" />
            <div className="relative flex h-[290px] w-[290px] items-center justify-center rounded-full border border-secondary/10 bg-main p-[14px] shadow-2xl">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-b from-secondary/5 to-secondary/10 border border-secondary/10">
                <span className="text-xs font-medium tracking-widest text-secondary">
                  {heading.top1}
                </span>
                <span className="text-xl font-bold tracking-tight">
                  <span className="text-alt">we </span>
                  <span className="text-accent">provide</span>
                </span>
                <span className="mt-2 h-1 w-8 rounded-full bg-accent" />
              </div>
            </div>
          </div>

        </div>

        {/* MOBILE GRID */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
          {items.map((item, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${
                  isActive ? "border-accent bg-accent text-white shadow-lg" : "border-secondary/10 bg-main/80 text-alt"
                }`}
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-white/20 text-white" : "bg-accent/10 text-accent"}`}>
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold leading-tight">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}   