"use client";

import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

export function ScrollTop() {
  const lenis = useLenis();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 520);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        if (lenis) {
          lenis.scrollTo(0);
          return;
        }
        window.scrollTo({ top: 0, behavior: "auto" });
      }}
      className={`fixed right-4 z-30 grid size-11 place-items-center rounded-full bg-bni text-white shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bni focus-visible:ring-offset-2 lg:right-8 ${
        visible
          ? "bottom-24 opacity-100 lg:bottom-8"
          : "pointer-events-none bottom-24 opacity-0"
      }`}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
