"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "@/components/SocialIcons";
import { FADE_UP } from "@/lib/design";

type ContactItem = {
  icon: React.ElementType;
  label: string;
  lines: string[];
};

const contactInfo: ContactItem[] = [
  {
    icon: MapPin,
    label: "Headquarters",
    lines: ["123 Innovation Drive, Tech Park", "Suite 500, Global City, 10001"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+1 (800) 555-0199", "+1 (800) 555-0198"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["contact@danmoltech.com", "support@danmoltech.com"],
  },
];

const socialIcons = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter / X" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Instagram, label: "Instagram" },
];

const INPUT_CLASS =
  "w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors duration-200 focus:outline-none focus:border-[var(--color-orange)] focus:bg-white/12";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async submit — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Restrained ambient decorators */}
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[var(--color-orange)]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-navy)]/4 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            {...FADE_UP}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-navy)]/5 text-[var(--color-navy)] font-bold text-xs uppercase tracking-widest mb-6 border border-[var(--color-navy)]/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-orange)] animate-pulse" aria-hidden="true" />
            Get In Touch
          </motion.div>

          <motion.h2
            {...FADE_UP}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] mb-8 tracking-tight leading-[1.1]"
          >
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange)] to-orange-400">
              Transform
            </span>{" "}
            Your Business?
          </motion.h2>

          <motion.p
            {...FADE_UP}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed"
          >
            Partner with D Anmol Tech to architect the future of your enterprise. Fill
            out the form below and our experts will get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-6xl mx-auto">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-8">
                Contact Details
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-orange)]/8 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[var(--color-orange)]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[var(--color-navy)] uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-gray-500 text-sm leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-[11px] font-bold text-[var(--color-navy)] uppercase tracking-widest mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3" aria-label="Social media links">
                  {socialIcons.map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-9 h-9 rounded-full bg-[var(--color-navy)]/5 flex items-center justify-center hover:bg-[var(--color-orange)] hover:text-white text-[var(--color-navy)] transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-[var(--color-navy)] rounded-2xl p-8 md:p-10 shadow-xl shadow-[var(--color-navy)]/10 relative overflow-hidden">
              {/* Subtle inner glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-orange)]/8 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-8">Send Us a Message</h3>

                {status === "sent" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <Send className="w-7 h-7 text-green-400" />
                    </div>
                    <h4 className="text-white font-bold text-xl mb-2">Message Sent!</h4>
                    <p className="text-gray-400 text-sm">
                      Our team will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="first_name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          First Name *
                        </label>
                        <input
                          id="first_name"
                          type="text"
                          name="firstName"
                          required
                          autoComplete="given-name"
                          placeholder="John"
                          className={INPUT_CLASS}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="last_name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Last Name *
                        </label>
                        <input
                          id="last_name"
                          type="text"
                          name="lastName"
                          required
                          autoComplete="family-name"
                          placeholder="Doe"
                          className={INPUT_CLASS}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          placeholder="john@company.com"
                          className={INPUT_CLASS}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          placeholder="+1 (555) 000-0000"
                          className={INPUT_CLASS}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="services_select" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Service Required
                      </label>
                      <select
                        id="services_select"
                        name="service"
                        className={`${INPUT_CLASS} appearance-none`}
                      >
                        <option value="" className="text-gray-900 bg-white">Select a service…</option>
                        <option value="ai" className="text-gray-900 bg-white">AI Development</option>
                        <option value="web" className="text-gray-900 bg-white">Web Development</option>
                        <option value="mobile" className="text-gray-900 bg-white">Mobile Apps</option>
                        <option value="consulting" className="text-gray-900 bg-white">IT Consulting</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="project_details" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Project Details *
                      </label>
                      <textarea
                        id="project_details"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your project requirements…"
                        className={`${INPUT_CLASS} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-gradient-to-r from-[var(--color-orange)] to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--color-orange)]/25 disabled:opacity-60 disabled:cursor-wait"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
