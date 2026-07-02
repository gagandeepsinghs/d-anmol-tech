import { 
  Code, Cloud, Briefcase, Server, RefreshCw,
  Globe, Smartphone, Monitor, ShoppingCart, LayoutDashboard, Layers,
  PenTool, PenLine, Palette, Box, Image as ImageIcon,
  TrendingUp, Search, Share2, MousePointerClick, FileText, Mail,
  Brain, Network, Sparkles, MessageSquare, Blocks, Cpu,
  Users, CloudLightning, ShieldCheck, BarChart, GitMerge, Settings
} from "lucide-react";

export type ServiceDetail = {
  overview: string;
  features: string[];
  benefits: string[];
  process: { step: number; title: string; desc: string }[];
  technologies: string[];
  faqs: { q: string; a: string }[];
};

export type ServiceItem = {
  id: string;
  name: string;
  icon: any;
  shortDesc: string;
  detail: ServiceDetail;
};

export type ServiceCategory = {
  id: string;
  category: string;
  items: ServiceItem[];
};

// A generic rich content generator for missing ones to save space, while providing real deep content for SEO
const generateGenericDetail = (name: string): ServiceDetail => ({
  overview: `At D Anmol Tech, our ${name} services are designed to propel your enterprise forward in the digital age. We leverage cutting-edge methodologies and industry best practices to deliver robust, scalable, and highly optimized solutions. Whether you are looking to modernize your existing infrastructure or build from the ground up, our expert team ensures that every aspect of your ${name} strategy aligns perfectly with your core business objectives, driving measurable growth and long-term success.`,
  features: [
    "Customized Strategy & Planning",
    "Scalable Enterprise Architecture",
    "Seamless Third-Party Integrations",
    "Advanced Security Protocols",
    "Real-time Analytics & Reporting",
    "24/7 Monitoring and Support"
  ],
  benefits: [
    "Increased Operational Efficiency",
    "Significant Cost Reduction",
    "Enhanced User Engagement",
    "Future-Proof Technology Stack",
    "Accelerated Time-to-Market"
  ],
  process: [
    { step: 1, title: "Discovery", desc: "We analyze your requirements and current setup." },
    { step: 2, title: "Strategy", desc: "Our architects design a customized roadmap." },
    { step: 3, title: "Execution", desc: "We implement the solution with agile methodologies." },
    { step: 4, title: "Delivery", desc: "Rigorous testing followed by seamless deployment." }
  ],
  technologies: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"],
  faqs: [
    { q: `How long does a typical ${name} project take?`, a: "Timelines vary depending on complexity, but most initial phases are delivered within 4-8 weeks." },
    { q: "Do you offer post-launch support?", a: "Yes, we provide comprehensive 24/7 maintenance and support." }
  ]
});

