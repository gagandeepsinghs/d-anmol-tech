"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";
import Link from "next/link";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: string[];
  link?: { url: string; label: string };
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Lead Form State
  const [leadStep, setLeadStep] = useState(0);
  const [leadData, setLeadData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    description: "",
  });

  // Auto open after 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && messages.length === 0) {
        setIsOpen(true);
        sendInitialMessage();
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendInitialMessage = () => {
    if (messages.length === 0) {
      setMessages([
        {
          id: Date.now().toString(),
          sender: "bot",
          text: "Hello! Welcome to D - Anmol Tech Enterprises. How can I help you today? / नमस्ते! D - Anmol Tech Enterprises में आपका स्वागत है।",
          options: [
            "Get a Free Quote",
            "WhatsApp an Expert",
            "Request a Callback",
            "Our Services",
            "Contact Us"
          ]
        }
      ]);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    sendInitialMessage();
  };

  const processBotResponse = (text: string) => {
    const lowerText = text.toLowerCase();

    // Direct WhatsApp
    if (lowerText.includes("whatsapp an expert") || lowerText.includes("whatsapp")) {
      window.open("https://wa.me/919999999999", "_blank");
      return "I have opened WhatsApp for you to chat with our expert directly!";
    }

    // Services
    if (lowerText.includes("our services") || lowerText === "services") {
      return {
        text: "We specialize in the following areas. Which one are you interested in?",
        options: [
          "Website Development",
          "E-Commerce Development",
          "Mobile App Development",
          "AI Automation",
          "SEO & Digital Marketing",
          "Cloud & DevOps",
          "Custom Software"
        ]
      };
    }

    // Specific Service Selected
    const specificServices = [
      "website development",
      "e-commerce development",
      "mobile app development",
      "ai automation",
      "seo & digital marketing",
      "cloud & devops",
      "custom software"
    ];

    if (specificServices.some(service => lowerText === service || lowerText.includes(service))) {
      return {
        text: `Great choice! We have extensive experience in that area. Would you like to get a free quote for your project or speak directly with an expert?`,
        options: ["Get a Free Quote", "WhatsApp an Expert"]
      };
    }

    // Lead Gen Trigger
    if (lowerText.includes("get a free quote") || lowerText.includes("quote") || lowerText.includes("request a callback") || lowerText.includes("callback")) {
      setLeadStep(1);
      return "Great! I'll need a few details. First, what is your name? / आपका नाम क्या है?";
    }

    // FAQs
    if (lowerText.includes("pricing") || lowerText.includes("cost") || lowerText.includes("budget")) {
      return "Our pricing depends on the project scope and complexity. Would you like to get a free quote?";
    }
    if (lowerText.includes("timeline") || lowerText.includes("how long")) {
      return "Most custom websites take 4-6 weeks, while complex apps take 3-6 months depending on requirements.";
    }
    if (lowerText.includes("technology") || lowerText.includes("technologies") || lowerText.includes("stack")) {
      return "We work with modern stacks including React, Next.js, Node.js, Python, AWS, and AI integrations.";
    }
    if (lowerText.includes("maintenance") || lowerText.includes("support")) {
      return "Yes! We provide 24/7 post-deployment support and maintenance for all our projects.";
    }
    if (lowerText.includes("seo") || lowerText.includes("marketing")) {
      return "Our SEO and digital marketing services are designed to boost your ranking, traffic, and conversions.";
    }
    if (lowerText.includes("hosting") || lowerText.includes("domain")) {
      return "We provide end-to-end cloud hosting, domain management, and DevOps services.";
    }
    
    // Contact
    if (lowerText.includes("contact us") || lowerText.includes("contact")) {
      return {
        text: "You can reach us at info@danmoltech.com or call us directly. You can also fill out our contact form below:",
        link: { url: "#contact", label: "Open Contact Form" }
      };
    }

    // Hindi greetings
    if (lowerText.includes("namaste") || lowerText.includes("hindi") || lowerText.includes("hi") || lowerText.includes("hello")) {
      return "Hello! How can we assist you today? / नमस्ते! हम आपकी कैसे मदद कर सकते हैं?";
    }

    // Fallback
    return "I am an AI assistant for D - Anmol Tech Enterprises. I can help you with our services, quotes, or direct you to an expert. Could you please clarify your request?";
  };

  const handleLeadFlow = (text: string) => {
    switch (leadStep) {
      case 1:
        setLeadData({ ...leadData, name: text });
        setLeadStep(2);
        return "Thanks! Could you please provide your phone number?";
      case 2:
        setLeadData({ ...leadData, phone: text });
        setLeadStep(3);
        return "And your email address?";
      case 3:
        setLeadData({ ...leadData, email: text });
        setLeadStep(4);
        return "Got it. What's the name of your company?";
      case 4:
        setLeadData({ ...leadData, company: text });
        setLeadStep(5);
        return {
          text: "Which service are you looking for?",
          options: [
            "Website Development",
            "E-Commerce Development",
            "Mobile App Development",
            "SEO & Marketing",
            "AI Automation",
            "Custom"
          ]
        };
      case 5:
        if (text.toLowerCase() === "custom") {
          return "Please write down the custom service you are looking for:";
        }
        setLeadData({ ...leadData, service: text });
        setLeadStep(6);
        return "What is your estimated budget?";
      case 6:
        setLeadData({ ...leadData, budget: text });
        setLeadStep(7);
        return "Finally, could you briefly describe your project?";
      case 7:
        setLeadData({ ...leadData, description: text });
        setLeadStep(0); // Reset
        console.log("Lead Data Ready for API:", { ...leadData, description: text });
        return "Thank you! Your request has been successfully recorded. One of our experts will contact you shortly.";
      default:
        return "Something went wrong. Let's start over.";
    }
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add User Message
    const newMessages: Message[] = [
      ...messages,
      { id: Date.now().toString(), sender: "user", text }
    ];
    setMessages(newMessages);
    setInputValue("");

    // Simulate Bot typing delay
    setTimeout(() => {
      let botResponseText = "";
      let options: string[] | undefined = undefined;
      let link: { url: string; label: string } | undefined = undefined;

      if (leadStep > 0) {
        const response = handleLeadFlow(text);
        if (typeof response === "string") {
          botResponseText = response;
        } else {
          botResponseText = response.text;
          options = response.options;
        }
      } else {
        const response = processBotResponse(text);
        if (typeof response === "string") {
          botResponseText = response;
        } else {
          botResponseText = response.text;
          if (response.link) link = response.link;
          if (response.options) options = response.options;
        }
        
        if (botResponseText.includes("clarify your request") || botResponseText.includes("quote")) {
          if (!options) {
            options = ["Get a Free Quote", "WhatsApp an Expert", "Our Services"];
          }
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botResponseText,
          options,
          link
        }
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleOpen}
            aria-label="Open Chatbot"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebd5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 group"
          >
            <MessageCircle size={32} className="group-hover:animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] flex flex-col bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-white/20 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--color-navy)] to-[#0f2a4a] p-4 flex items-center justify-between shadow-md relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[var(--color-navy)] font-bold text-xl shadow-inner">
                    D
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[var(--color-navy)]"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">D - Anmol Tech Enterprises Assistant</h3>
                  <p className="text-gray-300 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Chatbot"
                className="text-gray-300 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/30 scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-sm whitespace-pre-wrap shadow-sm ${
                      msg.sender === "user"
                        ? "bg-[var(--color-orange)] text-white rounded-tr-sm"
                        : "bg-white text-[var(--color-navy)] border border-gray-100 rounded-tl-sm font-medium"
                    }`}
                  >
                    {msg.text}
                    {msg.link && (
                      <div className="mt-3">
                        <Link 
                          href={msg.link.url} 
                          onClick={() => setIsOpen(false)}
                          className="inline-block bg-[var(--color-orange)] text-white px-4 py-2 rounded font-semibold text-xs hover:bg-[#d95c00] transition-colors shadow-sm"
                        >
                          {msg.link.label}
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  {/* Options */}
                  {msg.options && (
                    <div className="mt-3 flex flex-wrap gap-2 max-w-[85%]">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(opt)}
                          className="bg-white/80 border border-[var(--color-orange)]/30 text-[var(--color-navy)] text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[var(--color-orange)] hover:text-white hover:border-transparent transition-all shadow-sm"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/90 border-t border-gray-100">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  aria-label="Chat message input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-50/80 border border-gray-200 text-gray-700 text-sm rounded-full px-4 py-3 focus:outline-none focus:border-[var(--color-orange)] focus:ring-1 focus:ring-[var(--color-orange)] transition-all"
                />
                <button
                  type="submit"
                  aria-label="Send Message"
                  disabled={!inputValue.trim()}
                  className="bg-[var(--color-navy)] text-white p-3 rounded-full hover:bg-[var(--color-orange)] disabled:opacity-50 disabled:hover:bg-[var(--color-navy)] transition-colors shadow-md flex-shrink-0"
                >
                  <Send size={18} />
                </button>
              </form>
              <div className="text-center mt-2">
                <span className="text-[10px] text-gray-400 font-medium">Powered by AI Chat</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
