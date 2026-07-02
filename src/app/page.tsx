import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Industries from "@/components/Industries";
import ServiceProcess from "@/components/ServiceProcess";
import Services from "@/components/Services";
import Products from "@/components/Products";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <Navbar />
      <Hero />
      <Technologies />
      <Industries />
      <Products />
      <ServiceProcess />
      <Services />
      <CaseStudies />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

