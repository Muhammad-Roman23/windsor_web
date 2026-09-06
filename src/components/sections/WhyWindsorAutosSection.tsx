"use client";

import { motion, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Motion
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function WhyWindsorAutosSection() {
  return (
    <section id="why-windsor-autos" className="section relative overflow-hidden">
      {/* Left flag wash (Japan) */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=900&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center left",
          maskImage: "linear-gradient(to right, black 25%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 25%, transparent 100%)",
        }}
      />

      {/* Right flag wash */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524592714635-d775ccebd2aa?auto=format&fit=crop&w=900&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          maskImage: "linear-gradient(to left, black 25%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, black 25%, transparent 100%)",
        }}
      />

      {/* Soft overlay for readability */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 20%, color-mix(in srgb, var(--color-secondary) 4%, transparent) 100%)",
        }}
      />

      <div className="section-inner relative">
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Why Irish Buyers Choose
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-[1.75rem] leading-[1.15] sm:text-3xl lg:text-4xl xl:text-[2.75rem]"
          >
            <span className="text-accent">Windsor Autos</span>
          </motion.h2>
        </div>

        {/* Glass card */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto mt-10 max-w-3xl rounded-2xl border p-7 sm:p-9 lg:p-10"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
            borderColor:
              "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow:
              "0 12px 40px color-mix(in srgb, var(--color-secondary) 6%, transparent), inset 0 1px 0 color-mix(in srgb, var(--color-secondary) 8%, transparent)",
          }}
        >
          <p className="text-center text-base leading-relaxed text-secondary sm:text-lg">
            Buying a vehicle from another country requires more than simply
            finding a car online.{" "}
            <span className="font-medium text-accent">Windsor Autos</span> is a
            Japanese used car supplier focused on making the sourcing and export
            side easier for Irish customers. We help buyers identify suitable
            Japanese vehicles, review available vehicle information and arrange
            the export process. Our role is to connect customers with Japanese
            vehicle stock while providing practical support throughout the
            purchase and shipping stages.
          </p>
        </motion.div>
      </div>
    </section>
  );
}