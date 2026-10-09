"use client";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { MapPin, Navigation, Check } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cities = [
  {
    id: "01",
    short: "Nicosia",
    title: "Used Cars in Nicosia",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200",
    desc: "The capital demands reliability. We deliver pre-sold units to Nicosia buyers weekly, with full import documentation support. Our team understands urban driver needs and recommends vehicles that excel in city traffic. Nicosia drivers trust Windsor Autos for quality used cars Cyprus Nicosia. Our transparent process and competitive pricing make us the preferred choice. Whatever your needs are, Windsor Autos has the perfect used car for sale in Cyprus waiting for you.",
  },
  {
    id: "02",
    short: "Limassol",
    title: "Used Cars in Limassol",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    desc: "From coastal cruises to highway driving, Limassol clients prefer our accident-free Japanese sedans and hatchbacks. The variety of used cars Limassol buyers can access through Windsor Autos is unmatched. We offer everything from fuel-efficient hybrids to spacious sedans. Limassol drivers trust Windsor Autos for quality vehicles and reliable service. Our team helps you find the ideal Japanese used car that matches your lifestyle. Explore our inventory and drive home your dream car today.",
  },
  {
    id: "03",
    short: "Larnaca",
    title: "Used Cars in Larnaca",
    image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=1200",
    desc: "Located near the port? Perfect. Larnaca buyers enjoy faster customs processing when purchasing used cars Larnaca through Windsor Autos. Our efficient logistics ensure minimal delays. We offer a wide selection of vehicles, from compact city cars to family-friendly sedans. Larnaca drivers appreciate our team\'s transparency and competitive pricing. With our expert guidance, you can easily find a quality used car for sale in Cyprus that fits your budget. Contact us now to get the ideal one.",
  },
  {
    id: "04",
    short: "Paphos",
    title: "Used Cars in Paphos",
    image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1200",
    desc: "Looking for a mellow drive? Small Japanese hatchbacks from our lot are perfect for Paphos\' chill vibes and tight roads. Explore our used cars that Paphos residents trust for daily drives and getaways. We offer reliable vehicles that are affordable to maintain. Paphos drivers choose Windsor Autos for quality and transparency. Our Japanese used cars come fully inspected and ready for Cypriot roads. We have reliable, fuel-efficient options that offer great value for money.",
  },
];

export function UsedCarsAcrossCyprusSection() {
  const [active, setActive] = useState(0);
  const activeCity = cities[active];

  return (
    <section id="used-cars-across-cyprus" className="section">
      <div className="section-inner">
        
        {/* Heading - Apka Wala Same Font & Color */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-[1.75rem] leading-[1.15] sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-semibold tracking-tight">
            Used Cars Available Across <span className="text-accent">Cyprus</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-secondary">
            Select your city to explore our dedicated service
          </p>
        </motion.div>

        {/* UNIQUE UI - NO CARDS, ONLY SINGLE INTERACTIVE PANEL */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl lg:rounded-[24px]"
          style={{
            border: "1px solid color-mix(in srgb, var(--color-secondary) 12%, transparent)",
            backgroundColor: "color-mix(in srgb, var(--color-secondary) 4%, transparent)",
            boxShadow: "0 20px 60px -20px color-mix(in srgb, var(--color-secondary) 15%, transparent)",
          }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent" />
          
          <div className="grid lg:grid-cols-12 min-h-[480px]">
            
            {/* LEFT - Route Navigation */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r p-4 sm:p-6 lg:p-8" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)", backgroundColor: "color-mix(in srgb, var(--color-secondary) 3%, transparent)" }}>
              
              {/* Mobile: Horizontal Tabs / Desktop: Vertical Route */}
              <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
                {cities.map((city, idx) => (
                  <button
                    key={city.id}
                    onClick={() => setActive(idx)}
                    className={`cursor-pointer group relative flex shrink-0 lg:shrink items-center gap-4 rounded-xl lg:rounded-2xl border px-4 py-4 lg:px-5 lg:py-5 text-left transition-all duration-300 w-auto lg:w-full ${active === idx ? "bg-[var(--color-accent)] text-base border-transparent shadow-lg" : "bg-white/60 border-[color-mix(in_srgb,var(--color-secondary)_10%,transparent)] hover:border-[color-mix(in_srgb,var(--color-secondary)_20%,transparent)]"}`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${active === idx ? "bg-white text-[var(--color-accent)]" : "bg-accent text-white"}`}>
                      {city.id}
                    </span>
                    <div className="flex-1">
                      <p className={`text-sm font-semibold leading-none ${active === idx ? "text-white" : "text-alt"}`}>{city.title}</p>
                      <p className={`mt-1 text-xs flex items-center gap-1 ${active === idx ? "text-white/80" : "text-secondary"}`}><MapPin className="h-3 w-3"/> {city.short}, Cyprus</p>
                    </div>
                    {active === idx && <Check className="hidden lg:block h-5 w-5 text-white" />}
                  </button>
                ))}
              </div>

              <div className="mt-6 hidden lg:flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
                <Navigation className="h-3.5 w-3.5" /> Cyprus Delivery Network
              </div>
            </div>

            {/* RIGHT - Single Dynamic Content Panel */}
            <div className="lg:col-span-8 relative p-6 sm:p-8 lg:p-10 flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-1 flex-col"
                >
                  {/* Image with Number Overlay - Not a card */}
                  <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden rounded-xl lg:rounded-2xl">
                    <img src={activeCity.image} alt={activeCity.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-white">{activeCity.id} — {activeCity.short}</span>
                      <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-black backdrop-blur"><MapPin className="h-3 w-3 text-accent"/> Cyprus</span>
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl lg:text-2xl font-semibold tracking-tight text-alt">
                    {activeCity.title}
                  </h3>
                  
                  <p className="mt-3 text-sm lg:text-[15px] leading-6 lg:leading-7 text-secondary">
                    {activeCity.desc}
                  </p>

                  <div className="mt-auto pt-6 flex items-center justify-between border-t text-xs" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }}>
                    <span className="font-medium uppercase tracking-widest text-accent">Windsor Autos • Trusted Partner</span>
                    <span className="text-secondary">{active + 1} / {cities.length}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}