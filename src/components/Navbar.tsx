"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import ServicesMegaMenu from "@/components/ServicesMegaMenu";
import BookingModal from "@/components/BookingModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Case Studies", href: "/portfolio" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    // Passive listener for performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full"
      >
        <div 
          className={`mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled 
              ? "max-w-7xl w-[95%] bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 rounded-full px-4 py-2 mt-4" 
              : "container px-6 md:px-12 bg-transparent py-5"
          }`}
        >
          {/* Logo (Left) */}
          <div className="flex-1 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-2.5 z-50 shrink-0 group"
              aria-label="D - Anmol Tech Enterprises — Home"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0">
                <span className="absolute inset-0 flex items-center justify-center text-lg md:text-xl font-bold text-[var(--color-navy)] group-hover:scale-105 transition-transform" aria-hidden="true">
                  D
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt=""
                  className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <span className="text-lg md:text-xl font-extrabold text-[var(--color-navy)] tracking-tight whitespace-nowrap">
                D<span className="text-[var(--color-orange)] mx-1">-</span>ANMOL TECH
              </span>
            </Link>
          </div>

          {/* Desktop Nav (Center) */}
          <div className="hidden lg:flex items-center justify-center gap-1 flex-1">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <ServicesMegaMenu key={link.name} />
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative whitespace-nowrap px-4 py-2 text-[14px] font-semibold tracking-wide rounded-full transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-[var(--color-navy)] bg-gray-100/80"
                      : "text-gray-600 hover:text-[var(--color-navy)] hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* CTA (Right) */}
          <div className="hidden lg:flex flex-1 items-center justify-end">
            <button
              onClick={() => setBookingModalOpen(true)}
              className="whitespace-nowrap bg-[var(--color-navy)] text-white px-6 py-2.5 rounded-full text-[14px] font-semibold hover:bg-[var(--color-orange)] hover:shadow-lg hover:shadow-[var(--color-orange)]/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
            >
              Get a Proposal
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[var(--color-navy)] z-50 p-2 rounded-lg hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-orange)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu — Floating dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md shadow-xl border border-gray-100 z-40 mt-2 rounded-2xl mx-4 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-3 px-4 text-[15px] font-bold rounded-xl transition-colors ${
                    isActive(link.href)
                      ? "text-[var(--color-orange)] bg-orange-50/50"
                      : "text-[var(--color-navy)] hover:text-[var(--color-orange)] hover:bg-gray-50"
                  }`}
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
                className="mt-2 w-full bg-[var(--color-orange)] text-white text-center px-6 py-3.5 rounded-xl font-bold shadow-md shadow-[var(--color-orange)]/20 active:scale-95 transition-transform"
              >
                Get a Proposal
              </button>
            </div>
          </div>
        )}
      </nav>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
