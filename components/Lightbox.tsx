"use client";

import Image from "next/image";
import type { Work } from "./WorkGrid";

type Props = {
  work: Work;
  index: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({
  work,
  index,
  total,
  onClose,
  onNext,
  onPrev,
}: Props) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={work.title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 text-xs uppercase tracking-[0.2em] text-dim md:px-8">
        <span>
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close"
          className="rounded-full border border-line px-3 py-1.5 transition hover:border-bone hover:text-bone"
        >
          Close ✕
        </button>
      </div>

      {/* Prev / Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-line p-3 text-dim transition hover:border-bone hover:text-bone md:left-8"
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-line p-3 text-dim transition hover:border-bone hover:text-bone md:right-8"
      >
        →
      </button>

      {/* Content */}
      <div
        className="relative mx-auto flex max-h-[90vh] max-w-6xl flex-col items-center gap-6 overflow-auto px-5 py-16 md:flex-row md:items-start md:gap-10 md:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-w-[720px] shrink-0 md:w-3/5">
          <Image
            src={`/images/${encodeURIComponent(work.filename)}`}
            alt={work.title}
            width={1600}
            height={1600}
            sizes="(min-width: 768px) 60vw, 100vw"
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="w-full md:w-2/5 md:pt-2">
          <p className="text-[10px] uppercase tracking-[0.25em] text-dim">
            {work.category} · {work.client}
          </p>
          <h3 className="mt-3 font-display text-3xl leading-[1.05] tracking-tighter md:text-4xl">
            {work.title}
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-bone/85 md:text-base">
            {work.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-dim">
            <span className="rounded-full border border-line px-3 py-1.5">
              {work.category}
            </span>
            <span className="rounded-full border border-line px-3 py-1.5">
              {work.client}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
