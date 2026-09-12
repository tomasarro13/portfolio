/** A single application action. Every use case exposes exactly one public method. */
export interface UseCase<TOutput> {
  execute(): Promise<TOutput>;
}
