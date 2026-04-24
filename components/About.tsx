import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-dim">About</p>
          <div className="mt-6 overflow-hidden rounded-sm bg-line/30">
            <Image
              src="/images/Profile%202.png"
              alt="Paul — static ad designer"
              width={1024}
              height={1024}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="h-auto w-full grayscale transition duration-500 hover:grayscale-0"
              priority={false}
            />
          </div>
        </div>
        <div className="md:col-span-8">
          <h2 className="font-display text-4xl leading-[1.05] tracking-tighter md:text-6xl">
            Hi, I'm Paul. I make <em className="text-dim">static ads</em> that
            do the heavy lifting on the feed.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-bone/80 md:text-lg">
            <p>
              I design conversion-first creatives for direct-to-consumer brands
              — hair care, skin care, supplements, pain relief, safety, and art
              prints. Every frame is built to stop the scroll, carry one sharp
              idea, and survive compression.
            </p>
            <p>
              My work sits between brand and performance. I think in hooks,
              hierarchy, and retention. Then I hand over files that load fast,
              render clean on every placement, and make the click feel obvious.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
