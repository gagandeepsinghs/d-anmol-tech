"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ChevronDown, ChevronRight, ArrowRight, X,
  Code, Cloud, Briefcase, Server, RefreshCw,
  Globe, Smartphone, Monitor, ShoppingCart, LayoutDashboard, Layers,
  PenTool, PenLine, Palette, Box, Image as ImageIcon,
  TrendingUp, Search, Share2, MousePointerClick, FileText, Mail,
  Brain, Network, Sparkles, MessageSquare, Blocks, Cpu,
  Users, CloudLightning, ShieldCheck, BarChart, GitMerge, Settings
} from "lucide-react";

const megaMenuData = [
  {
    category: "Software Development",
    items: [
      { name: "Custom Software", description: "Tailored solutions for your business needs", icon: Code, href: "#" },
      { name: "SaaS Development", description: "Scalable cloud-based software products", icon: Cloud, href: "#" },
      { name: "Enterprise Solutions", description: "Complex systems for large organizations", icon: Briefcase, href: "#" },
      { name: "API Integration", description: "Seamless data flow between platforms", icon: Server, href: "#" },
      { name: "System Architecture", description: "Robust and scalable technical foundations", icon: Server, href: "#" },
      { name: "Legacy Modernization", description: "Upgrading outdated systems to modern tech", icon: RefreshCw, href: "#" },
    ]
  },
  {
    category: "Web & App Development",
    items: [
      { name: "Web Development", description: "High-performance, responsive websites", icon: Globe, href: "#" },
      { name: "Mobile App Development", description: "Native and cross-platform mobile apps", icon: Smartphone, href: "#" },
      { name: "PWA Development", description: "App-like experiences on the web", icon: Monitor, href: "#" },
      { name: "E-Commerce Solutions", description: "Robust online stores and marketplaces", icon: ShoppingCart, href: "#" },
      { name: "CMS Development", description: "Custom content management systems", icon: LayoutDashboard, href: "#" },
      { name: "Web Portals", description: "Secure portals for B2B and B2C", icon: Layers, href: "#" },
    ]
  },
  {
    category: "Design",
    items: [
      { name: "UI/UX Design", description: "Intuitive and engaging user interfaces", icon: PenTool, href: "#" },
      { name: "Prototyping", description: "Interactive mockups and wireframes", icon: PenLine, href: "#" },
      { name: "Brand Identity", description: "Cohesive visual branding solutions", icon: Palette, href: "#" },
      { name: "Product Design", description: "End-to-end digital product design", icon: Box, href: "#" },
      { name: "Graphic Design", description: "Stunning visual assets and marketing materials", icon: ImageIcon, href: "#" },
    ]
  },
  {
    category: "Marketing & Advertising",
    items: [
      { name: "Digital Marketing", description: "Data-driven online growth strategies", icon: TrendingUp, href: "#" },
      { name: "SEO Optimization", description: "Improve visibility and search rankings", icon: Search, href: "#" },
      { name: "Social Media Marketing", description: "Engaging campaigns across platforms", icon: Share2, href: "#" },
      { name: "PPC Advertising", description: "Targeted paid search and display ads", icon: MousePointerClick, href: "#" },
      { name: "Content Marketing", description: "Compelling content that drives action", icon: FileText, href: "#" },
      { name: "Email Marketing", description: "Automated and personalized email campaigns", icon: Mail, href: "#" },
    ]
  },
  {
    category: "Latest Tech",
    items: [
      { name: "AI Development", description: "Custom artificial intelligence solutions", icon: Brain, href: "#" },
      { name: "Machine Learning", description: "Predictive models and data analysis", icon: Network, href: "#" },
      { name: "Generative AI", description: "LLMs and content generation tools", icon: Sparkles, href: "#" },
      { name: "Chatbot Development", description: "Intelligent conversational interfaces", icon: MessageSquare, href: "#" },
      { name: "Blockchain Solutions", description: "Secure decentralized applications", icon: Blocks, href: "#" },
      { name: "IoT Development", description: "Connected devices and smart systems", icon: Cpu, href: "#" },
    ]
  },
  {
    category: "Business & IT Services",
    items: [
      { name: "IT Consulting", description: "Strategic technology guidance", icon: Users, href: "#" },
      { name: "Cloud Computing", description: "Migration and cloud infrastructure", icon: CloudLightning, href: "#" },
      { name: "Cybersecurity", description: "Protecting your digital assets", icon: ShieldCheck, href: "#" },
      { name: "Data Analytics", description: "Actionable insights from your data", icon: BarChart, href: "#" },
      { name: "DevOps Services", description: "Streamlined development and deployment", icon: GitMerge, href: "#" },
      { name: "Managed IT Services", description: "24/7 technical support and maintenance", icon: Settings, href: "#" },
    ]
  }
];

