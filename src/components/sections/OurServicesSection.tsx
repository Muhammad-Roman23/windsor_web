"use client";

import { motion, type Variants } from "framer-motion";
import {
  ClipboardCheck,
  SearchCheck,
  Truck,
  ShieldCheck,
  Headset,
  Sparkles,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content - SAME AS IMAGE
// ---------------------------------------------------------------------------

const heading = {
  top1: "Our",
  top2: "Services",
  sub: "Comprehensive Solutions For Your Business",
  desc: "We offer a full range of services to ensure a hassle-free experience when importing used cars from Japan:",
};

const services = [
  {
    title: "Vehicle Inspection Certification",
    desc: "Every vehicle is inspected in detail, and detailed reports and certifications are provided to ensure that the car you receive is in excellent condition. We take pride in offering certified vehicles that adhere to the highest global standards.",
    icon: SearchCheck,
  },
  {
    title: "Expert Sourcing",
    desc: "We carefully select each vehicle from Japan\'s most reputable auctions, ensuring that every car meets our strict quality criteria for performance and reliability.",
    icon: ClipboardCheck,
  },
  {
    title: "Timely Delivery",
    desc: "Our efficient logistics network ensures timely arrival of vehicles anywhere in the world for a smooth shipping experience.",
    icon: Truck,
  },
  {
    title: "Complete Warranty",
    desc: "We offer warranty options on all our vehicles, assuring you that your vehicle is covered in case anything goes wrong after delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Support",
    desc: "Our dedicated customer service team is available at all times to answer questions, provide advice, and offer support through the entire export process.",
    icon: Headset,
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

export function OurServicesSection() {
  return (
    <section id="services" className="section relative overflow-hidden py-16 sm:py-20">
      {/* Bg Glow - Consistent with previous sections */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-accent blur-[140px] opacity-[0.06]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-secondary blur-[120px] opacity-[0.05]" />
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
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl leading-none">
            <span className="text-accent">{heading.top1} </span>
            <span className="text-alt">{heading.top2}</span>
          </h2>
          <p className="mt-2 text-xl font-semibold tracking-tight text-accent sm:text-2xl">
            {heading.sub}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-secondary">
            {heading.desc}
          </p>
          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-accent" />
        </motion.div>

        {/* Services Grid - Unique Bento Style */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="group relative flex flex-col rounded-[24px] border border-secondary/10 bg-main/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* top accent line on hover */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/0 to-transparent opacity-0 transition-opacity group-hover:via-accent/50 group-hover:opacity-100" />

              {/* Icon + Number */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/15 bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <service.icon className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <span className="text-sm font-bold tracking-widest text-secondary/20 group-hover:text-accent/30">
                  0{i + 1}
                </span>
              </div>

              <h3 className="mt-5 text-[17px] font-semibold leading-tight text-alt">
                {service.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-6 text-secondary">
                {service.desc}
              </p>

              {/* bottom hover arrow */}
              <div className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                <Sparkles className="h-3.5 w-3.5" /> Trusted Service
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom 2 cards ko center karne ke liye - last row alag handle */}
        {/* Mobile pe auto stack ho jayega, Desktop pe 3 col me 5 cards perfect bento banega */}
      </div>
    </section>
  );
}