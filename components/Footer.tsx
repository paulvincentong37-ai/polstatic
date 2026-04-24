export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-4 px-6 text-xs uppercase tracking-[0.2em] text-dim md:flex-row md:items-center md:px-10">
        <p>© {year} POLSTATIC — Paul Vincent Ong</p>
        <p>Built in Next.js · Deployed on Vercel</p>
      </div>
    </footer>
  );
}
