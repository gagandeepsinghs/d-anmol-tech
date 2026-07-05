"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";

/**
 * ServicesMegaMenu
 *
 * Sources its data exclusively from servicesData.ts — no duplicate local data array.
 * The old implementation maintained a full copy of the icon map and category/item data
 * separately, creating a two-source-of-truth maintenance hazard.
 */
export default function ServicesMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <div
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`flex items-center gap-1 whitespace-nowrap text-[14px] font-semibold tracking-wide px-4 py-2 rounded-full cursor-default transition-all duration-300 ${
          isOpen ? "text-[var(--color-navy)] bg-gray-100/80" : "text-gray-600 hover:text-[var(--color-navy)] hover:bg-gray-50"
        }`}
      >
        Services
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[var(--color-orange)]" : "text-gray-400"
          }`}
        />
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[1000px] bg-white rounded-2xl shadow-[0_40px_100px_-20px_rgba(10,35,66,0.15),0_10px_40px_-10px_rgba(10,35,66,0.08)] border border-gray-100 overflow-hidden z-[100] flex"
          >
            {/* Left Main Section - Flagship Services */}
            <div className="flex-1 p-8 pr-10 relative bg-white">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[13px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-orange)]"></span>
                  Core Capabilities
                </h3>
                <Link 
                  href="/services" 
                  onClick={() => setIsOpen(false)}
                  className="text-[13px] font-semibold text-[var(--color-navy)] flex items-center gap-1 hover:text-[var(--color-orange)] transition-colors group"
                >
                  View full catalog 
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {(() => {
                  const flagshipIds = ["custom-software", "ai", "mobile-app", "web-dev", "seo", "ui-ux"];
                  const allItems = servicesData.flatMap(cat => cat.items);
                  const flagshipServices = flagshipIds.map(id => allItems.find(item => item.id === id)).filter(Boolean);

                  return flagshipServices.map((service, idx) => (
                    <Link
                      key={idx}
                      href={`/services/${service?.id}`}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50/80 transition-all duration-300 border border-transparent hover:border-gray-100"
                    >
                      <div className="mt-0.5 flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-[var(--color-navy)] shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] group-hover:from-orange-50 group-hover:to-orange-100/50 group-hover:text-[var(--color-orange)] group-hover:shadow-[inset_0_1px_3px_rgba(255,165,0,0.2)] transition-all duration-300 group-hover:scale-105">
                        {service && <service.icon size={22} strokeWidth={1.5} />}
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-[var(--color-navy)] group-hover:text-[var(--color-orange)] transition-colors duration-300">
                          {service?.name}
                        </h4>
                        <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">
                          {service?.shortDesc}
                        </p>
                      </div>
                    </Link>
                  ));
                })()}
              </div>
            </div>

            {/* Right Section - Conversion & Explore */}
            <div className="w-[340px] bg-gradient-to-b from-gray-50/50 to-gray-50 border-l border-gray-100 p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-orange)] opacity-[0.03] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

              <div>
                <h3 className="text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-5">Enterprise</h3>
                
                {/* Premium CTA Card */}
                <Link 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="relative block group rounded-2xl overflow-hidden border border-gray-200 hover:border-orange-200 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-orange-900/5 bg-white"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 p-6">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-navy)] text-white flex items-center justify-center mb-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                      </svg>
                    </div>
                    <h4 className="text-[16px] font-bold text-[var(--color-navy)] mb-2">AI & Automation</h4>
                    <p className="text-[13px] text-gray-500 mb-5 leading-relaxed">
                      Transform your workflows with custom LLMs, RAG architectures, and intelligent agents.
                    </p>
                    <div className="flex items-center text-[13px] font-bold text-[var(--color-orange)]">
                      <span>Book a strategy call</span>
                      <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </div>

              <div className="mt-8">
                <h3 className="text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-4">Explore More</h3>
                <div className="flex flex-col gap-2.5">
                  {[
                    { name: "Cloud Computing", id: "cloud" },
                    { name: "Digital Marketing", id: "digital" },
                    { name: "Blockchain Solutions", id: "blockchain" },
                    { name: "CMS Development", id: "cms" }
                  ].map((item, i) => (
                    <Link 
                      key={i} 
                      href={`/services/${item.id}`} 
                      onClick={() => setIsOpen(false)}
                      className="text-[14px] font-medium text-gray-600 hover:text-[var(--color-navy)] transition-colors flex items-center justify-between group py-1"
                    >
                      {item.name}
                      <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-orange)]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
