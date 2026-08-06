"use client";

import { useState } from "react";

const categories = [
  "All", "Business Websites", "Mobile Apps", "Branding Projects",
  "Marketing Campaigns", "Social Media Designs", "Logo Designs",
];

const projects = [
  {
    title: "Retail E-Commerce Platform",
    category: "Business Websites",
    client: "Confidential Retail Client",
    description: "A modern e-commerce storefront built for a Gauteng-based retail brand, with integrated payments and inventory management.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    image: "/portfolio/ecommerce-platform.png",
  },
  {
    title: "Restaurant Ordering App",
    category: "Mobile Apps",
    client: "Confidential Hospitality Client",
    description: "Cross-platform mobile app enabling table-side ordering and loyalty rewards for a restaurant group.",
    tech: ["React Native", "Firebase"],
    image: "/portfolio/restaurant-app.png",
  },
  {
    title: "Church Brand Refresh",
    category: "Branding Projects",
    client: "Confidential Faith-Based Client",
    description: "Full brand identity refresh including logo, color system, and printed materials for a growing congregation.",
    tech: ["Illustrator", "Figma"],
    image: "/portfolio/church-brand.png",
  },
  {
    title: "Google & Meta Ads Campaign",
    category: "Marketing Campaigns",
    client: "Confidential SME Client",
    description: "Multi-channel paid campaign that grew qualified leads for a professional services firm.",
    tech: ["Google Ads", "Meta Ads Manager"],
    image: "/portfolio/google-meta-ads.png",
  },
  {
    title: "Instagram Content System",
    category: "Social Media Designs",
    client: "Confidential Lifestyle Brand",
    description: "A cohesive content system and templated post library for consistent daily posting.",
    tech: ["Canva", "Figma"],
    image: "/portfolio/instagram-content.png",
  },
  {
    title: "Black Xurious Logo",
    category: "Logo Designs",
    client: "Confidential Beverage Industry Client",
    description: "A modern, trust-forward logo and mark system designed for Black Xurious entering the South African market.",
    tech: ["Illustrator"],
    image: "/portfolio/fintech-logo.png",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-[#0d0a2b] via-[#160f45] to-[#2a1263] px-6 py-20 text-center text-white">
        <span className="inline-block rounded-full bg-purple-500/20 px-4 py-1 text-xs font-semibold tracking-wide text-purple-200">PORTFOLIO</span>
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Our Work</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">A look at the brands, apps, and campaigns we've helped bring to life.</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={activeCategory === cat ? "rounded-full px-4 py-2 text-sm font-medium transition bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "rounded-full px-4 py-2 text-sm font-medium transition bg-slate-100 text-slate-600 hover:bg-slate-200"}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 hover:shadow-lg transition">
              <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-purple-600">{project.category}</span>
                <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{project.client}</p>
                <p className="mt-3 text-sm text-slate-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-slate-500">No projects in this category yet.</p>
        )}
      </section>

      <section className="bg-slate-50 px-6 py-16 text-center">
        <h2 className="text-2xl font-bold">Want to be our next success story?</h2>
        <a href="/contact" className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90 transition">Start Your Project →</a>
      </section>
    </div>
  );
}
