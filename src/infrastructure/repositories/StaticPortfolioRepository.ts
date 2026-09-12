import type { Certification } from '@domain/entities/Certification';
import type { Education } from '@domain/entities/Education';
import type { Experience } from '@domain/entities/Experience';
import type { Profile } from '@domain/entities/Profile';
import type { Project } from '@domain/entities/Project';
import type { SkillGroup } from '@domain/entities/SkillGroup';
import type {
  CertificationRepository,
  EducationRepository,
  ExperienceRepository,
  ProfileRepository,
  ProjectRepository,
  SkillRepository,
} from '@domain/repositories/PortfolioRepositories';
import type { PortfolioSource } from '../data/PortfolioSource';
import {
  toCertification,
  toEducation,
  toExperience,
  toProfile,
  toProject,
  toSkillGroup,
} from './sourceMappers';

/**
 * Adapter that serves the portfolio from an in-repository content file.
 * All content is converted to entities in the constructor, so invalid data
 * fails fast, once, during the build.
 *
 * Replacing it with a CMS or the GitHub API means writing another class that
 * implements the same ports; no use case or component has to change.
 */
export class StaticPortfolioRepository
  implements
    ProfileRepository,
    ExperienceRepository,
    ProjectRepository,
    SkillRepository,
    CertificationRepository,
    EducationRepository
{
  private readonly profile: Profile;
  private readonly experiences: readonly Experience[];
  private readonly projects: readonly Project[];
  private readonly skillGroups: readonly SkillGroup[];
  private readonly certifications: readonly Certification[];
  private readonly education: readonly Education[];

  public constructor(source: PortfolioSource) {
    this.profile = toProfile(source.profile);
    this.experiences = source.experiences.map(toExperience);
    this.projects = source.projects.map(toProject);
    this.skillGroups = source.skillGroups.map(toSkillGroup);
    this.certifications = source.certifications.map(toCertification);
    this.education = source.education.map(toEducation);
  }

  public getProfile(): Promise<Profile> {
    return Promise.resolve(this.profile);
  }

  public listExperiences(): Promise<readonly Experience[]> {
    return Promise.resolve(this.experiences);
  }

  public listProjects(): Promise<readonly Project[]> {
    return Promise.resolve(this.projects);
  }

  public listSkillGroups(): Promise<readonly SkillGroup[]> {
    return Promise.resolve(this.skillGroups);
  }

  public listCertifications(): Promise<readonly Certification[]> {
    return Promise.resolve(this.certifications);
  }

  public listEducation(): Promise<readonly Education[]> {
    return Promise.resolve(this.education);
  }
}
