import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const getImages = (id: string) => {
  const images = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1531297172867-4f54131bce70?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
  ];
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return {
    hero: images[hash % images.length],
    secondary: images[(hash + 3) % images.length]
  };
};


export async function generateStaticParams() {
  const allItems = servicesData.flatMap(cat => cat.items);
  return allItems.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const allItems = servicesData.flatMap(cat => cat.items);
  const service = allItems.find(item => item.id === id);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.name} | D - Anmol Tech Enterprises`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const allItems = servicesData.flatMap(cat => cat.items);
  const service = allItems.find(item => item.id === id);

  if (!service) {
    notFound();
  }

  const { hero: heroImg, secondary: secondaryImg } = getImages(id);

  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-20 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-[var(--color-background)] overflow-hidden border-b border-gray-100">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-orange)] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[var(--color-orange)] text-sm font-bold mb-6 shadow-sm">
                <service.icon size={16} />
                <span>Enterprise Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-navy)] mb-6 leading-tight tracking-tight">
                {service.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                {service.detail.overview}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="#contact-section"
                  className="bg-[var(--color-navy)] text-white px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-orange)] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-[var(--color-navy)]/20 hover:shadow-[var(--color-orange)]/30 inline-flex items-center gap-2 group"
                >
                  Discuss Your Project
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={heroImg} 
                  alt={`${service.name} conceptual visualization`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">Key Features</h2>
            <p className="text-gray-600 text-lg">Robust capabilities tailored for enterprise-scale requirements.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.detail.features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition-colors group">
                <CheckCircle2 className="w-8 h-8 text-[var(--color-orange)] mb-4" />
                <p className="text-[var(--color-navy)] font-semibold leading-relaxed group-hover:text-gray-900">{feature}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">Our Methodology</h2>
            <p className="text-gray-600 text-lg max-w-2xl">A structured, transparent process ensuring successful delivery.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {service.detail.process.map((step, idx) => (
              <div key={idx} className="relative">
                {idx !== service.detail.process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-12 right-0 h-[2px] bg-gray-200 -z-10"></div>
                )}
                <div className="w-12 h-12 rounded-full bg-[var(--color-navy)] text-white font-bold flex items-center justify-center text-xl mb-6 shadow-lg shadow-[var(--color-navy)]/20">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-[var(--color-navy)] mb-3">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Technologies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-1">
               <div className="sticky top-32 rounded-2xl overflow-hidden shadow-xl border border-gray-100 hidden lg:block h-[500px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={secondaryImg} 
                    alt={`${service.name} execution`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
               </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[var(--color-navy)] mb-8">Business Outcomes</h2>
                <div className="space-y-4">
                  {service.detail.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/80 border border-gray-100 hover:border-orange-200 transition-colors">
                      <div className="mt-1 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                        <ArrowRight size={14} className="text-[var(--color-orange)]" />
                      </div>
                      <p className="text-[var(--color-navy)] font-medium text-[15px] leading-snug">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                 <h2 className="text-3xl font-bold text-[var(--color-navy)] mb-8">Technologies</h2>
                 <div className="flex flex-wrap gap-3">
                    {service.detail.technologies.map((tech, idx) => (
                      <span key={idx} className="px-5 py-2.5 bg-gray-50 text-[var(--color-navy)] font-semibold rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors shadow-sm">
                        {tech}
                      </span>
                    ))}
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.detail.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-xl font-bold mb-3 text-orange-400">{faq.q}</h4>
                <p className="text-gray-300 leading-relaxed text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="contact-section" className="relative py-24 bg-white overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-[var(--color-navy)] px-8 py-20 md:py-24 text-center shadow-2xl border border-white/10">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-orange)] rounded-full mix-blend-screen opacity-20 blur-[80px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen opacity-20 blur-[80px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                Ready to transform your business?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                Let&apos;s discuss how our <span className="text-white font-bold">{service.name}</span> capabilities can accelerate your growth and build your digital future.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[var(--color-orange)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d95c00] hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto group">
                  Contact Our Experts <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
