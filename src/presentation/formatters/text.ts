import type { MonthDto } from '@application/dto/PortfolioDtos';

const LOCALE = 'en-US';

const monthFormatter = new Intl.DateTimeFormat(LOCALE, {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

const listFormatter = new Intl.ListFormat(LOCALE, { style: 'long', type: 'conjunction' });

/** "May 2026" */
export function formatMonth(value: MonthDto): string {
  return monthFormatter.format(new Date(Date.UTC(value.year, value.month - 1, 1)));
}

/** "2026-05", for the machine-readable datetime attribute of <time>. */
export function toIsoMonth(value: MonthDto): string {
  return `${value.year}-${String(value.month).padStart(2, '0')}`;
}

/** "2 years 11 months", "1 year", "5 months" */
export function formatDuration(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
  return parts.join(' ');
}

/** "Astro, TypeScript and Vitest" */
export function formatList(items: readonly string[]): string {
  return listFormatter.format(items);
}
