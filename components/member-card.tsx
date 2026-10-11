"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building, Mail, Phone } from "lucide-react";
import Image from "next/image";
import type { Member, SocialPlatform } from "@/data/home";
import { SocialIcon } from "@/components/social-icon";

const socialLabels: Record<SocialPlatform, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  website: "Website",
};

const PHONE_SEPARATORS = /[^\d+]/g;

type MemberCardProps = {
  member: Member;
  index: number;
};

export function MemberCard({ member, index }: MemberCardProps) {
  const reduce = useReducedMotion();
  const tel = `tel:${member.phone.replace(PHONE_SEPARATORS, "")}`;

  return (
    <motion.article
      className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_-28px_rgba(20,20,20,0.55)] ring-1 ring-black/5"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{
        duration: 0.28,
        delay: (index % 3) * 0.03,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="relative aspect-[4/5] bg-[#f3f0ee]">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-contain object-bottom"
          priority={index < 2}
        />
        <h3 className="absolute bottom-5 left-0 max-w-[92%] rounded-r-2xl bg-bni px-4 py-2.5 text-lg font-semibold leading-snug text-white shadow-md">
          {member.name}
        </h3>
      </div>

      <div className="flex flex-1 flex-col gap-3 border-l-4 border-bni px-5 py-5">
        <p className="text-sm text-ink/70">{member.category}</p>
        <p className="flex items-start gap-2 text-sm font-semibold text-ink">
          <Building className="mt-0.5 size-4 shrink-0 text-bni" aria-hidden="true" />
          <span>{member.company}</span>
        </p>
        <a
          href={tel}
          className="inline-flex items-center gap-2 text-sm font-medium text-ink transition hover:text-bni focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bni focus-visible:ring-offset-2"
        >
          <Phone className="size-4 shrink-0 text-bni" aria-hidden="true" />
          {member.phone}
        </a>
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-start gap-2 break-all text-sm font-medium text-ink transition hover:text-bni focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bni focus-visible:ring-offset-2"
        >
          <Mail className="mt-0.5 size-4 shrink-0 text-bni" aria-hidden="true" />
          {member.email}
        </a>

        <ul className="flex flex-wrap gap-2 pt-1">
          {member.socials.map((social) => (
            <li key={social.platform}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} on ${socialLabels[social.platform]}`}
                className="grid size-11 place-items-center rounded-full bg-bni text-white transition hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bni focus-visible:ring-offset-2"
              >
                <SocialIcon
                  platform={social.platform}
                  className={social.platform === "facebook" ? "size-6" : "size-5"}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="relative mt-auto h-24 rounded-2xl bg-[#fafafa] ring-1 ring-black/5">
          <Image
            src={member.logo}
            alt={`${member.company} logo`}
            fill
            sizes="240px"
            className="object-contain p-3"
          />
        </div>
      </div>
    </motion.article>
  );
}
