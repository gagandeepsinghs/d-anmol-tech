import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to commonly asked questions about D - Anmol Tech Enterprises's technology consulting, software development process, and enterprise solutions.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-20">
      <Navbar />
      <FAQ />
      <Footer />
    </main>
  );
}
