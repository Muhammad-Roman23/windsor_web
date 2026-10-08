"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Globe2, FileSearch, Ship, Handshake, type LucideIcon } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

type Reason = {
  title: string;
  body: (string | { emphasis: string })[];
};

const reasons: Reason[] = [
  {
    title: "Direct Japanese Vehicle Sourcing",
    body: ["Access to Japanese domestic-market stock and auction opportunities."],
  },
  {
    title: "Auction Sheet Transparency",
    body: [
      "Available vehicle documentation helps buyers understand condition, mileage and inspection information before purchase.",
    ],
  },
  {
    title: "International Supply",
    body: [
      "We supply vehicles to the UK, Ireland, Cyprus, USA and other worldwide destinations.",
    ],
  },
  {
    title: "Dealer-Focused Service",
    body: [
      "We support dealers and importers looking for Japanese stock cars suitable for their local markets.",
    ],
  },
];

// UI only: one icon per reason
const icons: LucideIcon[] = [Globe2, FileSearch, Ship, Handshake];

const AUTO_MS = 6000;

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ReasonBody({ body }: { body: Reason["body"] }) {
  return (
    <p className="text-base leading-relaxed text-secondary sm:text-lg md:text-xl">
      {body.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i} className="font-semibold text-accent">
            {part.emphasis}
          </span>
        )
      )}
    </p>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function WhyChooseSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance; restarts whenever the active item changes
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % reasons.length), AUTO_MS);
    return () => clearTimeout(id);
  }, [active, paused]);

  const ActiveIcon = icons[active];
  const border = "color-mix(in srgb, var(--color-secondary) 16%, transparent)";

  return (
    <section id="why-windsor-autos" className="section">
      <div className="section-inner">
        {/* Heading + intro, centered */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]"
          >
            {/* <span className="text-accent">Why</span>{" "} */}
            <span className="text-alt">Why Choose Windsor Autos</span>
          </motion.h2>

          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-5 text-base leading-relaxed text-secondary sm:text-lg"
          >
            Windsor Autos is a Japanese vehicle supplier focused on
            international sourcing and export. We help customers identify
            suitable stock, review available vehicle information and arrange
            the export process.
          </motion.p>
        </div>

        {/* Master-detail */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-6"
        >
          {/* ---------------- Selector list ---------------- */}
          <div
            role="tablist"
            aria-label="Why choose Windsor Autos"
            className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {reasons.map((reason, i) => {
              const isActive = i === active;
              const Icon = icons[i];
              return (
                <button
                  key={reason.title}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="cursor-pointer relative flex min-w-[240px] flex-1 items-center gap-4 overflow-hidden rounded-2xl border px-4 py-4 text-left transition-colors duration-300 lg:min-w-0 lg:flex-none lg:px-5 lg:py-5"
                  style={{
                    borderColor: isActive ? "var(--color-accent)" : border,
                    backgroundColor: isActive
                      ? "transparent"
                      : "color-mix(in srgb, var(--color-accent) 4%, transparent)",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="why-active-pill"
                      aria-hidden
                      className="absolute inset-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}

                  <span
                    className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300"
                    style={{
                      backgroundColor: isActive
                        ? "color-mix(in srgb, var(--color-main) 22%, transparent)"
                        : "color-mix(in srgb, var(--color-accent) 14%, transparent)",
                      color: isActive ? "var(--color-main)" : "var(--color-accent)",
                    }}
                  >
                    <Icon size={20} />
                  </span>

                  <span className="relative min-w-0 flex-1">
                    <span
                      className="block text-xs font-bold tracking-[0.18em] transition-colors duration-300"
                      style={{
                        color: isActive ? "var(--color-main)" : "var(--color-accent)",
                        opacity: isActive ? 0.8 : 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="block text-sm font-semibold leading-snug transition-colors duration-300 sm:text-base"
                      style={{ color: isActive ? "var(--color-main)" : "var(--color-alt)" }}
                    >
                      {reason.title}
                    </span>
                  </span>

                  {/* Auto-advance progress */}
                  {isActive && !paused && (
                    <motion.span
                      key={`progress-${active}`}
                      aria-hidden
                      className="absolute bottom-0 left-0 h-1 origin-left"
                      style={{ backgroundColor: "var(--color-main)", opacity: 0.55, width: "100%" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ---------------- Showcase panel ---------------- */}
          <div
            role="tabpanel"
            className="relative flex min-h-[320px] overflow-hidden rounded-3xl border p-7 sm:p-10 lg:min-h-[400px]"
            style={{
              borderColor: border,
              backgroundColor: "color-mix(in srgb, var(--color-accent) 6%, transparent)",
            }}
          >
            {/* Glow */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 25%, transparent)" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative flex w-full flex-col justify-between gap-8"
              >
                {/* Giant outlined number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-6 right-0 select-none text-[8rem] font-black leading-none sm:text-[11rem]"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px color-mix(in srgb, var(--color-accent) 25%, transparent)",
                  }}
                >
                  {String(active + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-center justify-between">
                  <span
                    className="flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: "var(--color-accent)", color: "var(--color-main)" }}
                  >
                    <ActiveIcon size={30} strokeWidth={2} />
                  </span>
                  <span className="text-sm font-semibold tracking-[0.18em] text-accent">
                    {String(active + 1).padStart(2, "0")} / {String(reasons.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative max-w-xl">
                  <h3 className="text-2xl font-semibold leading-tight text-alt sm:text-3xl md:text-4xl">
                    {reasons[active].title}.
                  </h3>
                  <span
                    aria-hidden
                    className="my-5 block h-1 w-14 rounded-full"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  />
                  <ReasonBody body={reasons[active].body} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}