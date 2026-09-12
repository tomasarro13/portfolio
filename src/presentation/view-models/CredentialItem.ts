import type { CertificationDto, EducationDto, MonthDto } from '@application/dto/PortfolioDtos';
import { formatMonth, toIsoMonth } from '../formatters/text';

/** A row in the education or certifications list. */
export interface CredentialItem {
  readonly title: string;
  readonly source: string;
  readonly date: string;
  readonly datetime: string | null;
  readonly link: { readonly href: string; readonly label: string } | null;
}

function graduationLabel(status: EducationDto['status'], graduation: MonthDto | null): string {
  if (status === 'completed' && graduation) return formatMonth(graduation);
  return graduation ? `Expected ${formatMonth(graduation)}` : 'In progress';
}

export function fromEducation(entry: EducationDto): CredentialItem {
  return {
    title: entry.degree,
    source: `${entry.institution}, ${entry.location}`,
    date: graduationLabel(entry.status, entry.graduation),
    datetime: entry.graduation ? toIsoMonth(entry.graduation) : null,
    link: null,
  };
}

export function fromCertification(certification: CertificationDto): CredentialItem {
  return {
    title: certification.name,
    source: certification.issuer,
    date: String(certification.year),
    datetime: String(certification.year),
    link: certification.credential,
  };
}
