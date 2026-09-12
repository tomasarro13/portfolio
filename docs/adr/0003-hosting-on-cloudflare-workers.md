# 3. Hosting on Cloudflare Workers static assets

- Status: accepted
- Date: 2026-09-11

## Context

Options considered: GitHub Pages, Cloudflare Pages and Cloudflare Workers. Requirements: free,
global CDN, HTTPS, and custom HTTP security headers.

## Decision

Deploy to Cloudflare Workers with static assets, connected to GitHub through Workers Builds.

## Consequences

- Custom headers are supported through `public/_headers`; GitHub Pages does not allow them.
- Cloudflare recommends Workers over Pages for new projects, so the platform is where new features land.
- Pushes to `main` deploy automatically; other branches get preview versions.
- The Worker name in the dashboard must match `name` in `wrangler.jsonc`.
