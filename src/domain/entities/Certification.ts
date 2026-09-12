import { DomainError } from '../errors/DomainError';
import { requireText } from '../shared/guards';
import type { SafeUrl } from '../value-objects/SafeUrl';

export interface CertificationProps {
  readonly name: string;
  readonly issuer: string;
  readonly year: number;
  readonly credentialUrl: SafeUrl | null;
}

export class Certification {
  public readonly name: string;
  public readonly issuer: string;
  public readonly year: number;
  public readonly credentialUrl: SafeUrl | null;

  private constructor(props: CertificationProps) {
    this.name = props.name;
    this.issuer = props.issuer;
    this.year = props.year;
    this.credentialUrl = props.credentialUrl;
  }

  public static create(props: CertificationProps): Certification {
    if (!Number.isInteger(props.year) || props.year < 1990 || props.year > 2100) {
      throw new DomainError(`Certification "${props.name}" has an invalid year: ${props.year}.`);
    }
    return new Certification({
      ...props,
      name: requireText(props.name, 'certification.name'),
      issuer: requireText(props.issuer, 'certification.issuer'),
    });
  }
}
