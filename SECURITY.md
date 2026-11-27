# Security policy

This is a static website with no backend, database, forms, cookies or user accounts.

## Reporting a vulnerability

Please email **tomas13ariza@gmail.com** with a description of the issue and steps to reproduce it.
Do not open a public issue for security problems.

## Measures in place

- Strict `Content-Security-Policy` and other security headers, defined in [`public/_headers`](public/_headers).
- The HyperMotion animation bundles are self-hosted in `public/vendor/hypermotion`. `style-src` allows only the six static style attributes they contain, by SHA-256 hash (`'unsafe-hashes'`), and `npm run verify` fails if a bundle adds one that is not listed.
- No third-party scripts, analytics, trackers or externally hosted fonts.
- Content links are validated at build time: only `https://` URLs are accepted.
- A post-build check (`npm run verify:dist`) fails if the HTML would violate the CSP.
- Dependabot keeps dependencies and GitHub Actions up to date; CI audits production dependencies.
- GitHub Actions are pinned to commit SHAs and run with read-only permissions.
