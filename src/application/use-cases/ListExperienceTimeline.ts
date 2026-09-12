import type { ExperienceRepository } from '@domain/repositories/PortfolioRepositories';
import type { ExperienceDto } from '../dto/PortfolioDtos';
import { toExperienceDto } from '../mappers/toDto';
import type { Clock } from '../ports/Clock';
import type { UseCase } from './UseCase';

/** Returns work experience newest first, with each role's duration measured today. */
export class ListExperienceTimeline implements UseCase<readonly ExperienceDto[]> {
  public constructor(
    private readonly experiences: ExperienceRepository,
    private readonly clock: Clock,
  ) {}

  public async execute(): Promise<readonly ExperienceDto[]> {
    const today = this.clock.currentMonth();
    const experiences = await this.experiences.listExperiences();

    return [...experiences]
      .sort((a, b) => {
        if (a.isCurrent !== b.isCurrent) return a.isCurrent ? -1 : 1;
        return a.period.start.monthsUntil(b.period.start);
      })
      .map((experience) => toExperienceDto(experience, today));
  }
}
