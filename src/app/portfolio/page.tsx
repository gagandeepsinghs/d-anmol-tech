import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "Client Portfolio & Case Studies",
  description: "View our portfolio of successful digital transformations. Explore case studies of custom web development, mobile apps, and enterprise software.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-20 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <CaseStudies />
      </div>
      <Footer />
    </main>
  );
}
