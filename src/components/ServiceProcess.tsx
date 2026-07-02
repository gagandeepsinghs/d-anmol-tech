"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Globe, Smartphone, TrendingUp, BrainCircuit, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Web Development",
    icon: Globe,
    description: "Enterprise-grade web architectures designed for performance and scale.",
    features: [
      "Custom Websites",
      "E-Commerce Solutions",
      "Responsive Design",
      "SEO-Friendly Development"
    ]
  },
  {
    num: "02",
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile experiences that engage users.",
    features: [
      "Android Apps",
      "iOS Apps",
      "Cross-Platform Solutions",
      "App Maintenance & Support"
    ]
  },
  {
    num: "03",
    title: "Digital Marketing",
    icon: TrendingUp,
    description: "Data-driven campaigns that maximize ROI and brand visibility.",
    features: [
      "SEO Optimization",
      "Google Ads",
      "Social Media Marketing",
      "Lead Generation Campaigns"
    ]
  },
  {
    num: "04",
    title: "AI & Custom Software",
    icon: BrainCircuit,
    description: "Intelligent automation and bespoke software for complex business needs.",
    features: [
      "AI Automation",
      "Chatbot Development",
      "SaaS Platforms",
      "Custom Business Software"
    ]
  }
];

export default function ServiceProcess() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="our-services" className="py-24 bg-[var(--color-light-gray)] overflow-hidden relative">
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[var(--color-navy)]/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[var(--color-orange)]/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 text-[var(--color-orange)] font-bold text-xs uppercase tracking-widest mb-6 border border-[var(--color-orange)]/20"
          >
            Core Offerings
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight"
          >
            Our Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange)] to-orange-400">Process</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 font-medium leading-relaxed"
          >
            Comprehensive technology solutions engineered to accelerate your digital growth from concept to deployment.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group glass bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(10,35,66,0.15)] hover:border-[var(--color-orange)]/40 transition-all duration-500 relative flex flex-col h-full overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-orange)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-navy)]/5 text-[var(--color-navy)] flex items-center justify-center group-hover:bg-[var(--color-orange)] group-hover:text-white transition-colors duration-500 shadow-inner">
                  <service.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <span className="text-5xl font-black text-gray-100 group-hover:text-[var(--color-orange)]/10 transition-colors duration-500 select-none">
                  {service.num}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-3 group-hover:text-[var(--color-orange)] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Static Features Area */}
              <div className="mt-auto pt-5 border-t border-gray-100">
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-navy)] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-orange)] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center"
        >
          <Link
            href="#services"
            className="bg-[var(--color-navy)] text-white px-10 py-4 rounded font-bold text-lg hover:bg-[var(--color-orange)] transition-all duration-300 shadow-xl shadow-navy/20 flex items-center gap-3 group"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
