/**
 * Raised when data breaks a business rule of the portfolio domain.
 * Because the site is generated at build time, any DomainError stops the build
 * instead of publishing broken content.
 */
export class DomainError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'DomainError';
  }
}
