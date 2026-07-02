"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "@/components/SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-light-gray)] rounded-l-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[var(--color-orange)]/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-navy)]/5 text-[var(--color-navy)] font-bold text-xs uppercase tracking-widest mb-6 border border-[var(--color-navy)]/10"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-orange)] animate-pulse"></span>
            Get In Touch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight"
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange)] to-orange-400">Transform</span> Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 font-medium"
          >
            Partner with D Anmol Tech to architect the future of your enterprise. Fill out the form below and our experts will get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start max-w-6xl mx-auto">
          
          {/* Contact Information (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass rounded-2xl p-8 bg-white/80 border border-gray-100 shadow-xl shadow-gray-200/50">
              <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-8">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-orange)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--color-orange)]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-navy)] uppercase tracking-wider mb-1">Headquarters</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      123 Innovation Drive, Tech Park<br />
                      Suite 500, Global City, 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-orange)]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--color-orange)]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-navy)] uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">+1 (800) 555-0199</p>
                    <p className="text-gray-600 text-sm leading-relaxed">+1 (800) 555-0198</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-orange)]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--color-orange)]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-navy)] uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">contact@danmoltech.com</p>
                    <p className="text-gray-600 text-sm leading-relaxed">support@danmoltech.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h4 className="text-sm font-bold text-[var(--color-navy)] uppercase tracking-wider mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-[var(--color-navy)]/5 flex items-center justify-center hover:bg-[var(--color-orange)] hover:text-white text-[var(--color-navy)] transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form className="glass-dark rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden h-full">
              {/* Decorative blur inside form */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-orange)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">First Name</label>
                    <input 
                      type="text" 
                      placeholder="John" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-gray-300">Services Required</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent transition-all appearance-none">
                    <option value="" className="text-gray-900">Select a service...</option>
                    <option value="ai" className="text-gray-900">AI Development</option>
                    <option value="web" className="text-gray-900">Web Development</option>
                    <option value="mobile" className="text-gray-900">Mobile Apps</option>
                    <option value="consulting" className="text-gray-900">IT Consulting</option>
                  </select>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="text-sm font-medium text-gray-300">Project Details</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project requirements..." 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full bg-gradient-to-r from-[var(--color-orange)] to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-orange)]/30"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
