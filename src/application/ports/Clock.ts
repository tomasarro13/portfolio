import type { YearMonth } from '@domain/value-objects/YearMonth';

/** Abstracts "now" so time-dependent rules can be tested with a fixed date. */
export interface Clock {
  currentMonth(): YearMonth;
}
