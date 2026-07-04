"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FADE_UP } from "@/lib/design";

const caseStudies = [
  {
    id: "sani-matrimonial",
    title: "Sani Matrimonial Platform",
    category: "Matrimonial Website",
    overview:
      "Developed a modern matrimonial platform with user registration, profile management, advanced search, and secure communication features.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL"],
    results: [
      "Improved user experience",
      "Secure user management",
      "Responsive design across all devices",
    ],
    gradient: "from-blue-600 to-indigo-900",
  },
  {
    id: "lms-system",
    title: "LMS School Management System",
    category: "Education Platform",
    overview:
      "Built a complete Learning Management System for schools with student management, online classes, assignments, attendance, and course management.",
    technologies: ["Next.js", "Python", "PostgreSQL"],
    results: [
      "Streamlined academic operations",
      "Centralized student management",
      "Enhanced online learning experience",
    ],
    gradient: "from-[var(--color-orange)] to-red-600",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    category: "Online Store",
    overview:
      "Developed a scalable e-commerce platform with product catalog, shopping cart, payment integration, and order management.",
    technologies: ["Shopify", "Next.js"],
    results: [
      "Improved online sales",
      "Mobile-friendly shopping experience",
      "Secure checkout process",
    ],
    gradient: "from-teal-500 to-emerald-700",
  },
  {
    id: "iap-tech",
    title: "IAP Tech Courses Platform",
    category: "Educational Website",
    overview:
      "Designed and developed a professional course platform for technical training programs, student enrollment, and content delivery.",
    technologies: ["Next.js", "Tailwind CSS"],
    results: [
      "Increased course enrollments",
      "Better user engagement",
      "Professional digital presence",
    ],
    gradient: "from-purple-600 to-fuchsia-800",
  },
  {
    id: "ai-assistant",
    title: "AI Business Automation Assistant",
    category: "AI Solution",
    overview:
      "Developed an AI-powered automation platform that automates customer support, lead qualification, document analysis, and business workflows.",
    technologies: ["FastAPI", "LangChain", "Gemini API", "FAISS", "PostgreSQL", "Next.js"],
    results: [
      "Reduced manual work by 70%",
      "Faster customer response time",
      "Improved business productivity",
    ],
    gradient: "from-[var(--color-navy)] to-blue-900",
  },
  {
    id: "fashion-ecommerce",
    title: "Fashion E-Commerce Website",
    category: "Fashion & Apparel",
    overview:
      "Designed and developed a modern fashion e-commerce website with an attractive UI, product catalog, shopping cart, secure checkout, and responsive design.",
    technologies: ["Shopify", "WooCommerce", "Next.js"],
    results: [
      "Enhanced online brand presence",
      "Improved customer shopping experience",
      "Increased online sales and engagement",
    ],
    gradient: "from-pink-500 to-rose-700",
  },
  {
    id: "baniya-vastra",
    title: "Baniya Vastra E-Commerce",
    category: "Premium E-Commerce",
    overview:
      "Built a luxury ethnic wear e-commerce platform with dynamic mega-menus, a conversion-focused product detail experience, and seamless aesthetic branding.",
    technologies: ["Next.js", "Tailwind CSS"],
    results: [
      "Elevated premium brand positioning",
      "Improved mobile and desktop experience",
      "Increased user engagement and time on site",
    ],
    gradient: "from-[var(--color-navy)] to-amber-900",
  },
  {
    id: "desi-rasoi",
    title: "Desi Rasoi Food Platform",
    category: "Restaurant & Delivery",
    overview:
      "Designed a premium restaurant and food delivery platform featuring a dynamic menu, responsive categories, and an authentic UI.",
    technologies: ["Next.js", "Tailwind CSS"],
    results: [
      "Increased online food orders",
      "Enhanced digital restaurant presence",
      "Streamlined customer browsing experience",
    ],
    gradient: "from-orange-600 to-red-800",
  },
];

/** Individual case study row — extracted to keep the map loop clean */
function CaseStudyCard({ study }: { study: (typeof caseStudies)[number] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col lg:flex-row"
    >
      {/* Visual — gradient side */}
      <div className={`lg:w-2/5 relative overflow-hidden bg-gradient-to-br ${study.gradient} min-h-[320px]`}>
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        {/* Screenshot */}
        <div className="absolute left-6 right-6 top-20 bottom-0 rounded-t-xl overflow-hidden border-t border-l border-r border-white/20 shadow-xl transform translate-y-6 group-hover:translate-y-2 transition-transform duration-400 z-10">
          <Image
            src={`/images/projects/${study.id}.png`}
            alt={`${study.title} screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-left-top"
            loading="lazy"
          />
          {/* Hover reveal overlay */}
          <div className="absolute inset-0 bg-black/55 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
            <p className="text-white text-sm leading-relaxed line-clamp-3">{study.overview}</p>
          </div>
        </div>

        {/* Category badge */}
        <div className="relative z-20 p-6">
          <span className="inline-flex px-3 py-1.5 bg-black/20 backdrop-blur-sm rounded-full border border-white/15 text-white text-xs font-bold uppercase tracking-wider">
            {study.category}
          </span>
        </div>

        {/* Tech stack — bottom of gradient side */}
        <div className="absolute bottom-6 left-6 right-6 z-20">
          <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center gap-2 text-white/70 font-semibold mb-2.5 text-[11px] uppercase tracking-widest">
              <Code2 className="w-3.5 h-3.5" />
              Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-white/10 text-white text-[11px] font-semibold rounded-lg border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content side */}
      <div className="lg:w-3/5 p-8 md:p-10 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--color-navy)] mb-5 leading-tight group-hover:text-[var(--color-orange)] transition-colors duration-200">
          {study.title}
        </h3>

        <div className="mb-6">
          <h4 className="text-[var(--color-navy)] font-bold text-[11px] uppercase tracking-widest mb-2.5">
            Project Overview
          </h4>
          <p className="text-gray-600 text-[15px] leading-relaxed">{study.overview}</p>
        </div>

        <div className="mb-7">
          <h4 className="text-[var(--color-navy)] font-bold text-[11px] uppercase tracking-widest mb-3">
            Key Results
          </h4>
          <ul className="grid sm:grid-cols-2 gap-2.5">
            {study.results.map((result) => (
              <li key={result} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-orange)] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-[14px] font-medium">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-5 border-t border-gray-100">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-[var(--color-navy)] font-bold text-[12px] uppercase tracking-widest group-hover:text-[var(--color-orange)] transition-colors duration-200"
          >
            Request Similar Solution
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudies() {
  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Single, restrained ambient decorator */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 opacity-[0.06]"
        style={{ background: "radial-gradient(circle, var(--color-orange) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              {...FADE_UP}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 text-[var(--color-orange)] font-bold text-xs uppercase tracking-widest mb-6 border border-[var(--color-orange)]/20"
            >
              Proven Track Record
            </motion.div>

            <motion.h2
              {...FADE_UP}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] mb-8 tracking-tight leading-[1.1]"
            >
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange)] to-orange-400">
                Case Studies
              </span>
            </motion.h2>

            <motion.p
              {...FADE_UP}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed"
            >
              Discover how we have partnered with industry leaders to deliver
              transformative digital solutions and measurable business impact.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-navy)] text-white font-bold rounded-xl hover:bg-[var(--color-orange)] hover:-translate-y-0.5 transition-all duration-200 shadow-md"
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Case Studies */}
        <div className="space-y-10">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 md:hidden">
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-navy)] text-white font-bold rounded-xl hover:bg-[var(--color-orange)] transition-colors duration-200 shadow-lg"
          >
            Start Your Project
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
