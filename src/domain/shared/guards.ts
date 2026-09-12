import { DomainError } from '../errors/DomainError';

/** Returns the trimmed text, or throws if it is empty. */
export function requireText(value: string, field: string): string {
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    throw new DomainError(`"${field}" must not be empty.`);
  }
  return trimmed;
}

/** Trims every item and rejects empty ones, returning a frozen copy. */
export function requireTextList(values: readonly string[], field: string): readonly string[] {
  return Object.freeze(values.map((value, index) => requireText(value, `${field}[${index}]`)));
}
