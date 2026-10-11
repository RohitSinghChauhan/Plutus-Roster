"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { rosterTitle, siteName } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(207,32,48,0.42),transparent_52%)]" />

      <motion.div
        className="relative mx-auto flex min-h-[calc(100svh-13.25rem)] max-w-7xl flex-col justify-center px-5 py-6 lg:min-h-[calc(100svh-5.5rem)] lg:px-8 lg:py-16"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
          {siteName}
        </p>
        <h1 className="mt-3 max-w-5xl text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:mt-4 sm:text-6xl lg:text-7xl xl:text-8xl">
          {rosterTitle}
        </h1>
        <motion.span
          className="mt-4 block h-1 w-16 origin-left rounded-full bg-bni sm:mt-6"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.28, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
          Thank you for your faith and trust in BNI. Every meeting, every 1-2-1,
          and every referral is a story in the making. A year from now, that
          story is yours to write.
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-white/70 lg:block"
        aria-hidden="true"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="size-6" />
      </motion.div>
    </section>
  );
}
