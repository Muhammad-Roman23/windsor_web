"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const steps = [
  {
    id: "01",
    title: "Choose Your Vehicle",
    desc: "Choose your ideal vehicle from our inventory of 500+ cars. Filter by model year and prices.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "We Arrange Everything",
    desc: "We manage everything else, from secure purchasing at Japanese auctions to safe shipping and customs clearance.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Transparent Process",
    desc: "Our service is based on total transparency with accurate vehicle history and inspection.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Stay Updated",
    desc: "Our staff members can speak English and Greek and will continuously keep you updated throughout the whole process.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Doorstep Delivery",
    desc: "We have turned the complicated process of importing cars into an easy one, with competitive prices and delivery right to your doorstep.",
    image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Buy with Confidence",
    desc: "Purchase your new vehicle with peace of mind thanks to inspections, transparent documentation, and support throughout the process.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&auto=format&fit=crop",
  },
];

export function TransparentImportProcessSection() {
  return (
    <section id="import-process" className="section">
      <div className="section-inner">
        
        {/* Heading - Apka Wala Same Font */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-[1.75rem] leading-[1.15] sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-semibold tracking-tight">
            A Simple, <span className="text-accent">Transparent Import Process</span> for you
          </h2>
          <p className="mt-3 text-sm sm:text-[15px] leading-6 text-secondary">
            We make buying a Japanese used car for sale in Cyprus straightforward and stress-free.
          </p>
        </motion.div>

        {/* TIMELINE CONTAINER - NO CARD, NO BG */}
        <div className="relative mx-auto mt-12 max-w-5xl">
          {/* Center Vertical Line - Desktop Center, Mobile Left */}
          <div
            className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)" }}
          />

          <div className="flex flex-col gap-10 lg:gap-14">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  custom={idx + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  className={`relative grid grid-cols-12 gap-4 lg:gap-0 items-center`}
                >
                  {/* Center Dot */}
                  <div className="absolute left-6 lg:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="h-3 w-3 rounded-full border-2 bg-white" style={{ borderColor: "var(--color-accent)", backgroundColor: "var(--color-accent)" }} />
                    <div className="absolute inset-0 -m-2 rounded-full opacity-20" style={{ backgroundColor: "var(--color-accent)" }} />
                  </div>

                  {/* Content Side */}
                  <div className={`col-span-12 lg:col-span-5 flex gap-4 pl-14 lg:pl-0 ${isEven ? "lg:pr-12 lg:text-right lg:order-1" : "lg:pl-12 lg:order-3 lg:text-left"}`}>
                    <div className={`flex-1 ${isEven ? "lg:order-1" : ""}`}>
                      <div className={`flex items-center gap-3 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}>
                        <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white lg:hidden`} style={{ backgroundColor: "var(--color-accent)" }}>{step.id}</span>
                        <h3 className="text-base sm:text-lg font-semibold leading-tight tracking-tight text-alt">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-secondary sm:text-[14.5px]">
                        {step.desc}
                      </p>
                    </div>
                    {/* Big Number - Desktop Only */}
                    <span className={`hidden lg:block text-4xl font-black leading-none tracking-tighter opacity-10 text-accent ${isEven ? "order-2" : ""}`}>
                      {step.id}
                    </span>
                  </div>

                  {/* Spacer for Center Line */}
                  <div className="hidden lg:block lg:col-span-2 lg:order-2" />

                  {/* Image Side - Circular */}
                  <div className={`col-span-12 lg:col-span-5 pl-14 lg:pl-0 flex ${isEven ? "lg:pl-12 lg:order-3 lg:justify-start" : "lg:pr-12 lg:order-1 lg:justify-end"}`}>
                    <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-full border-4" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }}>
                      <img src={step.image} alt={step.title} className="h-full w-full object-cover" />
                      <span className="hidden lg:flex absolute inset-0 items-center justify-center bg-black/0">
                        <span className="rounded-full px-2.5 py-1 text-xs font-bold text-white lg:hidden" style={{ backgroundColor: "var(--color-accent)" }}>{step.id}</span>
                      </span>
                    </div>
                    {/* Connector Line to Center */}
                    <div className={`hidden lg:block h-px flex-1 self-center ${isEven ? "order-first mr-4" : "ml-4"}`} style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)" }} />
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