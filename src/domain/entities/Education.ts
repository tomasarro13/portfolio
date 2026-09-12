import { DomainError } from '../errors/DomainError';
import { requireText } from '../shared/guards';
import type { YearMonth } from '../value-objects/YearMonth';

export type EducationStatus = 'in-progress' | 'completed';

export interface EducationProps {
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly status: EducationStatus;
  /** Graduation month. Required when completed; while in progress it is the expected date, if known. */
  readonly graduation: YearMonth | null;
}

export class Education {
  public readonly degree: string;
  public readonly institution: string;
  public readonly location: string;
  public readonly status: EducationStatus;
  public readonly graduation: YearMonth | null;

  private constructor(props: EducationProps) {
    this.degree = props.degree;
    this.institution = props.institution;
    this.location = props.location;
    this.status = props.status;
    this.graduation = props.graduation;
  }

  public static create(props: EducationProps): Education {
    if (props.status === 'completed' && props.graduation === null) {
      throw new DomainError(`Completed studies "${props.degree}" need a graduation month.`);
    }
    return new Education({
      ...props,
      degree: requireText(props.degree, 'education.degree'),
      institution: requireText(props.institution, 'education.institution'),
      location: requireText(props.location, 'education.location'),
    });
  }
}
