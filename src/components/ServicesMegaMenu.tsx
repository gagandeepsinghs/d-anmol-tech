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
        className="flex items-center gap-1 text-[var(--color-navy)] font-semibold hover:text-[var(--color-orange)] transition-colors duration-200 text-sm uppercase tracking-wider cursor-default py-6"
      >
        Services
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[var(--color-orange)]" : ""
          }`}
        />
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 -translate-x-[55%] top-full w-[820px] bg-white rounded-2xl shadow-[0_30px_80px_-15px_rgba(10,35,66,0.18)] border border-gray-100 overflow-hidden z-[100] flex"
            style={{ minHeight: 400 }}
          >
            {/* Left sidebar — category tabs */}
            <div className="w-[34%] border-r border-gray-100 py-3 flex flex-col bg-gray-50/60 shrink-0">
              {servicesData.map((cat, idx) => (
                <button
                  key={cat.id}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`w-full text-left px-5 py-3 flex items-center justify-between transition-colors duration-150 border-l-[3px] text-[13px] ${
                    activeTab === idx
                      ? "border-[var(--color-orange)] bg-white text-[var(--color-navy)] font-bold"
                      : "border-transparent text-gray-500 hover:bg-white/70 hover:text-[var(--color-navy)] font-medium"
                  }`}
                >
                  <span>{cat.category}</span>
                  {activeTab === idx && (
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-orange)]" />
                  )}
                </button>
              ))}
            </div>

            {/* Right grid — service items */}
            <div className="flex-1 p-6 flex flex-col">
              <div className="grid grid-cols-2 gap-1 flex-1">
                {servicesData[activeTab].items.map((item) => (
                  <Link
                    key={item.id}
                    href="#services"
                    onClick={() => setIsOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-orange-100 hover:bg-orange-50/50 transition-all duration-150 group"
                  >
                    <div className="mt-0.5 w-9 h-9 rounded-lg bg-[var(--color-navy)]/5 flex items-center justify-center group-hover:bg-[var(--color-orange)]/10 transition-colors shrink-0">
                      <item.icon
                        className="w-4 h-4 text-[var(--color-navy)] group-hover:text-[var(--color-orange)] transition-colors"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-orange)] transition-colors leading-tight">
                        {item.name}
                      </p>
                      <p className="text-[12px] text-gray-400 mt-0.5 leading-snug line-clamp-1">
                        {item.shortDesc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* CTA row */}
              <div className="flex justify-end mt-5 pt-5 border-t border-gray-100">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 bg-[var(--color-navy)] hover:bg-[var(--color-orange)] text-white text-[13px] font-semibold px-6 py-2.5 rounded-xl transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  View all services
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
