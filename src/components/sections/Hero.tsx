"use client";

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
      </div>
    </section>
  );
}
