"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const VIDEOS = [
  { src: "/videos/testimonial-1.mp4", label: "Client Testimonial 1" },
  { src: "/videos/testimonial-2.mp4", label: "Client Testimonial 2" },
];

const CARD_W = 310;
const CARD_H = Math.round((CARD_W * 16) / 9);
const OFFSET = 16;

function VideoPlayer({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const revealControls = useCallback(() => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 2500);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => setProgress((v.currentTime / v.duration) * 100 || 0);
    const onMeta = () => setDuration(v.duration);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  // Global mouse-up ends drag even if cursor leaves the bar
  useEffect(() => {
    const onUp = () => setSeeking(false);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  const scrubTo = useCallback((clientX: number) => {
    const v = videoRef.current;
    const bar = progressBarRef.current;
    if (!v || !bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
    setProgress(ratio * 100);
  }, []);

  const onProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSeeking(true);
    revealControls();
    scrubTo(e.clientX);
  };

  const onProgressMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!seeking) return;
    scrubTo(e.clientX);
  };

  const onProgressTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    scrubTo(e.touches[0].clientX);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="relative h-full w-full"
      onMouseMove={revealControls}
      onMouseEnter={revealControls}
      onTouchStart={revealControls}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        playsInline
        loop
        onClick={togglePlay}
        className="h-full w-full cursor-pointer object-cover"
        title={label}
      />

      {/* Gradient overlay for controls legibility */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
          opacity: showControls ? 1 : 0,
        }}
      />

      {/* Controls overlay */}
      <div
        className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-3 pb-3 transition-opacity duration-300"
        style={{ opacity: showControls ? 1 : 0 }}
      >
        {/* Progress bar — tall hit area, thin visual track */}
        <div
          ref={progressBarRef}
          className="group flex h-5 w-full cursor-pointer items-center"
          onMouseDown={onProgressMouseDown}
          onMouseMove={onProgressMouseMove}
          onTouchStart={(e) => { setSeeking(true); scrubTo(e.touches[0].clientX); }}
          onTouchMove={onProgressTouchMove}
        >
          <div className="relative h-1 w-full rounded-full bg-white/25 group-hover:h-1.5 transition-all duration-150">
            <div
              className="h-full rounded-full bg-white"
              style={{ width: `${progress}%` }}
            />
            {/* Scrubber thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>
        </div>

        {/* Buttons row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Play / Pause */}
            <button
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Play"}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/35"
            >
              {playing ? (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-3.5 w-3.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Time */}
            {duration > 0 && (
              <span className="text-[10px] tabular-nums text-white/70">
                {fmt((progress / 100) * duration)} / {fmt(duration)}
              </span>
            )}
          </div>

          {/* Mute toggle */}
          <button
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/35"
          >
            {muted ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0017.73 18l1.99 2L21 18.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Big play/pause flash on click */}
      {!playing && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
            <svg viewBox="0 0 24 24" fill="white" className="ml-1 h-7 w-7">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

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
              key={video.src}
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
                <VideoPlayer key={autoplayKey} src={video.src} label={video.label} />
              ) : (
                <video
                  src={video.src}
                  className="h-full w-full object-cover"
                  preload="metadata"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination controls */}
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
