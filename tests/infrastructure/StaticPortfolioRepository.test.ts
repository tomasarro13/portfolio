import { SystemClock } from '@infrastructure/clock/SystemClock';
import { portfolioData } from '@infrastructure/data/portfolio.data';
import type { PortfolioSource } from '@infrastructure/data/PortfolioSource';
import { StaticPortfolioRepository } from '@infrastructure/repositories/StaticPortfolioRepository';
import { DomainError } from '@domain/errors/DomainError';
import { describe, expect, it } from 'vitest';

describe('StaticPortfolioRepository', () => {
  it('loads the real content file without breaking any domain rule', async () => {
    const repository = new StaticPortfolioRepository(portfolioData);

    expect((await repository.getProfile()).fullName.length).toBeGreaterThan(0);
    expect((await repository.listExperiences()).length).toBeGreaterThan(0);
    expect(await repository.listProjects()).toBeDefined();
    expect(await repository.listSkillGroups()).toBeDefined();
    expect(await repository.listCertifications()).toBeDefined();
    expect(await repository.listEducation()).toBeDefined();
  });

  it('fails fast when the content contains an unsafe link', () => {
    const tampered: PortfolioSource = {
      ...portfolioData,
      profile: {
        ...portfolioData.profile,
        links: [{ network: 'other', label: 'Bad', url: 'javascript:alert(1)' }],
      },
    };

    expect(() => new StaticPortfolioRepository(tampered)).toThrow(DomainError);
  });

  it('fails fast when a date is malformed', () => {
    const [first, ...rest] = portfolioData.experiences;
    if (!first) throw new Error('The content file needs at least one experience.');
    const tampered: PortfolioSource = {
      ...portfolioData,
      experiences: [{ ...first, start: 'May 2026' }, ...rest],
    };

    expect(() => new StaticPortfolioRepository(tampered)).toThrow(DomainError);
  });
});

describe('SystemClock', () => {
  it('returns the month of the injected date', () => {
    const clock = new SystemClock(() => new Date(Date.UTC(2026, 8, 11)));
    expect(clock.currentMonth().toString()).toBe('2026-09');
  });
});
