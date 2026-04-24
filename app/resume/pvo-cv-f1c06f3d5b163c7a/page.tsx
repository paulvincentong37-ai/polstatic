import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Resume — Paul Vincent Ong",
  description:
    "Graphic designer based in Zamboanga City. Experience, skills, tools, and contact.",
  robots: { index: false, follow: false },
};

const experience = [
  {
    company: "TheElixir LLC",
    role: "Graphic Designer",
    period: "Aug 2025 — Feb 2026",
    location: "Remote",
    bullets: [
      "Designed static ad creatives across 1:1, 4:5, and 9:16 formats for Meta, TikTok, and native placements.",
      "Shipped variant matrices — hooks, headlines, layouts, CTAs — tested as systems rather than one-offs.",
      "Owned seasonal and promo design for Halloween, BOGO, Black Friday, and flash sales without cheapening the brand.",
    ],
  },
  {
    company: "Zamboanga Valientes FC",
    role: "Graphic Designer",
    period: "Dec 2024 — July 2025",
    location: "Zamboanga City",
    bullets: [
      "Produced matchday posters, lineup graphics, and social assets for a Philippine Football League club.",
      "Built a reusable visual system to speed up weekly match and announcement output.",
    ],
  },
  {
    company: "City Government of Zamboanga",
    role: "Graphic Designer",
    period: "May 2024 — Feb 2025",
    location: "Zamboanga City",
    bullets: [
      "Designed public information materials — posters, tarpaulins, and social media graphics — for official city announcements.",
      "Collaborated with the comms team to maintain consistent civic branding across channels.",
    ],
  },
  {
    company: "Z Digital Prints",
    role: "Graphic Designer",
    period: "May 2024 — Feb 2025",
    location: "Zamboanga City",
    bullets: [
      "Prepared print-ready files for banners, signage, and large-format output.",
      "Handled client briefs end-to-end — concept, layout, proofing, and file handoff to production.",
    ],
  },
];

const skills = [
  "Graphic & Print Design",
  "Logo & Branding",
  "Illustration & Drawing",
  "Poster & Thumbnail Design",
];

const interests = ["Motion Graphics", "Video Editing", "Web Design"];

const tools = [
  "Photoshop",
  "Illustrator",
  "CapCut",
  "Claude",
  "Perplexity",
  "Google Flow",
  "Higgsfield",
];

const languages = [
  { name: "Filipino", level: "Native" },
  { name: "English", level: "Professional Working" },
  { name: "Spanish", level: "Elementary" },
];

export default function ResumePage() {
  return (
    <main className="relative">
      {/* Minimal top bar — no main nav links, keeps the page hidden from the site map */}
      <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/70 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.3em] text-dim transition-colors hover:text-bone"
          >
            ← POLSTATIC
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] text-dim">Resume</p>
        </div>
      </header>

      {/* Hero */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-line md:h-32 md:w-32">
            <Image
              src="/images/Profile 2.png"
              alt="Paul Vincent Ong"
              fill
              sizes="128px"
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-dim">
            Paul Vincent Ong
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tighter md:text-7xl lg:text-8xl">
            Graphic <em className="text-dim">Designer</em>
          </h1>
          <blockquote className="mt-10 max-w-3xl border-l border-line pl-6 font-display text-xl italic leading-snug text-bone/70 md:text-2xl">
            &ldquo;Design is not just what it looks like and feels like. Design
            is how it works.&rdquo;
            <cite className="mt-3 block not-italic text-xs uppercase tracking-[0.3em] text-dim">
              — Steve Jobs
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Contact strip */}
      <section className="border-t border-line py-10 md:py-14">
        <div className="mx-auto grid max-w-[1600px] gap-6 px-6 md:grid-cols-4 md:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-dim">
              Email
            </p>
            <a
              href="mailto:paulvincentong37@gmail.com"
              className="mt-2 block text-sm text-bone underline-offset-4 hover:underline md:text-base"
            >
              paulvincentong37@gmail.com
            </a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-dim">
              Portfolio
            </p>
            <a
              href="https://polstatic.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-sm text-bone underline-offset-4 hover:underline md:text-base"
            >
              polstatic.vercel.app
            </a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-dim">
              WhatsApp
            </p>
            <a
              href="https://wa.me/639565023945"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-sm text-bone underline-offset-4 hover:underline md:text-base"
            >
              +63 956 502 3945
            </a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-dim">
              Based in
            </p>
            <p className="mt-2 text-sm text-bone md:text-base">
              Zamboanga City, Philippines
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-dim">
              Experience
            </p>
            <h2 className="mt-6 font-display text-3xl leading-[1.05] tracking-tighter md:text-5xl">
              Work that <em className="text-dim">ships</em>.
            </h2>
          </div>
          <ol className="md:col-span-8">
            {experience.map((job, i) => (
              <li
                key={`${job.company}-${i}`}
                className="border-t border-line py-8 first:border-t-0 first:pt-0 md:py-10"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <h3 className="font-display text-2xl leading-tight tracking-tighter md:text-3xl">
                    {job.role}{" "}
                    <span className="text-dim">— {job.company}</span>
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-dim">
                    {job.period} · {job.location}
                  </p>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-bone/80 md:text-base">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-px w-4 shrink-0 bg-dim"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills / Interests / Tools / Languages */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-dim">
            Capabilities
          </p>
          <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-tighter md:text-5xl">
            What I <em className="text-dim">bring</em>.
          </h2>

          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-ink p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-dim">
                Skills
              </p>
              <ul className="mt-6 space-y-3 text-sm md:text-base">
                {skills.map((s) => (
                  <li key={s} className="text-bone/85">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-dim">
                Interests
              </p>
              <ul className="mt-6 space-y-3 text-sm md:text-base">
                {interests.map((i) => (
                  <li key={i} className="text-bone/85">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-dim">
                Tools
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.15em] text-bone/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-dim">
                Languages
              </p>
              <ul className="mt-6 space-y-4 text-sm md:text-base">
                {languages.map((l) => (
                  <li key={l.name} className="flex flex-col">
                    <span className="text-bone">{l.name}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-dim">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-dim">
            Work with me
          </p>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] tracking-tighter md:text-6xl">
            Let&apos;s make something that{" "}
            <em className="text-dim">moves product</em>.
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="mailto:paulvincentong37@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-bone px-6 py-3 text-xs uppercase tracking-[0.25em] text-ink transition hover:bg-accent hover:text-bone"
            >
              Email Paul
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-xs uppercase tracking-[0.25em] text-bone/80 transition hover:border-bone/60 hover:text-bone"
            >
              View Portfolio →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
