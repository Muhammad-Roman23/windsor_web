"use client";

import { motion, type Variants } from "framer-motion";
import { Search, FileText, Gavel, Ship, CheckCircle2 } from "lucide-react";

// ---------------------------------------------------------------------------
// What Windsor Auto Group handles for the buyer.
// ---------------------------------------------------------------------------
interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Search,
    title: "Vehicle Sourcing",
    description: "Finding vehicles that match your requirements.",
  },
  {
    icon: FileText,
    title: "Auction Information",
    description: "Reviewing listings and auction sheets on your behalf.",
  },
  {
    icon: Gavel,
    title: "Auction Bidding",
    description: "Bidding in Japanese auctions within your budget.",
  },
  {
    icon: Ship,
    title: "Export Arrangements",
    description: "Handling documentation, shipping and export.",
  },
];

// ---------------------------------------------------------------------------
// What buyers tell us.
// ---------------------------------------------------------------------------
const requirements = ["Make", "Model", "Year", "Mileage", "Budget", "Specifications"];

// ---------------------------------------------------------------------------
// What to consider before bidding.
// ---------------------------------------------------------------------------
const considerations = [
  "The auction sheet",
  "Vehicle condition",
  "Mileage",
  "Estimated purchase price",
  "Expected export and import costs",
];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1 },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.2 + custom * 0.08 },
  }),
};

const chipVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.15 + custom * 0.04 },
  }),
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: 14 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.15 + custom * 0.06 },
  }),
};

export function HowWeHelpYouBuy() {
  return (
    <section id="how-we-help" className="section">
      <div className="section-inner">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            How We Help
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            How We Help You Buy From Japanese Auctions
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            Buying from Japan can be complicated if you are unfamiliar with
            auction procedures, Japanese terminology and export requirements.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            Windsor Auto Group assists customers with vehicle sourcing,
            auction information, Japanese auction bidding and export
            arrangements.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                className="flex flex-col gap-3 rounded-2xl border p-5 sm:p-6"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                }}
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                    color: "var(--color-accent)",
                  }}
                >
                  <Icon size={18} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold sm:text-base">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-secondary sm:text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What buyers tell us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          custom={0}
          className="mx-auto mt-10 max-w-2xl text-center sm:mt-12"
        >
          <p className="text-base leading-relaxed text-secondary sm:text-lg">
            Simply provide your preferred make, model, year, mileage, budget
            and specifications, and our team can help identify suitable
            Japanese auction cars.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {requirements.map((item, i) => (
              <motion.span
                key={item}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={chipVariants}
                className="rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-secondary sm:text-sm"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
                }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Find the right vehicle before you bid */}
        <div className="mt-16 grid gap-8 border-t pt-12 sm:mt-20 sm:pt-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-secondary) 12%, transparent)",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            custom={0}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent">
              Before You Bid
            </p>
            <h3 className="text-2xl leading-tight sm:text-3xl">
              Find the Right Vehicle Before You Bid
            </h3>
            <p className="mt-4 text-base leading-relaxed text-secondary sm:text-lg">
              The objective is not simply to win an auction but to source the
              right vehicle at a sensible price.
            </p>
          </motion.div>

          <div
            className="divide-y rounded-3xl border"
            style={{
              borderColor:
                "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
            }}
          >
            {considerations.map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={rowVariants}
                className="flex items-center gap-3 px-5 py-4 first:rounded-t-3xl last:rounded-b-3xl sm:px-6"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                }}
              >
                <CheckCircle2 size={18} strokeWidth={2} className="shrink-0 text-accent" />
                <span className="text-sm text-secondary sm:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}