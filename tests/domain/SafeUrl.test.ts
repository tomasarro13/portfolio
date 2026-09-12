import { DomainError } from '@domain/errors/DomainError';
import { SafeUrl } from '@domain/value-objects/SafeUrl';
import { describe, expect, it } from 'vitest';

describe('SafeUrl', () => {
  it('accepts https links and exposes the host', () => {
    const url = SafeUrl.create('https://github.com/example');
    expect(url.href).toBe('https://github.com/example');
    expect(url.hostname).toBe('github.com');
  });

  it.each([
    'http://github.com/example',
    'javascript:alert(1)',
    'data:text/html,<script>alert(1)</script>',
    'ftp://example.com',
    'not a url',
  ])('rejects "%s"', (input) => {
    expect(() => SafeUrl.create(input)).toThrow(DomainError);
  });
});
