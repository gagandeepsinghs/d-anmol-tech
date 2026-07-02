"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { servicesData, ServiceCategory, ServiceItem } from "@/data/servicesData";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(servicesData[0]);
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);
  
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (cat: ServiceCategory) => {
    setActiveCategory(cat);
    setActiveService(null);
  };

  const handleServiceClick = (service: ServiceItem) => {
    if (activeService?.id === service.id) {
      setActiveService(null); // toggle off
    } else {
      setActiveService(service);
      setOpenFaqIndex(0); // reset FAQ
      
      // Delay scrolling slightly to allow height animation to render
      setTimeout(() => {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = detailsRef.current?.getBoundingClientRect().top ?? 0;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 150);
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[var(--color-light-gray)] overflow-hidden min-h-screen">
      {/* Background Decorators for Glassmorphism */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[var(--color-orange)]/10 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[var(--color-navy)]/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 text-[var(--color-orange)] font-bold text-xs uppercase tracking-widest mb-6"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight"
          >
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange)] to-orange-400">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 font-medium"
          >
            Comprehensive technology consulting and engineering services designed to scale your operations and accelerate digital transformation.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Sidebar (Categories) */}
          <div className="lg:w-[30%] flex flex-col gap-3 shrink-0">
            {servicesData.map((cat) => (
               <button 
                  key={cat.id} 
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-left px-6 py-5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex justify-between items-center border ${
                    activeCategory.id === cat.id 
                      ? "bg-[var(--color-navy)] text-white shadow-[0_10px_30px_-10px_rgba(10,35,66,0.5)] border-transparent scale-[1.02]" 
                      : "bg-white text-gray-600 hover:bg-gray-50 border-gray-100 hover:border-[var(--color-orange)]/50"
                  }`}
               >
                 {cat.category}
                 <ChevronRight className={`w-4 h-4 transition-transform ${activeCategory.id === cat.id ? "text-[var(--color-orange)] translate-x-1" : "text-gray-400"}`} />
               </button>
            ))}
          </div>

          {/* Right Area (Service Cards & Details) */}
          <div className="lg:w-[70%]">
             {/* Dynamic Service Grid */}
             <motion.div 
               key={activeCategory.id}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.4 }}
               className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
             >
               {activeCategory.items.map((service) => {
                  const isActive = activeService?.id === service.id;
                  return (
                    <motion.div 
                      key={service.id} 
                      whileHover={{ y: -5 }}
                      onClick={() => handleServiceClick(service)}
                      className={`glass group rounded-2xl p-6 transition-all duration-300 cursor-pointer border relative flex flex-col h-full shadow-sm hover:shadow-xl ${
                        isActive 
                          ? "border-[var(--color-orange)] bg-white/90 shadow-md ring-4 ring-[var(--color-orange)]/10" 
                          : "border-white/40 bg-white/40 hover:border-[var(--color-orange)]/30"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${isActive ? "bg-[var(--color-orange)] text-white shadow-lg shadow-orange-500/30" : "bg-[var(--color-navy)]/5 text-[var(--color-navy)] group-hover:bg-[var(--color-orange)]/10 group-hover:text-[var(--color-orange)]"}`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-lg font-extrabold text-[var(--color-navy)] mb-2">{service.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{service.shortDesc}</p>
                      
                      <div className={`mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${isActive ? "text-[var(--color-orange)]" : "text-gray-400 group-hover:text-[var(--color-orange)]"}`}>
                        {isActive ? "Close Details" : "View Details"}
                        <ArrowRight className={`w-3.5 h-3.5 transform transition-transform ${isActive ? "rotate-90" : "group-hover:translate-x-1"}`} />
                      </div>
                    </motion.div>
                  )
               })}
             </motion.div>

             {/* Detailed Service Section Below Cards */}
             <AnimatePresence>
               {activeService && (
                 <motion.div
                   initial={{ opacity: 0, height: 0, marginTop: 0 }}
                   animate={{ opacity: 1, height: "auto", marginTop: 40 }}
                   exit={{ opacity: 0, height: 0, marginTop: 0 }}
                   transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
                   className="overflow-hidden"
                 >
                    <div ref={detailsRef} className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 scroll-mt-24">
                      
                      {/* Detail Header */}
                      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                        <div className="w-20 h-20 rounded-2xl bg-[var(--color-orange)]/10 flex items-center justify-center text-[var(--color-orange)] shrink-0 shadow-inner">
                          <activeService.icon className="w-10 h-10" />
                        </div>
                        <div>
                          <h3 className="text-3xl md:text-4xl font-black text-[var(--color-navy)] tracking-tight">{activeService.name}</h3>
                          <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--color-orange)] to-orange-300 mt-4 rounded-full"></div>
                        </div>
                      </div>

                      {/* Overview */}
                      <p className="text-gray-600 text-lg leading-relaxed mb-12 font-medium">{activeService.detail.overview}</p>

                      {/* Features & Benefits */}
                      <div className="grid md:grid-cols-2 gap-12 mb-12 bg-gray-50/50 p-8 rounded-2xl border border-gray-100/50">
                        <div>
                          <h4 className="text-xl font-bold text-[var(--color-navy)] mb-6 flex items-center gap-2">
                            <CheckCircle2 className="text-[var(--color-orange)]" /> Key Features
                          </h4>
                          <ul className="space-y-4">
                            {activeService.detail.features.map((f, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-navy)] mt-2 flex-shrink-0 shadow-sm"></span>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-[var(--color-navy)] mb-6 flex items-center gap-2">
                            <CheckCircle2 className="text-[var(--color-orange)]" /> Business Benefits
                          </h4>
                          <ul className="space-y-4">
                            {activeService.detail.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-orange)] mt-2 flex-shrink-0 shadow-sm"></span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Process */}
                      <div className="mb-12">
                        <h4 className="text-2xl font-bold text-[var(--color-navy)] mb-8">Our Proven Process</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                          {activeService.detail.process.map((p, i) => (
                            <div key={i} className="bg-[var(--color-light-gray)] p-6 rounded-2xl border border-gray-200/60 relative z-10 hover:shadow-lg transition-shadow group">
                               <div className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--color-navy)] text-white rounded-full flex items-center justify-center font-bold text-lg border-4 border-white z-20 shadow-md group-hover:bg-[var(--color-orange)] transition-colors">
                                 {p.step}
                               </div>
                               <h5 className="font-bold text-[var(--color-navy)] mb-3 mt-3">{p.title}</h5>
                               <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-12 p-8 bg-[var(--color-navy)]/5 rounded-2xl border border-[var(--color-navy)]/10">
                        <h4 className="text-xl font-bold text-[var(--color-navy)] mb-6">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-3">
                          {activeService.detail.technologies.map((t, i) => (
                            <span key={i} className="px-5 py-2.5 bg-white text-[var(--color-navy)] font-bold rounded-xl text-sm border border-gray-200 shadow-sm hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] transition-colors cursor-default">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* FAQs */}
                      <div className="mb-12">
                        <h4 className="text-2xl font-bold text-[var(--color-navy)] mb-8">Frequently Asked Questions</h4>
                        <div className="space-y-4">
                          {activeService.detail.faqs.map((faq, i) => (
                            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                              <button 
                                onClick={() => setOpenFaqIndex(openFaqIndex === i ? -1 : i)} 
                                className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none"
                              >
                                <span className="font-bold text-[var(--color-navy)] text-left pr-4">{faq.q}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === i ? "bg-[var(--color-orange)] text-white rotate-180" : "text-gray-500"}`}>
                                  <ChevronDown className="w-5 h-5" />
                                </div>
                              </button>
                              <AnimatePresence>
                                {openFaqIndex === i && (
                                  <motion.div 
                                    initial={{ height: 0, opacity: 0 }} 
                                    animate={{ height: "auto", opacity: 1 }} 
                                    exit={{ height: 0, opacity: 0 }} 
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-6 pb-6 pt-2 text-gray-600 text-[15px] leading-relaxed border-t border-transparent">
                                      {faq.a}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex justify-center mt-12 pt-8 border-t border-gray-100">
                        <Link 
                          href="#contact" 
                          className="bg-gradient-to-r from-[var(--color-orange)] to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/30 flex items-center gap-3 group transition-all hover:-translate-y-1"
                        >
                          Request a Quote for {activeService.name}
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                    </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
