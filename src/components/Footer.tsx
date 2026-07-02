"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-gray-300 relative overflow-hidden border-t border-white/10">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-orange)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-lg p-1">
                {/* Fallback styling */}
                <div className="absolute inset-0 bg-transparent flex items-center justify-center text-2xl font-bold text-[var(--color-navy)]">
                  D
                </div>
                {/* Logo Image Placeholder */}
                <img
                  src="/logo.png"
                  alt="D Anmol Tech Logo"
                  className="w-full h-full object-contain relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-wide">
                D
                <span className="text-[var(--color-orange)] mx-1">-</span>
                ANMOL
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Empowering global enterprises with cutting-edge software architectures, AI integrations, and scalable digital solutions.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-orange)] hover:text-white transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Services</h4>
            <ul className="space-y-4">
              {["AI Development", "Web Development", "Mobile Applications", "Cloud Solutions", "IT Consulting"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-sm hover:text-[var(--color-orange)] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-orange)]" />
                    <span className="transform group-hover:translate-x-1 transition-transform">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Portfolio", "Careers", "News & Insights", "Contact Us"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-sm hover:text-[var(--color-orange)] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-orange)]" />
                    <span className="transform group-hover:translate-x-1 transition-transform">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Promo */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest tech insights and enterprise trends.
            </p>
            <form className="relative mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-orange)] transition-colors"
              />
              <button
                type="button"
                className="absolute right-1 top-1 bottom-1 bg-[var(--color-orange)] hover:bg-orange-600 text-white px-4 rounded-md text-sm font-semibold transition-colors flex items-center justify-center"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} D Anmol Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
