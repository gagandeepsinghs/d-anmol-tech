"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const faqData = [
  {
    question: "WHAT SERVICES DOES D ANMOL TECH OFFER?",
    answer: "We provide complete enterprise digital solutions including custom software development, web architecture, mobile app ecosystems, UI/UX design, AI integration, legacy modernization, cloud computing, and managed IT services.",
  },
  {
    question: "HOW LONG DOES IT TAKE TO DEVELOP A SOLUTION?",
    answer: "Timelines vary depending on the complexity of the project. A standard corporate website may take 4-6 weeks, while comprehensive enterprise software or custom mobile apps can take anywhere from 3 to 6 months. We provide detailed roadmaps during the consultation phase.",
  },
  {
    question: "DO YOU OFFER CUSTOM DEVELOPMENT OR ONLY TEMPLATES?",
    answer: "We specialize in custom, from-scratch software and web architecture tailored specifically to your business requirements. We do not rely on pre-built templates for enterprise solutions.",
  },
  {
    question: "WILL MY SOLUTION BE MOBILE FRIENDLY AND SCALABLE?",
    answer: "Absolutely. All our web platforms and software interfaces are built with a mobile-first, responsive approach. We also use cloud-native, scalable architectures to ensure your platform grows with your business.",
  },
  {
    question: "DO YOU PROVIDE POST-DEPLOYMENT SUPPORT AND MAINTENANCE?",
    answer: "Yes, we offer comprehensive 24/7 support, monitoring, and maintenance packages after project deployment. We ensure your systems remain secure, up-to-date, and fully optimized.",
  },
  {
    question: "WHAT TECHNOLOGIES DO YOU WORK WITH?",
    answer: "Our tech stack includes React, Next.js, Node.js, Python, Django, AWS, Azure, PostgreSQL, and modern AI tools to ensure we deliver high-performance and future-proof solutions.",
  },
  {
    question: "HOW DO I GET STARTED WITH A PROJECT?",
    answer: "Getting started is simple. You can reach out to us via our contact form or schedule a consultation. We will discuss your requirements, propose a tailored strategy, and provide a comprehensive project timeline and quote.",
  },
];

export default function FAQ() {
  // All items closed by default
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-[var(--color-light-gray)]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)] uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1.5 bg-[var(--color-orange)] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="overflow-hidden rounded-[4px] shadow-sm bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-4 flex justify-between items-center transition-all duration-300 focus:outline-none ${
                    isOpen 
                      ? "bg-[var(--color-orange)]" 
                      : "bg-[var(--color-navy)] hover:bg-[#0a1a30]"
                  }`}
                >
                  <span className="text-white font-semibold text-[14px] md:text-[15px] uppercase text-left tracking-wide pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 text-white">
                    <ChevronRight 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`} 
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 py-6 bg-white border-x border-b border-gray-200 text-gray-700 text-sm md:text-[15px] leading-relaxed shadow-inner">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
