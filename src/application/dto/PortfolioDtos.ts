/*
 * Output models handed to the presentation layer. They are plain, serialisable
 * data: the UI never receives domain entities, so it cannot bypass their rules
 * or become coupled to their internals.
 */

export interface MonthDto {
  readonly year: number;
  readonly month: number;
}

export interface LinkDto {
  readonly label: string;
  readonly href: string;
  readonly host: string;
}

export interface SocialLinkDto extends LinkDto {
  readonly network: 'github' | 'linkedin' | 'other';
}

export interface ProfileDto {
  readonly fullName: string;
  readonly headline: string;
  readonly summary: readonly string[];
  readonly location: string;
  readonly availability: string;
  readonly email: string;
  readonly emailHref: string;
  readonly links: readonly SocialLinkDto[];
  readonly sourceCode: LinkDto | null;
}

export interface ExperienceDto {
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly start: MonthDto;
  readonly end: MonthDto | null;
  readonly isCurrent: boolean;
  readonly durationInMonths: number;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
}

export interface ProjectDto {
  readonly name: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
  readonly repository: LinkDto | null;
  readonly live: LinkDto | null;
  readonly featured: boolean;
}

export interface SkillGroupDto {
  readonly name: string;
  readonly skills: readonly string[];
}

export interface CertificationDto {
  readonly name: string;
  readonly issuer: string;
  readonly year: number;
  readonly credential: LinkDto | null;
}

export interface EducationDto {
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly status: 'in-progress' | 'completed';
  readonly graduation: MonthDto | null;
}
