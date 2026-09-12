import { Certification } from '@domain/entities/Certification';
import { Education } from '@domain/entities/Education';
import { Experience } from '@domain/entities/Experience';
import { Profile } from '@domain/entities/Profile';
import { Project } from '@domain/entities/Project';
import { SkillGroup } from '@domain/entities/SkillGroup';
import { DomainError } from '@domain/errors/DomainError';
import { EmailAddress } from '@domain/value-objects/EmailAddress';
import { Period } from '@domain/value-objects/Period';
import { SafeUrl } from '@domain/value-objects/SafeUrl';
import { YearMonth } from '@domain/value-objects/YearMonth';
import { describe, expect, it } from 'vitest';

describe('Profile', () => {
  const props = {
    fullName: ' Ada Lovelace ',
    headline: 'Engineer',
    summary: ['First paragraph.'],
    location: 'London',
    availability: 'Open to work',
    email: EmailAddress.create('ada@example.com'),
    links: [
      {
        network: 'github' as const,
        label: 'GitHub',
        url: SafeUrl.create('https://github.com/ada'),
      },
    ],
    sourceCodeUrl: null,
  };

  it('trims text fields and finds links by network', () => {
    const profile = Profile.create(props);
    expect(profile.fullName).toBe('Ada Lovelace');
    expect(profile.findLink('github')?.url.hostname).toBe('github.com');
    expect(profile.findLink('linkedin')).toBeUndefined();
  });

  it('rejects an empty name', () => {
    expect(() => Profile.create({ ...props, fullName: '  ' })).toThrow(DomainError);
  });
});

describe('Experience', () => {
  it('is current while its period is ongoing', () => {
    const experience = Experience.create({
      role: 'Developer',
      company: 'Acme',
      location: 'Remote',
      period: Period.create(YearMonth.parse('2026-01'), null),
      highlights: ['Built things.'],
      technologies: ['TypeScript'],
    });
    expect(experience.isCurrent).toBe(true);
    expect(experience.durationInMonths(YearMonth.parse('2026-03'))).toBe(3);
  });

  it('rejects empty highlights', () => {
    expect(() =>
      Experience.create({
        role: 'Developer',
        company: 'Acme',
        location: 'Remote',
        period: Period.create(YearMonth.parse('2026-01'), null),
        highlights: [''],
        technologies: [],
      }),
    ).toThrow(DomainError);
  });
});

describe('Project', () => {
  it('requires at least one technology', () => {
    expect(() =>
      Project.create({
        name: 'App',
        summary: 'Does things.',
        highlights: [],
        technologies: [],
        repositoryUrl: null,
        liveUrl: null,
        featured: false,
      }),
    ).toThrow(DomainError);
  });
});

describe('SkillGroup', () => {
  it('rejects empty and duplicated skills', () => {
    expect(() => SkillGroup.create('Languages', [])).toThrow(DomainError);
    expect(() => SkillGroup.create('Languages', ['Java', 'java'])).toThrow(DomainError);
    expect(SkillGroup.create('Languages', ['Java', 'Python']).skills).toEqual(['Java', 'Python']);
  });
});

describe('Certification', () => {
  it.each([1989, 2101, 2026.5])('rejects the year %s', (year) => {
    expect(() =>
      Certification.create({ name: 'Cert', issuer: 'Issuer', year, credentialUrl: null }),
    ).toThrow(DomainError);
  });
});

describe('Education', () => {
  it('requires a graduation month once completed', () => {
    const base = { degree: 'Diploma', institution: 'School', location: 'City' };
    expect(() => Education.create({ ...base, status: 'completed', graduation: null })).toThrow(
      DomainError,
    );
    expect(Education.create({ ...base, status: 'in-progress', graduation: null }).status).toBe(
      'in-progress',
    );
  });
});
