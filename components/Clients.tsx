const clients = [
  "Kiierr",
  "Illumiflow",
  "Yemayá",
  "Kitty Queen",
  "Ketro",
  "LifeVac",
  "Tennis Prints",
  "Entrepreneur Coach",
  "Blissta",
];

export default function Clients() {
  // Duplicate for seamless marquee loop
  const track = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="border-t border-line py-20 md:py-28 overflow-hidden"
    >
      <div className="mx-auto mb-12 max-w-[1600px] px-6 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-dim">Clients</p>
        <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-tighter md:text-5xl">
          Brands I've made work for
        </h2>
      </div>
      <div className="relative">
        <div className="marquee-track flex min-w-max gap-16 px-6 md:gap-24 md:px-10">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-4xl italic tracking-tighter text-bone/80 md:text-6xl"
            >
              {name}
              <span className="mx-10 text-dim">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
