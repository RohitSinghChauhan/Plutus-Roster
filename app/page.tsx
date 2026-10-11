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
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skeletonKeys.map((key) => (
          <div
            key={key}
            className="aspect-[3/4] animate-pulse rounded-3xl bg-white"
          />
        ))}
      </div>
    </section>
  );
}

const skeletonKeys = ["a", "b", "c", "d", "e", "f"];
