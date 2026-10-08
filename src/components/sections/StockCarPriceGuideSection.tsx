"use client";

import { useState, useRef, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { HelpCircle, Cog } from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const rows = [
  { model: "Toyota Yaris", type: "Hatchback", price: "500,000 – 1,000,000 JPY", transmission: "Automatic" },
  { model: "Toyota RAV4", type: "SUV", price: "1,000,000 – 2,000,000 JPY", transmission: "Automatic" },
  { model: "Toyota Prius", type: "Hybrid", price: "700,000 – 1,300,000 JPY", transmission: "Automatic" },
  { model: "Nissan Serena", type: "7-Seater MPV", price: "600,000 – 1,300,000 JPY", transmission: "Automatic" },
  { model: "Toyota Alphard", type: "Premium MPV", price: "1,000,000 – 2,500,000 JPY", transmission: "Automatic" },
  { model: "Honda Vezel", type: "Hybrid SUV", price: "800,000 – 1,500,000 JPY", transmission: "Automatic" },
  { model: "Mazda CX-5", type: "SUV", price: "800,000 – 1,600,000 JPY", transmission: "Automatic" },
  { model: "Subaru Forester", type: "SUV", price: "800,000 – 1,600,000 JPY", transmission: "Automatic" },
];

const footnote =
  "*Indicative Japan auction values only. Actual Japanese stock car price varies according to model year, mileage, condition, specification, auction grade and market demand. Shipping, customs, taxes and local registration costs are additional.";

const caption =
  "These models represent popular vehicle types across Windsor Autos' key export markets, but actual stock and auction prices change regularly.";

// ---------------------------------------------------------------------------
// Helpers (UI only: range bar position from the price string)
// ---------------------------------------------------------------------------

const SCALE_MAX = 2_600_000;

function getRange(price: string) {
  const nums = (price.match(/[\d,]+/g) || []).map((n) => parseInt(n.replace(/,/g, ""), 10));
  const [min = 0, max = min] = nums;
  const left = Math.min((min / SCALE_MAX) * 100, 100);
  const width = Math.max(((max - min) / SCALE_MAX) * 100, 4);
  return { left, width };
}

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Tooltip
// ---------------------------------------------------------------------------

function FootnoteTooltip() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickAway(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, []);

  return (
    <div ref={wrapRef} className="relative inline-block">
      <button
        type="button"
        aria-label="Price guide notes"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
        style={{
          borderColor: "color-mix(in srgb, var(--color-accent) 45%, transparent)",
          color: "var(--color-accent)",
        }}
      >
        <HelpCircle className="h-4 w-4" strokeWidth={1.75} />
      </button>

      {open && (
        <div
          role="tooltip"
          className="absolute right-0 top-10 z-20 w-64 rounded-2xl border p-4 text-left text-xs leading-relaxed shadow-xl sm:w-80"
          style={{
            backgroundColor: "color-mix(in srgb, var(--color-main) 96%, transparent)",
            borderColor: "color-mix(in srgb, var(--color-secondary) 16%, transparent)",
            color: "var(--color-secondary)",
          }}
        >
          <span className="mb-1 block font-semibold text-alt">Please note</span>
          {footnote}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Price card
// ---------------------------------------------------------------------------

function PriceCard({ row, index }: { row: (typeof rows)[number]; index: number }) {
  const cardBorder = "color-mix(in srgb, var(--color-secondary) 14%, transparent)";
  const { left, width } = getRange(row.price);

  return (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border p-6"
      style={{
        borderColor: cardBorder,
        backgroundColor: "color-mix(in srgb, var(--color-accent) 4%, transparent)",
      }}
    >
      {/* Left accent strip */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-1.5"
        style={{ backgroundColor: "var(--color-accent)" }}
      />

      {/* Type chip */}
      <span
        className="self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]"
        style={{
          backgroundColor: "color-mix(in srgb, var(--color-accent) 14%, transparent)",
          color: "var(--color-accent)",
        }}
      >
        {row.type}
      </span>

      {/* Model */}
      <h3 className="mt-4 text-xl font-semibold leading-snug text-alt">{row.model}</h3>

      {/* Price */}
      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-wide text-secondary">
          Indicative Japan Auction Price*
        </p>
        <p className="mt-1 text-lg font-bold leading-snug text-accent sm:text-xl">
          ¥ {row.price}
        </p>

        {/* Range bar */}
        <div
          className="relative mt-3 h-2 w-full overflow-hidden rounded-full"
          style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)" }}
          aria-hidden
        >
          <span
            className="absolute top-0 h-full rounded-full"
            style={{
              left: `${left}%`,
              width: `${width}%`,
              backgroundColor: "var(--color-accent)",
            }}
          />
        </div>
      </div>

      {/* Transmission */}
      <div
        className="mt-5 flex items-center justify-between border-t border-dashed pt-4"
        style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 25%, transparent)" }}
      >
        <span className="text-sm text-secondary">Transmission</span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-alt">
          <Cog size={15} className="text-accent transition-transform duration-500 group-hover:rotate-90" />
          {row.transmission}
        </span>
      </div>
    </motion.article>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function StockCarPriceGuideSection() {
  return (
    <section id="price-guide" className="section">
      <div className="section-inner">
        <div className="relative">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-center text-3xl leading-tight sm:text-4xl md:text-[2.75rem]"
          >
            Japanese Stock Car Price Guide
          </motion.h2>

          <div className="absolute right-0 top-0 hidden sm:block">
            <FootnoteTooltip />
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={1}
          className="mt-4 flex justify-end sm:hidden"
        >
          <FootnoteTooltip />
        </motion.div>

        {/* Card grid: 1 col mobile, 2 col tablet, 4 col large desktop */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {rows.map((row, i) => (
            <PriceCard key={row.model} row={row} index={i} />
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          custom={3}
          className="mt-8 text-center text-sm leading-relaxed text-secondary sm:text-base"
        >
          {caption}
        </motion.p>
      </div>
    </section>
  );
}