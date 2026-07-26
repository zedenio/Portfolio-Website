"use client";

import type { SectionProps } from "@/types";

export function Contact({ className }: SectionProps) {
  return (
    <section
      id="contact"
      className={`px-6 py-24 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mt-4 text-muted-foreground">
          Section content coming soon.
        </p>
      </div>
    </section>
  );
}
