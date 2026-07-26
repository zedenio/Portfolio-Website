"use client";

import type { SectionProps } from "@/types";

export function Hero({ className }: SectionProps) {
  return (
    <section
      id="hero"
      className={`flex min-h-screen items-center justify-center px-6 ${className ?? ""}`}
    >
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Hello, I&apos;m
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Your Name
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          Full-Stack Developer
        </p>
      </div>
    </section>
  );
}
