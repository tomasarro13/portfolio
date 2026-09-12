import { Certification } from '@domain/entities/Certification';
import { Education } from '@domain/entities/Education';
import { Experience } from '@domain/entities/Experience';
import { Profile } from '@domain/entities/Profile';
import { Project } from '@domain/entities/Project';
import { SkillGroup } from '@domain/entities/SkillGroup';
import { EmailAddress } from '@domain/value-objects/EmailAddress';
import { Period } from '@domain/value-objects/Period';
import { SafeUrl } from '@domain/value-objects/SafeUrl';
import { YearMonth } from '@domain/value-objects/YearMonth';
import type {
  CertificationSource,
  EducationSource,
  ExperienceSource,
  ProfileSource,
  ProjectSource,
  SkillGroupSource,
} from '../data/PortfolioSource';

const optionalUrl = (value: string | null): SafeUrl | null =>
  value === null ? null : SafeUrl.create(value);

const optionalMonth = (value: string | null): YearMonth | null =>
  value === null ? null : YearMonth.parse(value);

export function toProfile(source: ProfileSource): Profile {
  return Profile.create({
    ...source,
    email: EmailAddress.create(source.email),
    links: source.links.map((link) => ({ ...link, url: SafeUrl.create(link.url) })),
    sourceCodeUrl: optionalUrl(source.sourceCodeUrl),
  });
}

export function toExperience(source: ExperienceSource): Experience {
  return Experience.create({
    ...source,
    period: Period.create(YearMonth.parse(source.start), optionalMonth(source.end)),
  });
}

export function toProject(source: ProjectSource): Project {
  return Project.create({
    ...source,
    repositoryUrl: optionalUrl(source.repositoryUrl),
    liveUrl: optionalUrl(source.liveUrl),
  });
}

export function toSkillGroup(source: SkillGroupSource): SkillGroup {
  return SkillGroup.create(source.name, source.skills);
}

export function toCertification(source: CertificationSource): Certification {
  return Certification.create({ ...source, credentialUrl: optionalUrl(source.credentialUrl) });
}

export function toEducation(source: EducationSource): Education {
  return Education.create({ ...source, graduation: optionalMonth(source.graduation) });
}
