import { formatDuration, formatList, formatMonth, toIsoMonth } from '@presentation/formatters/text';
import { fromCertification, fromEducation } from '@presentation/view-models/CredentialItem';
import { describe, expect, it } from 'vitest';

describe('text formatters', () => {
  it('formats months for people and machines', () => {
    expect(formatMonth({ year: 2026, month: 5 })).toBe('May 2026');
    expect(toIsoMonth({ year: 2026, month: 5 })).toBe('2026-05');
  });

  it.each([
    [1, '1 month'],
    [5, '5 months'],
    [12, '1 year'],
    [13, '1 year 1 month'],
    [35, '2 years 11 months'],
  ])('formats %i months as "%s"', (months, expected) => {
    expect(formatDuration(months)).toBe(expected);
  });

  it('joins lists in natural English', () => {
    expect(formatList(['Flutter'])).toBe('Flutter');
    expect(formatList(['Flutter', 'Dart'])).toBe('Flutter and Dart');
  });
});

describe('credential view models', () => {
  const base = { degree: 'Degree', institution: 'University', location: 'City' };

  it('labels education by status', () => {
    expect(fromEducation({ ...base, status: 'in-progress', graduation: null }).date).toBe(
      'In progress',
    );
    expect(
      fromEducation({ ...base, status: 'in-progress', graduation: { year: 2026, month: 12 } }).date,
    ).toBe('Expected Dec 2026');
    expect(
      fromEducation({ ...base, status: 'completed', graduation: { year: 2021, month: 6 } }),
    ).toMatchObject({ date: 'Jun 2021', datetime: '2021-06' });
  });

  it('maps certifications with their credential link', () => {
    const item = fromCertification({
      name: 'Cert',
      issuer: 'Issuer',
      year: 2026,
      credential: { label: 'View credential', href: 'https://example.com/c', host: 'example.com' },
    });
    expect(item).toMatchObject({ title: 'Cert', source: 'Issuer', date: '2026' });
    expect(item.link?.href).toBe('https://example.com/c');
  });
});
