"use client";

import { motion, type Variants } from "framer-motion";
import {
  Car,
  CarFront,
  Gauge,
  Settings2,
  Users,
  Armchair,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

type Category = {
  title: string;
  body: (string | { emphasis: string })[];
  cta?: { lead: string; label: string };
};

const leftColumn: Category[] = [
  {
    title: "Used SUV Cars for Sale",
    body: [
      "Japanese SUVs offer practicality, comfort and a wide range of specifications. Depending on availability, Windsor Autos can supply Toyota, Honda, Nissan, Mazda, Subaru and other used SUV cars for sale from Japan. Browse used SUVs.",
    ],
    // cta: { lead: "", label: "Browse used SUVs." },
  },
  {
    title: "Best Used Hatchbacks from Japan",
    body: [
      "Toyota Aqua, Toyota Yaris, Honda Fit and Nissan Note are practical options for buyers seeking compact and efficient vehicles. These models can be among the best used cars UK buyers consider for everyday driving. View hatchback stock.",
    ],
    // cta: { lead: "", label: "View hatchback stock." },
  },
  {
    title: "Used Sports Cars for Sale",
    body: [
      "Japan is also an important source of enthusiast vehicles. Depending on current availability, Windsor Autos can source used sports cars for sale from Toyota, Nissan, Honda, Subaru and Mitsubishi.",
    ],
  },
];

const rightColumn: Category[] = [
  {
    title: "Automatic Used Cars",
    body: [
      "Japan has a strong selection of automatic vehicles, including hatchbacks, hybrids, SUVs, sedans and MPVs. If you are searching for used automatic cars for sale or automatic used cars in Birmingham, Windsor Autos can source vehicles according to your preferred model, budget and destination.",
    ],
  },
  {
    title: "7-Seater Used Cars",
    body: [
      "Japanese MPVs such as the Toyota Alphard, Toyota Voxy, Nissan Serena and Honda Step WGN provide flexible passenger space for families and commercial users. Browse our MPV and 7-seater stock.",
    ],
    // cta: { lead: "Browse our full", label: "MPV and 7-seater stock." },
  },
  {
    title: "Used Sedan Cars",
    body: [
      "Toyota Crown, Toyota Camry and other Japanese-market sedans provide comfortable options for buyers seeking practical and well-equipped automatic vehicles.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Layout config (UI only)
// ---------------------------------------------------------------------------

const allCategories: Category[] = [...leftColumn, ...rightColumn];

const icons: LucideIcon[] = [CarFront, Car, Gauge, Settings2, Users, Armchair];

// Bento spans on lg (3-col grid): row1 = 2+1, row2 = 1+2, row3 = 2+1
const spans = [
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-1",
];

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function CategoryBody({ body }: { body: Category["body"] }) {
  return (
    <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
      {body.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i} className="font-semibold text-accent">
            {part.emphasis}
          </span>
        )
      )}
    </p>
  );
}

function CategoryCard({
  item,
  index,
  Icon,
  span,
}: {
  item: Category;
  index: number;
  Icon: LucideIcon;
  span: string;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 sm:p-8 ${span}`}
      style={{
        borderColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
        backgroundColor: "color-mix(in srgb, var(--color-accent) 5%, transparent)",
      }}
    >
      {/* Soft accent glow in the corner */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 35%, transparent)" }}
      />

      {/* Big outlined index number */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-2 right-5 select-none text-7xl font-black leading-none sm:text-8xl"
        style={{
          color: "transparent",
          WebkitTextStroke: "1.5px color-mix(in srgb, var(--color-accent) 28%, transparent)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon tile */}
      <div className="relative flex items-center justify-between">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
          style={{
            backgroundColor: "color-mix(in srgb, var(--color-accent) 16%, transparent)",
            color: "var(--color-accent)",
          }}
        >
          <Icon size={24} strokeWidth={2} />
        </span>
        <ArrowUpRight
          size={20}
          className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        />
      </div>

      <h3 className="relative mt-6 text-lg font-semibold leading-snug text-alt sm:text-xl">
        {item.title}
      </h3>

      <div className="relative pb-8">
        <CategoryBody body={item.body} />
        {item.cta && (
          <p className="mt-2 text-sm leading-relaxed text-secondary sm:text-base">
            {item.cta.lead && <span>{item.cta.lead} </span>}
            <a
              href="#"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              {item.cta.label}
            </a>
          </p>
        )}
      </div>

      {/* Bottom accent bar that grows on hover */}
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-1 w-12 rounded-r-full transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function BrowseByCategorySection() {
  return (
    <section id="categories" className="section">
      <div className="section-inner">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="text-center text-3xl leading-tight sm:text-4xl md:text-[2.75rem]"
        >
          Browse Japanese Used Cars by Category
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {allCategories.map((item, i) => (
            <CategoryCard
              key={item.title}
              item={item}
              index={i}
              Icon={icons[i]}
              span={spans[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}