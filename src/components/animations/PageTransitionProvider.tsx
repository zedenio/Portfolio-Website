"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { animate } from "animejs";

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const containerRef = useRef<HTMLDivElement>(null);
  const [, startTransition] = useTransition();

  // Handle page mounting/entrance transitions
  useEffect(() => {
    setDisplayChildren(children);

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) {
      if (containerRef.current) {
        containerRef.current.style.opacity = "1";
        containerRef.current.style.transform = "none";
      }
      return;
    }

    if (containerRef.current) {
      animate(containerRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: "easeOutExpo",
      });
    }
  }, [pathname, children]);

  // Intercept normal Link clicks to play exit transition before navigating
  useEffect(() => {
    const handleTransitionNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (
        anchor &&
        anchor.href &&
        anchor.target !== "_blank" &&
        anchor.host === window.location.host &&
        !anchor.hash && // Allow standard browser behavior for hash links
        !e.metaKey &&
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        e.preventDefault();
        const href = anchor.getAttribute("href") || "/";

        const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (isReduced) {
          startTransition(() => {
            router.push(href);
          });
          return;
        }

        if (containerRef.current) {
          animate(containerRef.current, {
            opacity: [1, 0],
            duration: 250,
            easing: "linear",
            onComplete: () => {
              startTransition(() => {
                router.push(href);
              });
            },
          });
        }
      }
    };

    document.addEventListener("click", handleTransitionNavigation, true);
    return () => {
      document.removeEventListener("click", handleTransitionNavigation, true);
    };
  }, [router]);

  return (
    <div ref={containerRef} className="flex-1 flex flex-col w-full min-h-screen">
      {displayChildren}
    </div>
  );
}
