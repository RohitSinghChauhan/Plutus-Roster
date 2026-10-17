"use client";

import { useSearchParams } from "next/navigation";
import { members, type Member } from "@/data/home";
import { siteName } from "@/lib/site";
import { MemberCard } from "@/components/member-card";
import { Reveal } from "@/components/reveal";

function matches(member: Member, query: string) {
  const haystack =
    `${member.name} ${member.company} ${member.category} ${member.email} ${member.phone}`.toLowerCase();
  return haystack.includes(query);
}

export function MemberDirectory() {
  const params = useSearchParams();
  const query = (params.get("q") ?? "").trim().toLowerCase();
  const visible = query
    ? members.filter((member) => matches(member, query))
    : members;

  return (
    <section
      id="members"
      aria-labelledby="members-heading"
      className="scroll-mt-28 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bni">
          {siteName}
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="members-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Chapter Members
          </h2>
          <p className="text-sm font-medium text-ink/70" aria-live="polite">
            {query
              ? `${visible.length} of ${members.length} members`
              : `${members.length} members`}
          </p>
        </div>
      </Reveal>

      {visible.length > 0 ? (
        <ul className="mx-auto mt-10 flex w-full max-w-md flex-col gap-6 sm:max-w-lg">
          {visible.map((member, index) => (
            <li
              key={member.id}
              className="w-full [content-visibility:auto] [contain-intrinsic-size:auto_520px]"
            >
              <MemberCard member={member} index={index} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10 rounded-3xl border border-dashed border-black/15 bg-white px-6 py-16 text-center">
          <p className="text-lg font-semibold">No members match “{query}”.</p>
          <p className="mt-2 text-sm text-ink/70">
            Try a name, company, phone, or category.
          </p>
        </div>
      )}
    </section>
  );
}
