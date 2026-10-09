"use client";

import { motion, type Variants } from "framer-motion";
import {
  MapPinned,
  CreditCard,
  Languages,
  Home,
  Ship,
  Sparkles,
  Gavel,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content - SAME AS REFERENCE IMAGE
// ---------------------------------------------------------------------------

const heading = {
  accent: "Auction",
  rest: "Service At",
  sub: "Windsor Autos",
  desc: "Our auction service allows you to access top-quality vehicles from Japan\'s most reputable auctions directly, ensuring a smooth and reliable buying experience.",
};

const services = [
  {
    title: "Track Your Vehicle Live",
    desc: "We track your vehicle live throughout its journey so that you can stay updated and confident about the delivery status of your car.",
    icon: MapPinned,
    image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Easy Payment Options",
    desc: "Choose from flexible payment options such as Letter of Credit (LC) or Cash on Delivery (COD) to make buying easier and safer for you.",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Translation of Auction Sheet",
    desc: "We provide translated auction sheets for each vehicle, giving you clear insights into the vehicle\'s condition, history, and any potential concerns before making a decision.",
    icon: Languages,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Doorstep Vehicle Delivery Service",
    desc: "At Windsor Autos, we offer convenient doorstep delivery, ensuring that your vehicle is safely transported directly to your location, making the process smooth.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Safe and Fast Delivery",
    desc: "We guarantee safe and fast vehicle delivery by partnering with top shipping companies, providing reliable service and timely delivery from start to finish.",
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
// Section - NEW UI (NO TIMELINE) - HORIZONTAL MEDIA CARDS
// ---------------------------------------------------------------------------

export function AuctionServiceSection() {
  return (
    <section id="auction-service" className="section relative overflow-hidden py-16 sm:py-20">
      {/* Bg Glow - SAME AS REFERENCE */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-accent blur-[120px] opacity-20" />
        <div className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-secondary blur-[120px] opacity-[0.08]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(var(--color-secondary)_1px,transparent_1px),linear-gradient(90deg,var(--color-secondary)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div> */}

      <div className="section-inner relative">
        {/* Heading - New Style */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
            <Gavel className="h-3.5 w-3.5" /> Direct Auction Access
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl leading-none">
            <span className="text-accent">{heading.accent} </span>
            <span className="text-alt">{heading.rest}</span>
          </h2>
          <p className="mt-1 text-lg font-semibold tracking-wide text-secondary">
            {heading.sub}
          </p>
          <p className="mx-auto mt-3 text-sm leading-6 text-secondary">
            {heading.desc}
          </p>
          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-accent" />
        </motion.div>

        {/* Services - Stacked Horizontal Cards */}
        <div className="mt-10 flex flex-col gap-5 lg:mt-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="group relative overflow-hidden rounded-[28px] border border-secondary/10 p-[1px]"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
              <div className="relative flex flex-col md:flex-row rounded-[27px] bg-main/80 backdrop-blur-xl overflow-hidden">
                
                {/* Left - Image */}
                <div className="relative h-48 w-full shrink-0 overflow-hidden md:h-auto md:w-[340px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r" />
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[11px] font-bold tracking-widest text-white shadow-md">
                    0{i + 1}
                  </span>
                </div>

                {/* Right - Content */}
                <div className="relative flex flex-1 flex-col justify-center p-6 sm:p-7">
                  {/* Big Number Watermark */}
                  <span className="pointer-events-none absolute right-4 top-2 select-none text-[56px] font-black leading-none tracking-tighter text-secondary/[0.06] group-hover:text-accent/[0.08] transition-colors">
                    0{i + 1}
                  </span>

                  <div className="relative flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/15 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      <service.icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-accent">
                      STEP 0{i + 1}
                    </span>
                  </div>

                  <h3 className="relative mt-3 text-[18px] font-semibold leading-tight text-alt group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 text-[14px] leading-6 text-secondary">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={6}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 rounded-full border border-secondary/10 bg-main/80 px-4 py-3 backdrop-blur-xl text-xs font-medium text-secondary"
        >
          <span className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-accent" /> Live Tracking</span>
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span>Easy Payments</span>
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span>Doorstep Delivery</span>
        </motion.div>
      </div>
    </section>
  );
}