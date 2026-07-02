"use client";

import { motion, Variants } from "framer-motion";
import { Monitor, ShoppingBag, GraduationCap, Code2, Bot, Smartphone, LineChart, ArrowRight } from "lucide-react";
import Link from "next/link";

const productsData = [
  {
    id: "web-dev",
    title: "Custom Website Development",
    description: "Corporate websites, portfolio websites, business websites.",
    icon: Monitor,
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Development",
    description: "Shopify, WooCommerce, and custom online stores.",
    icon: ShoppingBag,
    color: "from-[var(--color-orange)] to-orange-400"
  },
  {
    id: "lms",
    title: "LMS & Educational Platforms",
    description: "School management systems, online learning platforms, course portals.",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-400"
  },
  {
    id: "software",
    title: "Custom Software Development",
    description: "CRM, ERP, inventory management, and business applications.",
    icon: Code2,
    color: "from-purple-500 to-indigo-400"
  },
  {
    id: "ai-automation",
    title: "AI Automation Solutions",
    description: "AI chatbots, workflow automation, business automation assistants.",
    icon: Bot,
    color: "from-rose-500 to-pink-400"
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description: "Android, iOS, and cross-platform applications.",
    icon: Smartphone,
    color: "from-[var(--color-navy)] to-blue-700"
  },
  {
    id: "seo-marketing",
    title: "SEO & Digital Marketing",
    description: "SEO optimization, lead generation, and digital growth solutions.",
    icon: LineChart,
    color: "from-amber-500 to-yellow-400"
  },
];

export default function Products() {
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
    <section id="products" className="py-24 bg-[var(--color-light-gray)] relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-orange)]/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-navy)]/5 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/2 z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-navy)]/5 text-[var(--color-navy)] font-bold text-xs uppercase tracking-widest mb-6 border border-[var(--color-navy)]/10"
          >
            Digital Ecosystem
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight"
          >
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange)] to-orange-400">Products</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 font-medium leading-relaxed"
          >
            We engineer comprehensive digital platforms tailored to your business needs, driving innovation, efficiency, and exponential growth.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {productsData.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(255,107,0,0.15)] transition-all duration-300 relative overflow-hidden flex flex-col h-full ${index === 6 ? 'md:col-span-2 lg:col-span-3 xl:col-span-1' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${product.color} text-white shadow-md relative z-10 transform group-hover:scale-110 transition-transform duration-300`}>
                <product.icon className="w-7 h-7" strokeWidth={2} />
              </div>
              
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3 relative z-10 leading-tight">
                {product.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10 flex-grow mb-8 text-[15px]">
                {product.description}
              </p>
              
              <div className="mt-auto relative z-10">
                <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-[var(--color-navy)] group-hover:text-[var(--color-orange)] transition-colors">
                  Explore Solution
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
