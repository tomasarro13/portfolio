import type { Certification } from '@domain/entities/Certification';
import type { Education } from '@domain/entities/Education';
import type { Experience } from '@domain/entities/Experience';
import type { Profile } from '@domain/entities/Profile';
import type { Project } from '@domain/entities/Project';
import type { SkillGroup } from '@domain/entities/SkillGroup';
import type { SafeUrl } from '@domain/value-objects/SafeUrl';
import type { YearMonth } from '@domain/value-objects/YearMonth';
import type {
  CertificationDto,
  EducationDto,
  ExperienceDto,
  LinkDto,
  MonthDto,
  ProfileDto,
  ProjectDto,
  SkillGroupDto,
} from '../dto/PortfolioDtos';

export function toMonthDto(value: YearMonth): MonthDto {
  return { year: value.year, month: value.month };
}

export function toLinkDto(label: string, url: SafeUrl): LinkDto {
  return { label, href: url.href, host: url.hostname };
}

export function toProfileDto(profile: Profile): ProfileDto {
  return {
    fullName: profile.fullName,
    headline: profile.headline,
    summary: [...profile.summary],
    location: profile.location,
    availability: profile.availability,
    email: profile.email.value,
    emailHref: profile.email.mailtoHref,
    links: profile.links.map((link) => ({
      ...toLinkDto(link.label, link.url),
      network: link.network,
    })),
    sourceCode: profile.sourceCodeUrl ? toLinkDto('Source code', profile.sourceCodeUrl) : null,
  };
}

export function toExperienceDto(experience: Experience, today: YearMonth): ExperienceDto {
  const { start, end } = experience.period;
  return {
    role: experience.role,
    company: experience.company,
    location: experience.location,
    start: toMonthDto(start),
    end: end === null ? null : toMonthDto(end),
    isCurrent: experience.isCurrent,
    durationInMonths: experience.durationInMonths(today),
    highlights: [...experience.highlights],
    technologies: [...experience.technologies],
  };
}

export function toProjectDto(project: Project): ProjectDto {
  return {
    name: project.name,
    summary: project.summary,
    highlights: [...project.highlights],
    technologies: [...project.technologies],
    repository: project.repositoryUrl ? toLinkDto('Source code', project.repositoryUrl) : null,
    live: project.liveUrl ? toLinkDto('Visit website', project.liveUrl) : null,
    featured: project.featured,
  };
}

export function toSkillGroupDto(group: SkillGroup): SkillGroupDto {
  return { name: group.name, skills: [...group.skills] };
}

export function toCertificationDto(certification: Certification): CertificationDto {
  return {
    name: certification.name,
    issuer: certification.issuer,
    year: certification.year,
    credential: certification.credentialUrl
      ? toLinkDto('View credential', certification.credentialUrl)
      : null,
  };
}

export function toEducationDto(education: Education): EducationDto {
  return {
    degree: education.degree,
    institution: education.institution,
    location: education.location,
    status: education.status,
    graduation: education.graduation === null ? null : toMonthDto(education.graduation),
  };
}
