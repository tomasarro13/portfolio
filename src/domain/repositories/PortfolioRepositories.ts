import type { Certification } from '../entities/Certification';
import type { Education } from '../entities/Education';
import type { Experience } from '../entities/Experience';
import type { Profile } from '../entities/Profile';
import type { Project } from '../entities/Project';
import type { SkillGroup } from '../entities/SkillGroup';

/*
 * Ports (Dependency Inversion): the domain declares what it needs and outer
 * layers provide it. Each interface is deliberately small (Interface
 * Segregation), so a use case only depends on the data it actually reads.
 */

export interface ProfileRepository {
  getProfile(): Promise<Profile>;
}

export interface ExperienceRepository {
  listExperiences(): Promise<readonly Experience[]>;
}

export interface ProjectRepository {
  listProjects(): Promise<readonly Project[]>;
}

export interface SkillRepository {
  listSkillGroups(): Promise<readonly SkillGroup[]>;
}

export interface CertificationRepository {
  listCertifications(): Promise<readonly Certification[]>;
}

export interface EducationRepository {
  listEducation(): Promise<readonly Education[]>;
}
