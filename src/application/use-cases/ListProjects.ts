import type { ProjectRepository } from '@domain/repositories/PortfolioRepositories';
import type { ProjectDto } from '../dto/PortfolioDtos';
import { toProjectDto } from '../mappers/toDto';
import type { UseCase } from './UseCase';

/** Returns featured projects first, keeping the author's order within each group. */
export class ListProjects implements UseCase<readonly ProjectDto[]> {
  public constructor(private readonly projects: ProjectRepository) {}

  public async execute(): Promise<readonly ProjectDto[]> {
    const projects = await this.projects.listProjects();
    return [...projects].sort((a, b) => Number(b.featured) - Number(a.featured)).map(toProjectDto);
  }
}
