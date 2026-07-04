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
  { name: "Services", href: "/#services" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm shadow-[var(--color-navy)]/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 z-50 shrink-0"
            aria-label="D Anmol Tech — Home"
          >
            <div className="relative w-10 h-10 md:w-16 md:h-16 flex items-center justify-center shrink-0">
              <span className="absolute inset-0 flex items-center justify-center text-xl md:text-3xl font-bold text-[var(--color-navy)]" aria-hidden="true">
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
            <span className="text-xl sm:text-2xl md:text-[2rem] font-bold text-[var(--color-navy)] tracking-wide whitespace-nowrap">
              D<span className="text-[var(--color-orange)] mx-1 md:mx-2">-</span>ANMOL TECH
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <ServicesMegaMenu key={link.name} />
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative group text-sm uppercase tracking-wider py-6 font-semibold transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-[var(--color-orange)]"
                      : "text-[var(--color-navy)] hover:text-[var(--color-orange)]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-5 left-0 w-full h-[2px] bg-[var(--color-orange)] origin-left transition-transform duration-300 ${
                      isActive(link.href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              )
            )}

            <button
              onClick={() => setBookingModalOpen(true)}
              className="bg-[var(--color-navy)] text-white px-7 py-3 rounded-xl hover:bg-[var(--color-orange)] hover:-translate-y-0.5 transition-all duration-300 text-sm font-semibold shadow-md shadow-[var(--color-navy)]/20 hover:shadow-[var(--color-orange)]/20"
            >
              Get a Proposal
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[var(--color-navy)] z-50 p-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-orange)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu — full-screen overlay */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md shadow-xl border-t border-gray-100 z-40"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-4 px-2 text-base font-bold transition-colors border-b border-gray-100 last:border-0 ${
                    isActive(link.href)
                      ? "text-[var(--color-orange)]"
                      : "text-[var(--color-navy)] hover:text-[var(--color-orange)]"
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
                className="mt-4 bg-[var(--color-orange)] text-white text-center px-6 py-4 rounded-xl font-bold shadow-lg shadow-orange-500/20 active:scale-95 transition-transform"
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
