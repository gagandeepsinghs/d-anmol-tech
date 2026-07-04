"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "@/components/SocialIcons";
import { STAGGER_CONTAINER, STAGGER_CHILD } from "@/lib/design";

const servicesLinks = [
  { label: "AI Development", href: "#services" },
  { label: "Web Development", href: "#services" },
  { label: "Mobile Applications", href: "#services" },
  { label: "Cloud Solutions", href: "#services" },
  { label: "IT Consulting", href: "#services" },
];

const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Our Portfolio", href: "/portfolio" },
  { label: "Careers", href: "#contact" },
  { label: "News & Insights", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

const socialIcons = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter / X" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Instagram, label: "Instagram" },
];

function FooterLinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="group text-sm text-gray-400 hover:text-[var(--color-orange)] transition-colors flex items-center gap-2"
          >
            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-orange)]" />
            <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--color-navy)] text-gray-300 relative overflow-hidden border-t border-white/10"
      aria-label="Site footer"
    >
      {/* Ambient decorator */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-orange)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 pt-20 pb-10 relative z-10">
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
        >
          {/* Company Info */}
          <motion.div variants={STAGGER_CHILD} className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6"
              aria-label="D Anmol Tech — Home"
            >
              <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-lg p-1 shrink-0">
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[var(--color-navy)]" aria-hidden="true">
                  D
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt=""
                  className="w-full h-full object-contain relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-wide">
                D<span className="text-[var(--color-orange)] mx-1">-</span>ANMOL
              </span>
            </Link>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-xs">
              Empowering global enterprises with cutting-edge software architectures,
              AI integrations, and scalable digital solutions.
            </p>

            <div className="flex gap-3" aria-label="Social media links">
              {socialIcons.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-orange)] transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={STAGGER_CHILD}>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">
              Services
            </h4>
            <FooterLinkList items={servicesLinks} />
          </motion.div>

          {/* Company */}
          <motion.div variants={STAGGER_CHILD}>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">
              Company
            </h4>
            <FooterLinkList items={companyLinks} />
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={STAGGER_CHILD}>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Subscribe for the latest tech insights and enterprise trends.
            </p>
            <form
              className="relative mt-4"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter subscription"
            >
              <input
                type="email"
                required
                aria-label="Email address for newsletter"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-28 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-orange)] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-[var(--color-orange)] hover:bg-orange-600 text-white px-4 rounded-md text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} D Anmol Tech. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
