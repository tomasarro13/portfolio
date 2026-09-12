import { DomainError } from '../errors/DomainError';
import { requireText, requireTextList } from '../shared/guards';
import type { SafeUrl } from '../value-objects/SafeUrl';

export interface ProjectProps {
  readonly name: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
  readonly repositoryUrl: SafeUrl | null;
  readonly liveUrl: SafeUrl | null;
  readonly featured: boolean;
}

export class Project {
  public readonly name: string;
  public readonly summary: string;
  public readonly highlights: readonly string[];
  public readonly technologies: readonly string[];
  public readonly repositoryUrl: SafeUrl | null;
  public readonly liveUrl: SafeUrl | null;
  public readonly featured: boolean;

  private constructor(props: ProjectProps) {
    this.name = props.name;
    this.summary = props.summary;
    this.highlights = props.highlights;
    this.technologies = props.technologies;
    this.repositoryUrl = props.repositoryUrl;
    this.liveUrl = props.liveUrl;
    this.featured = props.featured;
  }

  public static create(props: ProjectProps): Project {
    if (props.technologies.length === 0) {
      throw new DomainError(`Project "${props.name}" must list at least one technology.`);
    }
    return new Project({
      ...props,
      name: requireText(props.name, 'project.name'),
      summary: requireText(props.summary, 'project.summary'),
      highlights: requireTextList(props.highlights, 'project.highlights'),
      technologies: requireTextList(props.technologies, 'project.technologies'),
    });
  }
}
