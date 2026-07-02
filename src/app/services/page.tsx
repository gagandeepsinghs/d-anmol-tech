import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our enterprise digital solutions. We offer AI-driven automation, scalable cloud architectures, web development, and digital marketing services.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-20">
      <Navbar />
      <Services />
      <Footer />
    </main>
  );
}
