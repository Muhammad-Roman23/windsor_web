"use client";

import { motion, type Variants } from "framer-motion";
import {
  Gavel,
  FileText,
  Search,
  Ship,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Topics — pulled directly from the brief's copy. Swap the `href` values
// once individual guide pages exist.
// ---------------------------------------------------------------------------

interface Topic {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}

const topics: Topic[] = [
  {
    icon: Gavel,
    title: "Japanese Car Auctions",
    description:
      "How auction houses operate, bidding cycles and how to read a listing.",
    href: "#",
  },
  {
    icon: FileText,
    title: "Auction Sheets",
    description:
      "Decoding condition grades, damage maps and inspector shorthand.",
    href: "#",
  },
  {
    icon: Search,
    title: "Vehicle Sourcing",
    description:
      "Finding the right stock, from single units to regular dealer supply.",
    href: "#",
  },
  {
    icon: Ship,
    title: "Shipping Methods",
    description: "RoRo versus container shipping, lead times and costs.",
    href: "#",
  },
  {
    icon: ClipboardList,
    title: "Import Procedures",
    description:
      "Customs, compliance documents and what to prepare before arrival.",
    href: "#",
  },
];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1 },
  }),
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: 0.15 + custom * 0.08 },
  }),
};

export function MarketGuide() {
  return (
    <section id="market-guide" className="section">
      <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        {/* Left: intro copy, sticky on desktop */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Buyer Resources
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            Understand the Japanese Vehicle Market
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="mt-5 text-base leading-relaxed text-secondary sm:text-lg"
          >
            Making better buying decisions starts with understanding how the
            Japanese vehicle market works. Our guides help dealers and
            importers learn more about Japanese car auctions, auction sheets,
            vehicle sourcing, shipping methods, import procedures and other
            important parts of buying used cars from Japan.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="mt-4 text-base leading-relaxed text-secondary sm:text-lg"
          >
            Whether you are importing your first vehicle or sourcing stock
            regularly, our resources are designed to make the process easier
            to understand.
          </motion.p>

          <motion.a
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-main)",
            }}
          >
            Browse All Guides
            <ArrowRight size={16} strokeWidth={2.5} />
          </motion.a>
        </div>

        {/* Right: topic index */}
        <div
          className="divide-y rounded-3xl border"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
          }}
        >
          {topics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <motion.a
                key={topic.title}
                href={topic.href}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={rowVariants}
                className="group flex items-start gap-5 p-6 transition-colors first:rounded-t-3xl last:rounded-b-3xl sm:items-center sm:p-7"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                }}
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                    color: "var(--color-accent)",
                  }}
                >
                  <Icon size={20} strokeWidth={2} />
                </span>

                <span className="flex-1">
                  <span className="block text-base font-semibold sm:text-lg">
                    {topic.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-secondary">
                    {topic.description}
                  </span>
                </span>

                <ArrowRight
                  size={18}
                  strokeWidth={2}
                  className="mt-1 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:mt-0"
                  style={{ color: "var(--color-accent)" }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}