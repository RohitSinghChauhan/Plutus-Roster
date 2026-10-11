import Image from "next/image";
import { areaDirector } from "@/data/area-director";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";

export function AreaDirectorView() {
  return (
    <>
      <PageBanner title="Area Director" />
      <section className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[minmax(16rem,22rem)_1fr] lg:gap-12 lg:px-8 lg:py-16">
        <Reveal>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl bg-[#efecea] shadow-[0_18px_50px_-28px_rgba(20,20,20,0.55)] ring-1 ring-black/5">
            <Image
              src={areaDirector.photo}
              alt={areaDirector.name}
              fill
              priority
              sizes="(min-width: 1024px) 22rem, 100vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
        <Reveal delay={0.04}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {areaDirector.name}
          </h2>
          <p className="mt-2 text-lg font-semibold text-bni">{areaDirector.role}</p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75 sm:text-lg">
            {areaDirector.blocks.map((block) => (
              <p
                key={block.text}
                className={
                  block.emphasis
                    ? "pt-2 text-lg font-extrabold tracking-wide text-ink"
                    : undefined
                }
              >
                {block.text}
              </p>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
