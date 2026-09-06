"use client";

import { motion, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const steps = [
  {
    number: "01",
    title: "Browse Quality Japanese Cars",
    description:
      "We offer direct access to Japan’s top auction houses, giving you more value, reliability and transparency than local dealerships.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=400&q=80",
  },
  {
    number: "02",
    title: "Buy from a Trusted Exporter",
    description:
      "We are a trusted Japanese used car supplier with years of experience serving Irish buyers and supporting the full export process.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    number: "03",
    title: "Choose a Reliable Vehicle",
    description:
      "Our cars have low miles, are damage free, and are inspected before shipment so you can buy with greater confidence.",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80",
  },
  {
    number: "04",
    title: "Let Us Handle the Process",
    description:
      "We take care of all transportation and paperwork requirements for you, from auction to Irish port.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
  },
  {
    number: "05",
    title: "Find the Right Car for Your Needs",
    description:
      "Whether you need a hybrid for Dublin commuting or an SUV for Cork’s country roads, we help you find the perfect used car for sale in Ireland.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
  },
  {
    number: "06",
    title: "Drive Home with Confidence",
    description:
      "Choose Windsor Autos and enjoy a high-quality Japanese used car backed by reliable service from start to finish.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=400&q=80",
  },
];

// ---------------------------------------------------------------------------
// Motion
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function WhyChooseWindsorProcess() {
  return (
    <section id="why-choose-windsor" className="section">
      <div className="section-inner">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-secondary"
          >
            Why Choose
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-[1.75rem] leading-[1.15] sm:text-3xl lg:text-4xl xl:text-[2.75rem]"
          >
            <span className="text-accent">Windsor Autos</span> for Used Cars
            Ireland
          </motion.h2>
        </div>

        {/* Process timeline */}
        <div className="relative mx-auto mt-16 max-w-3xl lg:max-w-4xl">
          {/* Center dotted path */}
          <div
            className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 md:block"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, color-mix(in srgb, var(--color-secondary) 25%, transparent) 40%, transparent 40%)",
              backgroundSize: "1px 10px",
              backgroundRepeat: "repeat-y",
            }}
          />

          <div className="space-y-10 md:space-y-14">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  custom={index + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  className="relative"
                >
                  {/* Desktop layout */}
                  <div
                    className={`hidden items-center md:flex ${
                      isLeft ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content block */}
                    <div
                      className={`flex w-[calc(50%-28px)] items-center gap-4 ${
                        isLeft
                          ? "flex-row justify-end pr-6"
                          : "flex-row-reverse justify-end pl-6"
                      }`}
                    >
                      {/* Circular image */}
                      <div
                        className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-[3px] lg:h-20 lg:w-20"
                        style={{
                          borderColor:
                            "color-mix(in srgb, var(--color-secondary) 22%, transparent)",
                          boxShadow:
                            "0 0 0 4px color-mix(in srgb, var(--color-accent) 10%, transparent)",
                        }}
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Text */}
                      <div
                        className={`max-w-[220px] lg:max-w-[260px] ${
                          isLeft ? "text-right" : "text-left"
                        }`}
                      >
                        <h3 className="text-[0.95rem] font-semibold leading-snug tracking-tight lg:text-base">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[0.8rem] leading-relaxed text-secondary lg:text-[0.85rem]">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Number badge on the path */}
                    <div className="relative z-10 flex w-14 shrink-0 justify-center">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white lg:h-10 lg:w-10 lg:text-sm"
                        style={{
                          backgroundColor: "var(--color-accent)",
                          boxShadow:
                            "0 0 0 5px color-mix(in srgb, var(--color-accent) 16%, transparent)",
                        }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Empty opposite side */}
                    <div className="w-[calc(50%-28px)]" />
                  </div>

                  {/* Mobile layout */}
                  <div className="flex items-start gap-4 md:hidden">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    >
                      {step.number}
                    </div>

                    <div className="flex flex-1 items-start gap-3">
                      <div
                        className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2"
                        style={{
                          borderColor:
                            "color-mix(in srgb, var(--color-secondary) 22%, transparent)",
                        }}
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="text-[0.95rem] font-semibold leading-snug">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[0.8rem] leading-relaxed text-secondary">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}