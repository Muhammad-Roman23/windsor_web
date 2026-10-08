"use client";

import { motion, type Variants } from "framer-motion";
import { Award, CalendarCheck, ShieldCheck, Sparkles, Globe, Car } from "lucide-react";

// ---------------------------------------------------------------------------
// Content - SAME
// ---------------------------------------------------------------------------

const journeyContent = {
  heading1: "Our Journey",
  heading2_1: "A Legacy",
  heading2_accent: "of Trust",
  heading2_2: "and Quality",
  description:
    "Nobuko Japan began its journey as a small Japanese car exporter and has grown to become one of the most trusted names in the industry. Over the years, we have built a reputation for delivering top-quality used vehicles that meet global standards. With decades of experience in the business, we understand the intricacies of Japanese car export and are committed to offering the best vehicles from Japan\'s most reputable car auctions.",
  badge: "Since 2005 — Decades of Excellence",
};

// ---------------------------------------------------------------------------
// Motion - SAME AS REFERENCE FLOW
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
// Section - NEW UI + REFERENCE THEME FLOW
// ---------------------------------------------------------------------------

export function OurJourneySection() {
  return (
    <section id="our-journey" className="section relative overflow-hidden py-16 sm:py-20">
      
      {/* Background Glow - SAME AS REFERENCE */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-10 h-[500px] w-[500px] rounded-full bg-accent blur-[120px] opacity-20" />
        <div className="absolute -bottom-24 -left-24 h-[500px] w-[500px] rounded-full bg-secondary blur-[120px] opacity-[0.08]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(var(--color-secondary)_1px,transparent_1px),linear-gradient(90deg,var(--color-secondary)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div> */}

      <div className="section-inner relative">
        {/* Heading - Center */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            {journeyContent.badge}
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.4rem] leading-none">
            <span className="text-alt">O</span>
            <span className="text-accent">u</span>
            <span className="text-alt">r </span>
            <span className="text-alt">J</span>
            <span className="text-accent">o</span>
            <span className="text-alt">urney</span>
          </h2>
          <p className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
            <span className="text-secondary">{journeyContent.heading2_1} </span>
            <span className="text-accent">{journeyContent.heading2_accent} </span>
            <span className="text-secondary">{journeyContent.heading2_2}</span>
          </p>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-accent" />
        </motion.div>

        {/* Content Grid - NEW UI */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-6">
          
          {/* Left - Story Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="lg:col-span-7"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-secondary/10 p-[1px]">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
              <div className="flex h-full flex-col rounded-[27px] bg-main/80 p-7 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] sm:p-9">
                
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white shadow-lg shadow-accent/20">
                  <Award className="h-6 w-6" />
                </div>

                <p className="relative mt-6 text-[15px] leading-8 text-secondary sm:text-[16.5px]">
                  {journeyContent.description}
                </p>

                <div className="my-8 h-px w-full bg-secondary/10" />

                {/* 3 Mini Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-secondary/10 bg-secondary/5 p-4 text-center">
                    <p className="text-2xl font-bold tracking-tight text-alt">2005</p>
                    <p className="mt-1 text-xs font-medium text-secondary">Established</p>
                  </div>
                  <div className="rounded-2xl bg-accent p-4 text-center shadow-lg shadow-accent/20">
                    <p className="text-2xl font-bold tracking-tight text-white">20K+</p>
                    <p className="mt-1 text-xs font-medium text-white/80">Cars Exported</p>
                  </div>
                  <div className="rounded-2xl border border-secondary/10 bg-secondary/5 p-4 text-center">
                    <p className="text-2xl font-bold tracking-tight text-alt">50+</p>
                    <p className="mt-1 text-xs font-medium text-secondary">Countries</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-white">
                    <ShieldCheck className="h-3.5 w-3.5 text-white" /> Global Standards
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/10 bg-secondary/5 px-4 py-2 text-xs font-medium text-secondary">
                    <Globe className="h-3.5 w-3.5" /> Worldwide Shipping
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Image Composition */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="lg:col-span-5 relative flex flex-col gap-6"
          >
            <div className="relative flex-1 overflow-hidden rounded-[28px] border border-secondary/10 p-[1px]">
              <div className="relative h-full rounded-[27px] bg-main/80 p-2 backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1619281153699-4302adeb66d6?q=80&w=1000&auto=format&fit=crop"
                  alt="Premium Japanese Car Top View"
                  className="h-full min-h-[380px] w-full rounded-[20px] object-cover"
                />
                <div className="absolute inset-2 rounded-[20px] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-secondary/10 bg-main/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                      <CalendarCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold leading-none text-alt">20+ Years</p>
                      <p className="mt-1 text-xs text-secondary">of Trusted Export</p>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">
                    <Car className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-secondary/10 bg-main/80 px-5 py-4 backdrop-blur-xl shadow-sm">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=11" className="h-8 w-8 rounded-full border-2 border-main object-cover" alt="" />
                <img src="https://i.pravatar.cc/100?img=12" className="h-8 w-8 rounded-full border-2 border-main object-cover" alt="" />
                <img src="https://i.pravatar.cc/100?img=13" className="h-8 w-8 rounded-full border-2 border-main object-cover" alt="" />
              </div>
              <div className="text-sm">
                <p className="font-semibold leading-none text-alt">Trusted by 10,000+ clients</p>
                <p className="text-xs text-secondary">Japan&apos;s most reputable auctions</p>
              </div>
              <div className="ml-auto flex items-center gap-1 text-accent">
                <span className="text-sm font-bold">4.9</span>
                <span>★</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}