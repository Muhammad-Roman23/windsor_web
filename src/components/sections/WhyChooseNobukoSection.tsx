"use client";

import { motion, type Variants } from "framer-motion";
import { BadgeDollarSign, Truck, Handshake, HelpCircle } from "lucide-react";

// ---------------------------------------------------------------------------
// Content - SAME AS IMAGE
// ---------------------------------------------------------------------------

const content = {
  why: "Why",
  choose: "Choose Nobuko Japan",
  sub1: "Experience,",
  sub_accent: "Reliability,",
  sub2: "Trust",
  desc: "The right partner for importing Japanese used cars is what makes all the difference. At Nobuko Japan, we ensure you\'re in good hands. Our focus is on quality, customer satisfaction, and efficient delivery. We work very hard to give the best-quality vehicles and make it a smooth experience from start to finish. Our global network and customer-centric approach make car importing easy, trustworthy, and stress-free.",
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
// Section
// ---------------------------------------------------------------------------

export function WhyChooseNobukoSection() {
  return (
    <section id="why-choose" className="section relative overflow-hidden py-16 sm:py-20">
      {/* Bg Glow - Consistent with all previous sections */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-accent blur-[140px] opacity-[0.06]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-secondary blur-[120px] opacity-[0.04]" />
      </div>

      <div className="section-inner">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold leading-none tracking-tight sm:text-5xl">
            <span className="text-accent">{content.why}</span>
            <span className="inline-flex items-center justify-center text-alt">
              {" "}
              <HelpCircle className="ml-1 h-8 w-8 -rotate-[15deg] text-accent sm:h-10 sm:w-10" strokeWidth={2.5} />
            </span>
            <br />
            <span className="text-alt text-[22px] font-medium sm:text-[28px]">{content.choose}</span>
          </h2>

          <p className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
            <span className="text-alt">{content.sub1} </span>
            <span className="text-accent">{content.sub_accent} </span>
            <span className="text-alt">{content.sub2}</span>
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-secondary sm:text-[14.5px] sm:leading-7">
            {content.desc}
          </p>
        </motion.div>

        {/* 3 Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="group relative flex flex-col items-center rounded-2xl border border-secondary/10 bg-main/60 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:bg-main/80 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* top accent line on hover */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/0 to-transparent opacity-0 transition-opacity group-hover:via-accent/40 group-hover:opacity-100" />

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/5 text-alt group-hover:bg-accent group-hover:text-white transition-colors">
                <card.icon className="h-6 w-6" strokeWidth={1.7} />
              </div>

              <h3 className="mt-4 text-[15px] font-semibold leading-tight text-alt sm:text-[16px]">
                {card.title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-secondary">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={4}
          className="mx-auto mt-8 max-w-4xl text-center text-xs leading-6 text-secondary/70 sm:text-sm"
        >
          {content.bottomNote}
        </motion.p>
      </div>
    </section>
  );
}