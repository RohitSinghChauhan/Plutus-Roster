import { Globe } from "lucide-react";
import type { ReactNode } from "react";
import type { SocialPlatform } from "@/data/home";

type SocialIconProps = {
  platform: SocialPlatform;
  className?: string;
};

export function SocialIcon({ platform, className }: SocialIconProps) {
  if (platform === "website") {
    return <Globe className={className} aria-hidden="true" />;
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[platform]}
    </svg>
  );
}

const paths: Record<Exclude<SocialPlatform, "website">, ReactNode> = {
  instagram: (
    <>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </>
  ),
  facebook: (
    <path
      fill="currentColor"
      d="M14.6 21v-7.1h2.4l.4-2.8h-2.8V9.3c0-.8.2-1.4 1.5-1.4h1.5V5.1h-2.5C12.2 5.1 11 6.5 11 9v2.1H8.6v2.8H11V21h3.6z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M6.7 9H4.2V20h2.5V9zM5.4 4a1.55 1.55 0 1 0 .02 3.1A1.55 1.55 0 0 0 5.4 4zM20 20h-2.5v-5.5c0-1.7-.6-2.5-1.8-2.5-1.1 0-1.8.8-1.8 2.6V20H11.4V9H13.8v1.3c.5-.9 1.7-1.6 3.2-1.6 2.3 0 4 1.5 4 4.6V20z"
    />
  ),
  youtube: (
    <path
      fill="currentColor"
      d="M22 12.2s0-3-.4-4.4c-.2-.9-.9-1.6-1.8-1.8C18.3 5.6 12 5.6 12 5.6s-6.3 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9.2 2 12.2 2 12.2s0 3 .4 4.4c.2.9.9 1.6 1.8 1.8 1.5.4 7.8.4 7.8.4s6.3 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.4.4-4.4zM10 15.4v-6.4l5.2 3.2L10 15.4z"
    />
  ),
};
