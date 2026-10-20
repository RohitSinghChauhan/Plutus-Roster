import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { MemberDirectory } from "@/components/member-directory";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<DirectoryFallback />}>
        <MemberDirectory />
      </Suspense>
    </>
  );
}

function DirectoryFallback() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="h-8 w-56 animate-pulse rounded-full bg-black/10" />
      <div className="mx-auto mt-10 flex w-full max-w-md flex-col gap-6 sm:max-w-lg md:max-w-none md:gap-0">
        {skeletonKeys.map((key) => (
          <div
            key={key}
            className="aspect-[3/4] w-full animate-pulse rounded-3xl bg-white sm:aspect-[4/5] md:aspect-auto md:h-[240px] md:rounded-none md:border-b md:border-ink/25 md:py-8"
          />
        ))}
      </div>
    </section>
  );
}

const skeletonKeys = ["a", "b", "c", "d", "e", "f"];
