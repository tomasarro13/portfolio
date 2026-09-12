import { DomainError } from '@domain/errors/DomainError';
import { Period } from '@domain/value-objects/Period';
import { YearMonth } from '@domain/value-objects/YearMonth';
import { describe, expect, it } from 'vitest';

const month = (value: string) => YearMonth.parse(value);

describe('Period', () => {
  it('rejects a period that ends before it starts', () => {
    expect(() => Period.create(month('2026-05'), month('2026-01'))).toThrow(DomainError);
  });

  it('measures a closed period inclusively', () => {
    const period = Period.create(month('2023-07'), month('2026-05'));
    expect(period.isOngoing).toBe(false);
    expect(period.durationInMonths(month('2030-01'))).toBe(35);
  });

  it('measures an ongoing period up to today', () => {
    const period = Period.create(month('2026-05'), null);
    expect(period.isOngoing).toBe(true);
    expect(period.durationInMonths(month('2026-09'))).toBe(5);
  });

  it('never reports less than one month', () => {
    const period = Period.create(month('2026-09'), null);
    expect(period.durationInMonths(month('2026-01'))).toBe(1);
  });
});
