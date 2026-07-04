"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { FADE_UP, STAGGER_CONTAINER, STAGGER_CHILD } from "@/lib/design";

const faqData = [
  {
    question: "WHAT SERVICES DOES D ANMOL TECH OFFER?",
    answer:
      "We provide complete enterprise digital solutions including custom software development, web architecture, mobile app ecosystems, UI/UX design, AI integration, legacy modernization, cloud computing, and managed IT services.",
  },
  {
    question: "HOW LONG DOES IT TAKE TO DEVELOP A SOLUTION?",
    answer:
      "Timelines vary depending on the complexity of the project. A standard corporate website may take 4-6 weeks, while comprehensive enterprise software or custom mobile apps can take anywhere from 3 to 6 months. We provide detailed roadmaps during the consultation phase.",
  },
  {
    question: "DO YOU OFFER CUSTOM DEVELOPMENT OR ONLY TEMPLATES?",
    answer:
      "We specialize in custom, from-scratch software and web architecture tailored specifically to your business requirements. We do not rely on pre-built templates for enterprise solutions.",
  },
  {
    question: "WILL MY SOLUTION BE MOBILE FRIENDLY AND SCALABLE?",
    answer:
      "Absolutely. All our web platforms and software interfaces are built with a mobile-first, responsive approach. We also use cloud-native, scalable architectures to ensure your platform grows with your business.",
  },
  {
    question: "DO YOU PROVIDE POST-DEPLOYMENT SUPPORT AND MAINTENANCE?",
    answer:
      "Yes, we offer comprehensive 24/7 support, monitoring, and maintenance packages after project deployment. We ensure your systems remain secure, up-to-date, and fully optimized.",
  },
  {
    question: "WHAT TECHNOLOGIES DO YOU WORK WITH?",
    answer:
      "Our tech stack includes React, Next.js, Node.js, Python, Django, AWS, Azure, PostgreSQL, and modern AI tools to ensure we deliver high-performance and future-proof solutions.",
  },
  {
    question: "HOW DO I GET STARTED WITH A PROJECT?",
    answer:
      "Getting started is simple. You can reach out to us via our contact form or schedule a consultation. We will discuss your requirements, propose a tailored strategy, and provide a comprehensive project timeline and quote.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  return (
    <section id="faq" className="py-24 bg-[var(--color-light-gray)]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        {/* Header */}
        <motion.div className="text-center mb-16" {...FADE_UP}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] tracking-tight leading-[1.1]">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange)] to-orange-400">
              Questions
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-[var(--color-orange)] mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="space-y-3"
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={STAGGER_CHILD}
                className="overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className={`w-full px-7 py-5 flex justify-between items-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-orange)] focus-visible:ring-inset ${
                    isOpen ? "bg-[var(--color-orange)]" : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`font-bold text-[14px] uppercase text-left tracking-wide pr-4 ${
                      isOpen ? "text-white" : "text-[var(--color-navy)]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isOpen
                        ? "bg-white/20 text-white"
                        : "bg-[var(--color-light-gray)] text-[var(--color-navy)]"
                    }`}
                  >
                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-7 py-6 text-gray-600 text-[16px] leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
