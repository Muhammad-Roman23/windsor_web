"use client";

import { motion, type Variants } from "framer-motion";
import { Settings2, HandCoins, Fuel, TrendingUp } from "lucide-react";

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
    icon: Settings2,
    title: "Exceptional Reliability and Long-Term Performance",
    desc: "The reputation of Japanese engineering has always been well-known all around the world thanks to the quality of performance and longevity. When you buy used cars in Cyprus from Japan, you get yourself a well-maintained car. Japan\'s strict inspection standards ensure high-quality vehicles, making even five-year-old Japanese cars feel almost new. At Nobuko Japan, we source only the best used cars for sale in Cyprus and all our vehicles are low-mileage and accident-free.",
  },
  {
    id: "02",
    icon: HandCoins,
    title: "Lower Maintenance Costs Compared to Other Brands",
    desc: "One of the biggest advantages of owning a used car in Cyprus from Japan is the low maintenance cost. Parts for Japanese engines are widely available and affordable. Local mechanics in Nicosia, Limassol, and Larnaca are familiar with Japanese models, so labour costs are reasonable. Unlike European luxury brands that require expensive specialist services, Japanese cars are budget-friendly to maintain. At Nobuko Japan, we get you vehicles that keep your annual service bills low.",
  },
  {
    id: "03",
    icon: Fuel,
    title: "Fuel-Efficient Models for Everyday Driving",
    desc: "Fuel efficiency has become a top priority for drivers due to the prices constantly fluctuating across Cyprus. Japanese cars are renowned for their exceptional fuel economy. Many models, especially hybrids, can cut your fuel bills by nearly 30% compared to European imports. This is actually a significant saving for daily commuters traveling between Nicosia and Limassol. Nobuko Japan offers a wide selection of Japanese used cars designed to be fuel-efficient for daily driving.",
  },
  {
    id: "04",
    icon: TrendingUp,
    title: "Strong Resale Value in Cyprus",
    desc: "A well-maintained Japanese car is able to hold its value extremely well in Cyprus. The depreciation factor will not affect you once you make the decision to upgrade your car. It is one of the main reasons why many Cypriot consumers choose to buy used Japanese cars in Cyprus. The high resale value of Japanese cars makes them a wise choice. Nobuko Japan only ensures its dealerships with cars that have high resale value.",
  },
];

export function WhyJapanesePopularSection() {
  return (
    <section id="why-japanese-popular" className="section">
      <div className="section-inner">
        
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-[1.75rem] leading-[1.15] sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-semibold tracking-tight">
            Why <span className="text-accent">Japanese</span> Used Cars Are Popular in <span className="text-accent">Cyprus</span>
          </h2>
        </motion.div>

        {/* NO CARD - NO BG - 2 IN ONE LINE */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto mt-10 max-w-5xl overflow-hidden border-y lg:border lg:rounded-2xl"
          style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {features.map((item, idx) => (
              <div
                key={item.id}
                className="group relative p-6 sm:p-7 lg:p-8"
                style={{
                  borderBottom: idx < 2 ? "1px solid color-mix(in srgb, var(--color-secondary) 10%, transparent)" : idx === 2 ? "1px solid color-mix(in srgb, var(--color-secondary) 10%, transparent)" : "none",
                  borderRight: idx % 2 === 0 ? "1px solid color-mix(in srgb, var(--color-secondary) 10%, transparent)" : "none",
                }}
              >
                {/* Number + Icon */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black tracking-tighter leading-none text-accent opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.id}
                  </span>
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full border"
                    style={{
                      borderColor: "color-mix(in srgb, var(--color-accent) 30%, transparent)",
                      color: "var(--color-accent)",
                    }}
                  >
                    <item.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="h-px flex-1" style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }} />
                </div>

                <h3 className="mt-4 text-base sm:text-[1.05rem] font-semibold leading-tight tracking-tight text-alt group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 sm:text-[14px] sm:leading-6 text-secondary">
                  {item.desc}
                </p>

                {/* Hover Left Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}