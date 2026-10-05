"use client";
import { Calendar, User, ArrowRight } from "lucide-react";

export type Blog = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  featured?: boolean;
};

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1"
      style={{
        borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
        backgroundColor: "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
      }}
    >
      <div className="relative overflow-hidden">
        <img src={blog.image} alt={blog.title} className="h-[210px] w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          {blog.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-4 text-xs text-secondary">
          <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {blog.date}</span>
          <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> {blog.author}</span>
        </div>
        <h3 className="mt-3 line-clamp-2 text-[17px] font-bold leading-snug text-alt group-hover:text-accent transition-colors">
          {blog.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-secondary">
          {blog.excerpt}
        </p>
        <a href={`/japanese-car-blog/${blog.id}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
          Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}