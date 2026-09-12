import type { ProfileRepository } from '@domain/repositories/PortfolioRepositories';
import type { ProfileDto } from '../dto/PortfolioDtos';
import { toProfileDto } from '../mappers/toDto';
import type { UseCase } from './UseCase';

export class GetProfile implements UseCase<ProfileDto> {
  public constructor(private readonly profiles: ProfileRepository) {}

  public async execute(): Promise<ProfileDto> {
    return toProfileDto(await this.profiles.getProfile());
  }
}
