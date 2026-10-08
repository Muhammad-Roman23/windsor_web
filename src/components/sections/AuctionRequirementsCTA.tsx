"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Gavel, ArrowRight } from "lucide-react";
import { VehicleBidModal } from "./VehicleBidForm";

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function AuctionRequirementsCTA() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      <section id="submit-requirements" className="section">
        <div className="section-inner">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={panelVariants} className="relative mx-auto flex flex-col overflow-hidden rounded-3xl border lg:flex-row" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)", backgroundColor: "color-mix(in srgb, var(--color-accent) 6%, transparent)" }}>
            <div className="flex-1 p-8 sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]" style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 14%, transparent)", color: "var(--color-accent)" }}><Gavel size={13} /> Open Lot Entry</span>
              <h2 className="mt-4 text-2xl leading-tight sm:text-3xl">Tell Us Your Car Requirements.<br />We&apos;ll Find It For You.</h2>
            </div>
            <div className="relative hidden w-0 lg:block" aria-hidden><div className="absolute inset-y-6 left-0 border-l border-dashed" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 30%, transparent)" }} /><span className="absolute -top-3 left-0 h-6 w-6 -translate-x-1/2 rounded-full border" style={{ backgroundColor: "var(--color-main)", borderColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)" }} /><span className="absolute -bottom-3 left-0 h-6 w-6 -translate-x-1/2 rounded-full border" style={{ backgroundColor: "var(--color-main)", borderColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)" }} /></div>
            <div className="mx-8 border-t border-dashed lg:hidden" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 30%, transparent)" }} />
            <div className="flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center sm:p-10">
              {/* Gavel CTA button with pulse ring + glow */}
              <div className="relative flex items-center justify-center">
                <span
                  aria-hidden
                  className="absolute h-28 w-28 animate-ping rounded-full opacity-30 sm:h-32 sm:w-32"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <span
                  aria-hidden
                  className="absolute h-32 w-32 rounded-full border-2 sm:h-36 sm:w-36"
                  style={{ borderColor: "color-mix(in srgb, var(--color-accent) 40%, transparent)" }}
                />
                <button
                  onClick={() => setIsOpen(true)}
                  aria-label="Submit your car requirements"
                  className="cursor-pointer group relative flex h-28 w-28 items-center justify-center rounded-full border-4 transition-all duration-300 hover:scale-110 sm:h-32 sm:w-32"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-main)",
                    borderColor: "var(--color-main)",
                    boxShadow: "0 0 0 3px var(--color-accent), 0 12px 32px color-mix(in srgb, var(--color-accent) 55%, transparent)",
                  }}
                >
                  <Gavel size={42} strokeWidth={2.5} className="transition-transform duration-300 group-hover:-rotate-12" />
                </button>
              </div>

              {/* Text CTA as a proper visible button */}
              <button
                onClick={() => setIsOpen(true)}
                className="cursor-pointer group inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-main)",
                  borderColor: "var(--color-accent)",
                  boxShadow: "0 8px 24px color-mix(in srgb, var(--color-accent) 40%, transparent)",
                }}
              >
                Submit Your Car Requirements
                <ArrowRight size={16} strokeWidth={3} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <VehicleBidModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}