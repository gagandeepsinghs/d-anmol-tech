"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  TrendingUp,
  BrainCircuit,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { FADE_UP, STAGGER_CONTAINER, STAGGER_CHILD, GRADIENT_TEXT } from "@/lib/design";

const services = [
  {
    num: "01",
    title: "Web Development",
    icon: Globe,
    description: "Enterprise-grade web architectures designed for performance and scale.",
    features: [
      "Custom Websites",
      "E-Commerce Solutions",
      "Responsive Design",
      "SEO-Friendly Development",
    ],
  },
  {
    num: "02",
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile experiences that engage users.",
    features: [
      "Android Apps",
      "iOS Apps",
      "Cross-Platform Solutions",
      "App Maintenance & Support",
    ],
  },
  {
    num: "03",
    title: "Digital Marketing",
    icon: TrendingUp,
    description: "Data-driven campaigns that maximize ROI and brand visibility.",
    features: [
      "SEO Optimization",
      "Google Ads",
      "Social Media Marketing",
      "Lead Generation Campaigns",
    ],
  },
  {
    num: "04",
    title: "AI & Custom Software",
    icon: BrainCircuit,
    description: "Intelligent automation and bespoke software for complex business needs.",
    features: [
      "AI Automation",
      "Chatbot Development",
      "SaaS Platforms",
      "Custom Business Software",
    ],
  },
];

export default function ServiceProcess() {
  return (
    <section
      id="our-services"
      className="py-24 bg-[var(--color-light-gray)] overflow-hidden relative"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--color-navy)]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--color-orange)]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            {...FADE_UP}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 text-[var(--color-orange)] font-bold text-xs uppercase tracking-widest mb-6 border border-[var(--color-orange)]/20"
          >
            Core Offerings
          </motion.div>

          <motion.h2
            {...FADE_UP}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] mb-8 tracking-tight leading-[1.1]"
          >
            Our Services{" "}
            <span className={GRADIENT_TEXT}>Process</span>
          </motion.h2>

          <motion.p
            {...FADE_UP}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed"
          >
            Comprehensive technology solutions engineered to accelerate your digital
            growth from concept to deployment.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.num}
              variants={STAGGER_CHILD}
              className="group relative flex flex-col h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(10,35,66,0.12)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-orange)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-navy)]/5 text-[var(--color-navy)] flex items-center justify-center group-hover:bg-[var(--color-orange)] group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <span className="text-5xl font-black text-gray-100 group-hover:text-[var(--color-orange)]/10 transition-colors duration-300 select-none">
                  {service.num}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3 group-hover:text-[var(--color-orange)] transition-colors duration-200">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <ul className="mt-auto pt-5 border-t border-gray-100 space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[var(--color-navy)] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-orange)] shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          {...FADE_UP}
          className="flex justify-center"
        >
          <Link
            href="#services"
            className="inline-flex items-center gap-3 bg-[var(--color-navy)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[var(--color-orange)] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[var(--color-navy)]/20 hover:shadow-[var(--color-orange)]/20 group"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
