import { DomainError } from '../errors/DomainError';
import { requireText, requireTextList } from '../shared/guards';

export class SkillGroup {
  private constructor(
    public readonly name: string,
    public readonly skills: readonly string[],
  ) {}

  public static create(name: string, skills: readonly string[]): SkillGroup {
    const groupName = requireText(name, 'skillGroup.name');
    if (skills.length === 0) {
      throw new DomainError(`Skill group "${groupName}" must contain at least one skill.`);
    }
    const unique = new Set(skills.map((skill) => skill.trim().toLowerCase()));
    if (unique.size !== skills.length) {
      throw new DomainError(`Skill group "${groupName}" contains duplicated skills.`);
    }
    return new SkillGroup(groupName, requireTextList(skills, `skillGroup "${groupName}"`));
  }
}
