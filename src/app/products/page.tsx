import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "Digital Products & Solutions",
  description: "Discover our suite of innovative enterprise digital products. From AI automation tools to scalable cloud platforms, our products drive business growth.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-20 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Products />
      </div>
      <Footer />
    </main>
  );
}
