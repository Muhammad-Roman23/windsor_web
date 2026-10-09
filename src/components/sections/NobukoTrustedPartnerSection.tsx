"use client";

import { motion, type Variants } from "framer-motion";
import { ShieldCheck, FileCheck, Ship, BadgeCheck } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function NobukoTrustedPartnerSection() {
  return (
    <section id="trusted-partner" className="section">
      <div className="section-inner">
        
        {/* UNIQUE CONTAINER - NOT A SIMPLE CARD */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl lg:rounded-[28px]"
          style={{
            border: "1px solid color-mix(in srgb, var(--color-secondary) 12%, transparent)",
            backgroundColor: "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
          }}
        >
          {/* Top Glow Line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent" />

          <div className="grid lg:grid-cols-12 gap-0">

            {/* LEFT - Heading + Trust Points */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
              style={{ borderRight: "1px solid color-mix(in srgb, var(--color-secondary) 10%, transparent)" }}
            >
              <div>
                <motion.div
                  custom={1}
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-widest uppercase text-accent"
                  style={{
                    borderColor: "color-mix(in srgb, var(--color-accent) 20%, transparent)",
                    backgroundColor: "color-mix(in srgb, var(--color-accent) 8%, transparent)",
                  }}
                >
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Cyprus Dedicated Desk
                </motion.div>

                <motion.h2
                  custom={2}
                  variants={fadeUp}
                  className="mt-4 text-[1.75rem] leading-[1.1] sm:text-3xl lg:text-[2.5rem] font-semibold tracking-tight"
                >
                  Why Windsor Autos is Cyprus <span className="text-accent">Trusted Partner</span>
                </motion.h2>

                <div className="mt-6 h-px w-12" style={{ backgroundColor: "var(--color-accent)" }} />
              </div>

              {/* Mini Feature List - Eye Catching */}
              <motion.div custom={3} variants={fadeUp} className="mt-8 grid grid-cols-1 gap-3">
                {[
                  { icon: FileCheck, text: "Real Auction Papers" },
                  { icon: ShieldCheck, text: "200-Point Inspection" },
                  { icon: Ship, text: "Shipping to Limassol Port" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium text-alt"
                    style={{
                      borderColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)",
                      backgroundColor: "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                    }}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)", color: "var(--color-accent)" }}>
                      <item.icon className="h-4 w-4" />
                    </span>
                    {item.text}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT - Content */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
              <motion.div custom={4} variants={fadeUp} className="relative">
                {/* Quote Mark */}
                <span className="absolute -left-2 -top-6 text-6xl font-black leading-none select-none" style={{ color: "color-mix(in srgb, var(--color-accent) 10%, transparent)" }}>“</span>
                
                <p className="relative text-sm leading-7 sm:text-[15px] sm:leading-8 text-secondary">
                  Choosing the right partner is as important as picking the right car. <span className="font-semibold text-accent">Windsor Autos</span> is a trusted Japanese used car exporter with a dedicated Cyprus desk. We know all your requirements, right from driving on Nicosia&apos;s roads to complying with regulations at Limassol. Our procedure is straightforward: we offer you real auction papers and a comprehensive 200-point inspection for every vehicle. We handle the entire process, including shipping to Limassol Port and preparing all necessary customs documentation. Hence, making registration at the Cyprus Department of Road Transport easy. This commitment to quality and simplicity makes us the preferred choice for used cars Cyprus buyers.
                </p>
              </motion.div>

              <motion.div
                custom={5}
                variants={fadeUp}
                className="mt-8 flex items-center gap-4 border-t pt-6"
                style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }}
              >
                <div className="h-px flex-1" style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)" }} />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-accent whitespace-nowrap">
                  Preferred Choice in Cyprus
                </span>
                <div className="h-px flex-1" style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)" }} />
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}