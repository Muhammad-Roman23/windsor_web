"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, CheckCircle2, Sparkles } from "lucide-react";

// Apka Wala Same Motion
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function TopJapaneseUsedCarsIntroSection() {
  const locations = ["Nicosia", "Limassol", "Larnaca", "Paphos"];
  
  return (
    <section id="top-japanese-used-cars" className="section">
      <div className="section-inner">
        
        {/* Top Heading - Same Font Size & Colors as your code */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-accent"
            style={{
              borderColor: "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
              backgroundColor: "color-mix(in srgb, var(--color-secondary) 5%, transparent)",
            }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Trusted in Cyprus
          </motion.div>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-[1.75rem] leading-[1.15] sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-semibold tracking-tight"
          >
            Top <span className="text-accent">Japanese Used Cars</span>
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mt-3 text-[1.1rem] leading-snug sm:text-xl lg:text-2xl font-medium tracking-tight"
          >
            in Cyprus <span className="text-accent">Toyota</span> Yaris, Aqua, C-HR, Prius & Corolla
          </motion.p>
        </div>

        {/* NEW UNIQUE UI - Glass Card with Side Accent */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl lg:rounded-[24px]"
          style={{
            border: "1px solid color-mix(in srgb, var(--color-secondary) 12%, transparent)",
            backgroundColor: "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
            boxShadow: "0 20px 60px -20px color-mix(in srgb, var(--color-secondary) 15%, transparent)",
          }}
        >
          {/* Top soft glow line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent" />
          
          <div className="grid lg:grid-cols-12 gap-0">
            
            {/* Left Accent Side - Desktop pe side bar */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-between border-r py-8"
              style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }}
            >
              <div className="h-20 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />
              <p className="rotate-180 text-xs font-medium uppercase tracking-[0.2em] text-accent" style={{ writingMode: "vertical-rl" }}>
                Nobuko Japan
              </p>
              <div className="h-20 w-px bg-gradient-to-t from-accent/50 via-accent/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="lg:col-span-11 p-6 sm:p-8 lg:p-10 xl:p-12">
              <p className="text-center text-base leading-relaxed text-secondary sm:text-[1.05rem] sm:leading-7">
                Why have Japanese used cars become the top choice for Cypriot drivers? The reasons are their great reliability, modern technology, and long-lasting quality. Nobuko Japan bridges the gap between Japan&apos;s finest auction houses and your driveway in Cyprus. Hence, offering an easy way to own your ideal vehicle. We specialize in importing a curated selection of used cars in Cyprus, from the reliable Toyota Corolla to the fuel-efficient Toyota Aqua hybrid. Every car is carefully checked. We make sure it runs well, is honest about its condition, and is ready to drive on Cyprus&apos;s roads. Nobuko Japan provides complete service in Nicosia, Limassol, Larnaca, and Paphos. This includes everything from finding the car to delivering it, making us your trusted partner for quality Japanese used cars.
              </p>

              {/* Bottom Features */}
              <div className="mt-8 flex flex-col gap-6 border-t pt-6 sm:pt-8"
                style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }}
              >
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {locations.map((loc) => (
                    <span
                      key={loc}
                      className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium text-alt"
                      style={{
                        borderColor: "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
                        backgroundColor: "color-mix(in srgb, var(--color-secondary) 5%, transparent)",
                      }}
                    >
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      {loc}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-secondary">
                  <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Auction Checked</span>
                  <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Doorstep Delivery</span>
                  <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Honest Condition</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}