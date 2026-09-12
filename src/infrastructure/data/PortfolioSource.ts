/*
 * Shape of the raw content file. It uses plain strings (dates as "YYYY-MM",
 * links as text) so it is easy to edit by hand. The repository converts it into
 * domain entities, and the domain rules reject anything invalid at build time.
 */

export interface LinkSource {
  readonly network: 'github' | 'linkedin' | 'other';
  readonly label: string;
  readonly url: string;
}

export interface ProfileSource {
  readonly fullName: string;
  readonly headline: string;
  readonly summary: readonly string[];
  readonly location: string;
  readonly availability: string;
  readonly email: string;
  readonly links: readonly LinkSource[];
  /** URL of the GitHub repository with this portfolio's code, or null */
  readonly sourceCodeUrl: string | null;
}

export interface ExperienceSource {
  readonly role: string;
  readonly company: string;
  readonly location: string;
  /** Format YYYY-MM */
  readonly start: string;
  /** Format YYYY-MM, or null if you still work there */
  readonly end: string | null;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
}

export interface ProjectSource {
  readonly name: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
  readonly repositoryUrl: string | null;
  readonly liveUrl: string | null;
  readonly featured: boolean;
}

export interface SkillGroupSource {
  readonly name: string;
  readonly skills: readonly string[];
}

export interface CertificationSource {
  readonly name: string;
  readonly issuer: string;
  readonly year: number;
  readonly credentialUrl: string | null;
}

export interface EducationSource {
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly status: 'in-progress' | 'completed';
  /** Format YYYY-MM, or null if unknown */
  readonly graduation: string | null;
}

export interface PortfolioSource {
  readonly profile: ProfileSource;
  readonly experiences: readonly ExperienceSource[];
  readonly projects: readonly ProjectSource[];
  readonly skillGroups: readonly SkillGroupSource[];
  readonly certifications: readonly CertificationSource[];
  readonly education: readonly EducationSource[];
}
