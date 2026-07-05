import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about D - Anmol Tech Enterprises. We are a global technology consulting and engineering company specializing in enterprise-grade digital solutions.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-20">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
