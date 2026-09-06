"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const cars = [
  {
    title: "Toyota Yaris Cross – Efficient Hybrid SUV for Irish Drivers",
    description:
      "The Toyota Yaris Cross combines compact dimensions with the practicality of a small SUV, making it a strong choice for Irish drivers. Its hybrid powertrain can suit daily commuting, while the raised driving position and flexible interior provide useful everyday practicality. The Yaris Cross was one of Ireland's leading new-car models in 2025, showing its strong appeal in the local market. Windsor Autos can source Yaris Cross models from Japanese auctions across different years, grades and specifications, giving buyers more choice when searching for Japanese used cars Ireland.",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900&q=80",
    alt: "Toyota Yaris Cross hybrid SUV",
  },
  {
    title: "Toyota RAV4 – Versatile SUV for Family Journeys",
    description:
      "The Toyota RAV4 is designed for drivers who need more interior room, luggage capacity and versatility. Its SUV body makes it suitable for family use, longer journeys and everyday driving around Ireland. The RAV4 was among Ireland's top five new-car models in 2025, while Toyota remained the country's leading new-car brand. Windsor Autos helps customers source RAV4 vehicles from Japan, with options across different model years and specifications. For buyers planning to import Japanese cars to Ireland, the RAV4 offers a practical combination of space, efficiency and Toyota engineering.",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&q=80",
    alt: "Toyota RAV4 family SUV",
  },
  {
    title: "Toyota C-HR – Stylish Hybrid Crossover for Everyday Driving",
    description:
      "The Toyota C-HR brings together crossover practicality with a distinctive design and hybrid efficiency. Its compact size makes it convenient for urban driving, while its cabin and elevated driving position provide everyday comfort. The C-HR was also among the leading Toyota models recorded in Ireland's 2025 market data. Windsor Autos gives buyers access to C-HR vehicles sourced through Japan, allowing them to compare available grades, mileage, model years and specifications. It is an excellent option for customers looking to import a Japanese car to Ireland with a modern hybrid drivetrain.",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=80",
    alt: "Toyota C-HR hybrid crossover",
  },
  {
    title: "Nissan X-Trail – Spacious SUV for Irish Families",
    description:
      "The Nissan X-Trail is a practical choice for families who want additional cabin space, comfortable seating and SUV versatility. It can handle everyday commuting as well as longer journeys across Ireland, making it suitable for drivers with varied requirements. Nissan is one of the established Japanese automotive brands with a strong presence in international markets. Windsor Autos can help buyers source suitable X-Trail models from Japan based on their preferred age, mileage, condition and specification, giving Irish customers another option when searching for cars from Japan Ireland.",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80",
    alt: "Nissan X-Trail spacious SUV",
  },
  {
    title: "Mazda CX-5 – Comfortable Crossover for Everyday Use",
    description:
      "The Mazda CX-5 offers a balance of comfort, practicality and engaging road manners in a family-friendly crossover package. Its spacious cabin and useful boot make it suitable for commuting, family trips and longer journeys around Ireland. Mazda's reputation for distinctive design and driver-focused engineering makes the CX-5 an appealing alternative to more common SUVs. Windsor Autos sources Japanese vehicles according to customer requirements, helping Irish buyers explore available CX-5 models from Japan instead of being restricted to nearby dealership inventory.",
    image:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=900&q=80",
    alt: "Mazda CX-5 comfortable crossover",
  },
];

// ---------------------------------------------------------------------------
// Motion
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function PopularJapaneseCarsSection() {
  return (
    <section id="popular-japanese-cars" className="section">
      <div className="section-inner">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Top Choices From Japan
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-[1.75rem] leading-[1.15] sm:text-3xl lg:text-4xl xl:text-[2.75rem]"
          >
            Popular Japanese Used Cars for Ireland
          </motion.h2>
        </div>

        {/* Cars list – alternating layout */}
        <div className="mt-14 space-y-16 lg:space-y-20">
          {cars.map((car, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={car.title}
                custom={index + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 ${
                  isReversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="group relative overflow-hidden rounded-2xl">
                  <div
                    className="absolute inset-0 z-10 rounded-2xl"
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px color-mix(in srgb, var(--color-secondary) 12%, transparent)",
                    }}
                  />
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[color-mix(in_srgb,var(--color-secondary)_6%,transparent)]">
                    <Image
                      src={car.image}
                      alt={car.alt}
                      width={900}
                      height={675}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl lg:text-[1.65rem]">
                    {car.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-secondary sm:text-[1.05rem]">
                    {car.description}
                  </p>

                  <div className="mt-6">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium text-alt transition-colors hover:text-accent"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--color-secondary) 18%, transparent)",
                        backgroundColor:
                          "color-mix(in srgb, var(--color-secondary) 5%, transparent)",
                      }}
                    >
                      Available via Japan auctions
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}