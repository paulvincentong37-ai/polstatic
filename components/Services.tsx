const services = [
  {
    n: "01",
    title: "Static Ads",
    body: "1:1, 4:5, 9:16 ad creatives built for Meta, TikTok, Google, and native placements. Hook, body, proof, close.",
  },
  {
    n: "02",
    title: "Product-Led Creatives",
    body: "Hero shots, benefit stacks, and before/afters designed around a single, testable sales argument.",
  },
  {
    n: "03",
    title: "UGC & Mock Creatives",
    body: "iMessage mocks, lock-screen concepts, review grids, and other scroll-native formats that read as content, not ads.",
  },
  {
    n: "04",
    title: "Creative Variants & A/B Sets",
    body: "Full variant matrices — hooks, headlines, layouts, CTAs — shipped as a tested system, not one-off files.",
  },
  {
    n: "05",
    title: "Landing Page Creatives",
    body: "Above-the-fold hero sections, benefit strips, and review modules that match the ad promise on click.",
  },
  {
    n: "06",
    title: "Seasonal & Promo Design",
    body: "BOGO, Valentine's, Black Friday, flash sales — promo creatives that lift discovery without cheapening the brand.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-12 flex items-end justify-between gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-dim">
            Services
          </p>
          <h2 className="font-display text-3xl leading-[1.05] tracking-tighter md:text-5xl">
            What I can do for you
          </h2>
        </div>
        <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.n}
              className="group relative bg-ink p-8 transition-colors hover:bg-line/40 md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-dim">
                  {s.n}
                </span>
                <span className="text-dim transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl leading-tight tracking-tighter md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-bone/70 md:text-base">
                {s.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
