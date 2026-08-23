"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  contactTitle?: string;
  contactDescription?: string;
  faqs: FAQItem[];
}

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
  hidden: { opacity: 0, y: 14 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.1 + custom * 0.06 },
  }),
};

export function FAQ({
  eyebrow = "FAQ",
  heading = "Frequently Asked Questions",
  description = "Answers to the questions dealers and importers ask most before sourcing a vehicle from Japan with us.",
  contactTitle = "Still have questions?",
  contactDescription = "Talk to our sourcing team directly.",
  faqs,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        {/* Left: sticky intro + contact CTA */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            {heading}
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="mt-5 text-base leading-relaxed text-secondary sm:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={headingVariants}
            className="mt-8 flex items-center gap-4 rounded-2xl border p-5"
            style={{
              borderColor:
                "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
              backgroundColor:
                "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
            }}
          >
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-accent) 14%, transparent)",
                color: "var(--color-accent)",
              }}
            >
              <MessageCircle size={20} strokeWidth={2} />
            </span>
            <div>
              <p className="text-sm font-semibold">{contactTitle}</p>
              <p className="text-sm text-secondary">{contactDescription}</p>
            </div>
          </motion.div>
        </div>

        {/* Right: accordion, styled like a spec sheet */}
        <div
          className="divide-y rounded-3xl border"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
          }}
        >
          {faqs?.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={rowVariants}
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                }}
                className="first:rounded-t-3xl last:rounded-b-3xl"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 p-6 text-left sm:p-7"
                >
                  <span
                    className="font-mono text-sm tabular-nums"
                    style={{
                      color: isOpen
                        ? "var(--color-accent)"
                        : "color-mix(in srgb, var(--color-secondary) 55%, transparent)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-base font-semibold leading-snug sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                      color: "var(--color-accent)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <Plus size={16} strokeWidth={2.5} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pl-[3.25rem] text-sm leading-relaxed text-secondary sm:px-7 sm:pb-7 sm:pl-[3.75rem] sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}