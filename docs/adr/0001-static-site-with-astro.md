# 1. Static site generated with Astro

- Status: accepted
- Date: 2026-09-11

## Context

The portfolio shows public, rarely changing content. It must be free to host, fast worldwide and
have the smallest possible attack surface.

## Decision

Generate a fully static site with Astro and TypeScript. No server-side rendering, no client-side
JavaScript, no database.

## Consequences

- Nothing runs on a server, so there is nothing to exploit at runtime and hosting is free.
- Pages load fast because only HTML, CSS and fonts are sent.
- Content changes need a rebuild and deploy, which CI/CD automates.
- Values computed at build time (such as the duration of the current role) refresh on each deploy.
