import { requireText, requireTextList } from '../shared/guards';
import type { EmailAddress } from '../value-objects/EmailAddress';
import type { SafeUrl } from '../value-objects/SafeUrl';

export type SocialNetwork = 'github' | 'linkedin' | 'other';

export interface SocialLink {
  readonly network: SocialNetwork;
  readonly label: string;
  readonly url: SafeUrl;
}

export interface ProfileProps {
  readonly fullName: string;
  readonly headline: string;
  readonly summary: readonly string[];
  readonly location: string;
  readonly availability: string;
  readonly email: EmailAddress;
  readonly links: readonly SocialLink[];
  /** Public repository containing the code of this portfolio, if any. */
  readonly sourceCodeUrl: SafeUrl | null;
}

export class Profile {
  public readonly fullName: string;
  public readonly headline: string;
  public readonly summary: readonly string[];
  public readonly location: string;
  public readonly availability: string;
  public readonly email: EmailAddress;
  public readonly links: readonly SocialLink[];
  public readonly sourceCodeUrl: SafeUrl | null;

  private constructor(props: ProfileProps) {
    this.fullName = props.fullName;
    this.headline = props.headline;
    this.summary = props.summary;
    this.location = props.location;
    this.availability = props.availability;
    this.email = props.email;
    this.links = props.links;
    this.sourceCodeUrl = props.sourceCodeUrl;
  }

  public static create(props: ProfileProps): Profile {
    return new Profile({
      fullName: requireText(props.fullName, 'profile.fullName'),
      headline: requireText(props.headline, 'profile.headline'),
      summary: requireTextList(props.summary, 'profile.summary'),
      location: requireText(props.location, 'profile.location'),
      availability: requireText(props.availability, 'profile.availability'),
      email: props.email,
      links: Object.freeze(
        props.links.map((link, i) => ({
          ...link,
          label: requireText(link.label, `profile.links[${i}].label`),
        })),
      ),
      sourceCodeUrl: props.sourceCodeUrl,
    });
  }

  public findLink(network: SocialNetwork): SocialLink | undefined {
    return this.links.find((link) => link.network === network);
  }
}
