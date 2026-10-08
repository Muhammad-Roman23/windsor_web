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
// Content - SAME
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
// Section - NEW UI (NO CARDS) - Timeline List + Image
// ---------------------------------------------------------------------------

export function OurServicesSection() {
  return (
    <section id="services" className="section relative overflow-hidden py-16 sm:py-20">
      {/* Bg Glow - SAME AS REFERENCE */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-accent blur-[120px] opacity-20" />
        <div className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-secondary blur-[120px] opacity-[0.08]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(var(--color-secondary)_1px,transparent_1px),linear-gradient(90deg,var(--color-secondary)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div> */}

      <div className="section-inner relative">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            What We Offer
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl leading-none">
            <span className="text-accent">{heading.top1} </span>
            <span className="text-alt">{heading.top2}</span>
          </h2>
          <p className="mt-2 text-xl font-semibold tracking-tight text-accent sm:text-2xl">
            {heading.sub}
          </p>
          <p className="mx-auto mt-3 text-sm leading-6 text-secondary">
            {heading.desc}
          </p>
          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-accent" />
        </motion.div>

        {/* Main Layout - Image Left + List Right */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Left - Image Showcase - YAHAN IMAGE LAGEGI */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-secondary/10 bg-main/80 p-2 backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop"
                alt="Nobuko Japan Services"
                className="h-[420px] w-full rounded-[24px] object-cover sm:h-[480px] lg:h-[620px]"
              />
              <div className="absolute inset-2 rounded-[24px] bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-main/90 px-3 py-1.5 text-xs font-semibold text-alt shadow-lg backdrop-blur-xl border border-secondary/10">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Trusted Since 2005
              </div>

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-main/95 p-5 backdrop-blur-xl border border-secondary/10 shadow-xl">
                <p className="text-base font-bold text-alt">Hassle-Free Import</p>
                <p className="mt-1 text-sm leading-6 text-secondary">
                  From auction bidding to doorstep delivery — we handle everything with transparency.
                </p>
                <div className="mt-4 flex items-center gap-6 text-center">
                  <div>
                    <p className="text-lg font-bold text-alt">15k+</p>
                    <p className="text-xs text-secondary">Cars Delivered</p>
                  </div>
                  <div className="h-8 w-px bg-secondary/10" />
                  <div>
                    <p className="text-lg font-bold text-alt">50+</p>
                    <p className="text-xs text-secondary">Countries</p>
                  </div>
                  <div className="h-8 w-px bg-secondary/10" />
                  <div>
                    <p className="text-lg font-bold text-accent">24/7</p>
                    <p className="text-xs text-secondary">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Services Timeline List (NO CARDS) */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Line */}
            <div className="absolute left-[22px] top-6 bottom-6 hidden w-px bg-secondary/10 sm:block" />

            <div className="flex flex-col">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 2}
                  className="group relative flex gap-5 py-7 first:pt-0 last:pb-0 border-b border-secondary/5 last:border-0"
                >
                  {/* Icon + Number */}
                  <div className="relative shrink-0">
                    <div className="flex h-[46px] w-[46px] items-center justify-center rounded-2xl border border-accent/15 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                      <service.icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-[17px] font-semibold leading-tight text-alt group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-secondary">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}