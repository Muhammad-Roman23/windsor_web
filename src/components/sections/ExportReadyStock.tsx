"use client";

import { motion, type Variants } from "framer-motion";
import {
  CarFront,
  Car,
  Truck,
  Leaf,
  Users,
  Gauge,
  Armchair,
  type LucideIcon,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content (same)
// ---------------------------------------------------------------------------

const paragraphs = [
  "Windsor Autos supplies verified Japanese used cars to dealers, importers and buyers across the UK, Ireland, Cyprus, USA and worldwide. Our stock includes automatic hatchbacks, SUVs, sedans, hybrids, MPVs, sports cars and 7-seater used cars, sourced from Japan's established domestic vehicle market.",
  "We provide available vehicle information, auction documentation and export support so buyers can review mileage, condition and specification before purchasing. Whether you are searching for a used SUV for sale, an economical hybrid, a family MPV or automatic stock for your dealership, Windsor Autos can help you source suitable vehicles from Japan.",
];

const bodyTypes = [
  "Hatchbacks",
  "SUVs",
  "Sedans",
  "Hybrids",
  "MPVs",
  "Sports Cars",
  "7-Seaters",
];

// UI only: one icon per body type (same order as bodyTypes)
const typeIcons: LucideIcon[] = [CarFront, Truck, Car, Leaf, Users, Gauge, Armchair];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function InventoryHeroSection() {
  const border = "color-mix(in srgb, var(--color-secondary) 16%, transparent)";

  return (
    <section id="inventory" className="section relative overflow-hidden">
      {/* Background: dotted pattern + glows */}
      {/* <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--color-secondary) 18%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 18%, transparent)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 14%, transparent)" }}
      /> */}

      <div className="section-inner relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          {/* ----------------------------------------------------------- */}
          {/* Left: text                                                   */}
          {/* ----------------------------------------------------------- */}
          <div className="text-center lg:text-left">
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent sm:text-sm"
              style={{
                borderColor: "color-mix(in srgb, var(--color-accent) 40%, transparent)",
                backgroundColor: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
              </span>
              Ready Stock For Global Buyers
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mt-5 text-[1.85rem] leading-[1.12] sm:text-4xl lg:text-5xl xl:text-[3.25rem]"
            >
              Japanese Used Cars for Sale, Export Ready Stock for Global Buyers
            </motion.h1>

            <motion.span
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              aria-hidden
              className="mx-auto mt-6 block h-1 w-16 rounded-full lg:mx-0"
              style={{ backgroundColor: "var(--color-accent)" }}
            />

            <div className="mt-6 space-y-4">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  custom={3 + i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                  className="text-base leading-relaxed text-secondary sm:text-lg"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>

          {/* ----------------------------------------------------------- */}
          {/* Right: body-type tile panel                                  */}
          {/* ----------------------------------------------------------- */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative rounded-3xl border p-4 backdrop-blur-sm sm:p-6"
            style={{
              borderColor: border,
              backgroundColor: "color-mix(in srgb, var(--color-accent) 5%, transparent)",
            }}
          >
            {/* Panel label */}
            <div className="mb-4 flex items-center gap-3 px-1">
              <span
                aria-hidden
                className="h-px flex-1"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 25%, transparent)" }}
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Our Stock Includes
              </span>
              <span
                aria-hidden
                className="h-px flex-1"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 25%, transparent)" }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {bodyTypes.map((type, i) => {
                const Icon = typeIcons[i];
                const isLast = i === bodyTypes.length - 1;
                return (
                  <motion.div
                    key={type}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={popIn}
                    whileHover={{ y: -5 }}
                    className={`group relative flex cursor-default flex-col items-start gap-6 overflow-hidden rounded-2xl border p-4 transition-colors duration-300 sm:p-5 ${
                      isLast ? "col-span-2" : ""
                    }`}
                    style={{
                      borderColor: border,
                      backgroundColor: "color-mix(in srgb, var(--color-main) 70%, transparent)",
                    }}
                  >
                    {/* Hover fill */}
                    <span
                      aria-hidden
                      className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />

                    <span
                      className="relative flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 group-hover:!bg-[color-mix(in_srgb,var(--color-main)_22%,transparent)] group-hover:!text-[var(--color-main)]"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--color-accent) 14%, transparent)",
                        color: "var(--color-accent)",
                      }}
                    >
                      <Icon size={22} strokeWidth={1.9} />
                    </span>

                    <span className="relative flex w-full items-end justify-between gap-2">
                      <span className="text-sm font-semibold leading-snug text-alt transition-colors duration-300 group-hover:!text-[var(--color-main)] sm:text-base">
                        {type}
                      </span>
                      <span
                        aria-hidden
                        className="text-xs font-bold tracking-[0.15em] text-accent opacity-60 transition-colors duration-300 group-hover:!text-[var(--color-main)]"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}