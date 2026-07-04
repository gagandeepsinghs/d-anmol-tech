"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  {
    id: "sani-matrimonial",
    title: "Sani Matrimonial Platform",
    category: "Matrimonial Website",
    overview: "Developed a modern matrimonial platform with user registration, profile management, advanced search, and secure communication features.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL"],
    results: [
      "Improved user experience",
      "Secure user management",
      "Responsive design across all devices"
    ],
    gradient: "from-blue-600 to-indigo-900",
    shadow: "shadow-blue-500/20"
  },
  {
    id: "lms-system",
    title: "LMS School Management System",
    category: "Education Platform",
    overview: "Built a complete Learning Management System for schools with student management, online classes, assignments, attendance, and course management.",
    technologies: ["Next.js", "Python", "PostgreSQL"],
    results: [
      "Streamlined academic operations",
      "Centralized student management",
      "Enhanced online learning experience"
    ],
    gradient: "from-[var(--color-orange)] to-red-600",
    shadow: "shadow-orange-500/20"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    category: "Online Store",
    overview: "Developed a scalable e-commerce platform with product catalog, shopping cart, payment integration, and order management.",
    technologies: ["Shopify", "Next.js"],
    results: [
      "Improved online sales",
      "Mobile-friendly shopping experience",
      "Secure checkout process"
    ],
    gradient: "from-teal-500 to-emerald-700",
    shadow: "shadow-teal-500/20"
  },
  {
    id: "iap-tech",
    title: "IAP Tech Courses Platform",
    category: "Educational Website",
    overview: "Designed and developed a professional course platform for technical training programs, student enrollment, and content delivery.",
    technologies: ["Next.js", "Tailwind CSS"],
    results: [
      "Increased course enrollments",
      "Better user engagement",
      "Professional digital presence"
    ],
    gradient: "from-purple-600 to-fuchsia-800",
    shadow: "shadow-purple-500/20"
  },
  {
    id: "ai-assistant",
    title: "AI Business Automation Assistant",
    category: "AI Solution",
    overview: "Developed an AI-powered automation platform that automates customer support, lead qualification, document analysis, and business workflows.",
    technologies: ["FastAPI", "LangChain", "Gemini API", "FAISS", "PostgreSQL", "Next.js"],
    results: [
      "Reduced manual work by 70%",
      "Faster customer response time",
      "Improved business productivity"
    ],
    gradient: "from-[var(--color-navy)] to-blue-900",
    shadow: "shadow-blue-900/20"
  },
  {
    id: "fashion-ecommerce",
    title: "Fashion E-Commerce Website",
    category: "Fashion & Apparel E-Commerce",
    overview: "Designed and developed a modern fashion e-commerce website for a clothing brand with an attractive user interface, product catalog, shopping cart, secure checkout, and responsive design.",
    features: [
      "Product catalog and categories",
      "Advanced product filtering",
      "Shopping cart and wishlist",
      "Secure payment integration",
      "Order management",
      "Mobile-responsive design"
    ],
    technologies: ["Shopify", "WooCommerce", "Next.js"],
    results: [
      "Enhanced online brand presence",
      "Improved customer shopping experience",
      "Increased online sales and customer engagement",
      "Optimized website performance and mobile usability"
    ],
    gradient: "from-pink-500 to-rose-700",
    shadow: "shadow-pink-500/20"
  },
  {
    id: "baniya-vastra",
    title: "Baniya Vastra E-Commerce",
    category: "Premium E-Commerce",
    overview: "Built a luxury, high-fidelity ethnic wear e-commerce platform with dynamic mega-menus, a conversion-focused product detail experience, and seamless aesthetic branding.",
    features: [
      "Premium, responsive UI design",
      "Interactive mega-menu navigation",
      "High-fidelity product details with zoom",
      "Dynamic product variation support",
      "Secure payment processing integration",
      "Optimized technical descriptions"
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    results: [
      "Elevated premium brand positioning",
      "Improved mobile and desktop shopping experience",
      "Increased user engagement and time on site"
    ],
    gradient: "from-[var(--color-navy)] to-amber-900",
    shadow: "shadow-amber-900/20"
  },
  {
    id: "desi-rasoi",
    title: "Desi Rasoi Food Platform",
    category: "Restaurant & Delivery",
    overview: "Designed and developed a premium restaurant and food delivery platform featuring a dynamic menu, responsive categories, and an authentic UI that brings the taste of home to the digital experience.",
    features: [
      "Dynamic digital menu with categories",
      "Cart and checkout system",
      "Authentic, appetizing UI/UX design",
      "Special offers & featured items section",
      "Mobile-responsive food ordering"
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    results: [
      "Increased online food orders",
      "Enhanced digital restaurant presence",
      "Streamlined customer browsing experience"
    ],
    gradient: "from-orange-600 to-red-800",
    shadow: "shadow-orange-600/20"
  }
];

export default function CaseStudies() {
  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3 z-0 opacity-10" style={{ background: 'radial-gradient(circle, var(--color-orange) 0%, transparent 70%)' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-orange)]/10 text-[var(--color-orange)] font-bold text-xs uppercase tracking-widest mb-6"
            >
              Proven Track Record
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] tracking-tight"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange)] to-orange-400">Case Studies</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="hidden md:inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-navy)] text-white font-bold rounded-lg hover:bg-[var(--color-orange)] transition-colors shadow-lg shadow-navy/20">
              Start Your Project <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col lg:flex-row"
            >
              {/* Visual Left Side */}
              <div className={`lg:w-2/5 relative overflow-hidden bg-gradient-to-br ${study.gradient}`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-0"></div>
                {/* Abstract Pattern */}
                <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                
                {/* Project Image */}
                <div className="absolute left-6 md:left-8 right-6 md:right-8 top-24 bottom-0 rounded-t-2xl overflow-hidden shadow-2xl border-t border-l border-r border-white/20 transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500 z-10">
                  <Image 
                    src={`/images/projects/${study.id}.png`}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-left-top"
                  />
                </div>

                <div className="h-full flex flex-col justify-between p-6 md:p-8 relative z-20 min-h-[400px]">
                  <div className="inline-flex px-4 py-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10 text-white text-sm font-bold uppercase tracking-wider w-fit shadow-lg">
                    {study.category}
                  </div>
                  
                  <div className="mt-auto bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-white font-semibold mb-3 uppercase tracking-widest text-xs">
                      <Code2 className="w-4 h-4" /> Technologies Used
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-lg border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Right Side */}
              <div className="lg:w-3/5 p-10 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-extrabold text-[var(--color-navy)] mb-6 leading-tight group-hover:text-[var(--color-orange)] transition-colors">
                  {study.title}
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-[var(--color-navy)] font-bold text-sm uppercase tracking-wider mb-3">Project Overview</h4>
                  <p className="text-gray-600 text-[16px] leading-relaxed">
                    {study.overview}
                  </p>
                </div>
                
                {study.features && (
                  <div className="mb-8">
                    <h4 className="text-[var(--color-navy)] font-bold text-sm uppercase tracking-wider mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.features.map((feature, i) => (
                        <span key={i} className="px-3 py-1 bg-[var(--color-navy)]/5 text-[var(--color-navy)] text-xs font-semibold rounded-md border border-[var(--color-navy)]/10">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mb-10">
                  <h4 className="text-[var(--color-navy)] font-bold text-sm uppercase tracking-wider mb-4">Key Results & Impact</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[var(--color-orange)] shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-navy)] font-bold text-sm uppercase tracking-wider group-hover:text-[var(--color-orange)] transition-colors">
                    Request Similar Solution <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile CTA */}
        <div className="mt-16 text-center md:hidden">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-navy)] text-white font-bold rounded-lg hover:bg-[var(--color-orange)] transition-colors w-full shadow-lg">
              Start Your Project <ArrowUpRight className="w-5 h-5" />
            </Link>
        </div>

      </div>
    </section>
  );
}
