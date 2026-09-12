import { DomainError } from '../errors/DomainError';

const YEAR_MONTH_PATTERN = /^(\d{4})-(0[1-9]|1[0-2])$/;

/** A calendar month without a day, such as "2026-05". Immutable. */
export class YearMonth {
  private constructor(
    public readonly year: number,
    public readonly month: number,
  ) {}

  public static parse(value: string): YearMonth {
    const [, year, month] = YEAR_MONTH_PATTERN.exec(value.trim()) ?? [];
    if (year === undefined || month === undefined) {
      throw new DomainError(`Invalid month "${value}". Use the format YYYY-MM, e.g. 2026-05.`);
    }
    return new YearMonth(Number(year), Number(month));
  }

  public static fromDate(date: Date): YearMonth {
    return new YearMonth(date.getUTCFullYear(), date.getUTCMonth() + 1);
  }

  /** Whole months from this month to `other` (negative if `other` is earlier). */
  public monthsUntil(other: YearMonth): number {
    return (other.year - this.year) * 12 + (other.month - this.month);
  }

  public isAfter(other: YearMonth): boolean {
    return other.monthsUntil(this) > 0;
  }

  public equals(other: YearMonth): boolean {
    return this.monthsUntil(other) === 0;
  }

  public toString(): string {
    return `${this.year}-${String(this.month).padStart(2, '0')}`;
  }
}
