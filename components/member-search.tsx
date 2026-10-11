"use client";

import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";

export function MemberSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const query = params.get("q") ?? "";
  const [value, setValue] = useState(query);
  const [previousQuery, setPreviousQuery] = useState(query);
  const timer = useRef<number | null>(null);

  if (query !== previousQuery) {
    setPreviousQuery(query);
    setValue(query);
  }

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  function commit(next: string) {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }

    const term = next.trim();
    const href = term ? `/?q=${encodeURIComponent(term)}` : "/";

    if (pathname === "/" && term === query) {
      return;
    }

    if (pathname !== "/" && term === "" && query === "") {
      return;
    }

    if (pathname === "/") {
      router.replace(href, { scroll: false });
      return;
    }

    router.push(href);
  }

  function handleChange(next: string) {
    setValue(next);
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
    }
    timer.current = window.setTimeout(() => commit(next), 180);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    commit(value);
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full" role="search">
      <label htmlFor="member-search" className="sr-only">
        Search members
      </label>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink/50"
        aria-hidden="true"
      />
      <input
        id="member-search"
        type="search"
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Search Member.."
        enterKeyHint="search"
        autoComplete="off"
        className="h-10 w-full rounded-lg border border-black/10 bg-mist pl-9 pr-9 text-base text-ink outline-none transition placeholder:text-ink/45 focus:border-bni focus:bg-white focus:ring-2 focus:ring-bni/30"
      />
      {value ? (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => {
            setValue("");
            commit("");
          }}
          className="absolute right-1.5 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-md text-ink/60 transition hover:bg-black/5 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bni"
        >
          <X className="size-4" />
        </button>
      ) : null}
    </form>
  );
}
