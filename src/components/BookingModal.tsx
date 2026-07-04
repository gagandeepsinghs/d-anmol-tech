"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Globe, Sparkles } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Block scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Simple calendar generation
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  // Adjust so Monday is first day of week for UI purposes like screenshot, or keep Sunday. Let's keep Sunday first.
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

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
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors z-20 text-gray-500"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="pt-10 pb-6 px-8 flex flex-col items-center border-b border-gray-100">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl font-bold text-[var(--color-navy)] flex items-center tracking-wide">
                D
                <span className="text-[var(--color-orange)] mx-1">-</span>
                ANMOL TECH
              </span>
            </div>
            
            <div className="flex items-center gap-4 mb-4 w-full max-w-md">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
                Top Enterprise Consulting
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            <h2 className="text-3xl font-extrabold text-[var(--color-navy)] flex items-center gap-3">
              Book Your <span className="text-[var(--color-orange)]">30-Min Call</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-bold">
                <Sparkles size={14} /> Free
              </span>
            </h2>
          </div>

          {/* Progress / Timezone Bar */}
          <div className="px-6 md:px-8 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/50">
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-medium">
              <button onClick={() => { setSelectedDate(null); setSelectedTime(null); }} className="flex items-center gap-1.5 md:gap-2 text-[var(--color-navy)] hover:opacity-80 transition-opacity">
                <div className={`w-5 h-5 rounded-full border-2 ${selectedDate ? 'border-[var(--color-navy)] bg-[var(--color-navy)] text-white' : 'border-[var(--color-orange)]'} flex items-center justify-center text-[10px] font-bold`}>{selectedDate ? '✓' : '1'}</div>
                Date
              </button>
              <span className="text-gray-300">&rarr;</span>
              <button onClick={() => setSelectedTime(null)} disabled={!selectedDate} className={`flex items-center gap-1.5 md:gap-2 ${selectedDate ? 'text-[var(--color-navy)] cursor-pointer hover:opacity-80' : 'text-gray-400 cursor-not-allowed'}`}>
                <div className={`w-5 h-5 rounded-full border-2 ${selectedTime ? 'border-[var(--color-navy)] bg-[var(--color-navy)] text-white' : selectedDate ? 'border-[var(--color-orange)]' : 'border-gray-200'} flex items-center justify-center text-[10px] font-bold`}>{selectedTime ? '✓' : '2'}</div>
                Time
              </button>
              <span className="text-gray-300">&rarr;</span>
              <div className={`flex items-center gap-1.5 md:gap-2 ${selectedTime ? 'text-[var(--color-navy)]' : 'text-gray-400'}`}>
                <div className={`w-5 h-5 rounded-full border-2 ${selectedTime ? 'border-[var(--color-orange)]' : 'border-gray-200'} flex items-center justify-center text-[10px] font-bold`}>3</div>
                Details
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <Globe size={16} />
              IST (UTC+5:30)
            </div>
          </div>

          {/* Main Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            {!selectedTime ? (
              <div className={`mx-auto flex flex-col md:flex-row gap-8 transition-all duration-300 ${selectedDate ? 'max-w-3xl' : 'max-w-md'}`}>
                {/* Left: Calendar */}
                <div className="flex-1 w-full">
                  {/* Month navigation */}
                  <div className="flex items-center justify-between mb-8">
                    <button 
                      onClick={prevMonth}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-500"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <h3 className="text-xl font-bold text-[var(--color-navy)]">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h3>
                    <button 
                      onClick={nextMonth}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-500"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-y-4 gap-x-1 md:gap-x-2 text-center mb-6">
                    {days.map(day => (
                      <div key={day} className="text-[10px] md:text-xs font-bold text-gray-400 tracking-wider mb-2">
                        {day}
                      </div>
                    ))}
                    
                    {calendarDays.map((day, idx) => {
                      const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear();
                      
                      return (
                        <div key={idx} className="flex items-center justify-center h-10 md:h-12">
                          {day ? (
                            <button 
                              onClick={() => setSelectedDate(day)}
                              className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex flex-col items-center justify-center font-semibold text-base md:text-lg transition-all relative ${
                              selectedDate === day
                                ? 'bg-[var(--color-navy)] text-white font-bold shadow-lg shadow-navy/30 scale-105'
                                : isToday 
                                  ? 'text-[var(--color-navy)] font-bold bg-gray-50' 
                                  : 'text-[var(--color-navy)] hover:bg-gray-100'
                            }`}>
                              {day}
                              {isToday && selectedDate !== day && <div className="absolute bottom-1 w-1 h-1 rounded-full bg-[var(--color-orange)]"></div>}
                            </button>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-center text-xs md:text-sm font-medium text-gray-400">
                    Weekdays only · next 30 days
                  </div>
                </div>

                {/* Right: Time Slots */}
                {selectedDate && (
                  <div className="w-full md:w-64 md:border-l border-t md:border-t-0 border-gray-100 md:pl-8 pt-8 md:pt-0 flex flex-col animate-in fade-in slide-in-from-right-4 duration-300">
                    <h4 className="text-lg font-bold text-[var(--color-navy)] mb-4 flex items-center justify-between">
                      <span>{monthNames[currentDate.getMonth()]} {selectedDate}</span>
                      <span className="text-sm font-medium text-gray-400">{days[new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDate).getDay()]}</span>
                    </h4>
                    <div className="flex flex-col gap-3 overflow-y-auto pr-2" style={{ maxHeight: "calc(100% - 2rem)" }}>
                      {["09:00 AM", "09:30 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:30 PM", "04:00 PM"].map(time => (
                        <button 
                          key={time} 
                          onClick={() => setSelectedTime(time)}
                          className="w-full py-3 px-4 rounded-xl border border-gray-200 text-[var(--color-navy)] font-bold hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] transition-colors text-left flex justify-between items-center group"
                        >
                          {time}
                          <span className="opacity-0 group-hover:opacity-100 text-xs uppercase tracking-wider text-[var(--color-orange)] transition-opacity">Select</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-8 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Sparkles className="text-[var(--color-orange)] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-navy)]">Selected Slot</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedDate ? days[new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDate).getDay()] : ''}, {monthNames[currentDate.getMonth()]} {selectedDate}, {currentDate.getFullYear()} at <span className="font-bold text-[var(--color-navy)]">{selectedTime}</span>
                    </p>
                  </div>
                </div>

                <form 
                  className="space-y-4" 
                  onSubmit={async (e) => { 
                    e.preventDefault(); 
                    setIsSubmitting(true);
                    
                    const formData = new FormData(e.currentTarget);
                    formData.append("access_key", "7c17615a-603d-4a7c-8d1c-49a29c76db27");
                    formData.append("subject", "New Consultation Booking - D Anmol Tech");
                    formData.append("Booking Date", `${selectedDate ? days[new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDate).getDay()] : ''}, ${monthNames[currentDate.getMonth()]} ${selectedDate}, ${currentDate.getFullYear()}`);
                    formData.append("Booking Time", selectedTime || "");

                    try {
                      const res = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        body: formData
                      });
                      const data = await res.json();
                      if (data.success) {
                        alert('Booking Confirmed! We will be in touch shortly.');
                        onClose();
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="first_name_booking" className="text-sm font-bold text-[var(--color-navy)]">First Name *</label>
                      <input id="first_name_booking" required type="text" name="First Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-orange)] focus:ring-1 focus:ring-[var(--color-orange)] transition-all bg-gray-50/50" placeholder="John" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="last_name_booking" className="text-sm font-bold text-[var(--color-navy)]">Last Name *</label>
                      <input id="last_name_booking" required type="text" name="Last Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-orange)] focus:ring-1 focus:ring-[var(--color-orange)] transition-all bg-gray-50/50" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="email_booking" className="text-sm font-bold text-[var(--color-navy)]">Email Address *</label>
                    <input id="email_booking" required type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-orange)] focus:ring-1 focus:ring-[var(--color-orange)] transition-all bg-gray-50/50" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="notes_booking" className="text-sm font-bold text-[var(--color-navy)]">Additional Notes</label>
                    <textarea id="notes_booking" rows={3} name="message" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-orange)] focus:ring-1 focus:ring-[var(--color-orange)] transition-all bg-gray-50/50 resize-none" placeholder="Please share anything that will help prepare for our meeting..."></textarea>
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-4">
                    <button type="button" onClick={() => setSelectedTime(null)} disabled={isSubmitting} className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors disabled:opacity-50">
                      Back
                    </button>
                    <button type="submit" disabled={isSubmitting} className="flex-1 bg-[var(--color-navy)] text-white px-6 py-3 rounded-xl font-bold hover:bg-[var(--color-orange)] transition-colors shadow-lg shadow-navy/20 disabled:opacity-50 disabled:cursor-wait flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Processing...</>
                      ) : (
                        "Confirm Booking"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