// Deep Content for SEO as requested
const seoDetail: ServiceDetail = {
  overview: "Our comprehensive SEO Optimization services are engineered to dominate search engine results and drive high-intent organic traffic to your platform. We don't just chase keywords; we build a sustainable, data-driven organic growth engine for your enterprise. By combining technical excellence with compelling content strategies, we ensure your brand captures maximum visibility across Google, Bing, and other major search engines. Our holistic approach covers every pillar of modern SEO.",
  features: [
    "On-Page SEO: Title tags, meta descriptions, header hierarchy, and content optimization.",
    "Off-Page SEO: High-authority backlink building, digital PR, and brand mentions.",
    "Technical SEO: Site speed optimization, Core Web Vitals, XML sitemaps, and crawlability.",
    "Local SEO: Google Business Profile optimization and local citation management.",
    "Comprehensive Keyword Research & Mapping.",
    "In-depth Competitor Analysis & Market Gap Identification.",
    "Full-scale Technical SEO Audit & Health Checks.",
    "Transparent Monthly Reporting & ROI Tracking."
  ],
  benefits: [
    "Exponentially increase targeted organic web traffic.",
    "Reduce reliance on expensive paid advertising (PPC).",
    "Build long-term brand authority and industry trust.",
    "Improve user experience and website performance.",
    "Generate higher quality leads with better conversion rates."
  ],
  process: [
    { step: 1, title: "Comprehensive SEO Audit", desc: "We conduct a deep dive into your website's technical health, content gaps, and current backlink profile." },
    { step: 2, title: "Keyword & Competitor Research", desc: "Identifying high-value, low-competition keywords that your target audience is actively searching for." },
    { step: 3, title: "On-Page & Technical Optimization", desc: "Fixing crawl errors, optimizing site architecture, and refining on-page elements for maximum relevance." },
    { step: 4, title: "Content & Link Building", desc: "Executing a strategic content plan and acquiring authoritative backlinks to build domain authority." }
  ],
  technologies: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Google Analytics 4", "Moz"],
  faqs: [
    { q: "How long does it take to see results from SEO?", a: "SEO is a long-term strategy. While technical fixes can show improvements in weeks, substantial ranking and traffic growth typically takes 3 to 6 months depending on industry competitiveness." },
    { q: "What is the difference between On-Page and Technical SEO?", a: "On-Page SEO involves optimizing the content and HTML source code of a page (keywords, meta tags). Technical SEO focuses on backend elements like site speed, mobile-friendliness, and crawlability." },
    { q: "Do you guarantee #1 rankings on Google?", a: "No ethical agency can guarantee a #1 spot due to the dynamic nature of search algorithms. However, we guarantee proven methodologies that consistently deliver significant organic growth and page 1 visibility." }
  ]
};

