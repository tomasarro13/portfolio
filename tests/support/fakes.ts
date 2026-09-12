import type { Clock } from '@application/ports/Clock';
import type { Experience } from '@domain/entities/Experience';
import type { ExperienceRepository } from '@domain/repositories/PortfolioRepositories';
import { YearMonth } from '@domain/value-objects/YearMonth';

/** Test double: a clock frozen at a given month. */
export class FixedClock implements Clock {
  private readonly month: YearMonth;

  public constructor(month: string) {
    this.month = YearMonth.parse(month);
  }

  public currentMonth(): YearMonth {
    return this.month;
  }
}

/** Test double: an experience repository backed by an array. */
export class InMemoryExperienceRepository implements ExperienceRepository {
  public constructor(private readonly experiences: readonly Experience[]) {}

  public listExperiences(): Promise<readonly Experience[]> {
    return Promise.resolve(this.experiences);
  }
}
