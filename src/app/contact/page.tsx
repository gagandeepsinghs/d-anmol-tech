import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with D Anmol Tech. Schedule a consultation for custom software development, digital marketing, or enterprise technology solutions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-20">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
