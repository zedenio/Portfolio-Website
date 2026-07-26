"use client";

import Link from "next/link";
import type { SectionProps } from "@/types";

export function Hero({ className }: SectionProps) {
  return (
    <section
      id="hero"
      className={`flex min-h-screen items-center justify-center px-6 ${className ?? ""}`}
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <p
          className="text-[0.95rem] font-medium uppercase"
          style={{
            fontFamily: "var(--font-general)",
            letterSpacing: "0.35em",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          Hello, I&apos;m
        </p>
        <h1
          className="font-bold"
          style={{
            fontFamily: "var(--font-clash)",
            fontSize: "clamp(5rem, 10vw, 8rem)",
            letterSpacing: "-0.06em",
            lineHeight: 0.9,
            color: "#FFFFFF",
          }}
        >
          Your Name
        </h1>
        <p
          className="mt-2 text-[1.25rem]"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          Full-Stack Developer
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 text-sm font-medium text-white transition-all duration-300 ease-out hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(255,59,48,0.35)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{
              fontFamily: "var(--font-general)",
              backgroundColor: "rgba(255,59,48,0.15)",
              border: "1px solid rgba(255,59,48,0.3)",
            }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              View Projects
            </span>
            <span className="absolute inset-0 rounded-full bg-[#ff3b30] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          <Link
            href="/contact"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 text-sm font-medium text-white/80 transition-all duration-300 ease-out hover:scale-[1.04] hover:text-white hover:shadow-[0_0_24px_rgba(255,255,255,0.1)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{
              fontFamily: "var(--font-general)",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}
