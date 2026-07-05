"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, Target, Lightbulb, ShieldCheck, 
  Zap, Users, Code, LineChart, Globe, 
  Cpu, Rocket, ArrowRight 
} from "lucide-react";

// Counter Component for Animated Numbers
const AnimatedCounter = ({ 
  value, 
  suffix = "", 
  duration = 2,
  className = ""
}: { 
  value: number, 
  suffix?: string, 
  duration?: number,
  className?: string
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / (duration * 60); 
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
};

export default function About() {
  const timeline = [
    { year: "2018", title: "Inception", desc: "Started as a boutique web development agency." },
    { year: "2020", title: "Global Expansion", desc: "Expanded operations to serve enterprise clients worldwide." },
    { year: "2023", title: "AI Integration", desc: "Pioneered AI-driven software architectures for modern businesses." },
    { year: "Present", title: "Industry Leaders", desc: "Recognized as a premier technology consulting partner." },
  ];

  const values = [
    { icon: Target, title: "Our Mission", desc: "To engineer scalable, AI-driven digital ecosystems that empower global enterprises to thrive in an ever-evolving landscape." },
    { icon: Lightbulb, title: "Our Vision", desc: "To be the world's premier technology consulting partner, delivering uncompromising quality and innovative software architectures." },
    { icon: Zap, title: "Core Values", desc: "Innovation-first thinking, relentless client-centricity, and a commitment to building robust, future-proof technologies." },
  ];

  const whyChooseUs = [
    { icon: ShieldCheck, title: "Enterprise Grade Security", desc: "ISO 27001 certified protocols." },
    { icon: Rocket, title: "Agile Methodology", desc: "Rapid deployment cycles." },
    { icon: Globe, title: "Global Delivery", desc: "24/7 distributed engineering." },
    { icon: Cpu, title: "Modern Tech Stack", desc: "Future-proof architectures." },
  ];

  return (
    <section id="about" className="relative py-24 bg-[var(--color-light-gray)] overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-white -skew-x-12 translate-x-32 z-0"></div>
      <div className="absolute left-[-10%] top-[20%] w-[800px] h-[800px] bg-[var(--color-navy)]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute right-[-5%] bottom-[-10%] w-[600px] h-[600px] bg-[var(--color-orange)]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 space-y-32">
        
        {/* --- SECTION 1: Intro & Visual Split --- */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-orange)]/20 to-transparent text-[var(--color-navy)] font-black text-sm md:text-base uppercase tracking-widest mb-6 border border-[var(--color-orange)]/30 backdrop-blur-sm shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-orange)] animate-pulse shadow-[0_0_8px_rgba(255,107,0,0.8)]"></span>
              The D - Anmol Tech Enterprises Story
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-navy)] mb-8 tracking-tight leading-[1.1]">
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-navy)] via-blue-800 to-[var(--color-orange)]">Digital Future</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              We are a premier enterprise technology consulting firm bridging the gap between complex business challenges and highly scalable software solutions. We don't just write code; we engineer competitive advantages.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 text-[var(--color-navy)] font-bold text-sm bg-white px-5 py-2.5 rounded-xl shadow-sm border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-orange)]" /> ISO 27001 Certified
              </div>
              <div className="flex items-center gap-2 text-[var(--color-navy)] font-bold text-sm bg-white px-5 py-2.5 rounded-xl shadow-sm border border-gray-100">
                <Users className="w-5 h-5 text-[var(--color-orange)]" /> 120+ Top-Tier Engineers
              </div>
            </div>
          </motion.div>

          {/* Right Side: Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="relative lg:h-[600px] w-full flex items-center justify-center order-2 mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/5] lg:aspect-auto lg:h-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(10,35,66,0.3)] border-8 border-white/80 z-10 group">
              <Image 
                src="/about-corporate.png"
                alt="Corporate Technology Office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/80 via-[var(--color-navy)]/20 to-transparent"></div>
            </div>

            {/* Floating Stats Board */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="absolute -bottom-6 left-0 lg:-left-10 glass-dark bg-[var(--color-navy)]/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl z-30 border border-white/10 w-[300px] md:w-[340px]"
            >
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-2xl font-black text-white mb-0.5"><AnimatedCounter value={250} suffix="+" /></p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1"><Code className="w-3 h-3 text-[var(--color-orange)]" /> Projects</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white mb-0.5"><AnimatedCounter value={99} suffix="%" /></p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1"><LineChart className="w-3 h-3 text-[var(--color-orange)]" /> Success Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white mb-0.5"><AnimatedCounter value={50} suffix="+" /></p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1"><Cpu className="w-3 h-3 text-[var(--color-orange)]" /> Technologies</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white mb-0.5">24/7</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1"><Globe className="w-3 h-3 text-[var(--color-orange)]" /> Support</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>


        {/* --- SECTION 2: Mission, Vision, Values --- */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)] tracking-tight">Our Guiding Principles</h3>
            <div className="w-16 h-1.5 bg-[var(--color-orange)] mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="bg-white rounded-3xl p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_-15px_rgba(255,107,0,0.15)] hover:border-[var(--color-orange)]/30 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-orange)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-orange)]/10 transition-colors"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-light-gray)] flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-[var(--color-orange)] transition-colors duration-300 relative z-10">
                  <item.icon className="w-8 h-8 text-[var(--color-navy)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-2xl font-bold text-[var(--color-navy)] mb-4 relative z-10">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed relative z-10 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>


        {/* --- SECTION 3: Why Choose Us (Dark Highlight Area) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-[var(--color-navy)] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden text-white shadow-2xl"
        >
          {/* Abstract Dark Background Elements */}
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--color-orange)]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid lg:grid-cols-5 gap-12 items-center relative z-10">
            <div className="lg:col-span-2">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Why Fortune 500s <br/><span className="text-[var(--color-orange)]">Choose Us</span></h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We combine deep industry expertise with state-of-the-art technological capabilities. Our agile delivery model ensures that we don't just meet expectations—we redefine them.
              </p>
              <Link href="#contact" className="inline-flex w-fit bg-[var(--color-orange)] text-white px-8 py-4 rounded-xl font-bold items-center gap-3 hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 group">
                Consult With Experts
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
              {whyChooseUs.map((feature, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <feature.icon className="w-8 h-8 text-[var(--color-orange)] mb-4" />
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>


        {/* --- SECTION 4: Company Journey Timeline --- */}
        <div className="max-w-5xl mx-auto pb-12 px-4 relative">
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)] tracking-tight">Our Journey</h3>
            <p className="text-gray-600 mt-4 font-medium">The milestones that define our legacy of innovation.</p>
          </div>

          {/* Central Line */}
          <div className="absolute left-[34px] md:left-1/2 top-[120px] bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-orange)]/50 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12 relative z-10">
            {timeline.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Center Dot */}
                <div className="absolute left-[34px] md:left-1/2 w-5 h-5 rounded-full bg-[var(--color-orange)] border-[5px] border-white shadow-md md:-translate-x-1/2 -translate-x-1/2 mt-1 md:mt-0 z-20"></div>
                
                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content Box */}
                <div className={`pl-16 md:pl-0 md:w-1/2 w-full ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <span className="text-[var(--color-orange)] font-black text-2xl block mb-2">{step.year}</span>
                  <h4 className="text-2xl font-bold text-[var(--color-navy)] mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[var(--color-orange)]/30 transition-all">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
