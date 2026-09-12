import type { CertificationRepository } from '@domain/repositories/PortfolioRepositories';
import type { CertificationDto } from '../dto/PortfolioDtos';
import { toCertificationDto } from '../mappers/toDto';
import type { UseCase } from './UseCase';

/** Returns certifications newest first, alphabetically within the same year. */
export class ListCertifications implements UseCase<readonly CertificationDto[]> {
  public constructor(private readonly certifications: CertificationRepository) {}

  public async execute(): Promise<readonly CertificationDto[]> {
    const certifications = await this.certifications.listCertifications();
    return [...certifications]
      .sort((a, b) => b.year - a.year || a.name.localeCompare(b.name, 'en'))
      .map(toCertificationDto);
  }
}
