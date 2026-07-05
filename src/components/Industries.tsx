"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Building2,
  Factory,
  Truck,
  Rocket,
} from "lucide-react";
import { FADE_UP, STAGGER_CONTAINER, STAGGER_CHILD, GRADIENT_TEXT } from "@/lib/design";

const industries = [
  {
    name: "Healthcare",
    icon: HeartPulse,
    description:
      "Custom healthcare websites, HIPAA-compliant mobile apps, and targeted digital marketing campaigns to connect with patients.",
  },
  {
    name: "Finance & Fintech",
    icon: Landmark,
    description:
      "Secure banking web applications, highly scalable trading mobile apps, and trust-building digital marketing strategies.",
  },
  {
    name: "E-Commerce",
    icon: ShoppingCart,
    description:
      "High-conversion online stores, custom shopping apps, and aggressive multi-channel digital marketing to drive sales.",
  },
  {
    name: "Education",
    icon: GraduationCap,
    description:
      "Interactive e-learning websites, student portal mobile apps, and targeted marketing to increase student enrollment.",
  },
  {
    name: "Real Estate",
    icon: Building2,
    description:
      "Premium property listing websites, virtual tour apps, and digital marketing strategies for high-quality lead generation.",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    description:
      "Corporate B2B websites, operational tracking mobile apps, and digital marketing to secure global manufacturing contracts.",
  },
  {
    name: "Logistics",
    icon: Truck,
    description:
      "Real-time fleet tracking web dashboards, driver delivery apps, and digital marketing solutions for supply chain growth.",
  },
  {
    name: "SaaS Startups",
    icon: Rocket,
    description:
      "Scalable SaaS product websites, cross-platform mobile apps, and growth-hacking digital marketing to rapidly acquire users.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white overflow-hidden relative">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--color-navy)]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--color-orange)]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            {...FADE_UP}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-navy)]/5 text-[var(--color-navy)] font-bold text-xs uppercase tracking-widest mb-6 border border-[var(--color-navy)]/10"
          >
            Global Reach
          </motion.div>

          <motion.h2
            {...FADE_UP}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] mb-8 tracking-tight leading-[1.1]"
          >
            Industries We <span className={GRADIENT_TEXT}>Serve</span>
          </motion.h2>

          <motion.p
            {...FADE_UP}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed"
          >
            We deliver domain-specific solutions, empowering organizations across
            diverse sectors with premium website development, powerful mobile apps,
            and data-driven digital marketing strategies.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={STAGGER_CHILD}
              className="group relative flex flex-col h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(255,107,0,0.12)] hover:border-[var(--color-orange)]/30 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-orange)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

              <div className="w-13 h-13 w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-[var(--color-light-gray)] text-[var(--color-navy)] group-hover:bg-[var(--color-orange)] group-hover:text-white transition-colors duration-300 shadow-sm relative z-10">
                <industry.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3 relative z-10">
                {industry.name}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-200 relative z-10 flex-grow">
                {industry.description}
              </p>

              {/* Expanding bar accent */}
              <div className="h-[3px] w-8 bg-gray-200 rounded-full mt-6 group-hover:w-14 group-hover:bg-[var(--color-orange)] transition-all duration-400 relative z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
