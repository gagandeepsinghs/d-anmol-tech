"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  ShoppingBag,
  GraduationCap,
  Code2,
  Bot,
  Smartphone,
  LineChart,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { FADE_UP, STAGGER_CONTAINER, STAGGER_CHILD, GRADIENT_TEXT } from "@/lib/design";

const productsData = [
  {
    id: "web-dev",
    title: "Custom Website Development",
    description: "Corporate websites, portfolio websites, business websites.",
    icon: Monitor,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Development",
    description: "Shopify, WooCommerce, and custom online stores.",
    icon: ShoppingBag,
    color: "from-[var(--color-orange)] to-orange-400",
  },
  {
    id: "lms",
    title: "LMS & Educational Platforms",
    description: "School management systems, online learning platforms, course portals.",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: "software",
    title: "Custom Software Development",
    description: "CRM, ERP, inventory management, and business applications.",
    icon: Code2,
    color: "from-purple-500 to-indigo-400",
  },
  {
    id: "ai-automation",
    title: "AI Automation Solutions",
    description: "AI chatbots, workflow automation, business automation assistants.",
    icon: Bot,
    color: "from-rose-500 to-pink-400",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description: "Android, iOS, and cross-platform applications.",
    icon: Smartphone,
    color: "from-[var(--color-navy)] to-blue-700",
  },
  {
    id: "seo-marketing",
    title: "SEO & Digital Marketing",
    description: "SEO optimization, lead generation, and digital growth solutions.",
    icon: LineChart,
    color: "from-amber-500 to-yellow-400",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[var(--color-light-gray)] relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--color-orange)]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--color-navy)]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            {...FADE_UP}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-navy)]/5 text-[var(--color-navy)] font-bold text-xs uppercase tracking-widest mb-6 border border-[var(--color-navy)]/10"
          >
            Digital Ecosystem
          </motion.div>

          <motion.h2
            {...FADE_UP}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] mb-8 tracking-tight leading-[1.1]"
          >
            SaaS & Digital <span className={GRADIENT_TEXT}>Products</span>
          </motion.h2>

          <motion.p
            {...FADE_UP}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed"
          >
            Explore our suite of scalable digital platforms engineered to streamline
            operations and enhance user experiences.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {productsData.map((product, index) => (
            <motion.div
              key={product.id}
              variants={STAGGER_CHILD}
              className={`group relative flex flex-col h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(255,107,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden ${
                // last item spans wider on md (7 items, 3-col grid would leave gap)
                index === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${product.color} text-white shadow-md relative z-10 group-hover:scale-105 transition-transform duration-300`}
              >
                <product.icon className="w-7 h-7" strokeWidth={2} />
              </div>

              <h3 className="text-lg font-bold text-[var(--color-navy)] mb-3 relative z-10 leading-tight">
                {product.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-200 relative z-10 flex-grow mb-7">
                {product.description}
              </p>

              <div className="mt-auto relative z-10">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-[var(--color-navy)] group-hover:text-[var(--color-orange)] transition-colors"
                >
                  Explore Solution
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
