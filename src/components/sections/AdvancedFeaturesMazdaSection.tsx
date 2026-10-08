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

const features = [
  {
    id: "01",
    title: "SKYACTIV Technology for Efficient Performance",
    desc: "Mazda\'s SKYACTIV technology makes it possible for drivers to enjoy efficient engines, responsive handling, and smooth performance. Models such as Mazda3 and CX-5 exemplify such technology, with drivers getting to enjoy Japanese-import Mazda models that deliver the perfect balance.",
  },
  {
    id: "02",
    title: "Advanced Safety for Confident Driving",
    desc: "Drivers will get safe driving assistance through the safety technology offered by i-ACTIVSENSE technology on their Mazdas. The adaptive cruise control, lane assist, collision warning and many other safety technologies in cars such as the used Mazda CX-5 keep drivers confident.",
  },
  {
    id: "03",
    title: "Comfort and Connectivity on Every Journey",
    desc: "The interiors of Mazda models are designed using high-quality materials, layouts, and cutting-edge technologies that ensure comfort during drives. With advanced technologies like Mazda Connect, touchscreen operation, and sophisticated cabins, the Mazda3 used and CX-5 are made to be comfortable cars for daily use.",
  },
];

export function AdvancedFeaturesMazdaSection() {
  return (
    <section id="advanced-features-mazda" className="section">
      <div className="section-inner">
        
        {/* Header - Same No Change */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="lg:col-span-6"
          >
            <h2 className="text-[1.75rem] leading-[1.15] sm:text-3xl lg:text-4xl xl:text-[2.6rem] font-semibold tracking-tight text-alt">
              Advanced Features in <br /> <span className="text-accent">Used Mazda Cars</span>
            </h2>
          </motion.div>
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="lg:col-span-6 text-sm leading-6 sm:text-[15px] sm:leading-7 text-secondary lg:pt-2 lg:border-l lg:pl-6"
            style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }}
          >
            Mazda mainly focuses on driving enjoyment, fuel efficiency, and everyday comfort for all its users. From advanced engineering to intelligent safety systems, used Mazda cars UK buyers can find models designed to deliver a refined and engaging driving experience.
          </motion.p>
        </div>

        {/* CARDS WITH SVG CONNECTOR - ZigZag Upper Neeche */}
        <div className="relative mt-10 lg:mt-14">
          
          {/* DESKTOP SVG CONNECTOR - Beech me, cards ke upper nahi ayega */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              {/* Main ZigZag Path - Center Gutter se jayega */}
              <path
                d="M 46 18 H 50 V 50 H 54 V 82 H 46"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="0.35"
                strokeDasharray="1.2 1.2"
                strokeLinecap="round"
                opacity="0.35"
              />
              {/* Dots */}
              <circle cx="46" cy="18" r="1.1" fill="var(--color-accent)" />
              <circle cx="46" cy="18" r="0.45" fill="var(--color-bg)" />
              <circle cx="54" cy="50" r="1.1" fill="var(--color-accent)" />
              <circle cx="54" cy="50" r="0.45" fill="var(--color-bg)" />
              <circle cx="46" cy="82" r="1.1" fill="var(--color-accent)" />
              <circle cx="46" cy="82" r="0.45" fill="var(--color-bg)" />
            </svg>
          </div>

          {/* MOBILE SVG CONNECTOR - Left side, cards se alag */}
          <div className="lg:hidden absolute left-[15px] top-6 bottom-6 w-[20px] pointer-events-none z-0">
            <svg viewBox="0 0 20 600" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <path
                d="M 10 20 V 580"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
                opacity="0.28"
              />
              {/* Horizontal branches to cards */}
              <path d="M 10 20 H 18" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.28" />
              <path d="M 10 300 H 18" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.28" />
              <path d="M 10 580 H 18" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.28" />
              
              <circle cx="10" cy="20" r="6" fill="var(--color-accent)" />
              <circle cx="10" cy="20" r="2.5" fill="var(--color-bg)" />
              <circle cx="10" cy="300" r="6" fill="var(--color-accent)" />
              <circle cx="10" cy="300" r="2.5" fill="var(--color-bg)" />
              <circle cx="10" cy="580" r="6" fill="var(--color-accent)" />
              <circle cx="10" cy="580" r="2.5" fill="var(--color-bg)" />
            </svg>
          </div>

          {/* CARDS - ZigZag Layout */}
          <div className="flex flex-col gap-6 lg:gap-10 pl-10 lg:pl-0">
            {features.map((item, idx) => (
              <motion.div
                key={item.id}
                custom={idx + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`relative z-10 w-full lg:w-[46%] rounded-[24px] p-6 sm:p-7 lg:p-8 ${
                  idx % 2 === 0 ? "lg:self-start" : "lg:self-end"
                }`}
                style={{
                  border: "1px solid color-mix(in srgb, var(--color-secondary) 12%, transparent)",
                  backgroundColor: "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold shrink-0"
                    style={{ backgroundColor: "var(--color-accent)", color: "var(--color-bg)" }}
                  >
                    {item.id}
                  </span>
                  <span className="h-px flex-1" style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 25%, transparent)" }} />
                </div>

                <h3 className="mt-5 text-base font-semibold leading-tight tracking-tight text-alt group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-secondary">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}