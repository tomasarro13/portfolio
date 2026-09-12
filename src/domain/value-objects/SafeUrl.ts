import { DomainError } from '../errors/DomainError';

/**
 * An absolute HTTPS URL. Rejecting every other scheme keeps
 * `javascript:`, `data:` and plain `http:` links out of the published site.
 */
export class SafeUrl {
  private constructor(public readonly href: string) {}

  public static create(value: string): SafeUrl {
    let url: URL;
    try {
      url = new URL(value.trim());
    } catch {
      throw new DomainError(`"${value}" is not a valid URL.`);
    }
    if (url.protocol !== 'https:') {
      throw new DomainError(`Only https:// links are allowed, received "${value}".`);
    }
    return new SafeUrl(url.href);
  }

  public get hostname(): string {
    return new URL(this.href).hostname;
  }
}
