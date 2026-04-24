export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-dim">
          Let's work
        </p>
        <h2 className="mt-4 font-display text-[11vw] leading-[0.95] tracking-tightest md:text-[7vw]">
          Got a product that
          <br />
          <em className="text-dim">deserves</em> better ads?
        </h2>
        <a
          href="mailto:paulvincentong37@gmail.com"
          className="mt-10 inline-flex items-center gap-3 font-display text-3xl tracking-tighter text-bone underline decoration-dim decoration-1 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent md:text-5xl"
        >
          paulvincentong37@gmail.com
          <span aria-hidden>↗</span>
        </a>
        <p className="mt-6 max-w-lg text-sm text-bone/60 md:text-base">
          Projects, rosters, retainers — drop me a line. Typical reply within
          24 hours.
        </p>
      </div>
    </section>
  );
}
