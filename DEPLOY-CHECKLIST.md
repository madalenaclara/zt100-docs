# Deploy checklist — Zero to 100 docs

Everything in this repo is ready to deploy. You only need to click through accounts you own.

## 1. Get the code on GitHub
- If I pushed it for you, skip to step 2 (I'll have given you the repo URL).
- Otherwise: create a repo at github.com and upload the contents of this `zt100-docs/` folder.

## 2. Connect a host (pick one)
**Netlify** (recommended): netlify.com → Add new site → Import an existing project → pick the repo.
It reads `netlify.toml`, so build settings are already correct (`npm run build` → `dist`). Deploy.

**Cloudflare Pages** (best if zeroto100.ai DNS is on Cloudflare): pages.cloudflare.com → Create →
connect the repo → framework preset **Astro** → deploy. DNS for the subdomain is then automatic.

**Vercel**: vercel.com → Add New → Project → import the repo. It reads `vercel.json`. Deploy.

You'll get a temporary URL (e.g. `xxx.netlify.app`) within ~1 minute.

## 3. Point the subdomain
In the host: Domain settings → add `docs.zeroto100.ai`. It shows a DNS value to use.
In whatever manages zeroto100.ai DNS, add:
- Type **CNAME**, Name **docs**, Value = the target the host gives you.
HTTPS is issued automatically. Done.

## 4. (Optional) Turn on the sitemap
For SEO, set `site: 'https://docs.zeroto100.ai'` in `astro.config.mjs`. If the build then errors on
the sitemap, ping me — it's a known version quirk and I'll pin it. The docs are indexed fine without it.

## Updating content later
Edit the markdown in `src/content/docs/`, commit, push. The host rebuilds automatically.
