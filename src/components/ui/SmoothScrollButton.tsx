"use client";

import { type ButtonHTMLAttributes, type ReactNode, useCallback } from "react";

interface SmoothScrollButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  children: ReactNode;
}

function smoothScrollTo(target: number) {
  const start = window.scrollY;
  const distance = target - start;
  const duration = 1000;
  let startTime: number | null = null;

  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
  }

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function SmoothScrollButton({
  href,
  children,
  onClick,
  ...props
}: SmoothScrollButtonProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;

      const id = href.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(y);
      }
    },
    [href, onClick]
  );

  return (
    <button
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
