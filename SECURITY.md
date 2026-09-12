# Security policy

This is a static website with no backend, database, forms, cookies or user accounts.

## Reporting a vulnerability

Please email **tomas13ariza@gmail.com** with a description of the issue and steps to reproduce it.
Do not open a public issue for security problems.

## Measures in place

- Strict `Content-Security-Policy` and other security headers, defined in [`public/_headers`](public/_headers).
- No third-party scripts, analytics, trackers or externally hosted fonts.
- Content links are validated at build time: only `https://` URLs are accepted.
- A post-build check (`npm run verify:dist`) fails if the HTML would violate the CSP.
- Dependabot keeps dependencies and GitHub Actions up to date; CI audits production dependencies.
- GitHub Actions are pinned to commit SHAs and run with read-only permissions.
