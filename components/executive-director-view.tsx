import Image from "next/image";
import { executiveDirector } from "@/data/executive-director";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";

export function ExecutiveDirectorView() {
  return (
    <>
      <PageBanner title="Executive Director" />
      <section className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[minmax(16rem,22rem)_1fr] lg:gap-12 lg:px-8 lg:py-16">
        <Reveal>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl bg-[#efecea] shadow-[0_18px_50px_-28px_rgba(20,20,20,0.55)] ring-1 ring-black/5">
            <Image
              src={executiveDirector.photo}
              alt={executiveDirector.name}
              fill
              priority
              sizes="(min-width: 1024px) 22rem, 100vw"
              className="object-cover object-center"
            />
          </div>
        </Reveal>
        <Reveal delay={0.04}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {executiveDirector.name}
          </h2>
          <p className="mt-2 text-lg font-semibold text-bni">
            {executiveDirector.role}
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75 sm:text-lg">
            {executiveDirector.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