export default function ServicesMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedService, setSelectedService] = useState<{name: string, description: string, icon: any, category: string} | null>(null);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Link */}
      <div className="flex items-center gap-1 text-[var(--color-navy)] font-bold hover:text-[var(--color-orange)] transition-colors text-sm uppercase tracking-wider cursor-pointer py-6">
        SERVICES
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--color-orange)]' : ''}`} 
        />
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 md:-translate-x-[50%] lg:-translate-x-[55%] top-full mt-0 w-[90vw] max-w-[850px] bg-white rounded-2xl shadow-[0_40px_100px_-20px_rgba(10,35,66,0.2)] border border-gray-100 overflow-hidden z-[100] flex min-h-[420px]"
          >
            {/* Left Sidebar (Tabs) */}
            <div className="w-[35%] border-r border-gray-100 py-4 flex flex-col bg-gray-50/50">
              {megaMenuData.map((tab, idx) => (
                <button
                  key={idx}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`w-full text-left px-6 py-3.5 flex items-center justify-between transition-all duration-200 border-l-[3px] ${
                    activeTab === idx 
                      ? "border-[var(--color-orange)] bg-[var(--color-navy)]/5 text-[var(--color-navy)] font-bold" 
                      : "border-transparent text-gray-600 hover:bg-white hover:text-[var(--color-navy)] font-medium"
                  }`}
                >
                  <span className="text-[14px]">{tab.category}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                    activeTab === idx ? "text-[var(--color-orange)] translate-x-1" : "text-gray-400 opacity-0 group-hover:opacity-100"
                  }`} />
                </button>
              ))}
            </div>

            {/* Right Content Area (Grid) */}
            <div className="w-[65%] p-8 flex flex-col justify-between bg-white relative">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {megaMenuData[activeTab].items.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      setSelectedService({ ...item, category: megaMenuData[activeTab].category });
                    }}
                    className="flex items-start gap-4 p-3 -mx-3 rounded-xl border border-transparent hover:border-orange-100 hover:bg-orange-50/50 transition-all duration-200 group text-left"
                  >
                    <div className="mt-1 w-10 h-10 rounded-lg bg-[var(--color-navy)]/5 flex items-center justify-center group-hover:bg-[var(--color-orange)]/10 group-hover:text-[var(--color-orange)] transition-colors shrink-0">
                      <item.icon className="w-5 h-5 text-[var(--color-navy)] group-hover:text-[var(--color-orange)] transition-colors" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-bold text-[var(--color-navy)] group-hover:text-[var(--color-orange)] transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[13px] text-gray-500 mt-1 leading-snug line-clamp-2">
                        {item.description}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Bottom Right CTA */}
              <div className="flex justify-end mt-8 pt-6 border-t border-gray-100">
                <Link 
                  href="#services" 
                  className="bg-gradient-to-r from-[var(--color-orange)] to-orange-500 text-white px-8 py-3 rounded-xl text-[14px] font-bold hover:shadow-xl hover:shadow-[var(--color-orange)]/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  Explore all categories
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[var(--color-navy)]/60 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-10 overflow-hidden"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors z-20 text-gray-500"
              >
                <X size={20} />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-[var(--color-orange)]/10 flex items-center justify-center text-[var(--color-orange)] mb-6 shadow-inner">
                <selectedService.icon size={32} strokeWidth={2.5} />
              </div>

              <div className="inline-flex px-4 py-1.5 rounded-full bg-gray-100/80 text-gray-600 text-[11px] font-bold uppercase tracking-widest mb-4 border border-gray-200/50">
                {selectedService.category}
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)] mb-4 tracking-tight">{selectedService.name}</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">{selectedService.description}</p>

              <div className="bg-orange-50/50 rounded-2xl p-6 md:p-8 border border-orange-100/50 mb-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-orange)]/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                <h4 className="font-bold text-[var(--color-navy)] mb-3 text-lg relative z-10 flex items-center gap-2">
                  <Sparkles size={18} className="text-[var(--color-orange)]" />
                  Service Overview
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed relative z-10">
                  We provide comprehensive and premium <strong className="text-[var(--color-navy)] font-bold">{selectedService.name.toLowerCase()}</strong> solutions tailored specifically to your unique business requirements. Our expert engineering team leverages industry best practices and the latest technologies to deliver highly scalable, secure, and performant solutions that actively drive growth, efficiency, and a massive competitive advantage for your enterprise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button 
                  onClick={() => {
                    setSelectedService(null);
                    // Instead of a true link navigation which might be blocked by the modal unmounting,
                    // we simulate closing this and scrolling down (or users can use the main CTA).
                    window.location.href = "#contact";
                  }} 
                  className="w-full sm:flex-1 bg-[var(--color-navy)] text-white text-center py-4 rounded-xl font-bold hover:bg-[var(--color-orange)] transition-colors shadow-lg shadow-navy/20 flex items-center justify-center gap-2"
                >
                  Discuss Your Project
                  <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => setSelectedService(null)} 
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
