"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="font-display text-2xl tracking-tightest md:text-3xl"
          aria-label="POLSTATIC — Home"
        >
          POL<span className="italic text-dim">static</span>
        </a>
        <nav className="hidden gap-8 text-sm uppercase tracking-[0.18em] md:flex">
          <a className="hover:text-accent" href="#work">
            Work
          </a>
          <a className="hover:text-accent" href="#about">
            About
          </a>
          <a className="hover:text-accent" href="#services">
            Services
          </a>
          <a className="hover:text-accent" href="#clients">
            Clients
          </a>
          <a className="hover:text-accent" href="#contact">
            Contact
          </a>
        </nav>
        <a
          href="mailto:paulvincentong37@gmail.com"
          className="hidden rounded-full border border-bone/20 px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-bone hover:bg-bone hover:text-ink md:inline-block"
        >
          Work With Me
        </a>
      </div>
    </header>
  );
}
