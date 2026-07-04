"use client";

import { motion } from "framer-motion";
import { FADE_UP, GRADIENT_TEXT } from "@/lib/design";

const allTechs = [
  { name: "Next.js", color: "#000000" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python", color: "#3776AB" },
  { name: "Django", color: "#092E20" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "OpenAI", color: "#412991" },
  { name: "Claude", color: "#D97757" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Flutter", color: "#02569B" },
  { name: "Tailwind CSS", color: "#06B6D4" },
];

function TechIcon({ name }: { name: string }) {
  const s = 24;
  switch (name) {
    case "Next.js":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" fill="currentColor"/><path d="M17.2 18.4 9.6 8H8v8h1.2V9.7l6.8 9.4a10 10 0 0 0 1.2-.7Z" fill="var(--color-light-gray)"/><path d="M16.1 8h-1.2v8h1.2V8Z" fill="var(--color-light-gray)"/></svg>);
    case "React":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.2" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/></svg>);
    case "Node.js":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 5.2v10.4L12 22l-9-5.2V7.2L12 2Zm0 2.3L5 9v6l7 4.7L19 15V9l-7-4.7Z"/><path d="M12 8v8m-3.5-6L12 8l3.5 2" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>);
    case "TypeScript":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor"/><text x="12" y="17" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">TS</text></svg>);
    case "Python":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 2c-2 0-3.6.4-4.7 1.1C6 4 5.5 5.2 5.5 6.5V8.5h6.5v1h-9C2 9.5 1 11.6 1 14s.8 4.3 2.8 4.5H5.5v-2.3c0-1.8 1.5-3.2 3.2-3.2h6.6c1.5 0 2.7-1.2 2.7-2.7V6.5C18 4.2 15.5 2 12 2Zm-3.2 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="currentColor"/><path d="M12 22c2 0 3.6-.4 4.7-1.1C18 20 18.5 18.8 18.5 17.5V15.5H12v-1h9c1 0 2-2.1 2-4.5s-.8-4.3-2.8-4.5H18.5v2.3c0 1.8-1.5 3.2-3.2 3.2H8.7C7.2 11 6 12.2 6 13.7v3.8C6 19.8 8.5 22 12 22Zm3.2-2.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="currentColor" opacity="0.7"/></svg>);
    case "Django":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M4 2h4v14.5c-2.1-.4-4-1.3-4-3.5V2Zm0 16c1 1 2.5 1.5 4 1.5V22H4v-4Zm7-16h4v20h-4V2Zm7 0h4v4h-4V2Zm0 6h4v7c0 3-2 4.5-4 5v-3c1-.5 2-1.5 2-3V8h-2Z"/></svg>);
    case "PostgreSQL":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="7" rx="8" ry="4" stroke="currentColor" strokeWidth="1.5"/><path d="M4 7v5c0 2.2 3.6 4 8 4s8-1.8 8-4V7" stroke="currentColor" strokeWidth="1.5"/><path d="M4 12v5c0 2.2 3.6 4 8 4s8-1.8 8-4v-5" stroke="currentColor" strokeWidth="1.5"/></svg>);
    case "OpenAI":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M20.7 10.3a5.1 5.1 0 0 0-.4-4.2A5.2 5.2 0 0 0 14.6 3a5.2 5.2 0 0 0-3.9-1.7 5.2 5.2 0 0 0-5 3.6 5.1 5.1 0 0 0-3.4 2.5 5.2 5.2 0 0 0 .6 5.9 5.1 5.1 0 0 0 .4 4.2A5.2 5.2 0 0 0 9.4 21a5.2 5.2 0 0 0 3.9 1.7 5.2 5.2 0 0 0 5-3.6 5.1 5.1 0 0 0 3.4-2.5 5.2 5.2 0 0 0-.6-5.9ZM12 16l-4-2.3V9.3L12 7l4 2.3v4.4L12 16Z"/></svg>);
    case "Claude":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4" fill="white"/><path d="M12 2a10 10 0 0 1 7 3L12 12V2Z" fill="currentColor" opacity="0.7"/></svg>);
    case "AWS":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M6.7 15.5c-1.7-.9-2.9-2-3.6-3.1.5-.1 1.5-.2 3-.1l.6-1.2c-2-.2-3.5 0-4.4.3A8 8 0 0 1 1 8.5l.5-.4c1.3.9 3.7 2.3 8 3.3 3 .7 6.5 1 10 .6l.3.8c-3.9 2.4-8.7 3.6-13.1 2.7Z"/><path d="M19 14.7c-.7.7-2.3 1.5-3.5 1.7l.4 1s1.7-.3 3.4-1.3c.3-.2.5-.1.3.2-.7 1-3.3 3.2-7.5 2.3l-.2 1c4.6 1 8-1.3 9-2.7.4-.6.1-1.4-1.9-1.2Z"/><path d="M8.4 12.4 7 8.8l-1.5 3.6h-.9L6.5 7h1l1.3 3.5L10 7h1l2 5.4h-1L10.7 9 9.3 12.4h-.9Zm6.3-2.4h3v.8h-3v1.6h3.2v.8H14V7h4v.8h-3.2v2.2Z"/></svg>);
    case "Docker":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M13 3h2v2h-2V3Zm-3 0h2v2h-2V3ZM7 3h2v2H7V3Zm6 3h2v2h-2V6Zm-3 0h2v2h-2V6ZM7 6h2v2H7V6ZM4 6h2v2H4V6Zm6 3h2v2h-2V9ZM7 9h2v2H7V9ZM4 9h2v2H4V9Zm-3 0h2v2H1V9Zm21 1c-.7-.5-2.3-.6-3.5-.3-.2-1.2-.8-2.2-1.6-3l-.5-.4-.4.5c-.5.7-.8 1.7-.7 2.6 0 .4.1.9.3 1.3-.5.3-1.4.5-2.6.5H0l-.1.7c-.1 1.4.1 2.9.7 4.2.7 1.4 1.7 2.4 3 3C5.5 20 7.7 20.5 10 20.5c5 0 9-2 11.4-6.1 1.1 0 3.3 0 4.4-2.2l.2-.4-.4-.3Z"/></svg>);
    case "MongoDB":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 2.1c-.2.6-.5 1-1 1.5C10 5.3 9.2 7.2 9.1 9.4c0 .8.1 1.5.4 2.2.1.2 0 .3-.1.5-.8 1.2-1.1 2.6-1.2 4-.1 2 .4 3.8 1.4 5.4.2.3.4.7.6 1l.2.5h.5c.1-.6.2-1.1.2-1.7.2-1.4.1-2.7 0-4.1 0-.3 0-.4.3-.5 1-.3 1.6-.9 2-1.9.5-1.3.3-2.5-.2-3.7-.3-.7-.8-1.2-1.2-1.8-.3-.4-.3-.4-.1-.9.5-1.2.7-2.4.7-3.7V3.4c0-.5-.1-.9-.1-1.3Z"/></svg>);
    case "Flutter":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M14.3 2 4 12.3l3.2 3.2L21.5 2h-7.2Zm0 9.5L9.2 16.7l3.2 3.2 1.9-1.8L9.2 23h7.2l5-5.1-7.1-6.4Z"/></svg>);
    case "Tailwind CSS":
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.7.2 1.3.8 1.8 1.3.9 1 2 2.2 4.2 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.7-.2-1.3-.8-1.8-1.3C15.3 7.2 14.2 6 12 6ZM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.7.2 1.3.8 1.8 1.3.9 1 2 2.2 4.2 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.7-.2-1.3-.8-1.8-1.3C10.3 13.2 9.2 12 7 12Z"/></svg>);
    default:
      return (<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>);
  }
}

