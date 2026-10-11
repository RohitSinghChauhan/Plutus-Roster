"use client";

import { X } from "lucide-react";
import { useLenis } from "lenis/react";
import { useEffect, useId, useRef } from "react";

type ProfileDialogProps = {
  open: boolean;
  name: string;
  role: string;
  message: readonly string[];
  onClose: () => void;
};

export function ProfileDialog({
  open,
  name,
  role,
  message,
  onClose,
}: ProfileDialogProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    lenis?.stop();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      lenis?.start();
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [open, onClose, lenis]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close details"
        className="absolute inset-0 bg-charcoal/70"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[min(40rem,calc(100dvh-4.5rem))] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
        data-lenis-prevent
      >
        <button
          ref={closeRef}
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 grid size-10 place-items-center rounded-lg text-ink/70 transition hover:bg-black/5 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bni"
        >
          <X className="size-5" />
        </button>
        <h2 id={titleId} className="pr-10 text-3xl font-bold tracking-tight">
          {name}
        </h2>
        <p className="mt-2 text-lg font-semibold text-bni">{role}</p>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
          {message.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
