"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { supportTeam, type SupportMember } from "@/data/support-team";
import { PageBanner } from "@/components/page-banner";
import { ProfileDialog } from "@/components/profile-dialog";

export function SupportTeamView() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = supportTeam.find((member) => member.id === activeId) ?? null;
  const close = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <>
      <PageBanner title="Support Team" />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supportTeam.map((member) => (
            <li key={member.id}>
              <SupportCard member={member} onOpen={setActiveId} />
            </li>
          ))}
        </ul>
      </section>
      <ProfileDialog
        open={active !== null}
        name={active?.name ?? ""}
        role={active?.role ?? ""}
        message={active?.message ?? []}
        onClose={close}
      />
    </>
  );
}

function SupportCard({
  member,
  onOpen,
}: {
  member: SupportMember;
  onOpen: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(member.id)}
      className="group w-full overflow-hidden rounded-3xl border-2 border-bni/80 bg-white text-left shadow-[0_16px_40px_-28px_rgba(20,20,20,0.45)] transition duration-300 hover:-translate-y-1 hover:border-bni hover:shadow-[0_22px_50px_-24px_rgba(207,32,48,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bni focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/5] bg-[#efecea]">
        <Image
          src={member.photo}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="bg-bni px-4 py-3 text-center">
        <p className="text-lg font-semibold text-white">{member.name}</p>
        <p className="text-sm font-medium text-amber-200">{member.role}</p>
      </div>
    </button>
  );
}
