"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import type { NavItem } from "@/types";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item: NavItem) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {siteConfig.navigation.map((item: NavItem) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
