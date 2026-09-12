# 4. No third-party requests and a strict CSP

- Status: accepted
- Date: 2026-09-11

## Context

Analytics, embedded widgets and hosted fonts leak visitor data to third parties and widen the attack
surface. A strict Content-Security-Policy is only practical if the page loads nothing external.

## Decision

Self-host fonts, ship no JavaScript, avoid analytics, and serve a CSP with `default-src 'none'`.
Astro is configured with `build.inlineStylesheets: 'never'` so no inline styles are generated, and
`scripts/verify-dist.mjs` checks the output in CI.

## Consequences

- Visitors are not tracked, and there are no cookies, so no consent banner is needed.
- Adding any external resource (analytics, video embed, contact form service) requires updating the
  CSP in `public/_headers` on purpose.
- No visitor statistics. Cloudflare's dashboard still shows basic request metrics.
