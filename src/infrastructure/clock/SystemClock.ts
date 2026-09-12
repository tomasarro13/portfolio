import type { Clock } from '@application/ports/Clock';
import { YearMonth } from '@domain/value-objects/YearMonth';

/**
 * Real clock. The site is static, so "now" is the moment of the build:
 * durations such as "Present" roles refresh on every deployment.
 */
export class SystemClock implements Clock {
  public constructor(private readonly now: () => Date = () => new Date()) {}

  public currentMonth(): YearMonth {
    return YearMonth.fromDate(this.now());
  }
}
