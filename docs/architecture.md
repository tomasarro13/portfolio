# Architecture

## Goals

1. Keep business rules independent of Astro, Cloudflare and the content source.
2. Make invalid content impossible to publish.
3. Make every rule testable without a browser or a build.

## Layers

### Domain (`src/domain`)

Entities (`Profile`, `Experience`, `Project`, `SkillGroup`, `Certification`, `Education`) and value
objects (`YearMonth`, `Period`, `SafeUrl`, `EmailAddress`). Each exposes a static `create` or `parse`
factory that enforces invariants and throws `DomainError` when they are broken. Examples:

- A `Period` cannot end before it starts.
- A `SafeUrl` only accepts `https:`, which blocks `javascript:` and `data:` links.
- A completed `Education` entry needs a graduation month.

Repository interfaces live here too, split per aggregate.

### Application (`src/application`)

One class per use case, each with a single `execute()` method:

| Use case                 | Responsibility                                         |
| ------------------------ | ------------------------------------------------------ |
| `GetProfile`             | Return the profile as a DTO                            |
| `ListExperienceTimeline` | Order roles (current first) and measure their duration |
| `ListProjects`           | Put featured projects first, keeping author order      |
| `ListSkillGroups`        | Return skill groups                                    |
| `ListCertifications`     | Order by year, then name                               |
| `ListEducation`          | Studies in progress first, then by graduation date     |

Use cases return plain DTOs, so the UI never receives entities. Time comes from the `Clock` port.

### Infrastructure (`src/infrastructure`)

- `portfolio.data.ts`: raw, hand-editable content.
- `StaticPortfolioRepository`: converts the raw content into entities once, in its constructor, so
  invalid content fails the build immediately.
- `SystemClock`: the real clock.

### Presentation (`src/presentation`) and routes (`src/pages`)

Astro components receive DTOs through props. Formatting (dates, durations, lists) lives in
`presentation/formatters`. Pages call use cases obtained from `composition-root.ts`.

## SOLID, concretely

| Principle             | Where                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------- |
| Single responsibility | Each use case does one thing; formatting is separate from ordering.                          |
| Open/closed           | A new content source (CMS, GitHub API) is a new repository class; use cases do not change.   |
| Liskov substitution   | Tests replace the real repository and clock with in-memory fakes (`tests/support/fakes.ts`). |
| Interface segregation | Six small repository interfaces instead of one large one; each use case depends on only one. |
| Dependency inversion  | Use cases depend on interfaces; `composition-root.ts` injects the concrete implementations.  |

## Enforcement

- `eslint.config.js` forbids imports that cross layers in the wrong direction.
- `vitest.config.ts` sets coverage thresholds for domain, application and formatters.
- `.github/workflows/ci.yml` runs lint, formatting, type-check, tests, build, CSP verification and a
  dependency audit on every push and pull request.
