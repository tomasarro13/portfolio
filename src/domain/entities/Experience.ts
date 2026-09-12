import { requireText, requireTextList } from '../shared/guards';
import type { Period } from '../value-objects/Period';
import type { YearMonth } from '../value-objects/YearMonth';

export interface ExperienceProps {
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly period: Period;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
}

export class Experience {
  public readonly role: string;
  public readonly company: string;
  public readonly location: string;
  public readonly period: Period;
  public readonly highlights: readonly string[];
  public readonly technologies: readonly string[];

  private constructor(props: ExperienceProps) {
    this.role = props.role;
    this.company = props.company;
    this.location = props.location;
    this.period = props.period;
    this.highlights = props.highlights;
    this.technologies = props.technologies;
  }

  public static create(props: ExperienceProps): Experience {
    return new Experience({
      role: requireText(props.role, 'experience.role'),
      company: requireText(props.company, 'experience.company'),
      location: requireText(props.location, 'experience.location'),
      period: props.period,
      highlights: requireTextList(props.highlights, 'experience.highlights'),
      technologies: requireTextList(props.technologies, 'experience.technologies'),
    });
  }

  public get isCurrent(): boolean {
    return this.period.isOngoing;
  }

  public durationInMonths(today: YearMonth): number {
    return this.period.durationInMonths(today);
  }
}
