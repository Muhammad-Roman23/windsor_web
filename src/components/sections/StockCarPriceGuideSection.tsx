"use client";

import { useState, useRef, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { HelpCircle } from "lucide-react";

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
// Section
// ---------------------------------------------------------------------------

export function StockCarPriceGuideSection() {
  const cardBorder = "color-mix(in srgb, var(--color-secondary) 14%, transparent)";
  const headerBg = "color-mix(in srgb, var(--color-secondary) 6%, transparent)";
  const stripeBg = "color-mix(in srgb, var(--color-secondary) 3%, transparent)";

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

        {/* ----------------------------------------------------------- */}
        {/* Table — visible md and up                                   */}
        {/* ----------------------------------------------------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={2}
          className="mt-6 hidden overflow-hidden rounded-3xl border md:block"
          style={{ borderColor: cardBorder }}
        >
          <table className="w-full border-collapse text-left">
            <thead>
              <tr style={{ backgroundColor: headerBg }}>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide text-alt">
                  Model
                </th>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide text-alt">
                  Type
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide text-alt">
                  Indicative Japan Auction Price*
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold uppercase tracking-wide text-alt">
                  Transmission
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.model}
                  style={{
                    backgroundColor: i % 2 === 1 ? stripeBg : "transparent",
                    borderTop: `1px solid ${cardBorder}`,
                  }}
                >
                  <td className="px-6 py-4 text-sm text-secondary sm:text-base">
                    {row.model}
                  </td>
                  <td className="px-6 py-4 text-sm text-secondary sm:text-base">
                    {row.type}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-secondary sm:text-base">
                    ¥ {row.price}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium text-alt sm:text-base">
                    {row.transmission}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* ----------------------------------------------------------- */}
        {/* Cards — visible below md                                    */}
        {/* ----------------------------------------------------------- */}
        <div className="mt-6 space-y-4 md:hidden">
          {rows.map((row, i) => (
            <motion.div
              key={row.model}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              custom={i}
              className="rounded-2xl border p-5"
              style={{ borderColor: cardBorder, backgroundColor: stripeBg }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-base font-semibold text-alt">{row.model}</p>
                <span
                  className="rounded-full border px-2.5 py-1 text-xs font-medium text-alt"
                  style={{
                    borderColor: "color-mix(in srgb, var(--color-secondary) 16%, transparent)",
                  }}
                >
                  {row.type}
                </span>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
                <dt className="text-secondary">Auction price*</dt>
                <dd className="text-right font-medium text-alt">¥ {row.price}</dd>
                <dt className="text-secondary">Transmission</dt>
                <dd className="text-right font-medium text-alt">{row.transmission}</dd>
              </dl>
            </motion.div>
          ))}
        </div>

        {/* ----------------------------------------------------------- */}
        {/* Caption                                                      */}
        {/* ----------------------------------------------------------- */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          custom={3}
          className="mt-6 text-center text-sm leading-relaxed text-secondary sm:text-base"
        >
          {caption}
        </motion.p>
      </div>
    </section>
  );
}