export const servicesData: ServiceCategory[] = [
  {
    id: "software",
    category: "Software Development",
    items: [
      { id: "custom-software", name: "Custom Software", icon: Code, shortDesc: "Tailor-made enterprise software solutions.", detail: generateGenericDetail("Custom Software") },
      { id: "saas", name: "SaaS Development", icon: Cloud, shortDesc: "Scalable Cloud-based SaaS products.", detail: generateGenericDetail("SaaS Development") },
      { id: "enterprise", name: "Enterprise Solutions", icon: Briefcase, shortDesc: "Complex workflows & ERPs.", detail: generateGenericDetail("Enterprise Solutions") },
      { id: "api", name: "API Integration", icon: Server, shortDesc: "Seamless third-party API connections.", detail: generateGenericDetail("API Integration") },
      { id: "architecture", name: "System Architecture", icon: Server, shortDesc: "Robust backend system designs.", detail: generateGenericDetail("System Architecture") },
      { id: "legacy", name: "Legacy Modernization", icon: RefreshCw, shortDesc: "Upgrade outdated tech stacks.", detail: generateGenericDetail("Legacy Modernization") },
    ]
  },
  {
    id: "web-app",
    category: "Web & App Development",
    items: [
      { id: "web-dev", name: "Web Development", icon: Globe, shortDesc: "High-performance web applications.", detail: generateGenericDetail("Web Development") },
      { id: "mobile-app", name: "Mobile App Development", icon: Smartphone, shortDesc: "Native iOS and Android apps.", detail: generateGenericDetail("Mobile App Development") },
      { id: "pwa", name: "PWA Development", icon: Monitor, shortDesc: "Progressive web applications.", detail: generateGenericDetail("PWA Development") },
      { id: "ecommerce", name: "E-Commerce Solutions", icon: ShoppingCart, shortDesc: "Scalable online stores.", detail: generateGenericDetail("E-Commerce Solutions") },
      { id: "cms", name: "CMS Development", icon: LayoutDashboard, shortDesc: "Custom content management systems.", detail: generateGenericDetail("CMS Development") },
      { id: "portals", name: "Web Portals", icon: Layers, shortDesc: "Secure enterprise web portals.", detail: generateGenericDetail("Web Portals") },
    ]
  },
  {
    id: "design",
    category: "Design",
    items: [
      { id: "ui-ux", name: "UI/UX Design", icon: PenTool, shortDesc: "User-centric interface design.", detail: generateGenericDetail("UI/UX Design") },
      { id: "prototyping", name: "Prototyping", icon: PenLine, shortDesc: "Interactive wireframes and mockups.", detail: generateGenericDetail("Prototyping") },
      { id: "brand", name: "Brand Identity", icon: Palette, shortDesc: "Comprehensive branding strategies.", detail: generateGenericDetail("Brand Identity") },
      { id: "product", name: "Product Design", icon: Box, shortDesc: "End-to-end digital product design.", detail: generateGenericDetail("Product Design") },
      { id: "graphic", name: "Graphic Design", icon: ImageIcon, shortDesc: "Stunning visual assets.", detail: generateGenericDetail("Graphic Design") },
    ]
  },
  {
    id: "marketing",
    category: "Marketing & Advertising",
    items: [
      { id: "seo", name: "SEO Optimization", icon: Search, shortDesc: "Dominate search engine rankings.", detail: seoDetail },
      { id: "digital", name: "Digital Marketing", icon: TrendingUp, shortDesc: "Data-driven growth marketing.", detail: generateGenericDetail("Digital Marketing") },
      { id: "social", name: "Social Media Marketing", icon: Share2, shortDesc: "Engaging social campaigns.", detail: generateGenericDetail("Social Media Marketing") },
      { id: "ppc", name: "PPC Advertising", icon: MousePointerClick, shortDesc: "High-ROI paid search and social.", detail: generateGenericDetail("PPC Advertising") },
      { id: "content", name: "Content Marketing", icon: FileText, shortDesc: "Valuable content that converts.", detail: generateGenericDetail("Content Marketing") },
      { id: "email", name: "Email Marketing", icon: Mail, shortDesc: "Automated retention campaigns.", detail: generateGenericDetail("Email Marketing") },
    ]
  },
  {
    id: "tech",
    category: "Latest Tech",
    items: [
      { id: "ai", name: "AI Development", icon: Brain, shortDesc: "Intelligent AI-driven workflows.", detail: generateGenericDetail("AI Development") },
      { id: "ml", name: "Machine Learning", icon: Network, shortDesc: "Predictive models and data science.", detail: generateGenericDetail("Machine Learning") },
      { id: "generative", name: "Generative AI", icon: Sparkles, shortDesc: "LLMs and custom generative models.", detail: generateGenericDetail("Generative AI") },
      { id: "chatbot", name: "Chatbot Development", icon: MessageSquare, shortDesc: "Conversational AI assistants.", detail: generateGenericDetail("Chatbot Development") },
      { id: "blockchain", name: "Blockchain Solutions", icon: Blocks, shortDesc: "Secure decentralized apps (dApps).", detail: generateGenericDetail("Blockchain Solutions") },
      { id: "iot", name: "IoT Development", icon: Cpu, shortDesc: "Connected devices and ecosystems.", detail: generateGenericDetail("IoT Development") },
    ]
  },
  {
    id: "business",
    category: "Business & IT Services",
    items: [
      { id: "consulting", name: "IT Consulting", icon: Users, shortDesc: "Strategic technology roadmaps.", detail: generateGenericDetail("IT Consulting") },
      { id: "cloud", name: "Cloud Computing", icon: CloudLightning, shortDesc: "AWS, Azure, and GCP migrations.", detail: generateGenericDetail("Cloud Computing") },
      { id: "cyber", name: "Cybersecurity", icon: ShieldCheck, shortDesc: "Enterprise-grade threat protection.", detail: generateGenericDetail("Cybersecurity") },
      { id: "data", name: "Data Analytics", icon: BarChart, shortDesc: "Actionable business intelligence.", detail: generateGenericDetail("Data Analytics") },
      { id: "devops", name: "DevOps Services", icon: GitMerge, shortDesc: "CI/CD pipelines and automation.", detail: generateGenericDetail("DevOps Services") },
      { id: "managed", name: "Managed IT Services", icon: Settings, shortDesc: "24/7 IT infrastructure support.", detail: generateGenericDetail("Managed IT Services") },
    ]
  }
];
