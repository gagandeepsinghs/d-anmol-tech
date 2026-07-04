"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Cpu, Globe, Smartphone } from "lucide-react";
import BookingModal from "@/components/BookingModal";

export default function Hero() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    "/hero-tech-banner.png",
    "/hero-tech-2.png",
    "/hero-tech-3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const HeroImageNode = (
    <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] max-w-xl mx-auto group">
      {/* Image Banner */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full h-full rounded-[24px] overflow-hidden shadow-2xl shadow-[var(--color-navy)]/20 border-4 border-white/50 z-10"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImage]}
              alt="Enterprise Digital Solutions"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={currentImage === 0}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Decorative elements behind image */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-orange) 0%, transparent 70%)' }}></div>
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-navy) 0%, transparent 70%)' }}></div>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-light-gray)] pt-32 md:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-orange) 0%, transparent 70%)' }}></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-navy) 0%, transparent 70%)' }}></div>
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-40 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)' }}></div>
        
        {/* Subtle Logo Watermark */}
        <div className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none z-0">
          <span className="text-[60rem] md:text-[80rem] font-black text-[var(--color-navy)] leading-none tracking-tighter">D</span>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full bg-[var(--color-navy)]/5 text-[var(--color-navy)] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8 border border-[var(--color-navy)]/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--color-orange)] animate-pulse"></span>
              Global Technology Consulting
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-[var(--color-navy)] leading-[1.1] mb-6 tracking-tight">
              Empowering the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-navy)] via-blue-800 to-[var(--color-orange)]">Next Generation</span> <br className="hidden md:block" />
              of Global Business.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-medium">
              We engineer enterprise-grade digital solutions. From AI-driven automation to scalable cloud architectures, D Anmol Tech transforms complexity into your competitive advantage.
            </motion.p>
            
            {/* Mobile/Tablet Image Node */}
            <motion.div variants={itemVariants} className="block lg:hidden mb-10 w-full relative">
              {HeroImageNode}
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="bg-[var(--color-navy)] text-white px-8 py-4 rounded font-semibold text-center hover:bg-[var(--color-orange)] transition-colors shadow-xl shadow-navy/20 flex items-center justify-center gap-2 group"
              >
                Schedule Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="#services"
                className="bg-white text-[var(--color-navy)] border border-gray-200 px-8 py-4 rounded font-semibold text-center hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Quick Stats/Trust */}
            <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-gray-200 flex gap-8 items-center text-sm font-medium text-gray-500">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[var(--color-navy)]">50+</span>
                <span>Enterprise Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[var(--color-navy)]">99%</span>
                <span>Success Rate</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[var(--color-navy)]">24/7</span>
                <span>Support & Monitoring</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual/Interactive Element (Desktop Only) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative hidden lg:flex items-center justify-center lg:h-[600px] w-full"
          >
            {HeroImageNode}
          </motion.div>

        </div>
      </div>

      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)} 
      />
    </section>
  );
}
