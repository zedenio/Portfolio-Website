"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SwitchButton from "@/components/ui/SwitchButton";
import { useGate } from "@/components/project-gate/GateContext";

interface NavItem {
  name: string;
}

interface MorphicNavbarProps {
  items?: Record<string, NavItem>;
  className?: string;
}

const NAV_ITEMS: Record<string, NavItem> = {
  "/": { name: "HOME" },
  "/projects": { name: "PROJECTS" },
  "/blog": { name: "BLOG" },
  "/about": { name: "ABOUT" },
};

export function MorphicNavbar({
  items = NAV_ITEMS,
  className,
}: MorphicNavbarProps) {
  const pathname = usePathname();
  const { hasEntered, requestGate } = useGate();

  const isActiveLink = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path === "/projects" && !hasEntered) {
      e.preventDefault();
      requestGate();
    }
  };

  const entries = Object.entries(items);

  return (
    <header className="fixed top-7 z-50 w-full">
      <nav className={clsx("flex justify-center", className)}>
        <div className="flex items-center gap-4">
          <div className="glass flex items-center justify-between overflow-hidden rounded-full">
            {entries.map(([path, { name }], index, array) => {
              const isActive = isActiveLink(path);
              const isFirst = index === 0;
              const isLast = index === array.length - 1;
              const prevPath = index > 0 ? array[index - 1][0] : null;
              const nextPath =
                index < array.length - 1 ? array[index + 1][0] : null;

              return (
                <Link
                  className={clsx(
                    "flex items-center justify-center px-3 py-1 text-[0.7rem] font-bold transition-all duration-300",
                    isActive
                      ? "mx-1 rounded-full bg-[#111111] px-2.5 text-[#FFFFFF] dark:bg-[#FFFFFF] dark:text-[#000000]"
                      : clsx(
                          "text-[#111111] dark:text-[#FFFFFF]",
                          (isActiveLink(prevPath || "") || isFirst) &&
                            "rounded-l-full",
                          (isActiveLink(nextPath || "") || isLast) &&
                            "rounded-r-full"
                        )
                  )}
                  href={path}
                  key={path}
                  onClick={(e) => handleNavClick(e, path)}
                  style={{ fontFamily: "var(--font-clash)" }}
                >
                  {name}
                </Link>
              );
            })}
          </div>

          <SwitchButton
            className="glass h-8 w-8 rounded-full"
            size="sm"
            showLabel={false}
          />
        </div>
      </nav>
    </header>
  );
}

export { MorphicNavbar as Navbar };
export default MorphicNavbar;
