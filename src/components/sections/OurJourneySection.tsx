"use client";

import { motion, type Variants } from "framer-motion";
import { Award, CalendarCheck, ShieldCheck } from "lucide-react";

// ---------------------------------------------------------------------------
// Content - SAME AS SCREENSHOT
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
// Motion - SAME AS WELCOME SECTION
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

export function OurJourneySection() {
  return (
    <section id="our-journey" className="section relative overflow-hidden py-16 sm:py-20">
      {/* Bg Glow - Consistent with Welcome Section */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-10 h-[450px] w-[450px] rounded-full bg-accent blur-[130px] opacity-10" />
        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-secondary blur-[130px] opacity-[0.06]" />
      </div>

      <div className="section-inner">
        {/* Heading - Center */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.2rem] leading-none">
            <span className="text-alt">O</span>
            <span className="text-accent">u</span>
            <span className="text-alt">r </span>
            <span className="text-alt">J</span>
            <span className="text-accent">o</span>
            <span className="text-alt">urney</span>
          </h2>
          <p className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
            <span className="text-alt">{journeyContent.heading2_1} </span>
            <span className="text-accent">{journeyContent.heading2_accent} </span>
            <span className="text-alt">{journeyContent.heading2_2}</span>
          </p>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-accent" />
        </motion.div>

        {/* Content Grid */}
        <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
          
          {/* Left - Curved Aesthetic Card - like screenshot */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative rounded-[32px] rounded-tl-[48px] border border-secondary/15 bg-main/80 p-7 backdrop-blur-xl sm:p-9 lg:p-10">
              {/* Top flat line like screenshot */}
              <div className="absolute left-12 right-0 top-0 h-[1px] bg-secondary/20" />
              <div className="absolute left-0 top-12 h-1/2 w-[1px] bg-secondary/20" />
              
              {/* Dashed inner border - red accent */}
              <div className="pointer-events-none absolute inset-[10px] rounded-[26px] rounded-tl-[40px] border border-dashed border-accent/30" />
              
              {/* Corner Cut Line */}
              <div className="absolute left-0 top-0 h-[48px] w-[48px] rounded-tl-[48px] border-l border-t border-secondary/30" />

              <p className="relative text-[15px] leading-7 text-secondary sm:text-[16px] sm:leading-8">
                {journeyContent.description}
              </p>

              {/* Mini stats inside card */}
              <div className="relative mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                  <Award className="h-3.5 w-3.5" /> Top Auctions
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/10 bg-secondary/5 px-3 py-1.5 text-xs font-medium text-secondary">
                  <ShieldCheck className="h-3.5 w-3.5" /> Global Standards
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="relative"
          >
            {/* Glow behind car */}
            <div className="absolute inset-0 -z-10 rounded-[28px] bg-accent/10 blur-2xl" />
            
            <div className="relative overflow-hidden rounded-[28px] border border-secondary/10 bg-secondary/5 p-2">
              <img
                src="https://images.unsplash.com/photo-1619281153699-4302adeb66d6?q=80&w=1000&auto=format&fit=crop"
                alt="Premium Japanese Car Top View - Porsche"
                className="h-[340px] w-full rounded-[20px] object-cover sm:h-[420px] lg:h-[380px]"
              />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-secondary/10 bg-main/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                  <CalendarCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none text-alt">20+ Years</p>
                  <p className="mt-1 text-xs text-secondary">of Trusted Export</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}