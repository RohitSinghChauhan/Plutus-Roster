import { siteName, rosterTitle } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 pb-28 text-sm text-ink/70 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:pb-8">
        <p className="font-semibold text-ink">Copyright © {new Date().getFullYear()} {siteName}. All rights reserved.</p>
        <p>{rosterTitle}</p>
      </div>
    </footer>
  );
}
