import TestimonialStack from "./TestimonialStack";

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-20 md:pt-56 md:pb-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — eyebrow + headline + bio */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-dim">
              Portfolio / {new Date().getFullYear()} — Static Design
            </p>
            <h1 className="font-display text-[14vw] leading-[0.9] tracking-tightest md:text-[9vw] lg:text-[6.5vw]">
              Scroll-stopping
              <br />
              <span className="italic text-dim">static ads</span> that
              <br />
              move product.
            </h1>

            <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-line pt-6 md:flex-row md:items-end">
              <p className="max-w-xl text-balance text-base leading-relaxed text-bone/80 md:text-lg">
                I&apos;m Paul — a static designer making ad creatives for DTC
                brands across hair care, skin care, supplements, pain relief,
                safety, and art. Direct-response fundamentals. Built for the
                feed.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-bone px-8 py-3 text-xs uppercase tracking-[0.2em] text-ink transition hover:bg-white"
                >
                  See work ↓
                </a>
              </div>
            </div>
          </div>

          {/* Right — stacked testimonial videos, top-aligned with left eyebrow */}
          <div className="flex justify-start lg:justify-end">
            <TestimonialStack />
          </div>
        </div>
      </div>
    </section>
  );
}
