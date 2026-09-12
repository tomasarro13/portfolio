import { DomainError } from '../errors/DomainError';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class EmailAddress {
  private constructor(public readonly value: string) {}

  public static create(value: string): EmailAddress {
    const normalized = value.trim().toLowerCase();
    if (!EMAIL_PATTERN.test(normalized)) {
      throw new DomainError(`"${value}" is not a valid email address.`);
    }
    return new EmailAddress(normalized);
  }

  public get mailtoHref(): string {
    return `mailto:${this.value}`;
  }
}
