"use client";

import { BadgeCheck, Crown, Headset, MapPinned, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { navItems, type NavHref } from "@/data/navigation";
import { siteName } from "@/lib/site";
import { MemberSearch } from "@/components/member-search";

const navIcons: Record<NavHref, LucideIcon> = {
  "/executive-director": Crown,
  "/area-director": MapPinned,
  "/support-team": Headset,
  "/lt-7": BadgeCheck,
};

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_10px_30px_-24px_rgba(0,0,0,0.7)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <Link
          href="/"
          aria-label={siteName}
          className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bni focus-visible:ring-offset-2"
        >
          <Image
            src="/assets/BNI_PLUTUS_logo_600w.png"
            alt={siteName}
            width={600}
            height={112}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center justify-center gap-1 lg:flex lg:flex-1"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-semibold whitespace-nowrap transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bni focus-visible:ring-offset-2 ${
                  active
                    ? "bg-bni/10 text-bni"
                    : "text-ink/80 hover:bg-black/5 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="w-full lg:w-56 lg:shrink-0">
          <Suspense fallback={<div className="h-10 rounded-lg bg-mist" />}>
            <MemberSearch />
          </Suspense>
        </div>
      </div>
    </header>
  );
}

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="grid grid-cols-4">
        {navItems.map((item) => {
          const Icon = navIcons[item.href];
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-16 flex-col items-center justify-center gap-1 px-1 py-2 text-[11px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bni ${
                  active ? "text-bni" : "text-ink/55"
                }`}
              >
                <span
                  className={`grid size-8 place-items-center rounded-2xl ${
                    active ? "bg-bni/10" : ""
                  }`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                {item.shortLabel}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
