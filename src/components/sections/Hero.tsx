"use client";

import Link from "next/link";
import type { SectionProps } from "@/types";
import LogoLoop from "@/components/ui/LogoLoop/LogoLoop";

const logos = [
  { src: "/logos/blender.svg", alt: "Blender" },
  { src: "/logos/maya.svg", alt: "Maya" },
  { src: "/logos/photoshop.svg", alt: "Adobe Photoshop" },
  { src: "/logos/illustrator.svg", alt: "Adobe Illustrator" },
  { src: "/logos/after-effects.svg", alt: "Adobe After Effects" },
  { src: "/logos/premiere-pro.svg", alt: "Adobe Premiere Pro" },
  { src: "/logos/audition.svg", alt: "Adobe Audition" },
  { src: "/logos/aseprite.svg", alt: "Aseprite" },
  { src: "/logos/canva.svg", alt: "Canva" },
  { src: "/logos/vscode.svg", alt: "Visual Studio Code" },
];

export function Hero({ className }: SectionProps) {
  return (
    <section
      id="hero"
      className={`flex min-h-screen items-center justify-center px-6 py-20 ${className ?? ""}`}
    >
      <div className="flex w-full max-w-4xl flex-col items-center gap-8 text-center">
        {/* 1. HELLO, I'M */}
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

        {/* 2. Creating immersive digital experiences. */}
        <h1
          className="font-bold text-balance"
          style={{
            fontFamily: "var(--font-clash)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
            color: "#FFFFFF",
          }}
        >
          Creating immersive digital experiences.
        </h1>

        {/* 3. 3D Artist • Graphic Designer • Video Editor • Frontend Developer */}
        <p
          className="max-w-2xl text-[1.1rem] sm:text-[1.25rem] text-balance"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          3D Artist • Graphic Designer • Video Editor • Frontend Developer
        </p>

        {/* 4. Logo Loop */}
        <div className="my-4 w-full max-w-3xl overflow-hidden py-4">
          <LogoLoop
            logos={logos}
            speed={60}
            direction="left"
            logoHeight={44}
            gap={48}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Software & Tools"
          />
        </div>

        {/* 5. View Projects & 6. Contact Me */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
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
