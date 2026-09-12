# 2. Clean Architecture in a small codebase

- Status: accepted
- Date: 2026-09-11

## Context

A portfolio could be a single page with hard-coded content. This one also serves as a sample of how
its author structures code, so the structure itself is part of the deliverable.

## Decision

Organise the code in domain, application, infrastructure and presentation layers, wire them in a
composition root, and enforce the dependency rule with lint rules.

## Consequences

- Content rules are unit-tested and invalid content cannot be published.
- The content source can change without touching use cases or components.
- There are more files than a simple site would need. This is a deliberate trade-off for
  demonstration and is acknowledged here rather than hidden.
