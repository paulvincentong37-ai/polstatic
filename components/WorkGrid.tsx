"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

export type Work = {
  id: string;
  filename: string;
  title: string;
  description: string;
  category: string;
  client: string;
};

export default function WorkGrid({ works }: { works: Work[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(works.map((w) => w.category))),
  ];

  const visible =
    filter === "All" ? works : works.filter((w) => w.category === filter);

  const open = useCallback((i: number) => setOpenIndex(i), []);
  const close = useCallback(() => setOpenIndex(null), []);

  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % visible.length));
  }, [visible.length]);

  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + visible.length) % visible.length
    );
  }, [visible.length]);

  useEffect(() => {
    if (openIndex === null) {
      document.body.classList.remove("no-scroll");
      return;
    }
    document.body.classList.add("no-scroll");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, next, prev]);

  return (
    <section id="work" className="border-t border-line py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-dim">
              Selected Work
            </p>
            <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-tighter md:text-5xl">
              {visible.length} creatives,{" "}
              <em className="text-dim">one thesis</em> — stop the scroll.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] transition ${
                    active
                      ? "border-bone bg-bone text-ink"
                      : "border-line text-bone/70 hover:border-bone/60 hover:text-bone"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <div className="masonry">
          {visible.map((w, i) => (
            <button
              key={w.id}
              onClick={() => open(i)}
              className="masonry-item group relative w-full overflow-hidden bg-line/40 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`${w.title} — open`}
            >
              <div className="relative aspect-square overflow-hidden md:aspect-auto">
                <Image
                  src={`/images/${encodeURIComponent(w.filename)}`}
                  alt={w.title}
                  width={1200}
                  height={1200}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="img-zoom h-auto w-full"
                />
              </div>
              <div className="caption-reveal pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/30 to-transparent p-5 md:p-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-dim">
                  {w.category} · {w.client}
                </span>
                <h3 className="mt-1.5 font-display text-xl leading-tight tracking-tighter md:text-2xl">
                  {w.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-xs text-bone/80 md:text-sm">
                  {w.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          work={visible[openIndex]}
          index={openIndex}
          total={visible.length}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  );
}
