"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

interface ScrollRevealOptions {
  animationType: "reveal-up" | "fade-in" | "stagger-up";
  delay?: number;
  duration?: number;
  staggerDelay?: number;
}

export function useScrollReveal({
  animationType,
  delay = 0,
  duration = 800,
  staggerDelay = 120,
}: ScrollRevealOptions) {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isReduced) {
      if (animationType === "stagger-up") {
        const items = container.querySelectorAll(".reveal-item");
        items.forEach((item: HTMLElement) => {
          item.style.opacity = "1";
          item.style.transform = "none";
        });
      } else {
        container.style.opacity = "1";
        container.style.transform = "none";
      }
      return;
    }

    // Set initial state before observer fires to avoid FOUC
    if (animationType === "stagger-up") {
      const items = container.querySelectorAll(".reveal-item");
      items.forEach((item: HTMLElement) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
      });
    } else if (animationType === "reveal-up") {
      container.style.opacity = "0";
      container.style.transform = "translateY(40px)";
    } else if (animationType === "fade-in") {
      container.style.opacity = "0";
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(container);

          if (animationType === "reveal-up") {
            anime({
              targets: container,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: duration,
              delay: delay,
              easing: "easeOutExpo",
            });
          } else if (animationType === "fade-in") {
            anime({
              targets: container,
              opacity: [0, 1],
              duration: duration,
              delay: delay,
              easing: "linear",
            });
          } else if (animationType === "stagger-up") {
            const items = container.querySelectorAll(".reveal-item");
            anime({
              targets: items,
              opacity: [0, 1],
              translateY: [30, 0],
              duration: duration,
              delay: anime.stagger(staggerDelay, { start: delay }),
              easing: "easeOutExpo",
            });
          }
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [animationType, delay, duration, staggerDelay]);

  return containerRef;
}
