"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Search, Handshake, PackageCheck, Ship } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const paragraphs = [
  "Windsor Auto Group specializes in supplying Japanese used cars to dealerships, vehicle importers and automotive businesses around the world.",
  "Our goal is simple: give professional buyers better access to vehicles available across the Japanese market. Whether you need ready stock, a specific model from auction or regular inventory for your dealership, our team helps you source vehicles according to your preferred model, year, mileage, specification and budget.",
  "From vehicle sourcing and purchase coordination to export preparation and shipping from Japan, we keep the process clear, organized and easy to manage.",
];

const process = [
  {
    icon: Search,
    label: "Sourcing",
    detail: "Matched to your model, year, mileage and budget.",
  },
  {
    icon: Handshake,
    label: "Purchase Coordination",
    detail: "Ready stock or specific vehicles from auction.",
  },
  {
    icon: PackageCheck,
    label: "Export Preparation",
    detail: "Documentation and readiness handled for you.",
  },
  {
    icon: Ship,
    label: "Shipping From Japan",
    detail: "A clear, organized process from start to finish.",
  },
];

// Placeholder imagery — swap the `src` values for real photography when available.
const images = {
  main: "https://picsum.photos/seed/windsor-auto-main/900/1100",
  topRight: "https://picsum.photos/seed/windsor-auto-port/700/500",
  bottomRight: "https://picsum.photos/seed/windsor-auto-lot/700/500",
};

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

const imageIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export  function TrustedPartnerSection() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* ------------------------------------------------------------- */}
          {/* Text column                                                   */}
          {/* ------------------------------------------------------------- */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
            >
              Who We Are
            </motion.p>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]"
            >
              Your Trusted Japanese Used Car Supply Partner
            </motion.h2>

            <div className="mt-5 space-y-4">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  custom={2 + i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  variants={fadeUp}
                  className="text-base leading-relaxed text-secondary sm:text-lg"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Process strip */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {process.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.label}
                    custom={6 + i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={fadeUp}
                    className="flex items-start gap-3 rounded-2xl border p-4"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                      backgroundColor:
                        "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
                    }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--color-accent) 14%, transparent)",
                      }}
                    >
                      <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-medium text-alt">{step.label}</p>
                      <p className="mt-0.5 text-sm leading-snug text-secondary">
                        {step.detail}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* Image column                                                  */}
          {/* ------------------------------------------------------------- */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
              {/* Main image */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={imageIn}
                className="absolute inset-0 right-[14%] top-0 overflow-hidden rounded-3xl"
              >
                <Image
                  src={images.main}
                  alt="Japanese used vehicles ready for export"
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Secondary image, offset bottom-right */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={imageIn}
                transition={{ delay: 0.15 }}
                className="absolute bottom-0 right-0 h-[46%] w-[62%] overflow-hidden rounded-2xl border-4 shadow-xl"
                style={{ borderColor: "var(--color-main)" }}
              >
                <Image
                  src={images.bottomRight}
                  alt="Vehicles staged for shipping at port"
                  fill
                  sizes="(min-width: 1024px) 24vw, 48vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Floating summary card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-[8%] flex max-w-[220px] items-center gap-3 rounded-2xl border p-4 shadow-xl backdrop-blur"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-main) 88%, transparent)",
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-accent) 16%, transparent)",
                  }}
                >
                  <Ship className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </span>
                <p className="text-sm font-medium leading-snug text-alt">
                  Sourcing to shipping, fully coordinated
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}