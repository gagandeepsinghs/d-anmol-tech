"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ChevronDown } from "lucide-react";

const CustomSelect = ({ id, name, label, options, placeholder, required }: { id: string, name: string, label: string, options: string[], placeholder: string, required?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const triggerRef = useRef<HTMLDivElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const [openUpwards, setOpenUpwards] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const updatePosition = () => {
        if (!triggerRef.current) return;
        const rect = triggerRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const DROPDOWN_HEIGHT = 240; // Max height of dropdown (max-h-60 = 240px)
        
        const shouldOpenUpwards = spaceBelow < DROPDOWN_HEIGHT && spaceAbove > spaceBelow;
        setOpenUpwards(shouldOpenUpwards);
        
        setDropdownStyle({
          position: "fixed",
          width: rect.width + "px",
          left: rect.left + "px",
          ...(shouldOpenUpwards 
            ? { bottom: (window.innerHeight - rect.top + 8) + "px" }
            : { top: (rect.bottom + 8) + "px" })
        });
      };
      
      updatePosition();
      // Listen to scroll events in the capture phase to catch scroll inside the modal
      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);
      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }
  }, [isOpen]);

  return (
    <div className="space-y-1.5 relative">
      <label htmlFor={id} className="text-sm font-bold text-[var(--color-navy)]">{label}</label>
      <input type="hidden" name={name} value={selected} required={required && !selected} />
      
      <div 
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-xl border ${isOpen ? 'border-[var(--color-orange)] ring-1 ring-[var(--color-orange)]' : 'border-gray-200'} bg-gray-50/50 text-[var(--color-navy)] cursor-pointer flex items-center justify-between transition-all`}
      >
        <span className={selected ? 'text-[var(--color-navy)]' : 'text-gray-500'}>
          {selected || placeholder}
        </span>
        <ChevronDown size={18} className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {mounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              <div className="fixed inset-0 z-[9998]" onClick={() => setIsOpen(false)}></div>
              <motion.div 
                initial={{ opacity: 0, y: openUpwards ? 10 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: openUpwards ? 10 : -10 }}
                transition={{ duration: 0.15 }}
                style={dropdownStyle}
                className="z-[9999] bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden max-h-60 overflow-y-auto"
              >
                {options.map((opt: string) => (
                  <div 
                    key={opt}
                    onClick={() => { setSelected(opt); setIsOpen(false); }}
                    className={`px-4 py-3 cursor-pointer transition-colors text-sm font-medium ${selected === opt ? 'bg-[var(--color-navy)] text-white' : 'text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white'}`}
                  >
                    {opt}
                  </div>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Block scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset state if closed
      setTimeout(() => setIsSuccess(false), 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[var(--color-navy)]/60 backdrop-blur-md"
          onClick={onClose}
        ></motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] md:max-h-[90vh]"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors z-20 text-gray-500"
          >
            <X size={20} />
          </button>

          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="pt-10 pb-6 px-8 flex flex-col items-center border-b border-gray-100 bg-gray-50/50">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-4">
                  <Sparkles size={24} />
                </div>
                <h2 className="text-3xl font-extrabold text-[var(--color-navy)] text-center mb-2">
                  Request a <span className="text-[var(--color-orange)]">Proposal</span>
                </h2>
                <p className="text-gray-500 text-center max-w-md">
                  Tell us about your project requirements, and our team will get back to you with a tailored solution.
                </p>
              </div>

              {/* Form Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <form 
                  className="space-y-5" 
                  onSubmit={async (e) => { 
                    e.preventDefault(); 
                    setIsSubmitting(true);
                    
                    const formData = new FormData(e.currentTarget);
                    formData.append("access_key", "7c17615a-603d-4a7c-8d1c-49a29c76db27");
                    formData.append("subject", "New Proposal Request - D - Anmol Tech Enterprises");

                    try {
                      const res = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        body: formData
                      });
                      const data = await res.json();
                      if (data.success) {
                        setIsSuccess(true);
                      } else {
                        alert('Something went wrong. Please try again.');
                      }
                    } catch (error) {
                      alert('Something went wrong. Please try again.');
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-bold text-[var(--color-navy)]">Full Name *</label>
                      <input id="name" required type="text" name="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-orange)] focus:ring-1 focus:ring-[var(--color-orange)] transition-all bg-gray-50/50" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-sm font-bold text-[var(--color-navy)]">Company Name</label>
                      <input id="company" type="text" name="company" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-orange)] focus:ring-1 focus:ring-[var(--color-orange)] transition-all bg-gray-50/50" placeholder="Acme Corp" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-bold text-[var(--color-navy)]">Work Email *</label>
                      <input id="email" required type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-orange)] focus:ring-1 focus:ring-[var(--color-orange)] transition-all bg-gray-50/50" placeholder="john@company.com" />
                    </div>
                    <CustomSelect 
                      id="service"
                      name="service"
                      label="Service Required *"
                      placeholder="Select a service"
                      required={true}
                      options={[
                        "AI & Automation",
                        "Custom Software Development",
                        "Web Development",
                        "Mobile App Development",
                        "Other Consulting"
                      ]}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <CustomSelect 
                      id="date"
                      name="preferred_date"
                      label="Preferred Date (Optional)"
                      placeholder="Select a timeframe"
                      options={[
                        "As soon as possible",
                        "Within this week",
                        "Sometime next week",
                        "In 2-3 weeks",
                        "Next month",
                        "Not sure yet"
                      ]}
                    />
                    <CustomSelect 
                      id="time"
                      name="preferred_time"
                      label="Preferred Time (Optional)"
                      placeholder="Select a time"
                      options={[
                        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
                        "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM", 
                        "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", 
                        "04:00 PM", "04:30 PM", "05:00 PM"
                      ]}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="details" className="text-sm font-bold text-[var(--color-navy)]">Project Details *</label>
                    <textarea id="details" required rows={4} name="message" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-orange)] focus:ring-1 focus:ring-[var(--color-orange)] transition-all bg-gray-50/50 resize-none" placeholder="Please describe your project goals, timeline, and any specific requirements..."></textarea>
                  </div>

                  <div className="pt-4">
                    <button type="submit" disabled={isSubmitting} className="w-full bg-[var(--color-navy)] text-white px-6 py-4 rounded-xl font-bold hover:bg-[var(--color-orange)] transition-colors shadow-lg shadow-navy/20 disabled:opacity-50 disabled:cursor-wait flex items-center justify-center gap-2 text-lg">
                      {isSubmitting ? (
                        <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Sending Request...</>
                      ) : (
                        <>Submit Proposal Request <Send size={18} /></>
                      )}
                    </button>
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    By submitting this form, you agree to our privacy policy. We will never spam you.
                  </p>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h2 className="text-3xl font-extrabold text-[var(--color-navy)] mb-4">Request Sent Successfully!</h2>
              <p className="text-gray-500 mb-8 max-w-md">
                Thank you for reaching out. Our enterprise consulting team will review your requirements and get back to you within 24 hours with a custom proposal.
              </p>
              <button onClick={onClose} className="bg-[var(--color-navy)] text-white px-8 py-3 rounded-xl font-bold hover:bg-[var(--color-orange)] transition-colors">
                Close
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
