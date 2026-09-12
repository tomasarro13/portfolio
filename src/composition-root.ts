/*
 * Composition root: the only module that knows about concrete classes.
 * It wires infrastructure adapters into application use cases, and pages
 * receive ready-to-use use cases without importing any adapter themselves.
 */
import { GetProfile } from '@application/use-cases/GetProfile';
import { ListCertifications } from '@application/use-cases/ListCertifications';
import { ListEducation } from '@application/use-cases/ListEducation';
import { ListExperienceTimeline } from '@application/use-cases/ListExperienceTimeline';
import { ListProjects } from '@application/use-cases/ListProjects';
import { ListSkillGroups } from '@application/use-cases/ListSkillGroups';
import { SystemClock } from '@infrastructure/clock/SystemClock';
import { portfolioData } from '@infrastructure/data/portfolio.data';
import { StaticPortfolioRepository } from '@infrastructure/repositories/StaticPortfolioRepository';

const repository = new StaticPortfolioRepository(portfolioData);
const clock = new SystemClock();

export const useCases = {
  getProfile: new GetProfile(repository),
  listExperienceTimeline: new ListExperienceTimeline(repository, clock),
  listProjects: new ListProjects(repository),
  listSkillGroups: new ListSkillGroups(repository),
  listCertifications: new ListCertifications(repository),
  listEducation: new ListEducation(repository),
} as const;
