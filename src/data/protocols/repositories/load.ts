export interface ILoadRepository<T, R> {
  load: (data: T) => Promise<R>;
}
