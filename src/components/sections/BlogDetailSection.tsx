"use client";
import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

// Dummy Detail Data - aap API se replace kar dena
const blogDetail = {
  id: 1,
  title: "How to Import Japanese Used Cars to UK - Full Step by Step Guide",
  category: "Export Guide",
  date: "02 Oct 2024",
  author: "Windsor Autos",
  authorImage: "https://i.pravatar.cc/100",
  image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
  content: [
    { id: "introduction", title: "Introduction", text: "Japan se UK me used cars import karna ek profitable business hai. Lekin iske liye sahi auction grade aur documents ka pata hona bohot zaroori hai. Windsor Autos Japan aapko is pure process me guide karta hai." },
    { id: "auction-grade", title: "Understanding Auction Grade System", text: "Japanese auction me Grade 3.5 se 5 tak hoti hai. Grade 4 aur usse upar ki cars sabse zyada demand me rehti hain UK market me. Grade R ka matlab repaired history hota hai." },
    { id: "documents", title: "Required Documents for UK Import", text: "UK import ke liye aapko Export Certificate, Bill of Lading, aur JAAI certificate ki zaroorat hogi. Hum ye sare documents prepare karke dete hain." },
    { id: "shipping-process", title: "Shipping & Logistics Process", text: "RoRo aur Container dono options available hain. UK ke liye Southampton aur Bristol port sabse zyada use hote hain. Transit time lagbhag 4-5 weeks hota hai." },
    { id: "cost", title: "Total Cost Breakdown", text: "Total cost me FOB price, Freight, Insurance, aur UK duty/taxes shamil hote hain. Hum transparent costing provide karte hain bina kisi hidden charges ke." },
    { id: "conclusion", title: "Conclusion", text: "Agar aap reliable partner dhoondh rahe hain to Windsor Autos Japan best choice hai. Hum 15+ saal se worldwide export kar rahe hain." },
  ]
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export function BlogDetailSection() {
  const [activeId, setActiveId] = useState("introduction");

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
      setActiveId(id);
    }
  };

  // Active heading ko scroll par highlight karna
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );
    blogDetail.content.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section">
      <div className="section-inner">
        {/* TOP HEADER - Left Align, No Share Button */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="rounded-[24px] p-6 sm:p-8 md:p-10 bg-gradient-to-b from-[#1a1a1a] to-[#111111] border"
         
        >
       <h1 className="max-w-4xl text-left text-2xl font-bold leading-tight text-[#fff] dark:text-base sm:text-3xl md:text-[2.5rem]">
            {blogDetail.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5"> Published: {blogDetail.date}</span>
            <span className="flex items-center gap-1.5"> Category: {blogDetail.category}</span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <img src={blogDetail.authorImage} alt={blogDetail.author} className="h-9 w-9 rounded-full object-cover ring-2 ring-white/20" />
            <div>
              <p className="text-sm font-semibold text-white">{blogDetail.author}</p>
              <p className="text-xs text-white/70">{blogDetail.date}</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* LEFT + CENTER - 70% - Image + Content */}
          <div className="lg:col-span-8">
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img
                src={blogDetail.image}
                alt={blogDetail.title}
                className="w-full rounded-3xl object-cover"
                style={{ aspectRatio: "16/9" }}
              />
            </motion.div>

            {/* Blog Content */}
            <article className="mt-8">
              {blogDetail.content.map((section, idx) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="scroll-mt-28 border-b py-8 last:border-0"
                  style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)" }}
                >
                  <h2 className="text-xl font-bold leading-tight text-alt sm:text-2xl">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-secondary">
                    {section.text}
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Windsor Autos Japan hamesha high quality aur verified auction sheet wali gadiyan provide karta hai taake UK customers ko best value mile.
                  </p>
                </motion.div>
              ))}
            </article>
          </div>

          {/* RIGHT SIDEBAR - 30% - TOC Card + CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* TOC Card */}
              <div
                className="rounded-3xl border p-6"
                style={{
                  borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                  backgroundColor: "color-mix(in srgb, var(--color-secondary) 3%, transparent)"
                }}
              >
                <h3 className="text-base font-bold text-alt">Table of Contents</h3>
                <div className="mt-4 space-y-1">
                  {blogDetail.content.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleScroll(item.id)}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: activeId === item.id ? "color-mix(in srgb, var(--color-accent) 10%, transparent)" : "transparent",
                        color: activeId === item.id ? "var(--color-accent)" : "var(--color-secondary)",
                        borderLeft: `3px solid ${activeId === item.id ? "var(--color-accent)" : "transparent"}`
                      }}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div
                className="rounded-3xl p-6 text-center bg-gradient-to-b from-[#1a1a1a] to-[#111111] border text-[#fff] dark:text-base"
            
              >
                <h3 className="text-lg font-bold  text-[#fff] dark:text-base ">Need Help Importing?</h3>
                <p className="mt-2 text-sm leading-6 text-[#fff] dark:text-base">
                  Hamari team aapko best car dhoondhne me madad karegi. Aaj hi contact karein.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold  transition-opacity bg-accent  hover:opacity-90"
                  
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}