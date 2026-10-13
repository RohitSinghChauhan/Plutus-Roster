import Image from "next/image";
import { leadershipTeam } from "@/data/lt-8";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";

export function LeadershipTeamView() {
  return (
    <>
      <PageBanner title="Leadership Team 8" kicker="Our Team" />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipTeam.map((leader, index) => (
            <li key={leader.id}>
              <Reveal delay={(index % 3) * 0.03} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_-28px_rgba(20,20,20,0.55)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-24px_rgba(207,32,48,0.35)]">
                  <div className="relative aspect-[4/5] bg-black">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover object-bottom"
                    />
                  </div>
                  <div className="border-t-4 border-bni px-5 py-5 text-center">
                    <h2 className="text-xl font-bold tracking-tight">{leader.name}</h2>
                    <p className="mt-1 text-sm font-semibold text-bni">{leader.role}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
