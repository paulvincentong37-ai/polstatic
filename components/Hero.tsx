export default function Hero({ workCount }: { workCount: number }) {
  return (
    <section id="top" className="relative pt-40 pb-20 md:pt-56 md:pb-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-dim">
          Portfolio / {new Date().getFullYear()} — Static Design
        </p>
        <h1 className="font-display text-[14vw] leading-[0.9] tracking-tightest md:text-[9vw] lg:text-[8vw]">
          Scroll-stopping
          <br />
          <span className="italic text-dim">static ads</span> that
          <br />
          move product.
        </h1>
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-line pt-6 md:flex-row md:items-end">
          <p className="max-w-xl text-balance text-base leading-relaxed text-bone/80 md:text-lg">
            I'm Paul — a static designer making ad creatives for DTC brands
            across hair care, supplements, pain relief, safety, and art.
            Direct-response fundamentals. Hook-first composition. Built for the
            feed.
          </p>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-dim">
            <span>{workCount} selected works</span>
            <span className="hidden h-px w-16 bg-line md:block" />
            <a className="hover:text-accent" href="#work">
              See work ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
