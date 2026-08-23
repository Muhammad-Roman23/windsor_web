"use client";

import { motion, type Variants } from "framer-motion";
import { Gavel, ArrowRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------
const panelVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function AuctionRequirementsCTA() {
  return (
    <section id="submit-requirements" className="section">
      <div className="section-inner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={panelVariants}
          className="relative mx-auto flex  flex-col overflow-hidden rounded-3xl border lg:flex-row"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--color-accent) 6%, transparent)",
          }}
        >
          {/* Left: lot details */}
          <div className="flex-1 p-8 sm:p-10">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-accent) 14%, transparent)",
                color: "var(--color-accent)",
              }}
            >
              <Gavel size={13} strokeWidth={2.5} />
              Open Lot Entry
            </span>

            <h2 className="mt-4 text-2xl leading-tight sm:text-3xl">
              Tell Us Your Car Requirements.
              <br />
              We&apos;ll Find It For You.
            </h2>

        
          </div>

          {/* Perforated ticket divider — desktop only */}
          <div
            className="relative hidden w-0 lg:block"
            aria-hidden
          >
            <div
              className="absolute inset-y-6 left-0 border-l border-dashed"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-secondary) 30%, transparent)",
              }}
            />
            <span
              className="absolute -top-3 left-0 h-6 w-6 -translate-x-1/2 rounded-full border"
              style={{
                backgroundColor: "var(--color-main)",
                borderColor:
                  "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
              }}
            />
            <span
              className="absolute -bottom-3 left-0 h-6 w-6 -translate-x-1/2 rounded-full border"
              style={{
                backgroundColor: "var(--color-main)",
                borderColor:
                  "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
              }}
            />
          </div>

          {/* Mobile divider */}
          <div
            className="mx-8 border-t border-dashed lg:hidden"
            style={{
              borderColor:
                "color-mix(in srgb, var(--color-secondary) 30%, transparent)",
            }}
          />

          {/* Right: action */}
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center sm:p-10">
            <a
              href="#contact"
              className="group flex h-24 w-24 items-center justify-center rounded-full transition-transform hover:scale-105 sm:h-28 sm:w-28"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-main)",
              }}
            >
              <Gavel
                size={30}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-rotate-12"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-80"
              style={{ color: "var(--color-accent)" }}
            >
              Submit Your Car Requirements
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}