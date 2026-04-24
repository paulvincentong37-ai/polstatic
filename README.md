# POLSTATIC

Static-design portfolio for Paul Vincent Ong. Built with Next.js 14 + Tailwind + TypeScript. Deploys to Vercel.

---

## Quick start (local)

```bash
cd polstatic
npm install
npm run dev
```

Open http://localhost:3000.

---

## Adding more creatives in the future

Two steps.

**1. Drop your image into `public/images/`**

Any `.jpg`, `.png`, `.webp`, or `.avif` is fine. Filenames with spaces work — the app URL-encodes them. Square (1080×1080) renders best in the masonry grid.

**2. Add an entry to `data/works.json`**

Open `data/works.json` and append a new object inside the `"works"` array. Copy an existing entry as a template. The only required fields:

```json
{
  "id": "unique-kebab-case-id",
  "filename": "Your File Name.jpg",
  "title": "Short punchy title",
  "description": "1–2 sentences about the concept, hook, or what the ad is doing.",
  "category": "Hair Care",
  "client": "Brand name"
}
```

Existing categories: `Hair Care`, `Supplements`, `Art Prints`, `Safety`, `Pain Relief`, `Concept`. Add new ones freely — the filter bar picks them up automatically.

Save, then commit + push. Vercel will redeploy within ~30 seconds.

---

## Deploy to Vercel (first time)

### Option A — via the Vercel dashboard (easiest)

1. Push this folder to a new GitHub repo (see below).
2. Go to https://vercel.com/new.
3. Import the GitHub repo. Framework is auto-detected as **Next.js**.
4. Click **Deploy**. You're live at `polstatic-xxxx.vercel.app`.
5. Settings → Domains → add your custom domain (e.g. `polstatic.co`) when you're ready.

### Option B — via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel           # deploys a preview
vercel --prod    # deploys to production
```

### Pushing to GitHub first (if you haven't yet)

```bash
cd polstatic
git init
git add .
git commit -m "Initial POLSTATIC portfolio"
git branch -M main
# Create an empty repo on github.com/new named "polstatic", then:
git remote add origin https://github.com/YOUR-USERNAME/polstatic.git
git push -u origin main
```

After connecting to Vercel, every `git push` to `main` triggers a fresh deploy. That's your full image-add workflow:

```
drop image into public/images/ → edit works.json → git push → live.
```

---

## Editing copy

- **Bio / About** → `components/About.tsx`
- **Services list** → `components/Services.tsx`
- **Client roster** → `components/Clients.tsx`
- **Hero headline** → `components/Hero.tsx`
- **Email / contact** → `components/Contact.tsx` and `components/Nav.tsx`
- **Site title + social meta** → `app/layout.tsx`

---

## Customizing the look

- **Brand colors** → `tailwind.config.ts` (`ink`, `bone`, `dim`, `line`, `accent`)
- **Fonts** → `app/layout.tsx` (Google Fonts link) + `app/globals.css`
- **Grid density** → `app/globals.css` → `.masonry` column-count rules
- **Hover caption animation** → `app/globals.css` → `.caption-reveal` / `.img-zoom`

---

## Project structure

```
polstatic/
├── app/
│   ├── layout.tsx         # Root layout + fonts + meta
│   ├── page.tsx           # Composes all sections
│   └── globals.css        # Tailwind + masonry + animations
├── components/
│   ├── Nav.tsx            # Sticky top nav
│   ├── Hero.tsx           # Big headline block
│   ├── WorkGrid.tsx       # Masonry grid + filter bar
│   ├── Lightbox.tsx       # Full-screen image + meta
│   ├── About.tsx          # Bio
│   ├── Services.tsx       # 6-tile service grid
│   ├── Clients.tsx        # Marquee of brand names
│   ├── Contact.tsx        # Big email CTA
│   └── Footer.tsx
├── data/
│   └── works.json         # ← edit this to add creatives
├── public/
│   └── images/            # ← drop image files here
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

---

## Notes

- Captions appear on hover (desktop) and on tap (mobile). Mobile tap opens the full-screen lightbox directly.
- `Static 3c.jpg` and `Static 3c 2.jpg` are duplicates of the same creative; both are listed in `works.json`. Delete one entry (and the file) if you want it shown once.
- The site is fully static — no database, no backend. Fast by default, free to host on Vercel's hobby tier.
