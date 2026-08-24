"use client";

import { motion, type Variants } from "framer-motion";

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
    <p className="mt-2 text-sm leading-relaxed text-secondary sm:text-base">
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

function CategoryItem({ item, index }: { item: Category; index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUp}
      className="relative pl-8"
    >
      {/* Dot marker sitting on the connecting line */}
      <span
        className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
      <h3 className="text-lg font-semibold leading-snug text-alt sm:text-xl">
        {item.title}
      </h3>
      <CategoryBody body={item.body} />
      {item.cta && (
        <p className="mt-1 text-sm leading-relaxed text-secondary sm:text-base">
          {item.cta.lead && <span>{item.cta.lead} </span>}
          <a
            href="#"
            className="font-semibold text-accent underline-offset-2 hover:underline"
          >
            {item.cta.label}
          </a>
        </p>
      )}
    </motion.div>
  );
}

function CategoryColumn({ items }: { items: Category[] }) {
  return (
    <div
      className="relative space-y-10 border-l pl-0"
      style={{
        borderColor: "color-mix(in srgb, var(--color-secondary) 16%, transparent)",
      }}
    >
      {items.map((item, i) => (
        <CategoryItem key={item.title} item={item} index={i} />
      ))}
    </div>
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

        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2">
          <CategoryColumn items={leftColumn} />
          <CategoryColumn items={rightColumn} />
        </div>
      </div>
    </section>
  );
}