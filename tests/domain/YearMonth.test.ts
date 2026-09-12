import { DomainError } from '@domain/errors/DomainError';
import { YearMonth } from '@domain/value-objects/YearMonth';
import { describe, expect, it } from 'vitest';

describe('YearMonth', () => {
  it('parses a valid YYYY-MM value', () => {
    const value = YearMonth.parse('2026-05');
    expect(value.year).toBe(2026);
    expect(value.month).toBe(5);
    expect(value.toString()).toBe('2026-05');
  });

  it.each(['2026-13', '2026-00', '26-05', '2026/05', 'May 2026', ''])(
    'rejects the invalid value "%s"',
    (input) => {
      expect(() => YearMonth.parse(input)).toThrow(DomainError);
    },
  );

  it('counts the months between two values', () => {
    expect(YearMonth.parse('2023-07').monthsUntil(YearMonth.parse('2026-05'))).toBe(34);
    expect(YearMonth.parse('2026-05').monthsUntil(YearMonth.parse('2023-07'))).toBe(-34);
  });

  it('compares values', () => {
    const may = YearMonth.parse('2026-05');
    const june = YearMonth.parse('2026-06');
    expect(june.isAfter(may)).toBe(true);
    expect(may.isAfter(june)).toBe(false);
    expect(may.equals(YearMonth.parse('2026-05'))).toBe(true);
  });

  it('builds a value from a Date using UTC', () => {
    expect(YearMonth.fromDate(new Date(Date.UTC(2026, 8, 11))).toString()).toBe('2026-09');
  });
});
