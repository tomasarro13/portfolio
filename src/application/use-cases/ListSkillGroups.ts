import type { SkillRepository } from '@domain/repositories/PortfolioRepositories';
import type { SkillGroupDto } from '../dto/PortfolioDtos';
import { toSkillGroupDto } from '../mappers/toDto';
import type { UseCase } from './UseCase';

export class ListSkillGroups implements UseCase<readonly SkillGroupDto[]> {
  public constructor(private readonly skills: SkillRepository) {}

  public async execute(): Promise<readonly SkillGroupDto[]> {
    return (await this.skills.listSkillGroups()).map(toSkillGroupDto);
  }
}
