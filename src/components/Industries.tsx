"use client";

import { motion, Variants } from "framer-motion";
import { 
  HeartPulse, 
  Landmark, 
  ShoppingCart, 
  GraduationCap, 
  Building2, 
  Factory, 
  Truck, 
  Rocket 
} from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    icon: HeartPulse,
    description: "Custom healthcare websites, HIPAA-compliant mobile apps, and targeted digital marketing campaigns to connect with patients."
  },
  {
    name: "Finance & Fintech",
    icon: Landmark,
    description: "Secure banking web applications, highly scalable trading mobile apps, and trust-building digital marketing strategies."
  },
  {
    name: "E-Commerce",
    icon: ShoppingCart,
    description: "High-conversion online stores, custom shopping apps, and aggressive multi-channel digital marketing to drive sales."
  },
  {
    name: "Education",
    icon: GraduationCap,
    description: "Interactive e-learning websites, student portal mobile apps, and targeted marketing to increase student enrollment."
  },
  {
    name: "Real Estate",
    icon: Building2,
    description: "Premium property listing websites, virtual tour apps, and digital marketing strategies for high-quality lead generation."
  },
  {
    name: "Manufacturing",
    icon: Factory,
    description: "Corporate B2B websites, operational tracking mobile apps, and digital marketing to secure global manufacturing contracts."
  },
  {
    name: "Logistics",
    icon: Truck,
    description: "Real-time fleet tracking web dashboards, driver delivery apps, and digital marketing solutions for supply chain growth."
  },
  {
    name: "SaaS Startups",
    icon: Rocket,
    description: "Scalable SaaS product websites, cross-platform mobile apps, and growth-hacking digital marketing to rapidly acquire users."
  }
];

export default function Industries() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="industries" className="py-20 md:py-24 bg-white overflow-hidden relative">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-navy)]/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-orange)]/5 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-navy)]/5 text-[var(--color-navy)] font-bold text-xs uppercase tracking-widest mb-6 border border-[var(--color-navy)]/10"
          >
            Global Reach
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight"
          >
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange)] to-orange-400">Serve</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 font-medium leading-relaxed"
          >
            We deliver domain-specific solutions, empowering organizations across diverse sectors with premium website development, powerful mobile apps, and data-driven digital marketing strategies.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(255,107,0,0.15)] hover:border-[var(--color-orange)]/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-orange)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[var(--color-light-gray)] text-[var(--color-navy)] group-hover:bg-[var(--color-orange)] group-hover:text-white transition-colors duration-300 shadow-sm relative z-10">
                <industry.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3 relative z-10">
                {industry.name}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10 flex-grow">
                {industry.description}
              </p>
              
              {/* Orange bar decoration that expands on hover */}
              <div className="h-1 w-8 bg-gray-200 rounded-full mt-6 group-hover:w-16 group-hover:bg-[var(--color-orange)] transition-all duration-300 relative z-10"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
