"use client";
import { useState, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { BlogCard, type Blog } from "./BlogCard";

const blogsData: Blog[] = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  title: i % 2 === 0 ? "How to Import Japanese Used Cars to UK - Full Guide" : "Toyota Auction Grade System Explained for Beginners",
  excerpt: "Windsor Autos Japan se best auction grade cars kaise select kare, complete export process aur documents ke sath.",
  image: `https://images.unsplash.com/photo-${i % 2 === 0 ? "1492144534655-ae79c964c9d7" : "1449965408869-eaa3f722e40d"}?w=600&q=80`,
  category: ["All", "Auction Tips", "Export Guide", "Maintenance"][i % 4],
  date: "02 Oct 2024",
  author: "Windsor Autos",
  featured: i < 3,
}));

const filters = ["All", "Auction Tips", "Export Guide", "Maintenance"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export function BlogsListingSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;

  const filtered = useMemo(() => {
    return activeFilter === "All" ? blogsData : blogsData.filter(b => b.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);
  const featuredBlogs = blogsData.filter(b => b.featured).slice(0, 4);

  return (
    <section className="section">
      <div className="section-inner">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent">Our Blogs</motion.p>
          <motion.h2 custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">Latest News & <span style={{ color: "var(--color-accent)" }}>Guides</span></motion.h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left + Center - 70% */}
          <div className="lg:col-span-8">
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map(f => (
                <button key={f} onClick={() => { setActiveFilter(f); setCurrentPage(1); }}
                  className="rounded-full border px-5 py-2 text-sm font-medium transition-colors"
                  style={{
                    borderColor: activeFilter === f ? "var(--color-accent)" : "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
                    backgroundColor: activeFilter === f ? "var(--color-accent)" : "transparent",
                    color: activeFilter === f ? "white" : "var(--color-alt)"
                  }}>
                  {f}
                </button>
              ))}
            </div>

            {/* Blogs Grid - 1 row me 2 */}
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {paginated.map(blog => <BlogCard key={blog.id} blog={blog} />)}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="rounded-full border px-4 py-2 text-sm disabled:opacity-40" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)" }}>Prev</button>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button key={i} onClick={() => setCurrentPage(i + 1)}
                    className="h-9 w-9 rounded-full border text-sm font-bold"
                    style={{
                      backgroundColor: currentPage === i + 1 ? "var(--color-accent)" : "transparent",
                      color: currentPage === i + 1 ? "white" : "var(--color-alt)",
                      borderColor: currentPage === i + 1 ? "var(--color-accent)" : "color-mix(in srgb, var(--color-secondary) 14%, transparent)"
                    }}>{i + 1}</button>
                ))}
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="rounded-full border px-4 py-2 text-sm disabled:opacity-40" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)" }}>Next</button>
              </div>
            )}
          </div>

          {/* Right Sidebar - 30% */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 rounded-3xl border p-6" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)", backgroundColor: "color-mix(in srgb, var(--color-secondary) 3%, transparent)" }}>
              <h3 className="text-lg font-bold text-alt">Featured Blogs</h3>
              <div className="mt-5 space-y-5">
                {featuredBlogs.map(fb => (
                  <a key={fb.id} href={`/japanese-car-blog/${fb.id}`} className="flex gap-4 group">
                    <img src={fb.image} alt={fb.title} className="h-20 w-20 shrink-0 rounded-xl object-cover" />
                    <div>
                      <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-alt group-hover:text-accent">{fb.title}</h4>
                      <p className="mt-1 text-xs text-secondary">{fb.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}