"use client";
import { useState, useEffect } from "react";
import { siteName, rosterTitle } from "@/lib/site";

export function SiteFooter() {
  const [year, setYear] = useState<number | string>("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 pb-28 text-sm text-ink/70 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:pb-8">
        <p className="font-semibold text-ink">Copyright © {year} {siteName}. All rights reserved.</p>
        <p>{rosterTitle}</p>
      </div>
    </footer>
  );
}
