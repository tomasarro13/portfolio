import { DomainError } from '@domain/errors/DomainError';
import { EmailAddress } from '@domain/value-objects/EmailAddress';
import { describe, expect, it } from 'vitest';

describe('EmailAddress', () => {
  it('normalises the address and builds a mailto link', () => {
    const email = EmailAddress.create('  Someone@Example.com ');
    expect(email.value).toBe('someone@example.com');
    expect(email.mailtoHref).toBe('mailto:someone@example.com');
  });

  it.each(['someone', 'someone@', '@example.com', 'some one@example.com'])(
    'rejects "%s"',
    (input) => {
      expect(() => EmailAddress.create(input)).toThrow(DomainError);
    },
  );
});
