"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteName } from "@/lib/site";

type PageBannerProps = {
  title: string;
  kicker?: string;
};

export function PageBanner({ title, kicker = siteName }: PageBannerProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(207,32,48,0.4),transparent_50%)]" />
      <motion.div
        className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
          {title}
        </h1>
      </motion.div>
    </section>
  );
}
