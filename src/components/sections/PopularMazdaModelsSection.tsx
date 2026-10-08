"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const models = [
  {
    id: "01",
    tag: "Efficient Urban Driving",
    title: "Demio",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
    desc: "This car features compact and efficient design for those motorists who need a car that is easy to control and operate. The Mazda Demio used model is known for its fuel efficiency and practical solutions that ensure comfortable driving.",
  },
  {
    id: "02",
    tag: "Sporty Everyday Performance",
    title: "Mazda3",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
    desc: "The Mazda3 is a stylish, elegant compact car with sporty handling and high-quality interiors. It is a very popular choice among UK Mazda buyers since you get an enjoyable drive with efficient performance. Ideal for commuting and longer trips.",
  },
  {
    id: "03",
    tag: "Compact SUV Flexibility",
    title: "Mazda CX-3",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop",
    desc: "The Mazda CX-3 is a combination of the SUV practicality with a compact design, perfect for people who want some additional space while still keeping car agile. Stylish design, comfortable interior and efficient engines make it one of the popular Japanese Mazda imports.",
  },
  {
    id: "04",
    tag: "Premium Family Comfort",
    title: "Mazda CX-5",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop",
    desc: "The Mazda CX-5 offers a large cabin, great interiors, and confident handling. Being practical with all its advanced equipment and good driving experience makes it a great choice for people who want to buy a used Mazda imported from Japan.",
  },
  {
    id: "05",
    tag: "Pure Driving Enjoyment",
    title: "Mazda MX-5",
    image: "https://images.unsplash.com/photo-1525609004556-c46d7a67f117?q=80&w=800&auto=format&fit=crop",
    desc: "The Mazda MX-5 is built for drivers who appreciate lightweight design, open-top motoring, and engaging performance. Its balanced handling and responsive feel make it one of Mazda\'s most iconic models for pure driving enjoyment.",
  },
];

export function PopularMazdaModelsSection() {
  return (
    <section id="popular-mazda-models" className="section">
      <div className="section-inner">
        
        {/* Header - Luxury */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold tracking-widest uppercase text-accent" style={{ borderColor: "color-mix(in srgb, var(--color-accent) 20%, transparent)", backgroundColor: "color-mix(in srgb, var(--color-accent) 6%, transparent)" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Popular Mazda Models
            </span>
            <h2 className="mt-4 text-[1.85rem] leading-[1.1] sm:text-3xl lg:text-4xl xl:text-[2.7rem] font-semibold tracking-tight">
              Find the Right Used <br /> <span className="text-accent">Mazda UK Models</span>
            </h2>
          </motion.div>
          <motion.p custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="lg:col-span-5 text-sm leading-6 sm:text-[15px] sm:leading-7 text-secondary lg:pb-2 lg:border-l lg:pl-6" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }}>
            Ranging from compact urban cars to practical SUVs and sports car variants. Featuring Japanese imports that blend style, reliability and comfort.
          </motion.p>
        </div>

        <div className="mt-8 h-px w-full" style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 12%, transparent)" }} />

        {/* CATALOG LIST - SAB 1 VIEW ME, NA CARD NA BG */}
        <div className="mt-2 divide-y" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }}>
          {models.map((item, idx) => (
            <motion.div
              key={item.id}
              custom={idx + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="group grid grid-cols-12 gap-4 lg:gap-8 py-7 lg:py-9 items-center"
            >
              {/* Number */}
              <div className="col-span-2 lg:col-span-1">
                <span className="text-3xl lg:text-4xl font-black tracking-tighter leading-none text-accent opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.id}
                </span>
              </div>

              {/* Image - Minimal Rounded, No BG */}
              <div className="col-span-10 lg:col-span-4">
                <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid color-mix(in srgb, var(--color-secondary) 10%, transparent)" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 lg:h-40 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="col-span-12 lg:col-span-7 lg:pl-2">
                <p className="text-xs font-semibold tracking-widest uppercase text-accent">{item.tag}</p>
                <h3 className="mt-1 text-xl lg:text-2xl font-semibold tracking-tight text-alt group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-secondary lg:line-clamp-2">
                  {item.desc}
                </p>
                <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Explore model <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}