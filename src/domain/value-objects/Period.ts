import { DomainError } from '../errors/DomainError';
import type { YearMonth } from './YearMonth';

/** A span of months. A null end means the period is still ongoing. */
export class Period {
  private constructor(
    public readonly start: YearMonth,
    public readonly end: YearMonth | null,
  ) {}

  public static create(start: YearMonth, end: YearMonth | null): Period {
    if (end !== null && start.isAfter(end)) {
      throw new DomainError(`A period cannot start (${start}) after it ends (${end}).`);
    }
    return new Period(start, end);
  }

  public get isOngoing(): boolean {
    return this.end === null;
  }

  /**
   * Inclusive length in months, so May 2026 to May 2026 counts as one month.
   * Ongoing periods are measured up to `today`.
   */
  public durationInMonths(today: YearMonth): number {
    const end = this.end ?? today;
    return Math.max(1, this.start.monthsUntil(end) + 1);
  }
}
