"use client";
import { motion, type Variants } from "framer-motion";
import { blogsData } from "@/data/mockBlogs"; // <-- yahan se import hoga, undefined fix
import { BlogCard } from "./BlogCard";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export function RecentBlogsSection() {
  const recentBlogs = blogsData.slice(0, 3); // random 3 blogs, API nahi

  return (
    <section className="section">
      <div className="section-inner">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent">
            Our Blogs
          </motion.p>
          <motion.h2 custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
            Recent <span style={{ color: "var(--color-accent)" }}>Blogs</span>
          </motion.h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}