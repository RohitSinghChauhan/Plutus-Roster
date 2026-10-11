"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteName } from "@/lib/site";

type SectionPageProps = {
  title: string;
  summary: string;
};

export function SectionPage({ title, summary }: SectionPageProps) {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative overflow-hidden bg-charcoal text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(207,32,48,0.4),transparent_50%)]" />
        <motion.div
          className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
            {siteName}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            {title}
          </h1>
        </motion.div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <p className="text-base leading-relaxed text-ink/75 sm:text-lg">{summary}</p>
      </section>
    </>
  );
}
