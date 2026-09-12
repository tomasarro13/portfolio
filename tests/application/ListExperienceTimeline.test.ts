import { ListExperienceTimeline } from '@application/use-cases/ListExperienceTimeline';
import { Experience } from '@domain/entities/Experience';
import { Period } from '@domain/value-objects/Period';
import { YearMonth } from '@domain/value-objects/YearMonth';
import { describe, expect, it } from 'vitest';
import { FixedClock, InMemoryExperienceRepository } from '../support/fakes';

const job = (role: string, start: string, end: string | null) =>
  Experience.create({
    role,
    company: 'Company',
    location: 'Colombia',
    period: Period.create(YearMonth.parse(start), end === null ? null : YearMonth.parse(end)),
    highlights: [],
    technologies: [],
  });

describe('ListExperienceTimeline', () => {
  it('puts the current role first, then past roles from newest to oldest', async () => {
    const repository = new InMemoryExperienceRepository([
      job('Oldest', '2019-01', '2020-01'),
      job('Current', '2026-05', null),
      job('Recent', '2023-07', '2026-05'),
    ]);
    const useCase = new ListExperienceTimeline(repository, new FixedClock('2026-09'));

    const result = await useCase.execute();

    expect(result.map((item) => item.role)).toEqual(['Current', 'Recent', 'Oldest']);
  });

  it('measures durations with the injected clock', async () => {
    const repository = new InMemoryExperienceRepository([job('Current', '2026-05', null)]);
    const useCase = new ListExperienceTimeline(repository, new FixedClock('2026-09'));

    const [current] = await useCase.execute();

    expect(current).toMatchObject({
      isCurrent: true,
      durationInMonths: 5,
      start: { year: 2026, month: 5 },
      end: null,
    });
  });
});
