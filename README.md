# Zero to 100 — public docs (open product documentation)

Built with [Astro Starlight](https://starlight.astro.build). Markdown content, built-in search,
SEO and responsive layout. The **gated partner docs** are NOT here — they live in the partner
app behind your existing login (see `../PARTNER-DOCS-Lovable.md`).

## Run it
```bash
npm install
npm run dev        # local preview at http://localhost:4321
npm run build      # static site in ./dist  (deploy this to Netlify/Vercel/Cloudflare/etc.)
```

> If dependency versions drift, the safest path is to scaffold a fresh project with
> `npm create astro@latest zt100-docs -- --template starlight`, then copy `src/content/docs/`,
> `src/styles/zt100.css`, `src/assets/logo.png` and `astro.config.mjs` from here into it.

## Where things live
- `src/content/docs/**.md(x)` — every page is one markdown file. Edit text here.
- `astro.config.mjs` — the sidebar tree and site settings.
- `src/styles/zt100.css` — brand colours and font.
- `src/assets/logo.png` — the ZT100 logo.

## Updating content (the automation pipeline)
Content is plain markdown in this repo, so updates are scriptable and versioned by git:
1. Edit or generate the `.md` files.
2. Commit. (Git is your version history.)
3. Your host rebuilds automatically on push (Netlify/Vercel/Cloudflare Pages).

A scheduled routine can keep pages like the changelog current by writing to these files.

## The two-layer model
- **This site = open.** Product docs, indexed by search engines, free to share.
- **Partner docs = gated**, inside the partner app behind your existing auth (one login).
  The `For partners` sidebar entry links straight to it.
