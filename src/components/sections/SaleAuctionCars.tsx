"use client";

import { motion, type Variants } from "framer-motion";


// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1 },
  }),
};

export function SaleAuctionCars() {
  return (
    <>
    <section id="auction-cars" className="section">
      <div className="section-inner mx-auto  text-center">
        {/* <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
        >
          Sourced From Japan
        </motion.p> */}

        <motion.h1
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="text-3xl leading-tight sm:text-4xl md:text-5xl"
        >
          Japanese Auction Cars for Sale from Japan
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mx-auto mt-5  text-base leading-relaxed text-secondary sm:text-lg"
        >
          Looking for reliable Japanese auction cars from Japan? Windsor Auto
          Group helps buyers and dealers source vehicles through established
          Japanese car auctions and arrange international export.
      

       
          Japan&apos;s auction market offers a wide range of vehicles, from
          economical hatchbacks and hybrids to SUVs, luxury cars and
          performance models. Buyers can review vehicle information,
          photographs and auction sheets before making a bidding decision.
        </motion.p>
      </div>

    </section>

</>
  );
}