"use client";

import { useState } from "react";

const VIDEOS = [
  { id: "7dvVQ6a4KLU", label: "Client Testimonial 1" },
  { id: "p34NXftuVWE", label: "Client Testimonial 2" },
];

const CARD_W = 310;
const CARD_H = Math.round((CARD_W * 16) / 9); // 9:16 Shorts aspect
const OFFSET = 16; // depth offset per stacked card

export default function TestimonialStack() {
  const [active, setActive] = useState(0);
  const [autoplayKey, setAutoplayKey] = useState(0);
  const count = VIDEOS.length;

  const navigate = (idx: number) => {
    setActive(idx);
    setAutoplayKey((k) => k + 1);
  };

  const prev = () => navigate((active - 1 + count) % count);
  const next = () => navigate((active + 1) % count);

  const containerW = CARD_W + OFFSET * (count - 1);
  const containerH = CARD_H + OFFSET * (count - 1);

  return (
    <div className="flex flex-col items-start gap-6">
      <p className="text-[10px] uppercase tracking-[0.3em] text-dim">
        Client Testimonials
      </p>

      {/* Card stack */}
      <div className="relative" style={{ width: containerW, height: containerH }}>
        {VIDEOS.map((video, i) => {
          const stackPos = (i - active + count) % count;
          const isActive = stackPos === 0;
          const tx = stackPos * OFFSET;
          const ty = stackPos * OFFSET;
          const scale = 1 - stackPos * 0.03;
          const zIndex = count - stackPos;
          const opacity = 1 - stackPos * 0.18;

          return (
            <div
              key={video.id}
              className="absolute overflow-hidden rounded-2xl border border-line bg-ink transition-all duration-500 ease-out"
              style={{
                width: CARD_W,
                height: CARD_H,
                transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
                transformOrigin: "top left",
                zIndex,
                opacity,
              }}
            >
              {isActive ? (
                <iframe
                  key={autoplayKey}
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&playsinline=1&rel=0`}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title={video.label}
                  className="h-full w-full"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.label}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-sm text-dim transition hover:border-bone/50 hover:text-bone"
        >
          ←
        </button>

        <div className="flex items-center gap-1.5">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              onClick={() => navigate(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === active ? "w-5 bg-bone" : "w-1.5 bg-dim/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-sm text-dim transition hover:border-bone/50 hover:text-bone"
        >
          →
        </button>
      </div>
    </div>
  );
}
