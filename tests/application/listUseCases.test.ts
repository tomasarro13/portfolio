import { GetProfile } from '@application/use-cases/GetProfile';
import { ListCertifications } from '@application/use-cases/ListCertifications';
import { ListEducation } from '@application/use-cases/ListEducation';
import { ListProjects } from '@application/use-cases/ListProjects';
import { ListSkillGroups } from '@application/use-cases/ListSkillGroups';
import { Certification } from '@domain/entities/Certification';
import { Education } from '@domain/entities/Education';
import { Profile } from '@domain/entities/Profile';
import { Project } from '@domain/entities/Project';
import { SkillGroup } from '@domain/entities/SkillGroup';
import { EmailAddress } from '@domain/value-objects/EmailAddress';
import { SafeUrl } from '@domain/value-objects/SafeUrl';
import { YearMonth } from '@domain/value-objects/YearMonth';
import { describe, expect, it } from 'vitest';

describe('GetProfile', () => {
  it('returns plain data, including the mailto link and link hosts', async () => {
    const profile = Profile.create({
      fullName: 'Ada Lovelace',
      headline: 'Engineer',
      summary: ['Hello.'],
      location: 'London',
      availability: 'Open to work',
      email: EmailAddress.create('ada@example.com'),
      links: [
        {
          network: 'linkedin',
          label: 'LinkedIn',
          url: SafeUrl.create('https://linkedin.com/in/ada'),
        },
      ],
      sourceCodeUrl: SafeUrl.create('https://github.com/ada/portfolio'),
    });

    const result = await new GetProfile({ getProfile: () => Promise.resolve(profile) }).execute();

    expect(result.emailHref).toBe('mailto:ada@example.com');
    expect(result.links[0]).toMatchObject({ network: 'linkedin', host: 'linkedin.com' });
    expect(result.sourceCode?.host).toBe('github.com');
  });
});

describe('ListProjects', () => {
  const project = (name: string, featured: boolean) =>
    Project.create({
      name,
      summary: 'Summary.',
      highlights: [],
      technologies: ['TypeScript'],
      repositoryUrl: featured ? SafeUrl.create('https://github.com/x/y') : null,
      liveUrl: null,
      featured,
    });

  it('lists featured projects first and keeps the original order otherwise', async () => {
    const projects = [project('A', false), project('B', true), project('C', false)];
    const result = await new ListProjects({
      listProjects: () => Promise.resolve(projects),
    }).execute();

    expect(result.map((item) => item.name)).toEqual(['B', 'A', 'C']);
    expect(result[0]?.repository?.label).toBe('Source code');
    expect(result[1]?.repository).toBeNull();
  });
});

describe('ListCertifications', () => {
  it('orders by year descending, then by name', async () => {
    const cert = (name: string, year: number) =>
      Certification.create({ name, issuer: 'Issuer', year, credentialUrl: null });
    const certifications = [cert('Zeta', 2025), cert('Beta', 2026), cert('Alpha', 2026)];

    const result = await new ListCertifications({
      listCertifications: () => Promise.resolve(certifications),
    }).execute();

    expect(result.map((item) => item.name)).toEqual(['Alpha', 'Beta', 'Zeta']);
  });
});

describe('ListEducation', () => {
  it('lists studies in progress first, then the most recent graduation', async () => {
    const entry = (degree: string, graduation: string | null) =>
      Education.create({
        degree,
        institution: 'School',
        location: 'City',
        status: graduation === null ? 'in-progress' : 'completed',
        graduation: graduation === null ? null : YearMonth.parse(graduation),
      });
    const entries = [entry('Old', '2015-06'), entry('Recent', '2021-06'), entry('Current', null)];

    const result = await new ListEducation({
      listEducation: () => Promise.resolve(entries),
    }).execute();

    expect(result.map((item) => item.degree)).toEqual(['Current', 'Recent', 'Old']);
  });
});

describe('ListSkillGroups', () => {
  it('returns every group with its skills', async () => {
    const groups = [SkillGroup.create('Languages', ['Java'])];
    const result = await new ListSkillGroups({
      listSkillGroups: () => Promise.resolve(groups),
    }).execute();

    expect(result).toEqual([{ name: 'Languages', skills: ['Java'] }]);
  });
});
