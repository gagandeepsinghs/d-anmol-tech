"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ServicesMegaMenu from "@/components/ServicesMegaMenu";
import BookingModal from "@/components/BookingModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Products", href: "/products" },
    { name: "Case Studies", href: "/portfolio" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 z-50 shrink-0">
          <div className="relative w-10 h-10 md:w-[4.2rem] md:h-[4.2rem] flex items-center justify-center shrink-0">
            {/* Fallback styling for when image isn't yet placed in public/ */}
            <div className="absolute inset-0 bg-transparent flex items-center justify-center text-xl md:text-3xl font-bold text-[var(--color-navy)]">
              D
            </div>
            {/* Logo Image Placeholder */}
            <img 
              src="/logo.png" 
              alt="D Anmol Tech Logo" 
              className="w-full h-full object-contain relative z-10"
              onError={(e) => {
                // hide broken image icon
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <span className="text-xl sm:text-2xl md:text-[2.1rem] font-bold text-[var(--color-navy)] flex items-center tracking-wide whitespace-nowrap">
            D
            <span className="text-[var(--color-orange)] mx-1 md:mx-2">-</span>
            ANMOL TECH
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.name === "Services" ? (
              <ServicesMegaMenu key={link.name} />
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--color-navy)] font-medium hover:text-[var(--color-orange)] transition-colors text-sm uppercase tracking-wider py-6"
              >
                {link.name}
              </Link>
            )
          ))}

          <button
            onClick={() => setBookingModalOpen(true)}
            className="bg-[var(--color-navy)] text-white px-6 py-2.5 rounded hover:bg-[var(--color-orange)] transition-colors text-sm font-semibold shadow-lg shadow-navy/20"
          >
            Get a Proposal
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[var(--color-navy)] z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl p-6 flex flex-col gap-6 md:hidden ${
            mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[var(--color-navy)] text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setBookingModalOpen(true);
            }}
            className="bg-[var(--color-orange)] text-white text-center px-6 py-3 rounded font-semibold mt-4"
          >
            Get a Proposal
          </button>
        </motion.div>

        <BookingModal 
          isOpen={bookingModalOpen} 
          onClose={() => setBookingModalOpen(false)} 
        />
      </div>
    </nav>
  );
}
