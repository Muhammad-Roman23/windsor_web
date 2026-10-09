"use client";

import { motion, type Variants } from "framer-motion";
import { BadgeDollarSign, Truck, Handshake, HelpCircle, Sparkles, Quote } from "lucide-react";

// ---------------------------------------------------------------------------
// Content - SAME AS IMAGE
// ---------------------------------------------------------------------------

const content = {
  why: "Why",
  choose: "Choose Windsor Autos",
  sub1: "Experience,",
  sub_accent: "Reliability,",
  sub2: "Trust",
  desc: "The right partner for importing Japanese used cars is what makes all the difference. At  Windsor Autos, we ensure you\'re in good hands. Our focus is on quality, customer satisfaction, and efficient delivery. We work very hard to give the best-quality vehicles and make it a smooth experience from start to finish. Our global network and customer-centric approach make car importing easy, trustworthy, and stress-free.",
  bottomNote:
    "Our strong commitment to transparency and reliable services sets us apart from other Japanese used car exporters. Whether you\'re looking for economical cars or luxury vehicles, we have a solution for you.",
};

const cards = [
  {
    title: "Competitive Prices",
    desc: "We ensure that you get value for your money by offering competitive prices without ever compromising on the quality of the vehicles.",
    icon: BadgeDollarSign,
  },
  {
    title: "Reliable Logistics",
    desc: "Our trusted logistics management will ensure that your vehicle arrives right on time, every time, for a smooth and timely delivery experience.",
    icon: Truck,
  },
  {
    title: "Global Network of Trusted Partners",
    desc: "Our global network of trusted partners and auction houses brings to you the best cars at competitive prices, regardless of where you are.",
    icon: Handshake,
  },
];

// ---------------------------------------------------------------------------
// Motion - SAME TUMHARA FLOW
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
// Section - NEW UI (NO IMAGE) - WATERMARK HEADING + NUMBERED FEATURES
// ---------------------------------------------------------------------------

export function WhyChooseNobukoSection() {
  return (
    <section id="why-choose" className="section relative overflow-hidden py-16 sm:py-20">
      {/* Bg Glow - SAME AS REFERENCE */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-accent blur-[120px] opacity-20" />
        <div className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-secondary blur-[120px] opacity-[0.08]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(var(--color-secondary)_1px,transparent_1px),linear-gradient(90deg,var(--color-secondary)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div> */}

      <div className="section-inner relative">
        {/* NEW HEADING DESIGN */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative text-center"
        >
          {/* Watermark Background Text */}
          {/* <span className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none text-[90px] font-black tracking-tighter text-secondary/[0.04] sm:block lg:text-[130px]">
            TRUST
          </span> */}

          <span className="relative inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Your Trusted Partner
          </span>

          <h2 className="relative mt-4 text-4xl font-semibold leading-none tracking-tight sm:text-5xl">
            <span className="text-alt">{content.why}</span>
            <span className="inline-flex align-middle text-accent">
              {" "}
              <HelpCircle className="ml-2 h-7 w-7 -rotate-[15deg] sm:h-9 sm:w-9" strokeWidth={2.2} />
            </span>
            <br />
            <span className="bg-gradient-to-r from-alt to-secondary bg-clip-text text-transparent text-[26px] font-medium sm:text-[32px]">
              {content.choose}
            </span>
          </h2>

          {/* Sub Heading as Pills */}
          <div className="relative mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full border border-secondary/10 bg-main/80 px-4 py-1.5 text-sm font-semibold text-alt backdrop-blur-xl">{content.sub1}</span>
            <span className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-accent/20">{content.sub_accent}</span>
            <span className="rounded-full border border-secondary/10 bg-main/80 px-4 py-1.5 text-sm font-semibold text-alt backdrop-blur-xl">{content.sub2}</span>
          </div>
        </motion.div>

        {/* Description - Center Glass Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="relative mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-secondary/10 p-[1px]"
        >
          <div className="rounded-[15px] bg-main/80 p-6 backdrop-blur-xl sm:p-8">
            <Quote className="mx-auto h-6 w-6 text-accent/30" />
            <p className="mt-3 text-center text-sm leading-7 text-secondary sm:text-[15px]">
              {content.desc}
            </p>
          </div>
        </motion.div>

        {/* 3 Features - NEW MINIMAL NUMBERED LAYOUT */}
        <div className="relative mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Dashed Connector Line - Desktop Only */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-[32px] hidden h-px border-t border-dashed border-secondary/20 md:block" />
          
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 2}
              className="group relative"
            >
              {/* Number Circle on Top */}
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-main border border-secondary/10 shadow-sm group-hover:border-accent/20 transition-colors" />
                <div className="absolute inset-[6px] rounded-full bg-secondary/5 group-hover:bg-accent/10 transition-colors" />
                <card.icon className="relative h-6 w-6 text-secondary group-hover:text-accent transition-colors" strokeWidth={1.7} />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white shadow-md">
                  0{i + 1}
                </span>
              </div>

              <div className="mt-5 text-center">
                <h3 className="text-[17px] font-semibold leading-tight text-alt">
                  {card.title}
                </h3>
                <div className="mx-auto mt-2 h-1 w-8 rounded-full bg-accent/20 group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
                <p className="mt-3 text-sm leading-6 text-secondary">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note - Left Accent Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
          className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-secondary/10 p-[1px]"
        >
          <div className="flex gap-4 rounded-[15px] bg-accent/5 p-5 backdrop-blur-xl sm:p-6 border-l-4 border-accent">
            <div className="hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <p className="text-sm leading-6 text-secondary">
              {content.bottomNote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}