function MarqueeRow() {
  const items = [...allTechs, ...allTechs, ...allTechs, ...allTechs];
  return (
    <div className="relative flex overflow-hidden w-full group/marquee">
      <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-[var(--color-light-gray)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-[var(--color-light-gray)] to-transparent z-10 pointer-events-none"></div>
      <div className="flex animate-slide whitespace-nowrap group-hover/marquee:[animation-play-state:paused]">
        {items.map((tech, i) => (
          <div key={i} className="flex-shrink-0 px-2 md:px-3" aria-hidden={i >= allTechs.length}>
            <div
              className="flex items-center gap-2.5 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white border border-gray-200/80 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-default group/pill"
              style={{ "--tech-color": tech.color } as React.CSSProperties}
            >
              <span className="text-[var(--tech-color)] transition-colors duration-200">
                <TechIcon name={tech.name} />
              </span>
              <span className="text-sm md:text-[15px] font-bold text-[var(--color-navy)] group-hover/pill:text-[var(--tech-color)] transition-colors duration-200 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Technologies() {
  return (
    <section id="technologies" className="py-12 md:py-16 bg-[var(--color-light-gray)] overflow-hidden border-t border-b border-gray-200/50">
      <div className="container mx-auto px-6 md:px-12 mb-8 md:mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            {...FADE_UP}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-orange)]/10 text-[var(--color-orange)] font-bold text-xs uppercase tracking-widest mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-orange)] animate-pulse" aria-hidden="true" />
            Tech Stack Showcase
          </motion.div>

          <motion.h2
            {...FADE_UP}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)] tracking-tight leading-[1.1]"
          >
            Powered By{" "}
            <span className={GRADIENT_TEXT}>Modern Technologies</span>
          </motion.h2>
        </div>

        <motion.p
          {...FADE_UP}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm md:text-base text-gray-600 font-medium max-w-md text-center md:text-right"
        >
          We leverage best-in-class frameworks, AI platforms, and cloud infrastructure to deliver scalable enterprise solutions.
        </motion.p>
      </div>

      <div className="w-full">
        <MarqueeRow />
      </div>
    </section>
  );
}
