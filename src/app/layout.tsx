import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatbotWidget from "@/components/ChatbotWidget";
import SchemaMarkup from "@/components/SchemaMarkup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "D Anmol Tech | Enterprise Digital Solutions",
    template: "%s | D Anmol Tech",
  },
  description:
    "D Anmol Tech — Global technology consulting and engineering services. We engineer enterprise-grade digital solutions from AI-driven automation to scalable cloud architectures and custom software development.",
  keywords: [
    "enterprise software development",
    "AI automation",
    "web development India",
    "mobile app development",
    "custom software",
    "digital marketing",
    "IT consulting",
    "D Anmol Tech",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  openGraph: {
    title: "D Anmol Tech | Enterprise Digital Solutions",
    description:
      "Global technology consulting and engineering services. AI automation, web development, and scalable cloud solutions.",
    url: "/",
    siteName: "D Anmol Tech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D Anmol Tech | Enterprise Digital Solutions",
    description:
      "Global technology consulting — AI, web, mobile, and cloud solutions.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SchemaMarkup />
        {children}
        <ChatbotWidget />
      </body>
    </html>
  );
}
