import type { EducationRepository } from '@domain/repositories/PortfolioRepositories';
import type { EducationDto } from '../dto/PortfolioDtos';
import { toEducationDto } from '../mappers/toDto';
import type { UseCase } from './UseCase';

/** Returns studies in progress first, then completed ones from most recent. */
export class ListEducation implements UseCase<readonly EducationDto[]> {
  public constructor(private readonly education: EducationRepository) {}

  public async execute(): Promise<readonly EducationDto[]> {
    const entries = await this.education.listEducation();
    return [...entries]
      .sort((a, b) => {
        if (a.status !== b.status) return a.status === 'in-progress' ? -1 : 1;
        if (a.graduation === null || b.graduation === null) return 0;
        return a.graduation.monthsUntil(b.graduation);
      })
      .map(toEducationDto);
  }
}
