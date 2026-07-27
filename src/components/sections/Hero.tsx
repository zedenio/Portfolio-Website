"use client";

import { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
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

const HEADING_TEXT = "YUKE STUDIOS.";

export function Hero({ className }: SectionProps) {
  const greetingRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const logoLoopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const tl = createTimeline({ defaults: { ease: "easeOutExpo" } });

    tl.add(greetingRef.current!, {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 600,
    });

    tl.add(
      headingRef.current!.querySelectorAll(".word"),
      {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 500,
        delay: stagger(70),
      },
      "-=200"
    );

    tl.add(
      logoLoopRef.current!,
      {
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 600,
      },
      "-=300"
    );
  }, []);

  const headingWords = HEADING_TEXT.split(" ");

  return (
    <section
      id="hero"
      className={`flex min-h-screen items-center justify-center px-6 py-20 ${className ?? ""}`}
    >
      <div className="flex w-full max-w-4xl flex-col items-center gap-5 text-center">
        {/* 1. WELCOME TO */}
        <p
          ref={greetingRef}
          className="text-[0.95rem] font-medium uppercase"
          style={{
            fontFamily: "var(--font-general)",
            letterSpacing: "0.35em",
            color: "var(--hero-greeting)",
            opacity: 0,
          }}
        >
          Welcome to
        </p>

        {/* 2. Main heading with word stagger */}
        <h1
          ref={headingRef}
          className="font-bold text-balance"
          style={{
            fontFamily: "var(--font-clash)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
            color: "var(--hero-heading)",
          }}
        >
          {headingWords.map((word, i) => (
            <span key={i} className="word-wrapper" style={{ overflow: "hidden", display: "inline-block" }}>
              <span
                className="word"
                style={{ display: "inline-block", opacity: 0 }}
              >
                {word}
                {i < headingWords.length - 1 ? "\u00A0" : ""}
              </span>
              {i === 0 && <br />}
            </span>
          ))}
        </h1>

        {/* 3. Logo Loop */}
        <div ref={logoLoopRef} className="mt-2 w-full max-w-3xl overflow-hidden py-2" style={{ opacity: 0 }}>
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

      </div>
    </section>
  );
}
