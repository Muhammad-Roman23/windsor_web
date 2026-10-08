"use client";

import { motion, type Variants } from "framer-motion";
import {
  Car,
  FileText,
  Languages,
  CreditCard,
  Ship,
  Sparkles,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content - SAME AS REFERENCE IMAGE
// ---------------------------------------------------------------------------

const heading = {
  top1: "Our",
  top2: "Process",
  sub: "Simplifying Your Car Import Experience",
};

const steps = [
  {
    title: "Easy Vehicle Selection",
    desc: "Browse through our extensive collection of vehicles according to your preferences, and price range. Our user-friendly Freight Calculator helps you instantly calculate total cost, inclusive of shipping, so you know what to expect.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Free Invoice & Reservation",
    desc: "Once you choose your vehicle, ask for a free, obligation-free invoice. Fill in your information within 24 hours, and we will book the vehicle for you for 48 hours. This will allow you to secure your purchase smoothly.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Auction Sheet Translation",
    desc: "We provide a translated auction sheet for each vehicle to ensure you have all the information you need. This detailed report outlines the condition of the vehicle, helping you make an informed decision with full confidence.",
    icon: Languages,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Complete Payment",
    desc: "Make 100% payment via Bank Telegraphic Transfer and send us proof. You\'ll receive an email confirmation once we receive it.",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Vehicle Shipping",
    desc: "Once payment is received, we arrange export on the next available vessel. Documents and tracking details will be sent via DHL.",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=600&auto=format&fit=crop",
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
// Section - NEW UI WITHOUT ROAD - GLOWING TIMELINE
// ---------------------------------------------------------------------------

export function OurProcessSection() {
  return (
    <section id="process" className="section relative overflow-hidden py-16 sm:py-20">
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
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
            <Sparkles className="h-3.5 w-3.5" /> 5 Simple Steps
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl leading-none">
            <span className="text-alt">{heading.top1} </span>
            <span className="text-accent">{heading.top2}</span>
          </h2>
          <p className="mt-2 text-sm font-medium tracking-wide text-secondary sm:text-[15px]">
            {heading.sub}
          </p>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-accent" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-12 lg:mt-16">
          
          {/* Center Vertical Line - Interesting Replacement for Road */}
          {/* Desktop Center Line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block">
            <div className="h-full w-full bg-gradient-to-b from-accent via-secondary/15 to-transparent" />
          </div>
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[120px] -translate-x-1/2 bg-gradient-to-b from-accent/10 via-transparent to-transparent blur-2xl lg:block" />

          {/* Mobile Left Line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-secondary/10 lg:hidden" />

          {/* Steps */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                  className={`relative flex items-start gap-4 lg:items-center lg:gap-0 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Center Node - Desktop */}
                  <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex flex-col items-center">
                    {/* Glow */}
                    <div className="absolute h-14 w-14 rounded-full bg-accent/15 blur-xl" />
                    {/* Main Circle */}
                    <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full border border-accent/20 bg-main shadow-lg">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <step.icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                    </div>
                    {/* Number Badge */}
                    <span className="relative -mt-2 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold tracking-widest text-white shadow-md">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Horizontal Connector Line - Desktop */}
                  <div className={`hidden lg:block absolute top-1/2 h-px w-[60px] bg-secondary/10 ${isLeft ? "left-1/2 ml-[30px]" : "right-1/2 mr-[30px]"}`} />
                  <div className={`hidden lg:block absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent ${isLeft ? "left-[calc(50%+90px)]" : "right-[calc(50%+90px)]"}`} />

                  {/* Mobile Node */}
                  <div className="relative shrink-0 lg:hidden">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 bg-main shadow-md text-accent">
                      <step.icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[8px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 lg:w-1/2 ${isLeft ? "lg:pr-[100px]" : "lg:pl-[100px]"} max-lg:pl-1`}>
                    <div className="group relative overflow-hidden rounded-[24px] border border-secondary/10 p-[1px] max-w-[480px] ml-auto lg:mx-0">
                      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
                      <div className="rounded-[23px] bg-main/80 backdrop-blur-xl overflow-hidden">
                        {/* Image */}
                        <div className="relative overflow-hidden h-40 sm:h-44">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <span className="absolute bottom-3 left-3 rounded-full bg-main/90 px-3 py-1 text-xs font-bold tracking-widest text-accent backdrop-blur border border-secondary/10">
                            STEP 0{i + 1}
                          </span>
                        </div>
                        <div className="p-5 sm:p-6">
                          <h3 className="text-[17px] font-semibold leading-tight text-alt group-hover:text-accent transition-colors">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-[13.5px] leading-6 text-secondary">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty Side for Balance - Desktop */}
                  <div className="hidden flex-1 lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}