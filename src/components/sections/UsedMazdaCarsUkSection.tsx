"use client";

import { motion, type Variants } from "framer-motion";
import { Sparkles, CarFront, Award, Palette } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function UsedMazdaCarsUkSection() {
  return (
    <section id="used-mazda-cars-uk" className="section">
      <div className="section-inner">
        
        {/* Top Badge - Apke Theme ka */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="flex justify-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-accent"
            style={{
              borderColor: "color-mix(in srgb, var(--color-accent) 18%, transparent)",
              backgroundColor: "color-mix(in srgb, var(--color-accent) 6%, transparent)",
            }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Japanese Imports
          </span>
        </motion.div>

        {/* Main Aesthetic Container */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative mx-auto mt-6 max-w-6xl overflow-hidden rounded-2xl lg:rounded-[28px]"
          style={{
            border: "1px solid color-mix(in srgb, var(--color-secondary) 12%, transparent)",
            backgroundColor: "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
          }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent" />
          
          {/* Watermark Text */}
          <span className="pointer-events-none absolute -right-6 -bottom-4 select-none text-7xl sm:text-8xl lg:text-[9rem] font-black leading-none tracking-tighter opacity-[0.03]" style={{ color: "var(--color-secondary)" }}>
            MAZDA
          </span>

          <div className="grid lg:grid-cols-12 gap-0 relative">
            
            {/* LEFT - Heading Side */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <h2 className="text-[1.9rem] leading-[1.1] sm:text-4xl lg:text-[2.6rem] xl:text-[2.9rem] font-semibold tracking-tight">
                Used <span className="text-accent">Mazda</span> Cars UK
              </h2>
              <p className="mt-3 text-[1.1rem] leading-snug sm:text-xl lg:text-2xl font-medium tracking-tight text-secondary">
                CX-5, MX-5 <span className="text-accent">Japanese Imports</span>
              </p>

              <div className="mt-6 h-px w-12" style={{ backgroundColor: "var(--color-accent)" }} />

              {/* Models Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: "Mazda3", icon: CarFront },
                  { label: "CX-5", icon: Award },
                  { label: "MX-5", icon: Palette },
                ].map((m) => (
                  <span
                    key={m.label}
                    className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium text-alt"
                    style={{
                      borderColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)",
                      backgroundColor: "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                    }}
                  >
                    <m.icon className="h-4 w-4 text-accent" />
                    {m.label}
                  </span>
                ))}
              </div>

              <p className="mt-6 hidden lg:block text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Style • Comfort • Performance
              </p>
            </div>

            {/* Divider - Desktop pe vertical, Mobile pe horizontal */}
            <div className="hidden lg:block lg:col-span-1 relative">
              <div className="absolute left-1/2 top-10 bottom-10 w-px -translate-x-1/2" style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }} />
            </div>
            <div className="h-px lg:hidden mx-6" style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }} />

            {/* RIGHT - Content Side */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 lg:pl-0 xl:pr-10 flex flex-col justify-center">
              <p className="text-center lg:text-left text-[15px] leading-7 sm:text-base sm:leading-8 text-secondary">
                Mazda has made itself stand out in the world of automobiles through the unique combination of Japanese quality, stylish looks, and an exhilarating drive. They are well known for their driver-centric approach to engineering as well as luxury interiors.
              </p>
              <p className="mt-4 text-center lg:text-left text-[15px] leading-7 sm:text-base sm:leading-8 text-secondary">
                Our selection of <span className="font-semibold text-accent">used Mazda cars UK buyers</span> can explore includes popular models such as the Mazda3 used, Mazda CX-5 used, and other Japanese-market vehicles. With access to carefully selected Japanese-import Mazda vehicles, we help customers find quality vehicles that deliver style, comfort, and enjoyable performance for every journey.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="h-px flex-1" style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }} />
                <span className="text-xs font-semibold tracking-widest uppercase text-accent whitespace-nowrap">Nobuko Japan</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}