# tharunkumaronline

Personal portfolio of Tharun Kumar Maddala, AI Engineer Lead. Built with [Astro](https://astro.build), plain CSS and a little TypeScript. Light and dark themes, responsive from 320px phones to wide desktops.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run check     # type-check .astro and .ts files
```

## Where things live

| Path | What |
| --- | --- |
| `src/data/site.ts` | All content: profile, stats, projects, skills, experience, awards, certifications |
| `src/lib/cast.ts` | The seven plush mascots (SVG), their roles and the tips they say |
| `src/components/` | One component per section, plus `Nav`, `CommandPalette` (Ctrl/⌘ K) and `Companion` |
| `src/styles/global.css` | Design tokens (colours for both themes, type) and shared UI |
| `src/assets/` | Award and event photos, optimised to WebP at build time |

To update content, edit `src/data/site.ts`. To add a photo, drop it in `src/assets/awards` or `src/assets/moments` and import it there.

## The cast

Each section has a host who appears in the corner as you scroll: Tok (intro), Bolt (work), Pix (skills), Bean (experience), Nova (recognition), Dot (certifications) and Ping (contact). Their fuzzy look comes from one shared SVG filter in `src/components/PlushDefs.astro`; moods (`think`, `search`, `wow`, `happy`) are switched with a `data-mood` attribute.

## Deploy

Static output, so Vercel deploys it with zero config (framework preset: Astro).

## Share card

`src/pages/og.astro` is the 1200x630 link-preview image. After changing it, run `npm run dev` and then `npm run og` to re-render `public/og-image.jpg`.
